import { Table } from "@/modules/core/ui/primitives";
import type { HTMLConverter } from "../../types";

import { convertLexicalNodesToReactNode } from "@/modules/core/richtext/lexical/serializeLexical";
import type { SerializedTableRowNode } from "@lexical/table";

export const TableRowHTMLConverter: HTMLConverter<SerializedTableRowNode> = {
    async converter({ converters, node, parent }) {
        return (
            <Table.Row>
                {
                    await convertLexicalNodesToReactNode({
                        converters,
                        lexicalNodes: node.children,
                        parent: {
                            ...node,
                            parent,
                        },
                    })
                }
            </Table.Row>
        );
    },
    nodeTypes: ["tablerow"],
};
