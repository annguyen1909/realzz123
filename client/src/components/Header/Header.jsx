import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector} from 'react-redux'

// import logo from '../../images/logo.jpeg'

import Menu from './Menu'

import Search from './Search'

const Header = () => {

    const navLinkBottom = [
        {label: 'Dashboard', path: '/dashboard'},
        {label: 'My Lists', path: '/lists'},
        {label: 'My Jobs', path: '/jobs'},
        {label: 'Inbox', path: '/inbox'},
        {label: 'Feedback', path: '/feedback'}
    ]

    const { auth } = useSelector(state => state)
    
    return (
        
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
                <div className="container logo">
                    <Link to="/">
                        {/* <img src={logo} alt="logo" width={50} height={50} /> */}
                        <h1 className="navbar-brand mt-2">LFHelpers</h1>
                    </Link>
                    <ul className="navbar-nav flex-row me-auto">
                        <li className="nav-item px-2 dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Find Hirers/Jobs
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="container-fluid">
                                    <Search />
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    <Menu />
                </div>
            </nav>


            {auth.token ? 
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container"> 
                    <ul className="navbar-nav flex-row mb-0">
                        {   
                            navLinkBottom.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={link.path}>
                                        {link.label}
                                    </Link>
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>

            :

            <nav>
            
            </nav>}
        </div>
    )
}

export default Header