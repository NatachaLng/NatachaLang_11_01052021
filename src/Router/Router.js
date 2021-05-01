import React from "react";
import Header from "../components/Header";
import '../styles/Header.css'
import Footer from "../components/Footer";
import '../styles/Footer.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "../components/Homepage";
import AboutPage from "../components/AboutPage";
import ErrorPage from "../components/ErrorPage";

class KasaRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/About' component={AboutPage} />
                        <Route exact path='/Error' component={ErrorPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default KasaRouter

