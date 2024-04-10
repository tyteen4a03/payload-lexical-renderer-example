import type { HTMLConverter } from "../types";
import YoutubeBlock from "@/modules/blog/lexical/converters/blocks/YoutubeBlock";
import GalleryBlock from "@/modules/blog/lexical/converters/blocks/GalleryBlock";
import MediaBlock from "@/modules/blog/lexical/converters/blocks/InlineMediaBlock";
import {SerializedBlockNode} from "@payloadcms/richtext-lexical";


export const BlockHtmlConverter: HTMLConverter<SerializedBlockNode> = {
    converter({ node }) {
        switch (node.fields.blockType) {
            case "youtube":
                return <YoutubeBlock node={node} />
            case "gallery":
                return <GalleryBlock node={node} />
            case "media":
                return <MediaBlock node={node} />
            default:
                return <span>Unknown block type {node.fields.blockType}</span>
        }
    },
    nodeTypes: ["block"],
};
