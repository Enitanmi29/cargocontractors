import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [input, setInput]=useState('')
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const validPages = ['/','about','services','contact']

    if(validPages.includes(input.toLowerCase())) {
      navigate(input.toLowerCase());

    } else { alert("page does not exist")}

  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <Link to='/'>
          <img 
          style={{ width:'75px', height:'75px'}}
          src='/IMG-20250316-WA0034.jpg'
          alt='logo'
          className='rounded'
          />
        </Link>
        
        {/* <a className="navbar-brand p-2 fs-5" href="#">Cargo Contractors</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item ps-4">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item ps-4">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item ps-4">
              <a className="nav-link" href="/services" aria-expanded="false">
                Services
              </a>
            </li>
            <li className="nav-item ps-4">
              <a className="nav-link" href="/contact" aria-expanded="false">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)} />
            <button className="btn btn-success" type="submit" >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
