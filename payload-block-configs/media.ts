import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

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
        {
            type: "row",
            fields: [
                {
                    name: "position",
                    type: "select",
                    required: true,
                    defaultValue: "inline-start",
                    options: [
                        {
                            label: "Inline Start",
                            value: "inline-start",
                        },
                        {
                            label: "Inline End",
                            value: "inline-end",
                        },
                    ],
                },
                {
                    name: "width",
                    type: "text",
                    required: true,
                    defaultValue: "100%",
                    admin: {
                        description: "Accepts any valid CSS width value. Prefer percentages.",
                    },
                },
            ],
        },
    ],
};

export default MediaBlock;
