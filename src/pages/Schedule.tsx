import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Box,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button
} from '@chakra-ui/react'
import { useState } from 'react'
import useSchedule from '../hooks/useSchedule'

export default function Schedule() {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [type_exams, setTypeExams] = useState('')

    const { schedule } = useSchedule()

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const scheduleData = {
            date,
            time,
            type_exams
        }

        try {
            await schedule(scheduleData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack
            direction="column"
            spacing={10}
            align="center"
            justify="center"
            mt={10}
        >
            <Accordion
                defaultIndex={[0]}
                w={'100%'}
                allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <HStack>
                            <Box flex="1" textAlign="left">
                                Medico
                            </Box>
                            <Box flex="1" textAlign="right">
                                10:00
                            </Box>

                        </HStack>

                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Stack
                            direction="column"
                            spacing={2}
                            align="center"
                            justify="center"
                            mt={2}
                        >

                            <FormControl id="date">
                                <FormLabel>Data</FormLabel>
                                <Input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </FormControl>

                            <FormControl id="time">
                                <FormLabel>Hora</FormLabel>
                                <Input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </FormControl>

                            <FormControl id="type_exams">
                                <FormLabel>Tipo de exame</FormLabel>
                                <Select
                                    placeholder="Selecione o tipo de exame"
                                    value={type_exams}
                                    onChange={(e) => setTypeExams(e.target.value)}
                                >

                                </Select>
                            </FormControl>
                            <Button
                                bgColor={'#E2A140'}
                                colorScheme="#fff"
                                borderRadius={80}
                                size="lg"
                                fontSize="20px"
                                h="10"
                                w={100}
                                _hover={{ bgColor: '#E2A140', opacity: 0.8, }}
                                onClick={handleSubmit}
                            >
                                Agendar
                            </Button>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    )
}