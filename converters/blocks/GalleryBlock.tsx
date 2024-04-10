import {Box, Flex} from "styled-system/jsx";
import {FC} from "react";
import { css } from 'styled-system/css'
import { bleed } from 'styled-system/patterns'
import {serializeLexical} from "@/modules/blog/lexical/serializeLexical";
import GalleryLightbox from "@/modules/blog/lexical/converters/blocks/GalleryLightbox";
import {SerializedBlockNode} from "@payloadcms/richtext-lexical";
import {Media} from "@/modules/core/graphql/__generated__/graphql";
import {SerializedLexicalNode} from "lexical/LexicalNode";


const GalleryBlock: FC<{node: SerializedBlockNode & { value: { mediaList: { id: string, media: Media, caption: SerializedLexicalNode }[] } }}> = async ({ node }) => {
    const fields = node.fields;

    const slides = await Promise.all(fields.mediaList.map(async ({ id, media }, index) => {
        const mediaObject = media[0].media;

        const srcSet = Object.entries(mediaObject.sizes)
            .filter(([key, size]) => !key.startsWith('blogLightbox') || !size.url)
            .map(([, size]) => ({ src: `http://localhost:3000${size.url}`, width: size.width, height: size.height }));

         return (
            {
                id: mediaObject.id,
                src: `http://localhost:3000${mediaObject.url}`,
                // todo: https://github.com/payloadcms/payload/issues/5051
                description: mediaObject.caption ? await serializeLexical(mediaObject.caption) : undefined,
                alt: mediaObject.alt,
                width: mediaObject.width,
                height: mediaObject.height,
                srcSet
            }
        )
    }));

    return (
        <Box
            aspectRatio="3/2"
              className={`${css({
                  "--yarl__thumbnails_container_background_color": "#222222",
                  "--yarl__color_backdrop": "#222222",
                  "--yarl__thumbnails_thumbnail_background": "colors.transparent",
                  "--yarl__fade_animation_duration": "0",
              })} ${bleed({ inline: '6' })}`}
        >
            <GalleryLightbox slides={slides} />
        </Box>
    );
}

export default GalleryBlock;