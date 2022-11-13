import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto my-5'>
            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center font-bold'>1. Difference between SQL and NoSQL?</p>
                <p className='text-black text-center'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

                
            </div>

            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center font-bold'>2. What is JWT, and how does it work?</p>
                <p className='text-black text-center'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).Apr </p>

               
            </div>

            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center font-bold'>3. What is the difference between javascript and NodeJS?</p>
                <p className='text-black text-center'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
                
            </div>

            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center font-bold'>4.How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-black text-center'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
                
                
            </div>
        </div>
    );
};

export default Blog;