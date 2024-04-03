import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/About">
          About
        </Link>
        <Link to="/Portfolio">
          Portfolio
        </Link>
        <Link to="/Contact">
          Contact
        </Link>
        <Link to="/Resume">
          Resume
        </Link>
      </nav>
      <h1> hello</h1>
    </header>
  );
}

export default NavTabs;
