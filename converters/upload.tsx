import Image from "next/image";
import type { HTMLConverter } from "../types";

import type { Media } from "@/payload-types";
import type { SerializedUploadNode } from "@payloadcms/richtext-lexical";
import { Flex } from "styled-system/jsx";

export const UploadHTMLConverter: HTMLConverter<SerializedUploadNode & { value: Media }> = {
    converter({ node }) {
        if ((node.value.mimeType ?? "").startsWith("image")) {
            return (
                <Flex alignItems="center" justifyContent="center" marginX="auto">
                    <a href={node.value.url}>
                        <Image
                            src={node.value.sizes.blogText.url}
                            alt={node.value.alt}
                            width={node.value.sizes.blogText.width}
                            height={node.value.sizes.blogText.height}
                            sizes="(max-width: 480px) 100vw, 50vw"
                        />
                    </a>
                </Flex>
            );
        }
        return <span>Unsupported MIME type {node.value.mimeType}</span>;
    },
    nodeTypes: ["upload"],
};
