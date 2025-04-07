import React from 'react'

const Footer = () => {
  return (
    <div className="container">
        <footer className="py-3">
            <hr/>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="/services" class="nav-link px-2 text-body-secondary">Services</a></li>
            <li className="nav-item"><a href="/contact" class="nav-link px-2 text-body-secondary">Contacts</a></li>
            </ul>
            <p className="text-center text-body-secondary">© {new Date().getFullYear()} Cargo Contractors.</p>
        </footer>
    </div>
  )
}

export default Footer