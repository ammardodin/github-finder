import './App.css';
import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Search from './components/Search';
import About from './components/About';
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const searchUsers = ({ location = '', language = '' }) => {
        const terms = [];
        if (language.length > 0) {
            terms.push(encodeURIComponent(`language:${language}`));
        }
        if (location.length > 0) {
            terms.push(encodeURIComponent(`location:${location}`));
        }
        // Github API doesn't want `+` to be URL encoded...
        const searchQuery = terms.length > 0 ? terms.join('+') : '';
        setLoading(true);
        axios
            .get('https://api.github.com/search/users', {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    q: searchQuery,
                },
                paramsSerializer: (params) =>
                    Object.entries(params)
                        .map(([k, v]) => `${k}=${v}`)
                        .join('&'),
            })
            .then(({ data: { items } }) => setUsers(items))
            .then(() => setLoading(false));
    };
    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    };
    const getUserDetails = (login) => {
        setLoading(true);
        axios
            .get(`https://api.github.com/users/${login}`, {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                },
            })
            .then(({ data }) => setUser(data))
            .then(() => setLoading(false));
    };
    useEffect(() => {
        axios
            .get('https://api.github.com/users', {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                },
            })
            .then(({ data }) => setUsers(data))
            .then(() => setLoading(false));
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar title={'Github Finder'} />
                <div className="container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return (
                                    <Fragment>
                                        <Search
                                            searchUsers={searchUsers}
                                            clearUsers={clearUsers}
                                            showClear={users.length > 0}
                                        />
                                        <Users
                                            loading={loading}
                                            users={users}
                                        />
                                    </Fragment>
                                );
                            }}
                        />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/user/:login"
                            render={(props) => (
                                <UserDetails
                                    {...props}
                                    getUserDetails={getUserDetails}
                                    loading={loading}
                                    user={user}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
export default App;
