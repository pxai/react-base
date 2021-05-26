import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Panel from './Panel';

class Navigation extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Panel}/>  
                <Route exact path="/about" component={About} />
            </Switch> 
        );
    }
}