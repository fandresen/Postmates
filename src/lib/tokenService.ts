import Cookies from 'js-cookie'

const REFRESH_TOKEN = 'refresh_token';
const ACCESS_TOKEN = 'access_token';

export const getAccessToken =():string=>{
    return Cookies.get(ACCESS_TOKEN) || ''
}
export const getRefreshToken =():string=>{
    return Cookies.get(REFRESH_TOKEN) || ''
}

export const setAccessToken =(token:string):void=>{
    Cookies.set(ACCESS_TOKEN,token,{secure:true,sameSite:'Strict'})
}
export const setRefreshToken =(token:string):void=>{
    Cookies.set(REFRESH_TOKEN,token,{secure:true,sameSite:'Strict'})
}

export const removeTokens =():void=>{
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN)
}

