import React from 'react';

const AddService = () => {

    
        
        

        const handleService=event=>{
        
            const form = event.target;
            
            const service_name = form.service_name.value;
            const service_id=form.service_id.value;
            const description = form.description.value;
            const image_url = form.image_url.value;
            const rating = form.rating.value;
            const price = form.price.value;
    
            const review = {
                
                service_name: service_name,
                service_id: service_id,
                image_url: description,
                rating: image_url,
                price: rating,
                description: price,
            }
    
            fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {console.log(data)
                if(data.acknowledged){
                    alert('Thanks for your service')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
        }


    return (
        <div>
            <form onSubmit={handleService} className='w-3/5 mx-auto'>
                <div className='grid grid-cols-1'>
                    <input type="text" name='service_name' placeholder="Service name" className="input input-bordered my-2" required/>

                    <input type="text" name='service_id' placeholder="Service Id" className="input input-bordered my-2" required/>

                    <input type="text" name='image_url' placeholder="Your Picture link" className="input input-bordered my-2" />

                    <input type="text" name='rating' placeholder="Your rating out of 5" className="input input-bordered my-2" required/>

                    <input type="text" name='price' placeholder="Give Price Amount" className="input input-bordered my-2" required/>

                    

                    <input type="text" name='description' placeholder="Please Give Description" className="input input-bordered h-20 my-2" required/>

                </div>
                    <input className='btn' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default AddService;