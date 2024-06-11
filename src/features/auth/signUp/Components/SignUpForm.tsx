import useHandleCreateUser from '../hooks/useHandle'

export default function SignUpForm() {

    const {handleChange,handleSubmit,email,name,pwd,confirm_pwd} = useHandleCreateUser()

    return (
        <>
            <div className="h-[30vh] border-2 border-gray-500 p-5">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="p-3 rounded-xl border border-gray-200" value={email} onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="p-3 rounded-xl border border-gray-200" value={name} onChange={handleChange} />
                    <label htmlFor="psswd">Password</label>
                    <input type="password" id="psswd" className="p-3 rounded-xl border border-gray-200" value={pwd} onChange={handleChange} />
                    <label htmlFor="confirm_pwd">Confirm password</label>
                    <input type="password" id="confirm_pwd" className="p-3 rounded-xl border border-gray-200" value={confirm_pwd} onChange={handleChange} />
                    <button type="submit" className="px-[5vw] py-4 bg-[#72cbff86] rounded-xl">Sign Up</button>
                </form>
            </div>
        </>
    )
}
