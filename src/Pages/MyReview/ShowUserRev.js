import React from 'react';
import { FaUser, FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowUserRev = ({details, haldleDelete}) => {
    const {_id, service_name, user_name, image_url,comment} = details

//design of myreview page
    return (
        <div>
            <div className='m-5 border-2 border-indigo-600 rounded p-5'>
            <div className='flex'>
                {
                    image_url?<img className='w-20 h-10' src={image_url} alt=''></img>:<FaUser className='w-20 h-10'></FaUser>
                }
                <div>
                <p className='font-serif text-blue-800 font-bold pl-1'>{user_name}</p>
                <p><span className='font-bold text-rose-600 pl-1'>Service:</span><span className='text-black font-bold font-serif pl-1'>{service_name}</span></p>
                <p><span className='font-bold text-rose-600 pl-1'>Comment:</span> <span className='font-bold'>{comment}</span></p>

                <div className='flex'>
            
                <div className='flex btn w-32 my-5' onClick={()=>haldleDelete(_id)}><span>Delete</span><span className='p-1.5 pl-1'><FaTrash></FaTrash></span></div>

            {/* if user wants to edit his review it will take to the update page     */}
            
                <Link to={`/update/${_id}`} className='flex btn w-32 my-5 ml-3 mr-2'><span>Edit</span><span className='p-1.5 pl-1'><FaEdit></FaEdit> </span></Link>
                </div>
                
                </div>
                
                
            </div>
            
        </div>
        </div>
    );
};

export default ShowUserRev;