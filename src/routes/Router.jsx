import React from 'react'
import MovieDetails from '../components/MovieDetails'
import MostVoted from '../components/MostVoted'
import LeastVoted from '../components/LeastVoted'
import MovieList from '../components/MoviesList'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import UserContainer from '../containers/UserContainer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function Routes() {
    return (<Router>

        <Navbar />

        <Switch>
            <Route exact path="/">
                <MovieList />
            </Route>

            <Route exact path="/details/:id">
                <MovieDetails />
            </Route>

            <Route exact path="/mostvoted">
                <MostVoted />
            </Route>

            <Route exact path="/leastvoted">
                <LeastVoted />
            </Route>

            <Route exact path="/login">
                <UserContainer />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

        </Switch>


    </Router>);
}
