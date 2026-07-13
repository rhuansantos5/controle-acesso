import { createContext } from "react";
import type { User } from "../types/User";

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

import { useState } from "react";
import type { ReactNode } from "react";

interface AuthContextProps {
    children: ReactNode;
};

export function AuthProvider( {children}: AuthContextProps) {
    const [user, setUser]  = useState<User | null>(null);

    function login(user: User) {
        setUser(user);
    }
    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider
         value={{
            user,
            login,
            logout,
         }}
        >
         {children}    
        </AuthContext.Provider>


    )

}
