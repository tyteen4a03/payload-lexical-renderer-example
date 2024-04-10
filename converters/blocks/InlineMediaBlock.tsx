import { Box, Flex } from "styled-system/jsx";
import {FC} from "react";
import Image from 'next/image';
import {serializeLexical} from "@/modules/blog/lexical/serializeLexical";
import {SerializedUploadNode} from "@payloadcms/richtext-lexical";
// TODO: use payload-types as import
import {Media} from "@/modules/core/graphql/__generated__/graphql";

const InlineMediaBlock: FC<{node: SerializedUploadNode & { fields: { media: Media }}}> = async ({node}) => {
    const fields = node.fields;

    return (
        <Flex margin={4} direction="column" alignItems="center">
            <Image
                src={`http://localhost:3000${fields.media.sizes.blogText.url}`}
                alt={fields.media.alt}
                width={fields.media.sizes.blogText.width}
                height={fields.media.sizes.blogText.height}
            />
            <Box margin={2}>{fields.caption && await serializeLexical(fields.caption)}</Box>

        </Flex>
    )
};

export default InlineMediaBlock;