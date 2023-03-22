import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from 'react';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                
            </Switch>
        </BrowserRouter>
        <ToastContainer />
        </>
    )
}

export default App;