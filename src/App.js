import React from "react";
import Header from "./components/Header";
import './styles/Header.css';
import Footer from "./components/Footer";
import './styles/Footer.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import ErrorPage from "./components/ErrorPage";
import AccommodationPage from "./components/AccommodationPage";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/accommodation/:id" render={(props) => <AccommodationPage{...props} />}/>
                        <Route path="*" component={ErrorPage}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
