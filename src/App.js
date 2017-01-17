import React from 'react';
import { browserHistory } from 'react-router';

import { initializeSdk } from './facebook';
import './App.css';

/** Base component. Initialize facebook sdk, monitor and redirect based on connection status changes */
export default class extends React.Component {

  componentDidMount() {
    initializeSdk(function () {
      browserHistory.push('/');
      // eslint-disable-next-line no-undef
      FB.Event.subscribe('auth.statusChange', function (response) {
        if (response.status === 'connected') {
          // Redirect to /Home
          browserHistory.push('/Home');
        } else {
          // Redirect to root
          // console.log('not connected');
          browserHistory.push('/');
        }
      });
    });
  }

  /**
   * Render the base components and its child routes
   */
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

