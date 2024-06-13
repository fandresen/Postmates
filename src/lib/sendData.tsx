
import { AxiosResponse } from 'axios';
import { axiosNormal } from './interceptor';

interface propsT{
    url:string;
    data?:unknown;
}
const sendDataLogin = async ({url,data}:propsT) : Promise<AxiosResponse | {error:string}> => {
    
        try {
            const res = (await axiosNormal.post(url,data))
            console.log(typeof(res));
            return res
        } catch (error) {
            console.log(error);
            console.log(typeof(error));
            // Check if the error is an Axios error and has a response
        if (error instanceof Error && 'response' in error) {
            const axiosError = error as any;
            if (axiosError.response && axiosError.response.status === 401) {
                return { error: "Unauthorized: Invalid credentials" };
            }
            
        }
        return {error:"connexion error"}
        }
    }


export default  sendDataLogin;
