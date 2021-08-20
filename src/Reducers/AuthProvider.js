import React, { createContext } from 'react'
import { useReducer } from 'react'
import { tryParse } from '../utils'
import authReducer, { TOKEN } from './AuthReducer'
export const AuthContext = createContext()

const initialState = {
    isAuthenticated: tryParse(localStorage.getItem(TOKEN))
}

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
