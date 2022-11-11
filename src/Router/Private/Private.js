import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <h1 className='text-5xl'>Loading, please wait..</h1>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default Private;