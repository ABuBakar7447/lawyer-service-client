import React from 'react';
import { Link } from 'react-router-dom';

const SecExt2 = () => {

    //design of extra section part 2
    return (
        
        <div >
            <p className="my-5 text-4xl text-yellow-600 font-bold text-center">Have You Seen It?</p>
            <div className="hero min-h-screen my-10" style={{ backgroundImage: `url("https://segev.ca/wp-content/uploads/2021/09/business-lawyer-1200x800-1.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">Did we mention first consultation is free?</h1>
                        <p className="mb-5">Because of the New year, we are providing you with a free consultation on the first meeting <br/> for the next <span className='text-rose-600 font-bold'>15</span> days. Hurry up and get the service before it's over.<br/> This is a limited-time offer. </p>
                        <Link to='/service'><button className="btn btn-outline btn-warning font-bold my-4">Make An Appointment</button></Link>
                        <p className="my-5 text-3xl text-red-500 font-bold">You Have Left</p>
                        <div className='flex justify-center'>
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span style={{"--value":15}}></span>
                                    </span>
                                    days
                                </div> 
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span style={{"--value":10}}></span>
                                    </span>
                                    hours
                                </div> 
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span style={{"--value":24}}></span>
                                    </span>
                                    min
                                </div> 
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                    <span style={{"--value":36}}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecExt2;