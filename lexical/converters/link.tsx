import type { HTMLConverter } from "../types";

import { convertLexicalNodesToReactNode } from "../serializeLexical";
import NextLink from "next/link";
import {Link} from "@/modules/core/ui/link";

export const LinkHTMLConverter: HTMLConverter<any> = {
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

        const href: string = node.fields.linkType === "custom" ? node.fields.url : node.fields.doc?.value?.id;

        return <NextLink href={href} legacyBehavior passHref><Link rel={rel} textDecoration="underline">{childrenText}</Link></NextLink>;
    },
    nodeTypes: ["link", "autolink"],
};
