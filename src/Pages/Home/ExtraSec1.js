import React from 'react';
import logo1 from '../../Utilities/Picture/why-us2.jpg'

const ExtraSec1 = () => {

    //design of extra section part 1
    return (
        <div>
            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold text-rose-600 text-center mt-16 mb-10'>Why Legal Help Need ! </h1> 
            <div className="hero mb-16 p-5 bg-base-200 rounded">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={logo1} alt="" className=" rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-4xl text-center font-bold">Choose The Service Because..</h1>
                    <p className="py-6">Lawyers are in a unique position to help individuals, groups, and organizations with their legal problems and to further the public good. Public interest lawyers champion legal causes for the greater good of society and help those in need of legal assistance who might not otherwise be able to afford attorneys.Lawyers in private practice often perform pro bono work to help low-income individuals and underserved portions of the population, such as the elderly, victims of domestic abuse, and children. In fact, many bar associations require that attorneys commit to a certain number of pro bono hours each year. </p>
                    <div className='flex justify-evenly my-4'>
                        <div className='text-center'>
                            <p className='text-2xl font-bold'>1.2k</p>
                            <p className='text-rose-400 font-bold'>Customer</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold'>7</p>
                            <p className='text-rose-400 font-bold'>Years <br/> Experience</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold'>10</p>
                            <p className='text-rose-400 font-bold'>Awards & <br/>
                               Honors 
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-primary">Hire Now !</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSec1;