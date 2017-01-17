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


    // sdk callback function
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

function login(callback) {
    // eslint-disable-next-line no-undef
    FB.login((response) => {
        // console.log('login response');
        // console.log(response);
        if (response && !response.error) {
            return callback(null, response);
        }
        callback({ message: 'Unable to log in', response: response });
    });
}
function logout() {
    // eslint-disable-next-line no-undef
    console.log(FB);
    // eslint-disable-next-line no-undef
    FB.logout();
}

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
