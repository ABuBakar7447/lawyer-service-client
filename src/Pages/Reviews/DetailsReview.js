import React from 'react';

const DetailsReview = ({usercomment}) => {
    console.log(usercomment)
    const {_id, service_name, user_name, image_url,comment} = usercomment
    return (
        <div>
     
        <div className='m-5' >
            <div className='flex'>
                <img className='w-20 h-10' src={image_url} alt=''></img>
                <div>
                <p className='text-yellow-600 font-serif'>{user_name}</p>
                <p><span className='font-bold text-rose-600'>Comment:</span> <span className='font-bold'>{comment}</span></p>
                </div>
            </div>
            
        </div>
                
            
        </div>
    );
};

export default DetailsReview;