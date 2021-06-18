import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RegisterPages from './pages/RegisterPages/RegisterPages';
import LoginPages from './pages/LoginPages/LoginPages';
import DashboardPages from './pages/DashboardPages/DashboardPages';
import VotePage from './pages/VotePage/VotePage';
import UploadFile from './pages/UploadFile';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/upload">
                    <UploadFile />
                </Route>
                <Route path="/vote">
                    <VotePage />
                </Route>
                <Route path="/regis">
                    <RegisterPages />
                </Route>
                <Route path="/admin">
                    <DashboardPages />
                </Route>
                <Route path="/">
                    <LoginPages />
                </Route>
            </Switch>
        </Router >
    );
}