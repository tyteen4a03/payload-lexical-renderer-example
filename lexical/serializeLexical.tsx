import type { HTMLConverter, SerializedLexicalNodeWithParent } from "./types";

import { defaultHTMLConverters } from "./defaultConverters";
import {Fragment, ReactNode} from "react";

export async function serializeLexical(data?: any): Promise<ReactNode> {
    const converters: HTMLConverter[] = defaultHTMLConverters;

    if (data?.root?.children?.length) {
        return await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: data?.root?.children,
            parent: data?.root,
        });
    }
    return "";
}

export async function convertLexicalNodesToReactNode({
    converters,
    lexicalNodes,
    parent,
}: {
    converters: HTMLConverter[];
    lexicalNodes: any[];
    parent: SerializedLexicalNodeWithParent;
}): Promise<ReactNode> {
    const unknownConverter = converters.find((converter) => converter.nodeTypes.includes("unknown"));

    const htmlArray = await Promise.all(
        lexicalNodes.map(async (node, i) => {
            const converterForNode = converters.find((converter) => converter.nodeTypes.includes(node.type));
            if (!converterForNode) {
                if (unknownConverter) {
                    return unknownConverter.converter({
                        childIndex: i,
                        converters,
                        node,
                        parent,
                    });
                }
                return <span>unknown node</span>;
            }

            return converterForNode.converter({
                childIndex: i,
                converters,
                node,
                parent,
            });
        }),
    );

    return <>{htmlArray.map((item) => <Fragment key={Math.random()}>{item}</Fragment>)}</>;
}
