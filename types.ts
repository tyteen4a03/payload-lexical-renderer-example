import type {ReactNode} from "react";
import type {SerializedLexicalNode} from "lexical";

export type HTMLConverter<T = SerializedLexicalNode> = {
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
