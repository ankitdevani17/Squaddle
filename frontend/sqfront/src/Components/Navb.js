import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from "react-router-dom";

function Navb() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Squaddle logo </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        
        
        <li className="nav-item">
          <Link to ="/about" className="nav-link" >About Us</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Roadmap</a>
        </li> */}
        <li className="nav-item">
          <Link to="/dm" className="nav-link" href="#">Message</Link>
        </li>
        
      </ul>
      <form className="d-flex" >
      
      <Link to="/profile"><button className="btn btn-outline-success"  type="submit">Edit Profile</button>
      </Link>
      <Link to="/login">
        <button className="btn btn-outline-success" type="submit">Logout</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
    </>

  );
}

export default Navb;