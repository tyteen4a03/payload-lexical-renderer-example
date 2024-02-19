import type { HTMLConverter } from "../types";
import Image from 'next/image';

import {Flex} from "../../../../../styled-system/jsx";


export const UploadHTMLConverter: HTMLConverter<any> = {
    converter({ node }) {
        if (node.value.mimeType.startsWith("image")) {
            return (
                <Flex alignItems="center" justifyContent="center" marginX="auto">
                    <a href={`http://localhost:3000${node.value.url}`}><Image src={`http://localhost:3000${node.value.sizes.blogText.url}`}
                                                    alt={node.value.alt} width={node.value.sizes.blogText.width}
                                                    height={node.value.sizes.blogText.height} sizes="(max-width: 480px) 100vw, 50vw"/></a>
                </Flex>

            )
        }
        return <span>Unsupported MIME type {node.mimeType}</span>
    },
    nodeTypes: ["upload"],
};
