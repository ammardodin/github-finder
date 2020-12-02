import User from './User';
import Spinner from './LoadingSpinner';
import React from 'react';
import Proptypes from 'prop-types';

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="users">
            {users.map((user) => {
                return <User {...user} key={user.id} />;
            })}
        </div>
    );
};
Users.propTypes = {
    users: Proptypes.array,
    loading: Proptypes.bool,
};
Users.defaultProps = {
    users: [],
    loading: true,
};
export default Users;
