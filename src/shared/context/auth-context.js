import { createContext } from 'react'

export const AuthContext = createContext({
    isLoggedIn: false,
    userEmail: null,
    userId: null,
    token: null,
    login: () => { },
    logout: () => { }
})