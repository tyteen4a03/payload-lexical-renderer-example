import type { HTMLConverter } from "../types";

import { Heading } from "@/modules/core/ui/primitives";
import type { SerializedHeadingNode } from "@lexical/rich-text";
import type { FontSizeToken } from "styled-system/tokens";
import { convertLexicalNodesToReactNode } from "../serializeLexical";

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

        let size: FontSizeToken;
        switch (node?.tag) {
            case "h1":
                size = "4xl";
                break;
            case "h2":
                size = "3xl";
                break;
            case "h3":
                size = "2xl";
                break;
            case "h4":
                size = "xl";
                break;
            case "h5":
                size = "lg";
                break;
            case "h6":
                size = "md";
                break;
            default:
                size = "md";
                break;
        }

        const headingStyles = node?.tag.startsWith("h") ? { fontWeight: "bold" } : { fontWeight: "normal" };

        return (
            <Heading as={node?.tag} fontSize={size} {...headingStyles}>
                {childrenText}
            </Heading>
        );
    },
    nodeTypes: ["heading"],
};
