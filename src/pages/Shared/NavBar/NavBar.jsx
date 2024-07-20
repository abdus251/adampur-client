import { Link } from "react-router-dom"
import logo from '../../../../public/Adompur logo.jpg'


const NavBar = () => {
    const navOptions = <>
            <li><Link to='/'> হোম</Link></li>
            <li><Link to='/menu'>মেনু</Link></li>
            <li><Link to='/order/teacher'>আমাদের বিদ্যালয়</Link></li>

                        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar fixed z-10  bg-opacity-30  bg-pink-600 max-w-screen-xl  text-black">
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

                    </ul>
                </div>
                <a className="btn btn-ghost text-base">
                    <img className="h-10 w-10" src={logo} alt="" />
                    আদমপুর সরকারি প্রাথমিক বিদ্যালয়, বন্দর, নারায়ণগঞ্জ</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default NavBar