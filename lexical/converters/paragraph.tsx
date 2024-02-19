import type { HTMLConverter } from "../types";
import { Text } from '@/modules/core/ui/text';

import { convertLexicalNodesToReactNode } from "../serializeLexical";

export const ParagraphHTMLConverter: HTMLConverter<any> = {
    async converter({ converters, node, parent }) {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });
        return <Text as="p" marginBottom={6}>{childrenText}</Text>;
    },
    nodeTypes: ["paragraph"],
};
