import type { HTMLConverter } from "./types";

import { InlineBlockHTMLConverter } from "@/modules/core/richtext/lexical/converters/inlineBlocks";
import { RelationshipHTMLConverter } from "@/modules/core/richtext/lexical/converters/relationship";
import { TableHTMLConverter } from "@/modules/core/richtext/lexical/converters/tables/table";
import { TableCellHTMLConverter } from "@/modules/core/richtext/lexical/converters/tables/tableCell";
import { TableRowHTMLConverter } from "@/modules/core/richtext/lexical/converters/tables/tableRow";
import { BlockHtmlConverter } from "./converters/blocks";
import { HeadingHTMLConverter } from "./converters/heading";
import { HorizontalRuleHTMLConverter } from "./converters/hr";
import { LinebreakHTMLConverter } from "./converters/linebreak";
import { LinkHTMLConverter } from "./converters/link";
import { ListHTMLConverter, ListItemHTMLConverter } from "./converters/list";
import { ParagraphHTMLConverter } from "./converters/paragraph";
import { QuoteHTMLConverter } from "./converters/quote";
import { TextHTMLConverter } from "./converters/text";
import { UploadHTMLConverter } from "./converters/upload";

export const defaultHTMLConverters: HTMLConverter[] = [
    ParagraphHTMLConverter,
    HeadingHTMLConverter,
    TextHTMLConverter,
    LinebreakHTMLConverter,
    LinkHTMLConverter,
    QuoteHTMLConverter,
    RelationshipHTMLConverter,
    ListHTMLConverter,
    ListItemHTMLConverter,
    UploadHTMLConverter,
    TableHTMLConverter,
    TableRowHTMLConverter,
    TableCellHTMLConverter,
    BlockHtmlConverter,
    InlineBlockHTMLConverter,
    HorizontalRuleHTMLConverter,
];
