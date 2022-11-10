
import React, { useEffect, useState } from 'react';
import DetailsReview from './DetailsReview';

const Reviews = ({_id}) => {

    const[commet, setCommet]=useState([])
    console.log(commet)

    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?service_id=${_id}`)
        .then(res => res.json())
        .then(data => setCommet(data))
    },[_id])
    return (
        <div>
            <div className='w-2/5 mx-auto '>
                <p className='text-center font-bold underline underline-offset-4'>User Review</p>
            {
                commet.map(usercomment=><DetailsReview key={usercomment._id} usercomment={usercomment}></DetailsReview>)
            }
            </div>
            
        </div>
    );
};

export default Reviews;