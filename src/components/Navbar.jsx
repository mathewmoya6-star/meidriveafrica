import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from '../auth';

function Navbar({ user }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo" onClick={() => navigate('/')}>
                    MEI DRIVE <span>AFRICA</span>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="/#courses">Courses</a>
                    {user ? (
                        <>
                            <Link to="/dashboard.html">Dashboard</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login.html">Login</Link>
                            <Link to="/register.html">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
