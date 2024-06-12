import sendDataLogin from "@/lib/sendData"
import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function useHandleLogin() {

    const authContext = useAuth();

    if (!authContext) {
        throw new Error("useHandleLogin must be used within an AuthProvider");
    }

    const { setAuth } = authContext;
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [accessToken, setAccessToken] = useState<string>("blablabla")
    const [refreshToken, setRefreshToken] = useState<string>("blabalabl")
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.id === "psswd") {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, password);
        const res = await sendDataLogin({ url:"http://127.0.0.1:1337/api/sessions", data: { email: email, password: password } })
        //si il tout va bien
        if (res.status == 200) {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            navigate('/')
        }
    }
    useEffect(() => {
        setAuth({ accessToken, refreshToken });
    }, [accessToken, refreshToken]);



    return { handleChange, handleSubmit, email, password }
}
