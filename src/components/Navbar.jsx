import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <>
            <div className="fixed top-0 left-0 h-full w-20 bg-dark-gray flex flex-col items-center py-4">
                {/* logo */}
                <div className="mb-8">
                    {/* Add your logo here */}
                </div>
                {/* navlinks */}
                <div className="flex flex-col items-center space-y-8">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? 'bg-lime-green w-11.4 h-11 text-black px-4 py-2 rounded-full' : 'text-gray-300 hover:bg-lime-green w-11.4 h-11 hover:text-black px-4 py-2 rounded-full'
                        }
                    >
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>

                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive ? 'bg-lime-green w-11.4 h-11 text-black px-4 py-2 rounded-full' : 'text-gray-300 hover:bg-lime-green w-11.4 h-11 hover:text-black px-4 py-2 rounded-full'
                        }
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </NavLink>


                    <NavLink
                        to="/favourite"
                        className={({ isActive }) =>
                            isActive ? 'bg-lime-green w-11.4 h-11 text-black px-4 py-2 rounded-full' : 'text-gray-300 hover:bg-lime-green w-11.4 h-11 hover:text-black px-4 py-2 rounded-full'
                        }
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </NavLink>

                    <NavLink
                        to="/"
                        className="rounded-full bg-lime-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;
