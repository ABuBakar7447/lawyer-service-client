import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ShowUserRev from './ShowUserRev';

const MyReview = () => {
    const {user} =useContext(AuthContext)
    console.log(user)

    const[userDetails, setUser]=useState([])
    console.log(userDetails)

    useEffect(()=>{
        fetch(`http://localhost:5000/userreview?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[user?.email])
    return (
        <div className=''>
            <h2 className='text-center text-black text-2xl font-bold'>Your Review</h2>
            {
                userDetails.map(details=><ShowUserRev key={details._id} details={details}></ShowUserRev>)
            }
        </div>
    );
};

export default MyReview;