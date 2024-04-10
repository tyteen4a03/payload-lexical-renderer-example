import {SerializedLexicalNode} from "lexical/LexicalNode";
import {SerializedElementNode} from "lexical/nodes/LexicalElementNode";

export type SerializedHeadingNode<T extends SerializedLexicalNode = SerializedLexicalNode> = SerializedElementNode & {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
};