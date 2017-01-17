import React from 'react';
import { login } from './facebook';

/** Component displys login with facebook link. Routed to / */
export default class extends React.Component {

    handleClick = () => {

        login((err) => {
            if (err) {
                console.log(err);
                alert(err);
            }
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
