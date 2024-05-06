import type { HTMLConverter } from "../types";

import type { SerializedHorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";

export const HorizontalRuleHTMLConverter: HTMLConverter<SerializedHorizontalRuleNode> = {
    async converter() {
        return <hr />;
    },
    nodeTypes: ["horizontalrule"],
};
