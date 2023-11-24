import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SimpleCard() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    console.log(formData)

    const { signin, signed } = useAuth()

    const navigate = useNavigate()

    const handleInputChange = (event: any) => {
        const { id, value } = event.target

        if (id === 'email') {
            setFormData({ ...formData, email: value })
        }

        if (id === 'password') {
            setFormData({ ...formData, password: value })
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const { email, password } = formData

        try {
            await signin(email, password)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    if (signed) {
        navigate('/home')
    }

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'white'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" onChange={handleInputChange} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox>Lembrar-me</Checkbox>
                                <Text color={'blue.400'}>Esqueceu a senha?</Text>
                            </Stack>
                            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }} onClick={
                                handleSubmit}>
                                Confirmar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}