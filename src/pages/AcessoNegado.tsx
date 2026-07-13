import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AcessoNegado() {
    return (
        <>
            <Navbar />

            <main style={{ padding: "30px", textAlign: "center" }}>
                <h1>🚫 Acesso Negado</h1>

                <p>Você não possui permissão para acessar esta página.</p>

                <Link to="/home">
                    <button>Voltar para Home</button>
                </Link>
            </main>
        </>
    );
}

export default AcessoNegado;