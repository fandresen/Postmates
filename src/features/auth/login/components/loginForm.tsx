import useHandleLogin from "../hooks/useHandleLogin";

export default function LoginForm() {
    const {handleChange,handleSubmit,email,password}= useHandleLogin()
    return (
      <>
      <div className="h-[30vh] border-2 border-gray-500 p-5">
        <form action="" className="flex flex-col gap-3" onSubmit={ handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" className="p-3 rounded-xl border border-gray-200" value={email} onChange={handleChange}/>
          <label htmlFor="psswd"></label>
          <input type="password" id="psswd" placeholder="password" className="p-3 rounded-xl border border-gray-200" value={password} onChange={handleChange}/>
          <button type="submit" className="px-[5vw] py-4 bg-[#72cbff86] rounded-xl">Log in</button>
        </form>
      </div>
      </>
    )
  }
  
