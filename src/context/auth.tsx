import { createContext, useEffect, useState } from "react";

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface User {
    name?: string;
    email: string;
    age?: number;
    birthdate?: string;
    address?: Address;
    phone?: string;
    password: string;
    type?: number;
}

interface AuthContextProps {
    user: User | null;
    signed: boolean;
    signin: (email: string, password: string) => Promise<void | string>;
    signup: (
        name: string,
        email: string,
        age: number,
        birthdate: string,
        address: any,
        phone: string,
        password: string,
        type: number
    ) => Promise<void | string>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    signed: false,
    signout: () => { },
    signin: async () => { },
    signup: async () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Verifica se o usuario esta autenticado ao inicializar
    useEffect(() => {
        
    }, []);

    const signin = async (email: string, password: string) => {
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            // Veririfica resposta do servidor
            if (response.ok) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
            } else {
                return "E-mail ou senha incorretos";
            }
        } catch (error) {
            console.error("Error signing in:", error);
            return "Erro ao fazer login";
        }
    };

    const signup = async (
        name: string,
        email: string,
        age: number,
        birthdate: string,
        address: Address,
        phone: string,
        password: string,
        type: number
    ) => {
        try {
            const response = await fetch("http://localhost:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, age, birthdate, address, phone, password, type }),
            });

            // Veririfica resposta do servidor

            if (response.ok) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ name, email, age, birthdate, address, phone, password, type });
            } else {
                return "Erro ao fazer cadastro";
            }



        } catch (error) {
            console.error("Error signing up:", error);
            console.log(error);
            return "Erro ao fazer cadastro";
        }
    };


    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
