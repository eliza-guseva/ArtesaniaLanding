import React, { useState, useEffect } from "react";
import authService from "../services/authServices";

const AuthContext = React.createContext();

function AuthContextWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
  
    const storeToken = (token) => {   
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = async () => {
        setIsLoading(true);
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            try {
                const response = await authService.me();
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(response);
            } catch (error) {
                setIsLoggedIn(false);
                setIsLoading(false);
                setUser(null);
            }
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
        }
    };

    const removeToken = () => {
        localStorage.removeItem('authToken');
    }

    const logOutUser = () => {
        removeToken();
        authenticateUser();
    }

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextWrapper, AuthContext };
