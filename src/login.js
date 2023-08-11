// @flow 
import * as React from 'react';

function Login() {
    return(
            <form action="/backend/login.php" className='login-form m-auto rounded'>
                <div>
                    <div className="g-signin2 w-100" data-onsuccess="onSignIn"></div>
                    <div className="mail mb-3">
                        <label htmlFor="mail" className='form-label'>Mail</label>
                        <input type="text" placeholder='Enter Mail Adress' className='form-control'/>
                    </div>
                    <div className="password">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="text" placeholder='Enter Password' className='form-control'/>
                    </div>
                    <button type='submit' className='my-3'>Sign in</button>
                    <div className="extra">
                        <span>Don't Have an account?</span><a href="/backend/signup.php" className='link-primary link-underline-primary'>Sign up</a>
                    </div>
                </div>
            </form>
    )
}

export default Login;