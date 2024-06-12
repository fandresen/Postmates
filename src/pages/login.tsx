import { ImgCaroussel } from "@/features/auth/login/components/caroussel";
import LoginForm from "@/features/auth/login/components/loginForm";

export default function Login() {
    return (
        <>
            <div className="flex justify-between w-full gap-20 mt-[3vh]">
                <div className="flex justify-center pl-[5vw]">
                    <ImgCaroussel />
                </div>
                <div className="flex justify-center px-[5vw] mr-[3vw]">
                    <LoginForm/>
                </div>

            </div>
        </>
    )
}
