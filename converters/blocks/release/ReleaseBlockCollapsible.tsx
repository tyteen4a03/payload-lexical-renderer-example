"use client";

import { Button, Collapsible } from "@/modules/core/ui/primitives";
import { type FC, type PropsWithChildren, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Box, Flex, styled } from "styled-system/jsx";

const ReleaseBlockCollapsible: FC<PropsWithChildren> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Collapsible.Root open={expanded}>
            <Flex direction="row" justify="flex-start" width="100%">
                <Collapsible.Trigger asChild>
                    <Button
                        size="lg"
                        variant="ghost"
                        width="100%"
                        justifyContent="flex-start"
                        flexGrow={1}
                        onClick={() => setExpanded(!expanded)}
                        bgColor="gray.4"
                    >
                        <styled.span
                            display="inline-flex"
                            flexDirection="row"
                            alignItems="flex-start"
                            width="100%"
                            gap={2}
                        >
                            <styled.span width="100%" textAlign="left" fontSize="lg">
                                Release Notes
                            </styled.span>
                            <span>{expanded ? <FaChevronDown size={8} /> : <FaChevronUp size={8} />}</span>
                        </styled.span>
                    </Button>
                </Collapsible.Trigger>
            </Flex>
            <Collapsible.Content>
                <Box px={6} py={3} bgColor="gray.2">
                    {children}
                </Box>
            </Collapsible.Content>
        </Collapsible.Root>
    );
};

export default ReleaseBlockCollapsible;
