import sendDataLogin from "@/lib/sendData"
import { setToken } from "@/redux/authSlice";
import { AppDispatch } from "@/redux/store";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function useHandleLogin() {

    const dispatch = useDispatch<AppDispatch>()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
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
        const res = await sendDataLogin({ url: "/sessions", data: { email: email, password: password } })
        //si il tout va bien
        if (res.status == 200) {
            const accessToken = res.data.accessToken
            const refreshToken = res.data.refreshToken
            dispatch(setToken({ accesToken: accessToken, refreshToken: refreshToken }));
            navigate('/')
            console.log(accessToken,refreshToken);
        }
    }



    return { handleChange, handleSubmit, email, password }
}
