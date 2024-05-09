import type { HTMLConverter } from "./types";

import { HeadingHTMLConverter } from "./converters/heading";
import { LinebreakHTMLConverter } from "./converters/linebreak";
import { LinkHTMLConverter } from "./converters/link";
import { ListHTMLConverter, ListItemHTMLConverter } from "./converters/list";
import { ParagraphHTMLConverter } from "./converters/paragraph";
import { QuoteHTMLConverter } from "./converters/quote";
import { TextHTMLConverter } from "./converters/text";
import { UploadHTMLConverter } from "./converters/upload";
import { BlockHtmlConverter } from "./converters/blocks";
import { HorizontalRuleHTMLConverter } from "./converters/hr";

export const defaultHTMLConverters: HTMLConverter[] = [
    HeadingHTMLConverter,
    ParagraphHTMLConverter,
    TextHTMLConverter,
    LinebreakHTMLConverter,
    LinkHTMLConverter,
    QuoteHTMLConverter,
    ListHTMLConverter,
    ListItemHTMLConverter,
    HorizontalRuleHTMLConverter,
    UploadHTMLConverter,
    BlockHtmlConverter,
];
