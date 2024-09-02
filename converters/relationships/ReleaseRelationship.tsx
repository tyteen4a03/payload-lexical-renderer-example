import ReleaseBlockCollapsible from "@/modules/core/richtext/lexical/converters/relationships/release/ReleaseBlockCollapsible";
import { serializeLexical } from "@/modules/core/richtext/lexical/serializeLexical";
import { Card } from "@/modules/core/ui/primitives";
import ReleaseBadge from "@/modules/releases/components/ReleaseBadge";
import type { Release } from "@/payload-types";
import type { SerializedRelationshipNode } from "@payloadcms/richtext-lexical";
import { format, parseISO } from "date-fns";
import { Box, Flex } from "styled-system/jsx";

interface ReleaseRelationshipProps {
    node: SerializedRelationshipNode & { value: Release };
}

const ReleaseRelationship = async ({ node }: ReleaseRelationshipProps) => {
    const { value: release } = node;

    return (
        <Flex m={4} direction="column" alignItems="center">
            <Box h={2} w="full" backgroundColor="green.8" borderTopRadius="md">
                &nbsp;
            </Box>
            <Card.Root width="100%" flexGrow={1} p={4} borderTopRadius="none">
                <Card.Header>
                    <Flex direction="column" gap={4}>
                        <ReleaseBadge />
                        <Flex direction="column" gap={4}>
                            <Card.Title fontSize="5xl" textTransform="uppercase" fontFamily="heading">
                                {release.title ?? release.version}
                            </Card.Title>
                            {release.releasedAt && (
                                <Card.Description fontSize="lg">
                                    Released on: {format(parseISO(release.releasedAt), "MMMM do, yyyy")}
                                </Card.Description>
                            )}
                        </Flex>
                    </Flex>
                </Card.Header>
                <Card.Body>
                    <ReleaseBlockCollapsible>{await serializeLexical(release.releaseNotes)}</ReleaseBlockCollapsible>
                </Card.Body>
            </Card.Root>
        </Flex>
    );
};

export default ReleaseRelationship;
