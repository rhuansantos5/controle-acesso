import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav>

            <div className="logo_navbar">
                <img src={logo} alt="GeoTech" />
            </div>

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={menuOpen ? "nav-links active" : "nav-links"}>

                {user?.permissions.includes("/home") && (
                    <Link to="/home" onClick={closeMenu}>
                        Home
                    </Link>
                )}

                {user?.permissions.includes("/fotos") && (
                    <Link to="/fotos" onClick={closeMenu}>
                        Fotos
                    </Link>
                )}

                {user?.permissions.includes("/noticias") && (
                    <Link to="/noticias" onClick={closeMenu}>
                        Notícias
                    </Link>
                )}

                {user?.permissions.includes("/documentos") && (
                    <Link to="/documentos" onClick={closeMenu}>
                        Documentos
                    </Link>
                )}

                {user?.permissions.includes("/contato") && (
                    <Link to="/contato" onClick={closeMenu}>
                        Contato
                    </Link>
                )}

                <div className="mobile-user">

                    <p>{user?.email}</p>

                    <p>{user?.role.toUpperCase()}</p>

                    <button
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        Sair
                    </button>

                </div>

            </div>

            <div className="user-area">

                <div className="user-info">

                    <span>{user?.email}</span>

                    <small>{user?.role.toUpperCase()}</small>

                </div>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Sair
                </button>

            </div>

        </nav>
    );
}

export default Navbar;