import { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from 'react-router-dom';

interface statusProps{
    children: ReactNode;
}

const StatusContext = ({children}: statusProps) => {
    const {user} = useAuth();
    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return <>{children}</>;
}

export default StatusContext;