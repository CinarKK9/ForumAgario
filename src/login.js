import React from 'react';

function Login({ onClose }) {
    
    return(
        <div className="login-wrap text-light">
            <form action="/backend/login.php" className='login-form rounded shadow' method='post'>
                <div>
                    <div className="cross d-inline-block float-end" onClick={onClose}></div>
                    <div className="mail mb-3">
                        <label htmlFor="mail" className='form-label'>Mail</label>
                        <input type="text" placeholder='Enter Mail Adress' className='form-control' required/>
                    </div>
                    <div className="password">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="text" placeholder='Enter Password' className='form-control' required/>
                    </div>
                    <button type='submit' className='my-3'>Sign in</button>
                    <div className="g-signin2 w-75 bg-danger mt-3 p-1" data-onsuccess="onSignIn">Sign In Using Google</div>
                    <div className="g-signin2 w-75 bg-primary mt-3 p-1 mb-3" data-onsuccess="onSignIn">Sign In Using Facebook</div>
                    <div className="extra">
                        <span>Don't Have an account?</span><a href="/backend/signup.php" className='link-primary link-underline-primary'>Sign up</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;