import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar ">
      <ul className="navbar-nav bg-green-light">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="link-text">Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
