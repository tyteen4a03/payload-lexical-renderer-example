"use client";

import type { YoutubeBlock as YoutubeBlockType } from "@/payload-types";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import Youtube from "react-lazyload-youtube";
import "react-lazyload-youtube/dist/index.css";
import { Box, Flex } from "styled-system/jsx";

interface YoutubeBlockProps {
    node: SerializedBlockNode & { fields: YoutubeBlockType };
}

const YoutubeBlock = ({ node }: YoutubeBlockProps) => {
    const fields = node.fields;

    return (
        <Flex marginX="auto" alignItems="center" justifyContent="center" marginBottom={4}>
            <Box minWidth={{ base: "sm", md: "lg", lg: "xl" }} width="100%">
                <Youtube videoId={fields.videoId} width="100%" height="300px" />
            </Box>
        </Flex>
    );
};

export default YoutubeBlock;
