import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
    const { user } = useContext(AuthContext); 
    return (
        <>
            <Navbar />
            <main style={{padding:"30px"}}>
                <h1>Home</h1>

                <h2>{user?.email}</h2>

                <p>Você está logado como <strong>{user?.role}</strong>.</p>
            </main>
        </>
    );
}

export default Home;