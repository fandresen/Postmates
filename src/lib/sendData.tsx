import { axiosNormal } from './interceptor';

interface propsT{
    url:string;
    data?:unknown;
}
const sendDataLogin = async ({url,data}:propsT)=> {
    
        try {
            const res = (await axiosNormal.post(url,data))
            return res
        } catch (error) {
            console.log(error);
            throw error
        }
    }


export default  sendDataLogin;
