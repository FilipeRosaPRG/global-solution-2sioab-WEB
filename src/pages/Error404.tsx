import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Error404: React.FC = () => {
    return (
        <Box textAlign="center" mt={20}>
            <Heading as="h1" size="2xl">
                404
            </Heading>
            <Text fontSize="xl" mt={4}>
                Página não encontrada
            </Text>
        </Box>
    );
};

export default Error404;
