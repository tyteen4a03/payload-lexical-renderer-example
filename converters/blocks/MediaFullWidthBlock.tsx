import { serializeLexical } from "@/modules/core/richtext/lexical/serializeLexical";
import type { Media, MediaBlock } from "@/payload-types";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import Image from "next/image";
import { css } from "styled-system/css";
import { Box, Flex } from "styled-system/jsx";

interface MediaFullWidthBlockProps {
    node: SerializedBlockNode & { fields: MediaBlock };
}

const MediaFullWidthBlock = async ({ node }: MediaFullWidthBlockProps) => {
    const media = node.fields.media as Media;

    return (
        <Flex p={4} direction="column" style={{ width: node.fields.width }}>
            <Image
                src={media.sizes.blogText.url}
                alt={media.alt}
                width={media.sizes.blogText.width}
                height={media.sizes.blogText.height}
                className={css({ m: "auto" })}
            />
            <Box m={2}>{node.fields.caption && (await serializeLexical(node.fields.caption))}</Box>
        </Flex>
    );
};

export default MediaFullWidthBlock;
