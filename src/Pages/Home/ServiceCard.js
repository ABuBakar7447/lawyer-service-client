import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


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
                    <h2 className="card-title"></h2>
                    <h3 className='font-bold'></h3>
                    <h3 className='font-bold'></h3>
                    <p></p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;