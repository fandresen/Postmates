/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7qeDm51GWwc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export default function VercelSignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Create Account</h2>
        </div>
        <div className="space-y-10 py-'">
          <Button className="w-full bg-[#4285F4] text-white">
            <ChromeIcon/> Create account with Google
          </Button>
          <div className="flex items-center justify-between">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
            <span className="flex-none uppercase px-2 text-sm text-gray-400">or</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
          </div>
          <div className="space-y-4">
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <Button className="w-full bg-purple-600 text-white">Register</Button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon() {
  return (
   <img src="\src\assets\icon\icons8-google.svg" alt="google icon" className="w-10 mr-3" />
  )
}