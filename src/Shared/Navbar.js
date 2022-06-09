import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuitems = <>
        <li className='text-xl font-bold'><Link to="/home">HOME</Link></li>
        <li className='text-xl font-bold'><Link to="/about">ABOUT</Link></li>
        <li className='text-xl font-bold'><Link to="/contact">CONTACT</Link></li>
        <li className='text-xl font-bold'><Link to="/project"> PROJECT</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-green-500">NAIEM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
            <div className="navbar-start">
                <a className='btn btn-primary' href="https://drive.google.com/file/d/1WAc-AbnFfgKkwLoSezzs2S_yy3BiGUCC/view?usp=sharing">Downlod Resume</a>

            </div>
        </div>
    );
};

export default Navbar;