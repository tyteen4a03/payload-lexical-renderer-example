import {FC} from "react";
import {Box} from "styled-system/jsx";
import Image from 'next/image';

const GalleryMediaPreview: FC<{index: number, media: object, onClick: (index: number) => void}> = ({ index, media, onClick }) => {
    return (
        <Box>
            <Image
                src={`http://localhost:3000${media.sizes.thumbnail.url}`}
                alt={media.alt}
                width={media.sizes.thumbnail.width}
                height={media.sizes.thumbnail.height}
                onClick={() => onClick(index)}
            />
        </Box>
    );
}

export default GalleryMediaPreview;