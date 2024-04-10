import type { HTMLConverter } from "../types";

import { convertLexicalNodesToReactNode } from "../serializeLexical";
import NextLink from "next/link";
import {Link} from "@/modules/core/ui/link";
import {SerializedLinkNode} from "@payloadcms/richtext-lexical";

export const LinkHTMLConverter: HTMLConverter<SerializedLinkNode> = {
    async converter({ converters, node, parent }) {
        const childrenText = await convertLexicalNodesToReactNode({
            converters,
            lexicalNodes: node.children,
            parent: {
                ...node,
                parent,
            },
        });

        const rel: string = node.fields.newTab ? ' rel="noopener noreferrer"' : "";

        let href = "";
        if (node.fields.linkType === "custom") {
            href = node.fields.url;
        } else {
            if (typeof node.fields.doc?.value === "string") {
                href = node.fields.doc?.value;
            } else {
                href = node.fields.doc?.value?.id ?? "";
            }
        }

        return <NextLink href={href} legacyBehavior passHref><Link rel={rel} textDecoration="underline">{childrenText}</Link></NextLink>;
    },
    nodeTypes: ["link", "autolink"],
};
