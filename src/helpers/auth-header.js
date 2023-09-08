//import {VueCookieNext} from 'vue-cookie-next';

export async function httpRequestConfig() {
    const authToken = localStorage.getItem('access_token');
    // console.log(authToken);
    if (authToken) {
        return {Authorization: `Bearer ${authToken}`, 'Access-Control-Allow-Origin': '*'};
    } else {
        return {};
    }
}