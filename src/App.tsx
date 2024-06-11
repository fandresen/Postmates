import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import SignUp from './pages/SignUp';
import Layout from './layout/Layout';
import Home from './pages/home';
import RequiredAuth from './features/auth/RequiredAuth';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RequiredAuth />} />
        <Route path="/" element={<Layout />} >
              <Route path="/" element={<Home />} />
        </Route>
      <Route path='logIn' element={<Login />} />
      <Route path='signUp' element={<SignUp />} />

    </Routes >
    </>
  )
}
export default App;
