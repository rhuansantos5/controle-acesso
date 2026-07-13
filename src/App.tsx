import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Fotos from "./pages/Fotos";
import Noticias from "./pages/Noticias";
import Documentos from "./pages/Documentos";
import Contato from "./pages/Contato";
import AcessoNegado from "./pages/AcessoNegado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element = {<Login />} />
        <Route 
          path="/home" 
          element={
            <PrivateRoute permission="/home">
              <Home />
            </PrivateRoute>
            } 
        />
        <Route 
          path="/fotos" 
          element={
            <PrivateRoute permission="/fotos">
              <Fotos />
            </PrivateRoute>
            } 
        />
        <Route 
          path="/noticias" 
          element={
            <PrivateRoute permission="/noticias">
              <Noticias />
            </PrivateRoute>
            } 
        />
        <Route 
          path="/documentos" 
          element={
            <PrivateRoute permission="/documentos">
              <Documentos />
            </PrivateRoute>
            } 
        />
        <Route 
          path="/contato" 
          element={
            <PrivateRoute permission="/contato">
              <Contato />
            </PrivateRoute>
            } 
        />

        <Route path="/acesso-negado" element={<AcessoNegado/>} />
        
      </Routes>
    </BrowserRouter>  
  );
}

export default App