import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Weather Forcast
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link"  to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={`#`}
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
