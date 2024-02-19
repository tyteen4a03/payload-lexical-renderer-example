import type { HTMLConverter } from "../types";

import { convertLexicalNodesToReactNode } from "../serializeLexical";

export const ListHTMLConverter: HTMLConverter<any> = {
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
                return <ol>{childrenText}</ol>
            case "ul":
                return <ul>{childrenText}</ul>
            default:
                return <span>unsupported list type {node?.tag}</span>
        }
    },
    nodeTypes: ["list"],
};

export const ListItemHTMLConverter: HTMLConverter<any> = {
    converter: async ({ converters, node, parent }) => {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        return <li value={node?.value}>{childrenText}</li>;
    },
    nodeTypes: ["listitem"],
};
