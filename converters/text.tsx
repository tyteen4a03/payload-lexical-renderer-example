import { Code, Text } from "@/modules/core/ui/primitives";
import type { HTMLConverter } from "../types";

import type { SerializedTextNode } from "@payloadcms/richtext-lexical";
import { NodeFormat } from "../nodeFormat";

export const TextHTMLConverter: HTMLConverter<SerializedTextNode> = {
    converter({ node }) {
        let text = <>{node.text}</>;

        if (node.format & NodeFormat.IS_BOLD) {
            text = <strong>{text}</strong>;
        }
        if (node.format & NodeFormat.IS_ITALIC) {
            text = <em>{text}</em>;
        }
        if (node.format & NodeFormat.IS_STRIKETHROUGH) {
            text = (
                <Text as="span" textDecoration="line-through">
                    {text}
                </Text>
            );
        }
        if (node.format & NodeFormat.IS_UNDERLINE) {
            text = (
                <Text as="span" textDecoration="underline">
                    {text}
                </Text>
            );
        }
        if (node.format & NodeFormat.IS_CODE) {
            text = <Code>{text}</Code>;
        }
        if (node.format & NodeFormat.IS_SUBSCRIPT) {
            text = <sub>{text}</sub>;
        }
        if (node.format & NodeFormat.IS_SUPERSCRIPT) {
            text = <sup>{text}</sup>;
        }

        return text;
    },
    nodeTypes: ["text"],
};
