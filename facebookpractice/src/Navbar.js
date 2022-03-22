import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import { blue } from '@mui/material/colors';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Navbar() {
  return (
<div >
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 <FacebookIcon/>
 <form className="d-flex">
 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
 <button className="btn btn-outline-success" type="submit">Search</button>
</form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="create">create</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <NotificationsActiveIcon/>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar