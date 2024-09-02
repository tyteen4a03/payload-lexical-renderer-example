import type { HTMLConverter } from "../types";

import type { SerializedListItemNode, SerializedListNode } from "@lexical/list";
import { styled } from "styled-system/jsx";
import { convertLexicalNodesToReactNode } from "../serializeLexical";

export const ListHTMLConverter: HTMLConverter<SerializedListNode> = {
    converter: async ({ converters, node, parent }) => {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        switch (node?.tag) {
            case "ol":
                return (
                    <styled.ol direction="column" gap={3} listStyleType="initial" listStylePosition="outside">
                        {childrenText}
                    </styled.ol>
                );
            case "ul":
                return (
                    <styled.ul direction="column" gap={3} listStyleType="initial" listStylePosition="outside">
                        {childrenText}
                    </styled.ul>
                );
            default:
                return <span>unsupported list type {node?.tag}</span>;
        }
    },
    nodeTypes: ["list"],
};

export const ListItemHTMLConverter: HTMLConverter<SerializedListItemNode> = {
    converter: async ({ converters, node, parent }) => {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        // TODO: Reimplement $getListDepth (https://github.com/facebook/lexical/blob/main/packages/lexical-list/src/utils.ts#L27) for nicer-looking lists
        const isSublist = node.children && node.children[0].type === "list";

        return (
            <styled.li marginLeft={6} listStyleType={isSublist ? "none" : "initial"}>
                {childrenText}
            </styled.li>
        );
    },
    nodeTypes: ["listitem"],
};
