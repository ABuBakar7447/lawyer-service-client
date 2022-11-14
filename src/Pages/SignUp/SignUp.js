import { GoogleAuthProvider} from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';



const SignUp = () => {

    const {createUser, providerGoogleLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    useTitle('Sign Up');

//sign up part handling
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset('');
            
        })
        .catch(error =>console.error(error));


    }

//sign in through google handling 
    const handleGoogle = () =>{
        providerGoogleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>

                    
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </div>
                </form>
                <div className='mx-auto mb-5'>
                    <button onClick={handleGoogle} className='btn'>Sign In Google</button>
                </div>

                
                
                <p className='text-center'>Already have an account? <Link className='underline font-bold text-yellow-400' to='/login'>Log In.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;