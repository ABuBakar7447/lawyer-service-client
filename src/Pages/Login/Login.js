import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin= event=>{
        event.preventDefault()
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-4xl text-center font-bold">Login now</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </form>
                <p className='text-center'>Need to open an account? <Link className='underline font-bold text-yellow-400' to='/signup'>Sign Up.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;