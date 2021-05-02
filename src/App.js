import React from "react";
import Header from "./components/Header";
import './styles/Header.css';
import Footer from "./components/Footer";
import './styles/Footer.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import ErrorPage from "./components/ErrorPage";
import Accomodation from "./components/Accomodation";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <Header />
                    </header>
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/About' component={AboutPage} />
                        <Route exact path='/Error' component={ErrorPage} />
                    </Switch>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
