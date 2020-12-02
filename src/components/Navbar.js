import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <nav className="navbar bg-success">
            <h1>
                <i className="fab fa-github" /> {` ${title}`}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Navbar;
