"use client";

import LightboxImage from "@/modules/core/lightbox/LightboxImage";
import type { FC } from "react";
import Lightbox from "yet-another-react-lightbox";
import type { Slide } from "yet-another-react-lightbox/dist/types";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const GalleryLightbox: FC<{ slides: Slide[] }> = ({ slides }) => (
    <Lightbox
        open={true}
        slides={slides}
        plugins={[Inline, Fullscreen, Thumbnails, Captions, Video, Zoom]}
        carousel={{ imageFit: "cover", finite: true }}
        render={{ slide: LightboxImage }}
    />
);

export default GalleryLightbox;
