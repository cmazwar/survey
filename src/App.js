import React from 'react';
import sidebar from './images/sidebar.png';
import './App.css';
import Survey from './survey';
import Admin from './admin';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App extends React.Component {



    render() {
        return (
            <Router basename='/'>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/survey">Survey</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/survey">
                            <Survey/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                        <Route path="/">
                            <Survey/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}





