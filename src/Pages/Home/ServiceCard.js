import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServiceCard = ({viewService}) => {
    console.log(viewService)
    const {service_name, price, image_url, rating, description} = viewService
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image_url}>
                    <figure><img className='w-11/12 h-32 rounded' src={image_url} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <h3 className='font-bold'>Price: ${price}</h3>
                    <h3 className='font-bold'>Rating: {rating}</h3>
                    <p>{description.substring(0,100)} <Link className='underline text-info' to=''>View More</Link></p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;