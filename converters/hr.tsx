import type { HTMLConverter } from "../types";

import type { SerializedHorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { styled } from "styled-system/jsx";

export const HorizontalRuleHTMLConverter: HTMLConverter<SerializedHorizontalRuleNode> = {
    async converter() {
        return <styled.hr my={4} backgroundColor="gray.5" />;
    },
    nodeTypes: ["horizontalrule"],
};
