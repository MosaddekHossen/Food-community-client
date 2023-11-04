import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";

const Header = () => {
    // const { user, logOutUser } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // // LogOut
    // const handleLogout = () => {
    //     logOutUser()
    //         .then(() => Swal.fire('Oops!', 'LogOut Successful!', 'success'))
    //         .catch((err) => Swal.fire('Oops!', err.message, 'error'))
    // }

    const navLink = <>
        <ul className="menu menu-horizontal px-1 md:flex gap-1 hidden">
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
                    className={({ isActive }) =>
                        isActive ? 'bg-[#a433aa] text-white' : ''}>
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
                <NavLink to={'/signUp'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Sign Up
                </NavLink>
            </li>
        </ul>
    </>

    // // Dark Mode
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
            <div className="navbar">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-white bg-slate-600 font-black w-8 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {navLinkMd}
                    </div>
                    <Link to='/'><button className="normal-case text-3xl font-bold text-[#6531ae]">Food Sharing</button></Link>
                </div>
                <div className="navbar-center bg-white px-5 rounded-lg lg:flex">
                    {navLink}
                </div>
                <div className="navbar-end">

                    {/* Dark Mode button */}
                    <input
                        type="checkbox"
                        className="toggle mx-2"
                        checked={isDarkMode}
                        onChange={handleToggle}
                    />

                    {/* {user ? <>
                        <div className="flex flex-col lg:flex-row justify-center text-center items-center">
                            <button onClick={handleLogout} className="btn btn-primary mx-3">Login Out</button>
                            <h3 className="font-bold text-green-500 mr-3">{user.displayName}</h3>
                            <label tabIndex={0} className="btn btn-secondary btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                        </div> */}
                    {/* </> */}
                    {/* : <Link to={'/login'}><button className="btn btn-primary mr-3">Login</button></Link>} */}
                </div>
            </div>
        </div>
    );
};

export default Header;