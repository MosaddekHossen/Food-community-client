import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Sign Out
    const handleLogout = () => {
        logOut()
            .then(() => Swal.fire('Oops!', 'LogOut Successful!', 'success'))
            .catch((err) => Swal.fire('Oops!', err.message, 'error'))
    }

    const navLink = <>
        <ul className="menu menu-horizontal px-1 lg:flex gap-1 hidden">
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={'/availableFoods'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Available Foods
                </NavLink>
            </li>
            <li>
                <NavLink to={'/addFood'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Add Food
                </NavLink>
            </li>
            <li>
                <NavLink to={'/manageFoods'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Manage Foods
                </NavLink>
            </li>
            <li>
                <NavLink to={'/foodRequest'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Food Request
                </NavLink>
            </li>
            <li>
                <NavLink to={'/signUp'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Sign Up
                </NavLink>
            </li>
        </ul>
    </>

    const navLinkMd = <>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-400 text-white">
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] my-3 hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={'/availableFoods'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] my-3 hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Available Foods
                </NavLink>
            </li>
            <li>
                <NavLink to={'/addFood'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Add Food
                </NavLink>
            </li>
            <li>
                <NavLink to={'/manageFoods'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Manage Foods
                </NavLink>
            </li>
            <li>
                <NavLink to={'/foodRequest'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Food Request
                </NavLink>
            </li>
            <li>
                <NavLink to={'/signUp'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#753278] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Sign Up
                </NavLink>
            </li>
        </ul>
    </>

    // Dark Mode
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            setIsDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleToggle = () => {
        toggleDarkMode();
    };

    return (
        <div className="max-w-7xl mx-auto sticky top-0 z-50">
            <div className="navbar flex justify-between">
                <div className="lg:navbar-start lg:w-auto w-3/2">
                    <img className="h-[50px] w-[50] hidden lg:block rounded-full" src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" alt="" />
                    <div className="dropdown">
                        <label tabIndex={0} className="btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 mr-2 text-white bg-slate-600 font-black w-9 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {navLinkMd}
                    </div>
                    <Link to='/'><button className="normal-case text-[22px] md:text-3xl font-bold text-[#6531ae]">Food Sharing</button></Link>
                </div>
                <div className="navbar-center lg:mx-auto lg:w-auto bg-white rounded-lg lg:flex">
                    {navLink}
                </div>
                <div className="lg:navbar-end lg:w-auto w-3/1">
                    {/* Dark Mode button */}
                    <input
                        type="checkbox"
                        className="toggle mx-2"
                        checked={isDarkMode}
                        onChange={handleToggle}
                    />

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {user ? <>
                            <label tabIndex={0} className="btn btn-secondary btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <label>
                                        <div>
                                            <img className="w-10 rounded-full" src={user?.photoURL} />
                                        </div>
                                    </label>
                                </div>
                            </label>

                        </>
                            : <Link to={'/login'}><button className="btn btn-primary mr-3">Login</button></Link>}
                    </div>
                    {user && isOpen && (
                        <div className='absolute rounded-xl shadow-md w-[40vw] p-2 md:p-2 lg:w-[10vw] mr-2 md:w-[20vw] bg-white right-0 top-20'>
                            <div className='flex flex-col justify-center items-center cursor-pointer'>
                                <h3 className="font-bold text-center text-green-500">{user?.displayName}</h3>
                                <button onClick={handleLogout} className="lg:px-5 px-3 mt-2 text-white lg:mt-3 rounded-lg text-[16px] font-bold py-3 bg-[#a433aa]">Login Out</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header;