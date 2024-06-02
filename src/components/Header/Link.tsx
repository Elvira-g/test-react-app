import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
export const NavLink = ({ name, link }: { name: string; link: string }) => (
  <Nav.Link>
    <Link className="nav-link" to={link}>
        {name}
      </Link>
  </Nav.Link>
);
