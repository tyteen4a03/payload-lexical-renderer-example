'use client';

import 'react-lazyload-youtube/dist/index.css'
import {Box, Flex} from "styled-system/jsx";
import {FC} from "react";
import Youtube from "react-lazyload-youtube";
import {SerializedBlockNode} from "@payloadcms/richtext-lexical";

const YoutubeBlock: FC<{node: SerializedBlockNode & { fields: { videoId: string }}}> = ({ node }) => {
    const fields = node.fields;

    return (
        <Flex marginX="auto" alignItems="center" justifyContent="center" marginBottom={4}>
            <Box minWidth={{ base: 'sm', md: 'lg', lg: 'xl' }} width="100%">
                <Youtube videoId={fields.videoId} width="100%" height="300px" />
            </Box>
        </Flex>
    );
}

export default YoutubeBlock;