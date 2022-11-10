import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Comment = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <p className='text-center font-bold text-blue-900 text-2xl'>Wants to review!</p>
            <form>
                <div className='grid grid-cols-1'>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered my-2" />
                    <input type="text" name='picture' placeholder="Your Picture" className="input input-bordered my-2" />
                    <input type="text" name='email' placeholder="" className="input input-bordered my-2" defaultValue={user?.email} readOnly />
                    <input type="text" name='comment' placeholder="Please Comment Here" className="input input-bordered h-20 my-2" />
                </div>
                    <input className='btn' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Comment;