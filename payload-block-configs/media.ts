import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload/types";

const MediaBlock: Block = {
    slug: "media",
    interfaceName: "MediaBlock",
    fields: [
        {
            name: "media",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "caption",
            type: "richText",
            editor: lexicalEditor(),
        },
    ],
};

export default MediaBlock;
