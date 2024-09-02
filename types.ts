import type { SerializedLexicalNode } from "lexical";
import type { ReactNode } from "react";

export type HTMLConverter<T extends SerializedLexicalNode = SerializedLexicalNode> = {
    converter: ({
        childIndex,
        converters,
        node,
        parent,
    }: {
        childIndex: number;
        converters: HTMLConverter[];
        node: T;
        parent: SerializedLexicalNodeWithParent;
    }) => Promise<ReactNode> | ReactNode;
    nodeTypes: string[];
};

export type SerializedLexicalNodeWithParent = SerializedLexicalNode & {
    parent?: SerializedLexicalNode;
};
