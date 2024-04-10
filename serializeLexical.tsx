import type { HTMLConverter, SerializedLexicalNodeWithParent } from "./types";

import { defaultHTMLConverters } from "./defaultConverters";
import {Fragment, ReactNode} from "react";
import {SerializedEditorState} from "lexical/LexicalEditorState";
import type {SerializedLexicalNode} from "lexical/LexicalNode";

export async function serializeLexical(data?: SerializedEditorState): Promise<ReactNode> {
    const converters: HTMLConverter[] = defaultHTMLConverters;

    if (data?.root?.children?.length) {
        return convertLexicalNodesToReactNode({
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
    lexicalNodes: SerializedLexicalNode[];
    parent: SerializedLexicalNodeWithParent;
}): Promise<ReactNode> {
    const unknownConverter = converters.find((converter) => converter.nodeTypes.includes("unknown"));

    const htmlArray = await Promise.all(
        lexicalNodes.map(async (node, i): Promise<{ lexicalNode: SerializedLexicalNode, reactNode: ReactNode }> => {
            const converterForNode = converters.find((converter) => converter.nodeTypes.includes(node.type));
            if (!converterForNode) {
                if (unknownConverter) {
                    return { lexicalNode: node, reactNode: unknownConverter.converter({
                        childIndex: i,
                        converters,
                        node,
                        parent,
                    })};
                }
                return {lexicalNode: node, reactNode: <span>unknown node</span>};
            }

            return {lexicalNode: node, reactNode: converterForNode.converter({
                childIndex: i,
                converters,
                node,
                parent,
            })};
        }),
    );

    return <>{htmlArray.map(({lexicalNode, reactNode}) => <Fragment key={JSON.stringify(lexicalNode)}>{reactNode}</Fragment>)}</>;
}
