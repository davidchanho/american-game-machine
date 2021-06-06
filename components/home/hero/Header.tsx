import React from 'react'

function Header() {
    return (
      <header className="text-left w-75 h-100">
        <h1 className="mb-3">
          Machines and business solutions that meet your needs.
        </h1>
        <a
          href="/#contact"
          className="btn btn-light bg-lg mobile-full"
          role="button"
        >
          Contact Us
        </a>
      </header>
    );
}

export default Header
