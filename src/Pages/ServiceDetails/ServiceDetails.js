import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';
import Comment from '../Reviews/Comment/Comment';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';




const ServiceDetails = () => {
    useTitle('ServiceDetails')
    const {user} = useContext(AuthContext)
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

{/* sending data to review part in order gain all review based on matched service_id */}
            <div>
                <Reviews _id={_id}></Reviews>
            </div>
            
            <p className='font-bold text-center text-2xl text-rose-600'>Wants to comment?</p>
            
{/* using optional chaining if user logged in then show comment form otherwise show login option */}
            <div >
            {
                user?.email?
                <div>

                    <Comment _id = {_id} service_name={service_name}></Comment>

                </div>
                :
                <p className='text-center mb-6'>Please login first before comment. <Link to='/login' className='text-info underline'>Login</Link>
                </p>
            }
                
            </div>

            
            
        </div>
    );
};

export default ServiceDetails;