import { serializeLexical } from "@/modules/core/richtext/lexical/serializeLexical";
import { Card } from "@/modules/core/ui/primitives";
import type { ColumnsBlock as ColumnsBlockType } from "@/payload-types";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { Box, Flex } from "styled-system/jsx";

interface ColumnsBlockProps {
    node: SerializedBlockNode & { fields: ColumnsBlockType };
}

const ColumnsBlock = async ({ node }: ColumnsBlockProps) => {
    const gapStyleIsLine = node.fields.gapStyle === "line";
    const styleIsCard = node.fields.style === "card";

    const getColumnContent = async (column) => (
        <Flex
            grow={1}
            key={column.id}
            {...(!styleIsCard
                ? { width: { base: "100%", lg: column.width ?? `1/${node.fields.columns.length}` } }
                : {})}
        >
            <Box>{await serializeLexical(column.content)}</Box>
        </Flex>
    );

    return (
        <Flex direction={{ base: "column", lg: "row" }} my={2} alignItems="flex-start" gap={gapStyleIsLine ? 0 : 5}>
            {
                await Promise.all(
                    node.fields.columns.map(async (column, index) => (
                        <>
                            {styleIsCard ? (
                                <Card.Root
                                    key={column.id}
                                    {...(styleIsCard
                                        ? {
                                              width: {
                                                  base: "100%",
                                                  lg: column.width ?? `1/${node.fields.columns.length}`,
                                              },
                                          }
                                        : {})}
                                    alignSelf="stretch"
                                    py={2}
                                    flexGrow={1}
                                    width="100%"
                                >
                                    <Card.Body>{await getColumnContent(column)}</Card.Body>
                                </Card.Root>
                            ) : (
                                <Flex grow={1} width="100%" key={column.id}>
                                    {await getColumnContent(column)}
                                </Flex>
                            )}
                            {gapStyleIsLine && index !== node.fields.columns.length - 1 && (
                                <Box
                                    mx={{ base: 0, lg: 5 }}
                                    my={{ base: 5, lg: 0 }}
                                    alignSelf="stretch"
                                    border="1.5px solid lightgrey"
                                />
                            )}
                        </>
                    )),
                )
            }
        </Flex>
    );
};

export default ColumnsBlock;
