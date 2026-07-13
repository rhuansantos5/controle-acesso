import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate();
    
    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <nav>
            <h2> Controle de Acesso</h2>
            
            {user?.permissions.includes("/home") && (
                <Link to="/home">Home</Link>
            )}

            {user?.permissions.includes("/fotos") && (
                <Link to="/fotos">Fotos</Link>    
            )}
            
            {user?.permissions.includes("/noticias") && (
                <Link to="/noticias">Notícias</Link>    
            )}
            
            {user?.permissions.includes("/documentos") && (
                <Link to="/documentos">Documentos</Link>    
            )}
            
            {user?.permissions.includes("/contato") && (
                <Link to="/contato">Contanto</Link>    
            )}
            
            <div className="user-info">
                <p>{user?.email}</p>
                <p>{user?.role.toUpperCase()}</p>
            </div>
            
            <button onClick={handleLogout}>Sair</button>
        </nav>   
    );
}

export default Navbar