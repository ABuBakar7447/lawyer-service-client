import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Comment = ({_id, service_name}) => {
    console.log(_id,service_name)
    const {user} = useContext(AuthContext)

    const handleComment=event=>{
        
        const form = event.target;
        const user_name=form.user_name.value;
        const email = user?.email || 'unregister';
        const comment = form.comment.value;
        const image_url = form.image_url.value;
        const rating = form.rating.value;

        const review = {
            
            service_name: service_name,
            service_id: _id,
            user_name: user_name,
            image_url: image_url,
            rating: rating,
            email: email,
            comment: comment
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.acknowledged){
                alert('Thanks for your comment')
                form.rest()
            }
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <p className='text-center font-bold text-blue-900 text-2xl'>Wants to review!</p>
            <form onSubmit={handleComment}>
                <div className='grid grid-cols-1'>
                    <input type="text" name='user_name' placeholder="Your name" className="input input-bordered my-2" />

                    <input type="text" name='image_url' placeholder="Your Picture link" className="input input-bordered my-2" />

                    <input type="text" name='rating' placeholder="Your rating out of 5" className="input input-bordered my-2" />

                    <input type="text" name='email' placeholder="" className="input input-bordered my-2" defaultValue={user?.email} readOnly />

                    <input type="text" name='comment' placeholder="Please Comment Here" className="input input-bordered h-20 my-2" />

                </div>
                    <input className='btn' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Comment;