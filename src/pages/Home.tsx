import { Stack, Input, InputGroup, SimpleGrid, Text, Box, IconButton, } from "@chakra-ui/react";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaAmbulanceSolid } from "react-icons/lia";

import { Link } from "react-router-dom";


export default function Home() {
    return (
        <Stack
            direction="column"
            spacing={10}
            align="center"
            justify="center"
            mt={10}
        >
            <InputGroup>
                <Input placeholder="Pesquisar" />
            </InputGroup>

            <Stack
                direction="row"
                spacing={10}
                align="center"
                justify="center"
                mt={10}
            >
                <SimpleGrid columns={2} spacing={10}>
                    <Box
                        w={100}
                        textAlign={'center'}
                    >
                        <Link
                            to="schedule"
                        >

                            <IconButton
                                bgColor={'#E2A140'}
                                icon={<FaUserDoctor />}
                                aria-label="Médicos"
                                colorScheme="#fff"
                                borderRadius={80}
                                size="lg"
                                fontSize="40px"
                                h="20"
                                w={100}
                                _hover={{ bgColor: '#E2A140', opacity: 0.8, }}
                            >
                            </IconButton>
                            <Text >
                                Medico
                            </Text>

                        </Link>
                    </Box>

                    <Box
                        w={100}
                        textAlign={'center'}
                    >

                        <IconButton
                            bgColor={'#E2A140'}
                            icon={<LiaAmbulanceSolid />}
                            aria-label="Médicos"
                            colorScheme="#fff"
                            borderRadius={80}
                            size="lg"
                            fontSize="40px"
                            h="20"
                            w={100}
                            _hover={{ bgColor: '#E2A140', opacity: 0.8 }}
                        >

                        </IconButton>
                        <Text>
                            Ambulância
                        </Text>
                    </Box>
                </SimpleGrid>
            </Stack>
        </Stack>
    );
}