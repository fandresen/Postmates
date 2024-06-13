import { Toaster } from "@/components/ui/toaster";
import useHandleLogin from "../hooks/useHandleLogin";
import InputPassword from "./InputPassword";
import InputWithRegex from "./InputWithRegex";
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const { handleChange, handleSubmit, email,password, errorMessage} =useHandleLogin();
  const { toast } = useToast();

  if (errorMessage.title !=='') {
    console.log("Misy diso ao ry baina ahh!!");
    toast({
      title: errorMessage.title,
      description: errorMessage.desc,
    });
  }
  return (
    <>
      <Toaster />
      <div className="w-[45vw] h-[100vh] bg- absolute top-0 right-1 border-2 border-gray-500 px-[3vw] pt-[12vh] pb-[8vh]">
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <InputWithRegex
            errorMessage="invalid Email"
            className="w-[30vw] p-3"
            value={email}
            onchange={(value) => handleChange(value, "email")}
          />

          <InputPassword
            value={password}
            onchange={(value) => handleChange(value, "password")}
            className="w-[30vw] p-3"
          />
          <button
            type="submit"
            className="px-[5vw] py-4 bg-[#72cbff86] rounded-xl"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
