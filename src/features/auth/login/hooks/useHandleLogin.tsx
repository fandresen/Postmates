import sendDataLogin from "@/lib/sendData";
import { setToken } from "@/redux/authSlice";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface errorMessageT{
  title:string;
  desc: string;
}

export default function useHandleLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  const [errorMessage,setErrorMessage] = useState<errorMessageT>({
    title:'',
    desc:''
  })
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (value: string, inputId: string) => {
    if (inputId === "email") {
      setEmail(value);
    } else if (inputId === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res= await sendDataLogin({
      url: "/sessions",
      data: { email: email, password: password },
    })
    //si il tout va bien
    if (res.status == 200) {
      const accessToken = res.data.accessToken;
      const refreshToken = res.data.refreshToken;
      dispatch(
        setToken({ accesToken: accessToken, refreshToken: refreshToken })
      );
      navigate("/");
    }
    else if (res == {error:"Unauthorized: Invalid credentials"} ){
      setErrorMessage({
        title:"Authentication Error:",
        desc:"Please check your email and password, and try again. If the problem persists, please contact support."
      })
      console.log(errorMessage);
    }
  };

  return { handleChange, handleSubmit, email, password,errorMessage };
}
