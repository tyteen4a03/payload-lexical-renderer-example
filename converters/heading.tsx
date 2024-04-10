import type { HTMLConverter } from "../types";

import { convertLexicalNodesToReactNode } from "../serializeLexical";
import { Heading } from "@/modules/core/ui/heading";
import {SerializedHeadingNode} from "@lexical/rich-text";

export const HeadingHTMLConverter: HTMLConverter<SerializedHeadingNode> = {
    async converter({ converters, node, parent }) {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        return <Heading as={node?.tag}>{childrenText}</Heading>
    },
    nodeTypes: ["heading"],
};
