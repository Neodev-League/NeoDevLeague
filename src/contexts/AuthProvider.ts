import { createContext,useContext } from "react";
import { AuthProviderValue } from "./AuthContext";

export const AuthContext = createContext<AuthProviderValue | null>(null);

export function useAuth() {
    const authContext = useContext(AuthContext);
    if (!authContext) {
      throw new Error("useAuth must be used within AuthProvider");
    }
    return authContext;
}
  