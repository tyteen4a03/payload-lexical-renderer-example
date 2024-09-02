import { serializeLexical } from "@/modules/core/richtext/lexical/serializeLexical";
import type { Media, MediaBlock } from "@/payload-types";
import type { SerializedInlineBlockNode } from "@payloadcms/richtext-lexical";
import Image from "next/image";
import { Box, Flex } from "styled-system/jsx";

interface MediaInlineBlockProps {
    node: SerializedInlineBlockNode & { fields: MediaBlock };
}

const MediaInlineBlock = async ({ node }: MediaInlineBlockProps) => {
    const media = node.fields.media as Media;

    return (
        <Flex
            display="inline-flex"
            p={4}
            direction="column"
            float={node.fields.position}
            style={{ width: node.fields.width }}
        >
            <Image
                src={media.sizes.blogText.url}
                alt={media.alt}
                width={media.sizes.blogText.width}
                height={media.sizes.blogText.height}
            />
            <Box m={2}>{node.fields.caption && (await serializeLexical(node.fields.caption))}</Box>
        </Flex>
    );
};

export default MediaInlineBlock;
