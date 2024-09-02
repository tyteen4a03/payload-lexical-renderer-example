import { Table } from "@/modules/core/ui/primitives";
import type { HTMLConverter } from "../../types";

import { convertLexicalNodesToReactNode } from "@/modules/core/richtext/lexical/serializeLexical";
import {
    type SerializedTableCellNode,
    type SerializedTableNode,
    type SerializedTableRowNode,
    TableCellHeaderStates,
} from "@lexical/table";

export const TableHTMLConverter: HTMLConverter<SerializedTableNode> = {
    async converter({ converters, node, parent }) {
        const headerRows: SerializedTableRowNode[] = [];
        const bodyRows: SerializedTableRowNode[] = [];
        let foundHeaderEnd = false;
        for (const row of node.children as SerializedTableRowNode[]) {
            if (foundHeaderEnd) {
                bodyRows.push(row);
                continue;
            }

            /**
             * NB: We ignore cells that have TableCellHeaderStates set to COLUMN, in the weird case that the user
             * sets a non-first column as header.
             */
            const headerCells = row.children.filter(
                (cell: SerializedTableCellNode) => cell.headerState !== TableCellHeaderStates.NO_STATUS,
            );
            if (headerCells.length === row.children.length) {
                // All cells in row are header, add this row to header rows
                headerRows.push(row);
            } else {
                foundHeaderEnd = true;
                bodyRows.push(row);
            }
        }

        return (
            <Table.Root variant="outline">
                {headerRows.length > 0 && (
                    <Table.Head>
                        {
                            await convertLexicalNodesToReactNode({
                                converters,
                                lexicalNodes: headerRows,
                                parent: {
                                    ...node,
                                    parent,
                                },
                            })
                        }
                    </Table.Head>
                )}
                <Table.Body>
                    {
                        await convertLexicalNodesToReactNode({
                            converters,
                            lexicalNodes: bodyRows,
                            parent: {
                                ...node,
                                parent,
                            },
                        })
                    }
                </Table.Body>
            </Table.Root>
        );
    },
    nodeTypes: ["table"],
};
