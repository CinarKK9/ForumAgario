import './App.css';
import { useState } from 'react';
import { Posts } from './Posts';

function App() {
  const [posts, setPosts] = useState([
    {title: 'Facebook Login Problem', preview: 'loreasdfhjklasdfjklhasdflkjfhalksjdvfbhlajkhdfblvakjdhsflbvakjsdhfblvadkshjflaskdm...', author:'Ali Cabbar', likes: 69, comments: 72,  id: 1},
    {title: 'Joystick Bugged', preview: 'So, yesterday I tried to login to agario wi...', author:'Ali Cabbar', likes: 69, comments: 72,  id: 2},
    {title: 'Bring back macro', preview: 'dfaghjkkasdfhjashjdgfkajshdgfkajsdhfgkasjhdfgkahjsdfga...', author:'Ali Cabbar', likes: 69, comments: 72, id: 3}

  ])
    return(
      <main className='mt-3'>
        {
          <Posts posts={posts} title='All Posts'/>
        }
      </main>
    );
}

export function Navbar() {
  return(
    <nav className='main-nav navbar navbar-expand-lg'>
    <div className="container-fluid">
    <a className='logo navbar-brand' href='https://github.com/CinarKK9'>Forum Agar.io</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navdd" aria-controls="navdd" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navdd">
      <ul className='navbar-nav'>
          <li className='nav-item'>
            <div class="input-group me-3">
              <input type="text" class="form-control" placeholder="Search a Post" aria-label="search" aria-describedby="button-addon" />
              <button class="btn btn-outline-secondary me-3" type="button" id="button-addon2">Search</button>
            </div>
          </li>
          <li className='nav-item'><a href='localhost:3000' className='nav-link me-3'>Home</a></li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle me-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Newest Posts</a></li>
            <li><a class="dropdown-item" href="/">Most Liked Posts</a></li>
            <li><a class="dropdown-item" href="/">Most Commented Posts</a></li>
          </ul>
        </li>
          <li className='nav-item'><a href='localhost:3000' className='nav-link me-3'>Sign In</a></li>
          <button>+ Create Post</button>
        </ul>
    </div>
    </div>
    </nav>
  )
}

function Footer() {
  return(
    <div className="footer container-fluid text-center mt-5 p-2">
      2023 &copy; Forum Agar.io | All Rights Reserved.
    </div>
  )
}

export default App;
export { Footer };