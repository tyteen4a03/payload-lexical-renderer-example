import type { HTMLConverter } from "../types";

import ReleaseRelationship from "@/modules/core/richtext/lexical/converters/relationships/ReleaseRelationship";
import type { SerializedRelationshipNode } from "@payloadcms/richtext-lexical";

export const RelationshipHTMLConverter: HTMLConverter<SerializedRelationshipNode> = {
    async converter({ node }) {
        switch (node.relationTo) {
            case "releases":
                return <ReleaseRelationship node={node} />;
            default:
                return <span>Unknown relationship type {node.relationTo}</span>;
        }
    },
    nodeTypes: ["relationship"],
};
