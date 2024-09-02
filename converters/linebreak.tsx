import type { SerializedLineBreakNode } from "lexical";
import type { HTMLConverter } from "../types";

export const LinebreakHTMLConverter: HTMLConverter<SerializedLineBreakNode> = {
    converter() {
        return <br />;
    },
    nodeTypes: ["linebreak"],
};
