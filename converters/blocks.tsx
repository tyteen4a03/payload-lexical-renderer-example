import ColumnsBlock from "@/modules/core/richtext/lexical/converters/blocks/ColumnsBlock";
import GalleryBlock from "@/modules/core/richtext/lexical/converters/blocks/GalleryBlock";
import MediaFullWidthBlock from "@/modules/core/richtext/lexical/converters/blocks/MediaFullWidthBlock";
import YoutubeBlock from "@/modules/core/richtext/lexical/converters/blocks/YoutubeBlock";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import type { HTMLConverter } from "../types";

export const BlockHtmlConverter: HTMLConverter<SerializedBlockNode> = {
    converter({ node }) {
        switch (node.fields.blockType) {
            case "media":
                return <MediaFullWidthBlock node={node} />;
            case "youtube":
                return <YoutubeBlock node={node} />;
            case "gallery":
                return <GalleryBlock node={node} />;
            case "columns":
                return <ColumnsBlock node={node} />;
            default:
                return <span>Unknown block type {node.fields.blockType}</span>;
        }
    },
    nodeTypes: ["block"],
};
