'use client';

// @ts-ignore
import Youtube from 'react-lazyload-youtube'
import 'react-lazyload-youtube/dist/index.css'
import {Box, Flex} from "styled-system/jsx";
import {css} from "styled-system/css";

const YoutubeBlock = ({ node }) => {
    const fields = node.fields;

    return (
        <Flex marginX="auto" alignItems="center" justifyContent="center">
            <Box minWidth={{ base: 'sm', md: 'lg', lg: 'xl' }} width="100%">
                <Youtube height={`${fields.height}px`} videoId={node.fields.videoId} />
            </Box>
        </Flex>
    );
}

export default YoutubeBlock;