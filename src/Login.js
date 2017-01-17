import React from 'react';
import { login } from './facebook';
export default class extends React.Component {

    handleClick = () => {

        login((err) => {
            if (err) console.log(err);
        });
    }

    render() {
        return (
            <div className="App">
                <a href="#" onClick={this.handleClick}>Login using facebook</a>
            </div>
        );
    }
};
