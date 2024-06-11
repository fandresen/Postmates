import { ImgCaroussel } from "@/features/auth/login/components/caroussel";
import LoginForm from "@/features/auth/login/components/loginForm";

export default function Login() {
    return (
        <>
            <div className="flex justify-center w-full gap-20">
                <div className="">
                    <ImgCaroussel />
                </div>
                <div>
                    <LoginForm/>
                </div>

            </div>
        </>
    )
}
