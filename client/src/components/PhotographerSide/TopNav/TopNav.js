import React, { useContext } from 'react';
import UserContext from "../../../utils/UserContext";
import { useHistory } from 'react-router-dom';
import './TopNav.css';

export function TopNav() {

    const history = useHistory()

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    function handleLogout() {
        window.localStorage.setItem("userId", JSON.stringify(''))
        window.localStorage.setItem("isAuthenticated", JSON.stringify(false))
        history.push('/login')
    }

    return (
        <div className="top-nav-container">
            {isAuthenticated ? <a className="top-nav-btn" onClick={handleLogout}>LOGOUT ➜</a> : <a className="top-nav-btn" href="/login">LOGIN</a>}
            {/* {isAuthenticated ? <button className="top-nav-btn" onClick={handleLogout}>Logout</button> : <button className="top-nav-btn" href="/login">Login</button>} */}
            {/* <a onClick={handleLoginLogout} href="/login">{userId ? "Logout" : "Login"}</a> */}
            {/* <a onClick={handleLoginLogout} href="/login">{userId ? "Logout" : "Login"}</a> */}
            {/* <a href="/dashboard">
                <span className="initials-span">
                MK
            </span>
            My Profile</a> */}
        </div>
    )
}
