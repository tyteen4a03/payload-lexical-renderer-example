import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

const ColumnsBlock: Block = {
    slug: "columns",
    interfaceName: "ColumnsBlock",
    fields: [
        {
            name: "style",
            type: "select",
            options: [
                {
                    label: "None",
                    value: "none",
                },
                {
                    label: "Card",
                    value: "card",
                },
            ],
            admin: {
                description: "Separation style for the columns",
            },
        },
        {
            name: "gapStyle",
            type: "select",
            options: [
                {
                    label: "None",
                    value: "none",
                },
                {
                    label: "Line",
                    value: "line",
                },
            ],
        },
        {
            name: "columns",
            type: "array",
            minRows: 2,
            maxRows: 4,
            fields: [
                {
                    name: "width",
                    type: "text",
                    admin: {
                        description:
                            "Width of the column, e.g. 1 / 3. If left blank, will be equally distributed. Ignored on mobile.",
                    },
                },
                {
                    name: "content",
                    type: "richText",
                    required: true,
                    editor: lexicalEditor({}),
                },
            ],
        },
    ],
};

export default ColumnsBlock;
