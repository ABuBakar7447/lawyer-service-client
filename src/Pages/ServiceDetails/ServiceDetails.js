import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';




const ServiceDetails = () => {
    const {_id, service_name, image_url, description, rating, price} = useLoaderData()
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

            
            
        </div>
    );
};

export default ServiceDetails;