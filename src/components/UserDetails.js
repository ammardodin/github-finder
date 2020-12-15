import React, { Fragment, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserDetails = ({ match, loading, getUserDetails, user }) => {
    useEffect(() => {
        getUserDetails(match.params.login);
    }, []);
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        public_repos,
        public_gists,
        hireable,
        followers,
        following,
    } = user;

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable:{' '}
            {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        className="round-img"
                        alt=""
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>
                            )}
                        </li>

                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>
                            )}
                        </li>

                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers: {followers}
                </div>
                <div className="badge badge-success">
                    Following: {following}
                </div>
                <div className="badge badge-light">
                    Public Repos: {public_repos}
                </div>
                <div className="badge badge-dark">
                    Public Gists: {public_gists}
                </div>
            </div>
        </Fragment>
    );
};
UserDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            match: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    getUserDetails: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};
export default UserDetails;
