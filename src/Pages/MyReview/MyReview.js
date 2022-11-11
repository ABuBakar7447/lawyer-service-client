import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ShowUserRev from './ShowUserRev';

const MyReview = () => {
    const {user} =useContext(AuthContext)
    console.log(user)

    const[userDetails, setUser]=useState([])
    console.log(userDetails)

    useEffect(()=>{
        fetch(`http://localhost:5000/userreview?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[user?.email])

    const haldleDelete = id =>{
        const proceed = window.confirm('Do you want to remove your comment?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'Delete'
            })

            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('your comment deleted successfully')
                    const leftUserDet = userDetails.filter(del => del._id !==id);
                    setUser(leftUserDet)
                }
            })
        }
    }

    return (
        <div className=''>
            <h2 className='text-center text-black text-2xl font-bold'>Your Reviews total {userDetails.length}</h2>
            {
                userDetails.map(details=><ShowUserRev key={details._id} details={details}
                haldleDelete={haldleDelete}></ShowUserRev>)
            }
        </div>
    );
};

export default MyReview;