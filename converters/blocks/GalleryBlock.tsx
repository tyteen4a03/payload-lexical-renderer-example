import GalleryLightbox from "@/modules/core/richtext/lexical/converters/blocks/GalleryLightbox";
import { serializeLexical } from "@/modules/core/richtext/lexical/serializeLexical";
import type { GalleryBlock as GalleryBlockType, Media } from "@/payload-types";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";
import { bleed } from "styled-system/patterns";

interface GalleryBlockProps {
    node: SerializedBlockNode & {
        value: GalleryBlockType;
    };
}

const GalleryBlock = async ({ node }: GalleryBlockProps) => {
    const fields = node.fields;

    const slides = await Promise.all(
        fields.mediaList.map(async ({ media }) => {
            const mediaObject = media[0].media;

            const srcSet = Object.entries(mediaObject.sizes)
                .filter(([key, size]) => !key.startsWith("blogLightbox") || !(size as Media).url)
                .map(([, size]) => ({
                    src: (size as Media).url,
                    width: (size as Media).width,
                    height: (size as Media).height,
                }));

            return {
                id: mediaObject.id,
                src: mediaObject.url,
                // todo: https://github.com/payloadcms/payload/issues/5051
                description: mediaObject.caption ? await serializeLexical(mediaObject.caption) : undefined,
                alt: mediaObject.alt,
                width: mediaObject.width,
                height: mediaObject.height,
                srcSet,
            };
        }),
    );

    return (
        <Box
            aspectRatio="3/2"
            className={`${css({
                "--yarl__thumbnails_container_background_color": "#222222",
                "--yarl__color_backdrop": "#222222",
                "--yarl__thumbnails_thumbnail_background": "colors.transparent",
                "--yarl__fade_animation_duration": "0",
            })} ${bleed({ inline: "6" })}`}
        >
            <GalleryLightbox slides={slides} />
        </Box>
    );
};

export default GalleryBlock;
