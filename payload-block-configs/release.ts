import type { Block } from "payload/types";

const ReleaseBlock: Block = {
    slug: "release",
    interfaceName: "ReleaseBlock",
    fields: [
        {
            name: "release",
            type: "relationship",
            relationTo: "releases",
        },
    ],
};

export default ReleaseBlock;
