import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';
import Comment from '../Reviews/Comment/Comment';




const ServiceDetails = () => {
    const {_id, service_name, image_url, description, rating, price} = useLoaderData()

    const handlebtn=()=>{
        alert('if you are not logged please log in First, otherwise it will take you to the directory')
    }
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
                <PhotoProvider>
                    <PhotoView src={image_url}>
                    <figure><img  src={image_url} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <h3 className='font-bold'>Price: ${price}</h3>
                    <h3 className='font-bold'>Rating: {rating}</h3>
                    <p>{description}</p>
                    
                </div>
            </div>

            <div>
                <Reviews _id={_id}></Reviews>
            </div>
            <div className='flex my-5'>
            <Link onClick={handlebtn} to={`/comment/${_id}`} className='btn mx-auto'>Want to Comment</Link>
            </div>

            {/* <div className='w-3/5 mx-auto my-10'>
                <Comment _id = {_id} service_name={service_name}></Comment>
            </div> */}
            
        </div>
    );
};

export default ServiceDetails;