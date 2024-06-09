import { serializeLexical } from "@/modules/core/richtext/lexical/serializeLexical";
import type { Media, MediaBlock } from "@/payload-types";
import type { SerializedUploadNode } from "@payloadcms/richtext-lexical";
import Image from "next/image";
import type { FC } from "react";
import { Box, Flex } from "styled-system/jsx";

const InlineMediaBlock: FC<{ node: SerializedUploadNode & { fields: MediaBlock } }> = async ({ node }) => {
    const fields = node.fields;
    const media = fields.media as Media;

    return (
        <Flex margin={4} direction="column" alignItems="center">
            <Image
                src={media.sizes.blogText.url}
                alt={media.alt}
                width={media.sizes.blogText.width}
                height={media.sizes.blogText.height}
            />
            <Box margin={2}>{fields.caption && (await serializeLexical(fields.caption))}</Box>
        </Flex>
    );
};

export default InlineMediaBlock;
