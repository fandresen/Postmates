
import sendDataLogin from "@/lib/sendData"
import { useState } from "react"

export default function useHandleCreateUser() {

    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [pwd, setPwd] = useState<string>("")
    const [confirm_pwd, setConfirm_pwd] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.id === "psswd") {
            setPwd(e.target.value)
        }
        else if (e.target.id === "name") {
            setName(e.target.value)
        }
        else if (e.target.id === "confirm_pwd") {
            setConfirm_pwd(e.target.value)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, name, pwd, confirm_pwd);
        const res = sendDataLogin({ url:"http://localhost:1337/api/users", data: {email:email,name:name,password:pwd,passwordConfirmation:confirm_pwd}})
        console.log(res)
    
    }
    
  
    
    return { handleChange,handleSubmit,email,name,pwd,confirm_pwd}
}
