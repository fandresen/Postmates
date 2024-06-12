import React from 'react'
import useAuth from './useAuth'
import { axiosPrivate } from '@/lib/interceptor';

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async ()=>{
        const response = await axiosPrivate('/refresh');
        setAuth(prev=>{
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken)
            return{...prev,accesToken:response.data.accessToken}
        })
        return response.data.accessToken;
    }
  return refresh
}

export default useRefreshToken;