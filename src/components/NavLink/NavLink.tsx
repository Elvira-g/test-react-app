import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    title: string
    link: string
    classNameLi: string
    classNameA: string
}

export const NavLink = ({title, link, classNameLi, classNameA}: Props) => {

    return <li className={classNameLi}>
        <Link className={classNameA} to={link}>{title}</Link>
    </li>
}