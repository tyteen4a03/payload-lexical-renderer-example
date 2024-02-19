import type { HTMLConverter } from "../types";

import { convertLexicalNodesToReactNode } from "../serializeLexical";

export const QuoteHTMLConverter: HTMLConverter<any> = {
    async converter({ converters, node, parent }) {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        return <blockquote>{childrenText}</blockquote>;
    },
    nodeTypes: ["quote"],
};
