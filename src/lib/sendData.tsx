import axios from 'axios'

interface propsT{
    url:string;
    data?:unknown;
}
const sendDataLogin = async ({url,data}:propsT)=> {
    
        try {
            const res = (await axios.post(url,data))
            return res
        } catch (error) {
            console.log(error);
            throw error
        }
    }


export default  sendDataLogin;
