import React from 'react'
import { Link } from 'react-router-dom'
import { SocialProps } from '../../types/types'


export const Social = ({link, icon}: SocialProps) => {

    return <li><Link to={link} className="social-icon-link bi-messenger"><img src={icon}  alt='' /></Link></li>
}