import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='my-5'>
           <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold text-yellow-600 text-center'>Choose The Service</h1> 
           <h2 className='font-bold text-black-600 text-center'>Will try my best to solve your problem</h2>

{/* in order to design the service sending data in servicecard */}
           <div >
            
                <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                {
                service.map(viewService =><ServiceCard
                key={viewService.service_id}
                viewService={viewService}
                ></ServiceCard> )
                }
                </div>

                <div className="flex justify-center">
                    <Link to='/service'><button className="btn btn-warning">More Service</button></Link>
                    
                </div>
            
           </div>
        </div>
    );
};

export default Services;