import React from 'react';
import { browserHistory } from 'react-router';

import { initializeSdk } from './facebook';
import './App.css';

export default class extends React.Component {

  componentDidMount() {
    initializeSdk(function () {

      // eslint-disable-next-line no-undef
      FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.status === 'connected') {
          browserHistory.replace('/Home');
        } else {
          console.log('not connected');
          browserHistory.push('/');
        }
      });
    });
  }
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

