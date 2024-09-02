import { Table } from "@/modules/core/ui/primitives";
import type { HTMLConverter } from "../../types";

import { convertLexicalNodesToReactNode } from "@/modules/core/richtext/lexical/serializeLexical";
import { type SerializedTableCellNode, type SerializedTableRowNode, TableCellHeaderStates } from "@lexical/table";

export const TableCellHTMLConverter: HTMLConverter<SerializedTableCellNode> = {
    async converter({ converters, node, parent }) {
        const TableCellComponent = node.headerState !== TableCellHeaderStates.NO_STATUS ? Table.Header : Table.Cell;

        return (
            <TableCellComponent
                colSpan={node.colSpan}
                rowSpan={node.rowSpan}
                width={node.width}
                {...(node.backgroundColor ? { backgroundColor: node.backgroundColor } : {})}
            >
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
            </TableCellComponent>
        );
    },
    nodeTypes: ["tablecell"],
};
