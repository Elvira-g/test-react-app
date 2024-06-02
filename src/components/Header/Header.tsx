import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from '../NavLink/NavLink'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
      title: 'Contacts',
      link: '/contacts'
  }
]

export const Header = (props: HeaderPropsType) => {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link className="navbar-brand" to="/">
          <strong><span>Little</span> Fashion</strong>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav mx-auto">
            {navLinks.map((link, key) => <NavLink key={key} title={link.title} link={link.link} classNameLi='nav-item' classNameA='nav-link' />)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}