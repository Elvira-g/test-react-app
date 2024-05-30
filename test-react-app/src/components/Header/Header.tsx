import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from '../NavLink/NavLink'

type HeaderPropsType = {

}

const navLinks = [
  {
    title: 'Home',
    link: '/'
  },
  {
      title: 'Story',
      link: '/story'
  },
  {
      title: 'Products',
      link: '/products'
  },
  {
      title: 'FAQs',
      link: '/faq'
  },
  {
      title: 'Contact',
      link: '/contact'
  }
]

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

                    <Link className="navbar-brand" to="/">
                        <strong><span>Little</span> Fashion</strong>
                    </Link>

                    <div className="d-lg-none">
                        <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                        <a href="product-detail.html" className="bi-bag custom-icon"></a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                        {navLinks.map((link, key) => <NavLink key={key} title={link.title} link={link.link} classNameLi='nav-item' classNameA='nav-link' />)}
                        </ul>

                        <div className="d-none d-lg-block">
                            <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                            <a href="product-detail.html" className="bi-bag custom-icon"></a>
                        </div>
                    </div>
                </div>
            </nav>
    )
}