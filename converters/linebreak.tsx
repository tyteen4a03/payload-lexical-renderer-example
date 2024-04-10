import type { HTMLConverter } from "../types";
import {SerializedLineBreakNode} from "lexical";

export const LinebreakHTMLConverter: HTMLConverter<SerializedLineBreakNode> = {
    converter() {
        return <br />;
    },
    nodeTypes: ["linebreak"],
};
