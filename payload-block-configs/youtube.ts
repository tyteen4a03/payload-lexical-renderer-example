import type { Block } from "payload";

const YoutubeBlock: Block = {
    slug: "youtube",
    interfaceName: "YoutubeBlock",
    fields: [
        {
            name: "videoId",
            type: "text",
        },
    ],
};

export default YoutubeBlock;
