import AuthContext from '@/lib/authContext'
import { useContext } from 'react'

export default function useAuth() {
    return useContext(AuthContext) 
}
