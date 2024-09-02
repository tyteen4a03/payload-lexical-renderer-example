import MediaInlineBlock from "@/modules/core/richtext/lexical/converters/inlineBlocks/MediaInlineBlock";
import type { SerializedInlineBlockNode } from "@payloadcms/richtext-lexical";
import type { HTMLConverter } from "../types";

export const InlineBlockHTMLConverter: HTMLConverter<SerializedInlineBlockNode> = {
    converter({ node }) {
        switch (node.fields.blockType) {
            case "media":
                return <MediaInlineBlock node={node} />;
            default:
                return <span>Unknown inline block type {node.fields.blockType}</span>;
        }
    },
    nodeTypes: ["inlineBlock"],
};
