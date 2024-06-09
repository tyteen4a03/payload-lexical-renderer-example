import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload/types";
import MediaBlock from "./media";
import YoutubeBlock from "./youtube";

const GalleryBlock: Block = {
    slug: "gallery",
    interfaceName: "GalleryBlock",
    fields: [
        {
            name: "caption",
            type: "richText",
            editor: lexicalEditor(),
        },
        {
            name: "mediaList",
            type: "array",
            minRows: 1,
            fields: [
                {
                    name: "media",
                    type: "blocks",
                    blocks: [YoutubeBlock, MediaBlock],
                    minRows: 1,
                    maxRows: 1,
                },
                {
                    name: "alt",
                    type: "text",
                },
                {
                    name: "caption",
                    type: "richText",
                    editor: lexicalEditor(),
                },
            ],
        },
    ],
};

export default GalleryBlock;
