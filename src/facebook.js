/**
 * @file API functions for facebook.
 * All functions defined here can be called only after initializeSdk finishes execution
 */

/**
 * Import facebook sdk and initialize the global FB variable
 * @param {function} callback Function to be called after initialization
 * @returns {void}
 */
function initializeSdk(callback) {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id)) {
            console.log('if statement got called');
            return;
        }
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));


    // sdk callback function, called automatically after initialization
    window.fbAsyncInit = () => {
        console.log('fbAsyncInit called');
        // eslint-disable-next-line no-undef
        FB.init({
            appId: '355696044788303',
            status: true,
            xfbml: true,
            version: 'v2.8',
            cookie: true,
        });
        callback();
    };
}

/**
 * Displays popup to log in to facebook if not already logged in.
 * Should be called as a result of click event only
 * @param {function} callback Node.js style callback.
 * @returns {object} response from login api
 */
function login(callback) {
    // eslint-disable-next-line no-undef
    FB.login((response) => {

        if (response && !response.error) {
            return callback(null, response);
        }
        callback({ message: 'Unable to log in', response: response });
    });
}

/**
 * log out from facebook, if not already logged out.
 */
function logout() {

    // eslint-disable-next-line no-undef
    FB.logout(() => {
        alert('Successfully logged out');
    });
}

/**
 * Fetch link to user's profile image
 * @param {string} user_id Facebook user id
 * @param {function} callback Node.js style callback
 * @returns {string} URL to user's facebook profile image in size 200x200
 */
function getUserImage(user_id, callback) {

    // eslint-disable-next-line no-undef
    FB.api(`${user_id}/picture?type=large`, (response) => {
        if (response && response.data && response.data.url) {
            return callback(null, response.data.url);
        }
        // console.log(response);
        callback({ message: 'No image found' });
    });
}

/**
 * Fetch facebook user ID and full name
 * @param {function} callback Node.js style callback
 * @returns {object} facebook user id and name
 */
function getUser(callback) {
    // eslint-disable-next-line no-undef
    FB.api('/me', function (response) {
        // console.log('Successful login for: ' + response.name);
        if (response && response.name) {
            console.log(response);
            return callback(null, response);
        }
        callback({ message: 'No such user found' });
    });
}

export { initializeSdk, login, logout, getUser, getUserImage };
