import type { HTMLConverter } from "../types";
import Image from 'next/image';

import {SerializedUploadNode} from "@payloadcms/richtext-lexical";
import { Flex } from "styled-system/jsx";
// TODO: Replace with payload-types
import { Media } from "@/modules/core/graphql/__generated__/graphql";


export const UploadHTMLConverter: HTMLConverter<SerializedUploadNode & { value: Media }> = {
    converter({ node }) {
        if ((node.value.mimeType ?? "").startsWith("image")) {
            return (
                <Flex alignItems="center" justifyContent="center" marginX="auto">
                    <a href={`http://localhost:3000${node.value.url}`}><Image src={`http://localhost:3000${node.value.sizes.blogText.url}`}
                                                    alt={node.value.alt} width={node.value.sizes.blogText.width}
                                                    height={node.value.sizes.blogText.height} sizes="(max-width: 480px) 100vw, 50vw"/></a>
                </Flex>

            )
        }
        return <span>Unsupported MIME type {node.value.mimeType}</span>
    },
    nodeTypes: ["upload"],
};
