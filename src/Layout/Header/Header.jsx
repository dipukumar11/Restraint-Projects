import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const NavManu = ()=><>
  
 <li><Link to={'/'}>Home</Link></li>
 <li><Link to={'/contact'}>Contact</Link></li>

  
  
  </>




    return (
        <div className=''>
            <div className="navbar bg-black text-white bg-opacity-40 max-w-screen-lg fixed z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            <NavManu></NavManu>
        }
      </ul>
    </div>
    <a className="btn font-extrabold btn-ghost text-xl"><NavLink to={'/'}>BISTRO BOSS</NavLink></a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        <NavManu></NavManu>
     }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Header;