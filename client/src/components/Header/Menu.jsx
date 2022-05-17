import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { logout } from '../../redux/actions/authAction'



import Avatar from '../Avatar'
// Import icons
import 
{
    FaHome,
    FaCompass,
    FaBell
} from 'react-icons/fa'
import {
    AiFillMessage,
    AiOutlinePlus
} from 'react-icons/ai'

const Menu = () => {
    const bfLoginLink = [
        {label: 'Login', icon: "", path: '/login'},
        {label: 'Register', icon: "", path: '/register'}
    ]

    const afLoginLinks = [
        {label: 'Home', path: '/home'},
        {label: 'Browse', path: '/browse'},
        {label: 'Notification',  path: '/notify'},
        {label: 'Message', path: '/message'},
        {label: 'Create Post', path: '/createPost'}
    ]

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathName } = useLocation()

    

    const isActive = (pn) => {
        if(pn === pathName) return 'active'
    }

    const navLinks = auth.token ? afLoginLinks : bfLoginLink
    

    const icons  = [
        FaHome, FaCompass, FaBell, AiFillMessage, AiOutlinePlus
    ]


    return (
        <div className={ auth.token ? "menu" : "" }>
            <ul className="navbar-nav flex-row bg-light">
                
                {auth.token ? 
                (
                    navLinks.map((link, index) => { 
                        const Icon = icons[index]
                        return (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                <Icon />
                            </Link>
                        </li>
                    )})
                ) : ( 
                    navLinks.map((link, index) => { 
                        return (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                {link.label }
                            </Link>
                        </li>
                    )})
                )}
                

                {auth.user && 
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" 
                        role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <Avatar src={auth.user.avatar} size="medium-avatar"/>
                        </span>
                        
                        <div className="dropdown-menu avatar-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>

                            <label htmlFor="theme" className="dropdown-item"
                            onClick={() => dispatch({
                                type: GLOBALTYPES.THEME, payload: !theme
                            })}>
                                {theme ? 'Light Mode' : 'Dark Mode'}
                            </label>

                            <hr className="dropdown-divider"/>
                            <Link className="dropdown-item" to="/"
                            onClick={() => dispatch(logout())}>
                                Log Out
                            </Link>
                        </div>
                    </li>
                }

            </ul>
        </div>
    )
}

export default Menu