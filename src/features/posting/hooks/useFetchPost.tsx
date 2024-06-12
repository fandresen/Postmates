import axios from "axios"
import {useEffect, useState } from "react"

export interface dataT  {
    title:string;
    desc:string;
    date: string;
    authorName:string;
    authorAvatar:string;
    postImage:string;
}

export const useFetchPost = () => {
    const [data,setData]=useState<dataT[]>(
        [{
            title:"",
            desc:"",
            date:"",
            authorName:"",
            authorAvatar:"",
            postImage:""
        }]
    )

    useEffect(()=>{
        const fetcData = async()=>{
            //should use axiosPrivate
            const res = (await axios.get('http://localhost:3000/post'))
            console.log(res);
            if (res.status === 200) {
                setData(res.data)
            } 
        }
    
        fetcData()
    },[])
    

  return data 
}
