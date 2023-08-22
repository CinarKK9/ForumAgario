import './App.css';
import React, { useState } from 'react';
import { Posts } from './Posts';
import Login from './login';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([
    { title: 'Facebook Login Problem', preview: 'loreasdfhjklasdfjklhasdflkjfhalksjdvfbhlajkhdfblvakjdhsflbvakjsdhfblvadkshjflaskdm...', author: 'Ali Cabbar', likes: 69, comments: 72, id: 1 },
    { title: 'Joystick Bugged', preview: 'So, yesterday I tried to login to agario wi...', author: 'Ali Cabbar', likes: 69, comments: 72, id: 2 },
    { title: 'Bring back macro', preview: 'dfaghjkkasdfhjashjdgfkajshdgfkajsdhfgkasjhdfgkahjsdfga...', author: 'Ali Cabbar', likes: 69, comments: 72, id: 3 }

  ])
  return (
    <main className='mt-3'>
      {
        <>
          <Posts posts={posts} title='All Posts' />
        </>
      }
    </main>
  );
}

export function Navbar() {

  const [SignIn, setSignIn] = useState(false);

  const handleSignInClick = () => {
    setSignIn(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseClick = () => {
    setSignIn(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className='main-nav navbar navbar-expand-lg'>
      <div className="container-fluid">
        <a className='logo navbar-brand' href='https://github.com/CinarKK9'>Forum Agar.io</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navdd" aria-controls="navdd" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navdd">
          <ul className='navbar-nav'>
            <li className='nav-item'><a href='localhost:3000' className='nav-link me-3'>Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle me-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explore
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Newest Posts</a></li>
                <li><a className="dropdown-item" href="/">Most Liked Posts</a></li>
                <li><a className="dropdown-item" href="/">Most Commented Posts</a></li>
              </ul>
            </li>
            <li className='nav-item'><a href='#a' className='nav-link me-3' id='signIn' onClick={handleSignInClick}>Sign In</a></li>
            {SignIn && <Login onClose={handleCloseClick} />}
            <button>+ Create Post</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <div className="footer container-fluid text-center mt-5 p-2">
      2023 &copy; Forum Agar.io
    </div>
  )
}

export default App;
export { Footer };