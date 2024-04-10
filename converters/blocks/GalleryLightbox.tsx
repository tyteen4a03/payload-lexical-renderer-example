'use client';

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import {FC} from "react";
import {Slide} from "yet-another-react-lightbox/dist/types";
import LightboxImage from "@/modules/core/lightbox/LightboxImage";

const GalleryLightbox: FC<{slides: Slide[]}> = ({ slides }) => (
    <Lightbox
        open={true}
        slides={slides}
        plugins={[Inline, Fullscreen, Thumbnails, Captions, Video, Zoom]}
        carousel={{ imageFit: "cover", finite: true }}
        render={{ slide: LightboxImage }}
    />
);

export default GalleryLightbox;