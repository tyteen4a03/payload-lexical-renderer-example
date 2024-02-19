import type { HTMLConverter } from "./types";

import { HeadingHTMLConverter } from "./converters/heading";
import { LinebreakHTMLConverter } from "./converters/linebreak";
import { LinkHTMLConverter } from "./converters/link";
import { ListHTMLConverter, ListItemHTMLConverter } from "./converters/list";
import { ParagraphHTMLConverter } from "./converters/paragraph";
import { QuoteHTMLConverter } from "./converters/quote";
import { TextHTMLConverter } from "./converters/text";
import {UploadHTMLConverter} from "@/modules/blog/lexical/converters/upload";
import { BlockHtmlConverter } from "./converters/blocks";

export const defaultHTMLConverters: HTMLConverter[] = [
    ParagraphHTMLConverter,
    TextHTMLConverter,
    LinebreakHTMLConverter,
    LinkHTMLConverter,
    HeadingHTMLConverter,
    QuoteHTMLConverter,
    ListHTMLConverter,
    ListItemHTMLConverter,
    UploadHTMLConverter,
    BlockHtmlConverter,
];
