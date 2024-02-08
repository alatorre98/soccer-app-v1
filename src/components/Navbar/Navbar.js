import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/navbar.css';

function Navbar() {
  return (
    <div className='navbarContainer'>
        <nav className='navbar'>
            <ul>
                <li>
                <NavLink 
                    className={({ isActive }) =>
                                isActive ? 'activeNavLink' : 'navlink'
                    } 
                    to='/'
                >
                    Premier League
                </NavLink>
                </li>
                <li>
                <NavLink 
                    className={({ isActive }) =>
                                isActive ? 'activeNavLink' : 'navlink'
                    } 
                    to='myTeams'
                >
                    My Teams  
                </NavLink>
                </li>
            </ul>
        </nav>
    </div>
    
  )
}

export default Navbar;