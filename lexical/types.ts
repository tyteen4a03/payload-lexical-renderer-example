import {ReactNode} from "react";

export type HTMLConverter<T = any> = {
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

export type SerializedLexicalNodeWithParent = any & {
    parent?: any;
};
