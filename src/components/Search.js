import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear }) => {
    const [location, setLocation] = useState('');
    const [language, setLanguage] = useState('');
    return (
        <div>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    searchUsers({ location, language });
                    setLocation('');
                    setLanguage('');
                }}
            >
                <div className="input-element">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="..."
                        value={location}
                        onChange={({ target: { value } }) => setLocation(value)}
                    />
                </div>
                <div className="input-element">
                    <label htmlFor="language">Language</label>
                    <input
                        type="text"
                        id="language"
                        name="language"
                        placeholder="..."
                        value={language}
                        onChange={({ target: { value } }) => setLanguage(value)}
                    />
                </div>
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {showClear && (
                <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
};
export default Search;
