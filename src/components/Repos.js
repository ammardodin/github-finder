import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => {
    return (
        <div className="card">
            <h3>
                <a href={html_url}>{name}</a>
            </h3>
        </div>
    );
};

const Repos = ({ repos }) => {
    return repos.map((repo) => <Repo key={repo.name} {...repo} />);
};

Repo.propTypes = {
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
};

Repos.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Repos;
