"use client";

import { createContext, useReducer } from "react";
import { useContext, useEffect, useMemo, useState} from "react"

// -----Types--------
type User = {
    id: number;
    email: string;
};

type AuthState = {
    user: User | null;
    loading: boolean;
    error: string | null;
};

type AuthContextType = {
    state: AuthState;
    login: (email: string,password: string) => Promise<void>;
    logout: () => void;
}

const InititalState: AuthState = {
    user: null,
    loading: false,
    error: null,
}

//------REDUCER-------

function authReducer(state: AuthState,action: any):AuthState {
    switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };

    case "LOGIN_ERROR":
      return { user: null, loading: false, error: action.payload };

    case "LOGOUT":
      return { user: null, loading: false, error: null };

    default:
      return state;
  }
}

//------ CONTEXT --------

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ------ PROVIDER -------

export default function AuthProvider({ children } : {children: React.ReactNode} ){

    const [state, dispatch] = useReducer(authReducer,InititalState);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser){
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: JSON.parse(storedUser),
            })
        }
    },[]);

    // ---- ACTIONS -----
    const login = async (email:string,password:string) => {
        dispatch({
            type: "LOGIN_START"
        });
        try{
        await new Promise((res) => setTimeout(res,1000));

        const user = { id: 1, email}
        localStorage.setItem("user",JSON.stringify(user));

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: user,
        })
    }catch{
        dispatch({
            type: "LOGIN_ERROR",
            payload: "Login Failed."
        })
    }
    }

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({
            type: "LOGOUT",
            payload: "Logout successful."
        })
    }

    const value = useMemo(() => {
        return {state,login,logout};
    },[state]);


    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const ctx = useContext(AuthContext);
    if (!ctx){
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return ctx;
}

