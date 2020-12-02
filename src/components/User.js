import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({ login, avatar_url }) => {
    return (
        <div className="card text-center">
            <img
                className="round-img"
                src={avatar_url}
                style={{ width: '60px' }}
                alt=""
            />
            <h3>{login}</h3>
            <div>
                <Link
                    className="btn btn-dark btn-sm my-1"
                    to={`/user/${login}`}
                >
                    More
                </Link>
            </div>
        </div>
    );
};
User.propTypes = {
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
};
export default User;
