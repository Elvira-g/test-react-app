import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {

    return <Link className="navbar-brand" to="/">
        <strong><span>Little</span> Fashion</strong>
    </Link>
}