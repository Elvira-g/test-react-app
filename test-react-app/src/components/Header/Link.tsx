import { Link } from "react-router-dom";
export const NavLink = ({ name, link }: { name: string; link: string }) => (
  <li className="nav-item">
    <Link className="nav-link" to={link}>
      {name}
    </Link>
  </li>
);
