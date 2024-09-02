import { Text } from "@/modules/core/ui/primitives";
import type { HTMLConverter } from "../types";

import type { SerializedParagraphNode } from "@payloadcms/richtext-lexical";
import { css } from "styled-system/css";
import { convertLexicalNodesToReactNode } from "../serializeLexical";

export const ParagraphHTMLConverter: HTMLConverter<SerializedParagraphNode> = {
    async converter({ converters, node, parent }) {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        return (
            <Text as="div" textAlign={node.format} className={css({ marginBottom: 6, _last: { marginBottom: 0 } })}>
                {childrenText}
            </Text>
        );
    },
    nodeTypes: ["paragraph"],
};
