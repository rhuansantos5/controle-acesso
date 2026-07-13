import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { users } from "../data/users";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Login.css";
import "../styles/Navbar.css";

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();

        const user = users.find(
            (user) =>
                user.email === email &&
                user.password === password
        );

        if (user) {
            login(user)
            navigate("/home")
        } else {
            alert("E-mail ou senha inválidos.")
        }
    }


    return (
        <div className="login-container">
            

            <form className="login-box" onSubmit={handleLogin}>
                <h1>Geotech</h1>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Digite seu email"
                    value = {email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label>Senha</label>
                <input  
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type="submit"> Entrar </button>


            </form>
        </div>
    );
}

export default Login  

