import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./Link";
import { Logo } from "./Logo";
type HeaderPropsType = {};

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "FAQs", link: "/faq" },
  { name: "Contact", link: "/contacts" },
];

export const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Logo />

        <div className="d-lg-none">
          <Link to="sign-in.html" className="bi-person custom-icon me-3"></Link>
          <Link to="product-detail.html" className="bi-bag custom-icon"></Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {links.map((link, index) => (
              <NavLink key={index} name={link.name} link={link.link} />
            ))}
          </ul>

          <div className="d-none d-lg-block">
            <Link
              to="sign-in.html"
              className="bi-person custom-icon me-3"
            ></Link>
            <Link
              to="product-detail.html"
              className="bi-bag custom-icon"
            ></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
