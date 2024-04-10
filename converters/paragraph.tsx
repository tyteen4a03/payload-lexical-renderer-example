import type { HTMLConverter } from "../types";
import { Text } from '@/modules/core/ui/text';

import { convertLexicalNodesToReactNode } from "../serializeLexical";
import {css} from "styled-system/css";
import {SerializedParagraphNode} from "lexical/nodes/LexicalParagraphNode";

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

        return <Text as="p" textAlign={node.format} className={css({ marginBottom: 6, _last: { marginBottom: 0 } })}>{childrenText}</Text>;
    },
    nodeTypes: ["paragraph"],
};
