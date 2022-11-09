import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceCard';


const Allservice = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='my-5'>
           <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold text-yellow-600 text-center'>Choose The Service</h1> 
           <h2 className='font-bold text-black-600 text-center'>Will try my best to solve your problem</h2>

           <div >
            
                <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                {
                    service.map(viewService =><ServiceCard
                        key={viewService.service_id}
                        viewService={viewService}
                    ></ServiceCard>)
                }
                </div>

                
            
           </div>
        </div>
    );
};

export default Allservice;