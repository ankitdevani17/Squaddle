// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store/auth-slice'

function Navb() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const logout = () => {
    dispatch(authActions.logout())
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid navb-style">
          {/* <a className="navbar-brand" href="">
            Squaddle logo{" "}
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
             
              <li className="nav-item">
                {
                  isLoggedIn &&
                  <Link to="/dm" className="nav-link" href="#">
                  Message
                </Link>
                }
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/profile">
                {
                  isLoggedIn &&
                  <button className="btn btn-outline-success" type="submit">
                    Edit Profile
                  </button>

                }
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-success" onClick={logout} type="submit">
                  Logout
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navb;