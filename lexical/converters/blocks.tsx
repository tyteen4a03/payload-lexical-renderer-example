import type { HTMLConverter } from "../types";
import YoutubeBlock from "@/modules/blog/lexical/converters/blocks/YoutubeBlock";


export const BlockHtmlConverter: HTMLConverter<any> = {
    converter({ node }) {
        switch (node.fields.blockType) {
            case "youtube":
                return <YoutubeBlock node={node} />
            default:
                return <span>Unknown block type {node.value.blockType}</span>
        }
    },
    nodeTypes: ["block"],
};
