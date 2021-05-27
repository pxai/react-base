import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Panel from './Panel';
import About from './About';

export default class Navigation extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Panel}/>  
                    <Route exact path="/about" component={About} />
                </Switch> 
            </BrowserRouter>
        );
    }
}