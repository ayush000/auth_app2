import { getUserImage, getUser, logout } from './facebook';
import React from 'react';

export default class extends React.Component {
    constructor() {

        super();
        this.state = {
            imgUrl: '',
            userName: '',
        };
    }

    componentWillUpdate() {
        console.log('Home component will update');

        if (typeof FB !== 'undefined' && this.state.userName === '') {
            getUser((err, user) => {
                if (err) return console.log(err);
                console.log(user);
                this.setState({ userName: user.name });
                getUserImage(user.id, (err, imgUrl) => {
                    if (err) return console.log(err);
                    this.setState({ imgUrl: imgUrl });
                });
            });
        }
    }
    componentDidMount() {
        console.log('Home component will mount');
        if (typeof FB !== 'undefined') {
            getUser((err, user) => {
                if (err) return console.log(err);
                console.log(user);
                this.setState({ userName: user.name });
                getUserImage(user.id, (err, imgUrl) => {
                    if (err) return console.log(err);
                    this.setState({ imgUrl: imgUrl });
                });
            });
        }
    }
    handleButtonClick = () => {
        logout();
    }
    render() {
        return (
            <div>
                <button classID="logOut" onClick={this.handleButtonClick}>Log out</button>
                <h2>{this.state.userName}</h2>
                <img src={this.state.imgUrl} alt="Profile" />
            </div>
        );
    }
}
