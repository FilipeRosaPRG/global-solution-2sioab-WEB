import { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: 0,
        birthdate: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        phone: '',
        password: '',
        type: 0,
    });

    console.log(formData);

    const { signup, signed } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        const { id, value } = event.target;
    
        if (id === 'name') {
            setFormData({ ...formData, name: value });
        }
    
        if (id === 'email') {
            setFormData({ ...formData, email: value });
        }
    
        if (id === 'age') {
            setFormData({ ...formData, age: parseInt(value, 10) });
        }
    
        if (id === 'birthdate') {
            setFormData({ ...formData, birthdate: value });
        }
    
        if (id === 'address') {
            setFormData(
                {
                    ...formData,
                    address: {
                        street: value,
                        city: value,
                        state: value,
                        zip: value,
                    },
                }
            );
        }
    
        if (id === 'phone') {
            setFormData({ ...formData, phone: value });
        }
    
        if (id === 'password') {
            setFormData({ ...formData, password: value });
        }
    
        if (id === 'type') {
            setFormData({ ...formData, type: parseInt(value, 10) });
        }
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { name, email, age, birthdate, address, phone, password, type } = formData;
        const response = await signup(name, email, age, birthdate, address, phone, password, type);
        if (response) {
            alert(response);
        }
    };

    if (signed) {
        // Se já estiver logado, redirecione para a página home
        navigate('/home');
        return null; // Retorne null para evitar renderização desnecessária
    }
    return (

        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'white'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Cadastrar</Heading>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="name">
                                <FormLabel>Nome</FormLabel>
                                <Input type="text" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="age">
                                <FormLabel>Idade</FormLabel>
                                <Input type="number" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="birthdate">
                                <FormLabel>Data de nascimento</FormLabel>
                                <Input type="date" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="address">
                                <FormLabel>Endereço</FormLabel>
                                <Input type="text" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id='city'>
                                <FormLabel>Cidade</FormLabel>
                                <Input type="text" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id='state'>
                                <FormLabel>Estado</FormLabel>
                                <Input type="text" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id='zip'>
                                <FormLabel>CEP</FormLabel>
                                <Input type="text" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="phone">
                                <FormLabel>Telefone</FormLabel>
                                <Input type="tel" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Senha</FormLabel>
                                <Input type="password" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="type">
                                <FormLabel>Tipo de usuário</FormLabel>
                                <Input type="text" onChange={handleInputChange} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                    <Checkbox>Lembrar-me</Checkbox>
                                    <Text color={'blue.400'}>Esqueceu a senha?</Text>
                                </Stack>
                                <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                                    Confirmar
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>


    );

}
