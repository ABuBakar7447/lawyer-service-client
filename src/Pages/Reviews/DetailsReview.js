import React from 'react';
import { FaUser } from 'react-icons/fa';

const DetailsReview = ({usercomment}) => {
    
    const {_id, service_name, user_name, image_url,comment} = usercomment
    
    //design of user review based on service
    
    return (
        <div>
     
        <div className='m-5' >
            <div className='flex'>
                {
                    image_url?<img className='w-20 h-10' src={image_url} alt=''></img>:<FaUser className='w-20 h-10'></FaUser>
                }
                <div>
                <p className='text-yellow-200 font-serif pl-1'>{user_name}</p>
                
                <p><span className='font-bold text-rose-600 pl-1'>Comment:</span> <span className='font-bold'>{comment}</span></p>
                </div>
            </div>
            
        </div>
                
            
        </div>
    );
};

export default DetailsReview;