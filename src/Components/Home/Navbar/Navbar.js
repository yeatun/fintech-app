import React from 'react';

const Navbar = () => {
    return (
        <div>
              <nav class="navbar navbar-expand-lg navbar-light  text-white">
  <div class="container-fluid">
  
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav  mb-2 mb-lg-0">
    <li class="nav-item">
          <a class="nav-link p-3  active text-white" aria-current="page" href=""><h3>Fintech App</h3></a>
        </li>
    </ul>
      <ul class="navbar-nav ms-auto p-3 mb-2 mb-lg-0">
    
        <li class="nav-item">
          <a class="nav-link ms-5 active text-white" aria-current="page" href="">Wallet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="">History</a>
        </li>
        {/* <li class="nav-item">
        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
        </li> */}
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="">Recipients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="">QR codes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="">Contact Us</a>
        </li>
      
      
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;