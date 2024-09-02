import type { Media } from "@/payload-types";
import Image from "next/image";
import { Box } from "styled-system/jsx";

interface GalleryMediaPreviewProps {
    index: number;
    media: Media;
    onClick: (index: number) => void;
}

const GalleryMediaPreview = ({ index, media, onClick }: GalleryMediaPreviewProps) => (
    <Box>
        <Image
            src={media.sizes.thumbnail.url}
            alt={media.alt}
            width={media.sizes.thumbnail.width}
            height={media.sizes.thumbnail.height}
            onClick={() => onClick(index)}
        />
    </Box>
);

export default GalleryMediaPreview;
