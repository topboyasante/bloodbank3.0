import { useEffect, useState } from "react";

const useToken = (userToken) =>{
    const [token,setToken] = useState(localStorage.getItem('loginToken'))

    useEffect(()=>{
        setToken(userToken)
    },[token])

    return [userToken]
}

export default useToken