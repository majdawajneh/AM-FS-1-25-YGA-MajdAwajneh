import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
export function AuthProvider({ children }) {

    //null means no user is logged in
    const [user, setUser] = useState("Majd");

    //fake login for teaching
    function logIn(name) {
        setUser({name});
    }


    //fake logout for teaching 
    function logOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}