import axios from "axios";
import { useSelector } from "react-redux";

function AuthDefault(){
    const JWT_TOKEN = useSelector((state)=>state.auth.user.JWT)
    console.log(JWT_TOKEN)
    axios.defaults.headers.common['Authorization'] = `Bearer:${JWT_TOKEN}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json'
}

export default AuthDefault