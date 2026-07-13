export interface User {
    email: string;
    password: string;
    role: "gerente" | "operador";
    permissions: string[];
}