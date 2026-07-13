import type { User } from "../types/User";

export const users: User[] = [
    {
        email: "gerente@empresa.com",
        password: "123456",
        role: "gerente",
        permissions:[
            "/home",
            "/fotos",
            "/noticias",
            "/documentos",
            "/contato"
        ],
    },
    {
        email: "operador@empresa.com",
        password: "123456",
        role: "operador",
        permissions: ["/home", "/fotos"]
    },

]