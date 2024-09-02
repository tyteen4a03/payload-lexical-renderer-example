import type { HTMLConverter } from "../types";

import type { SerializedQuoteNode } from "@lexical/rich-text";
import { convertLexicalNodesToReactNode } from "../serializeLexical";

export const QuoteHTMLConverter: HTMLConverter<SerializedQuoteNode> = {
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
