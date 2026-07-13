import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
    children: React.ReactNode;
    permission: string;
}

function PrivateRoute({ children, permission }: PrivateRouteProps) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to= "/" />;
    }
    
    if (!user.permissions.includes(permission)) {
        return <Navigate to="/acesso-negado"/>
    }
    
    return children;
}

export default PrivateRoute