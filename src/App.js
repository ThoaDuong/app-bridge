import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import ScrollToTop from './scroll/ScrollToTop';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Router basename="app-bridge/">
                    <ScrollToTop/>
                    <Switch>
                        { this.showRoute(routes) }
                    </Switch>
                </Router>
            </div>
        );
    }
    showRoute = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((item, index) => {
                return <Route
                    key = { index }
                    path = { item.path }
                    exact = { item.exact }
                    component = { item.component }
                />
            })
        }
        return result;
    }
}

export default App;