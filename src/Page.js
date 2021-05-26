import React from 'react';
import { AppContext } from './AppContext';

class Page extends React.Component {
    constructor(props) {
        super(props)
    }

    normalizedChildren () {
        const { children } = this.props;
        return (Array.isArray(children))
            ? children  : [children];
    } 

    render () {
        return (
            <div>
                <h1>Page</h1>
                {this.normalizedChildren().map(child => {
                        return child;
                    })}
            </div>
          );
    }
}

Page.contextType = AppContext;
export default Page;