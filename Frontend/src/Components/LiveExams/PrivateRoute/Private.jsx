import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


const Private = ({children}) => {
    // const navigate = useNavigate();
    const token=Cookies.get("verification_token")
return token?children:<Navigate to="/"/>
}

export default Private;