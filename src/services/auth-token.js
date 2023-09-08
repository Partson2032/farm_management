import axios from 'axios'
// import Vue from "vue";


export async function keyCloakFunction(method, url, data2, token) {
    const qs = require('qs');
    var data = qs.stringify({
        'client_id': 'agency-banking',
        'maxBodyLength': Infinity,

        'grant_type': 'refresh_token',
        'refresh_token': token
    })


    var config = {
        method: 'post',
        url: '/keyclock/auth/realms/digital-onboarding/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data,
    }

    // console.log(Vue.cookie.get('token'))

    var config2 = {
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer ',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data2,
    }
//fff
    let r
    // Vue.use(VueToast, {
    //   // One of the options
    //   position: 'top-right',
    // })

    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data))
            config2.url += '?access_token=' + String(response.data.access_token)
            config2.headers.Authorization += String(response.data.access_token)
            return axios(config2)
                .then(function (response) {
                    if (config2.method === 'post' || config2.method === 'POST') {
                        // const instance = Vue.$toast.open({
                        //   message: 'Success',
                        //   type: 'success',
                        // })
                        console.log('')
                    }
                    r = response
                    return response
                })
                .catch(function (error) {
                    console.log(error)
                    // const instance = Vue.$toast.open({
                    //   message: error,
                    //   type: 'error',
                    // })
                    r = error
                    return error
                })
        })
        .catch(function (error) {
            console.log(error)
            // const instance = Vue.$toast.open({
            //   message: error,
            //   type: 'error',
            // })
            r = error
            return error
        })

    return r
}

export async function keyCloakFunctionNoParam(method, url, data2, token) {
    const qs = require('qs');
    var data = qs.stringify({
        'client_id': 'agency-banking',
        'maxBodyLength': Infinity,

        'grant_type': 'refresh_token',
        'refresh_token': token
    })


    var config = {
        method: 'post',
        url: '/keyclock/auth/realms/digital-onboarding/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data,
    }

    // console.log(Vue.cookie.get('token'))

    var config2 = {
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer ',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data2,
    }
//fff
    let r
    // Vue.use(VueToast, {
    //   // One of the options
    //   position: 'top-right',
    // })

    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data))
            config2.headers.Authorization += String(response.data.access_token)
            return axios(config2)
                .then(function (response) {
                    if (config2.method === 'post' || config2.method === 'POST') {
                        // const instance = Vue.$toast.open({
                        //   message: 'Success',
                        //   type: 'success',
                        // })
                        console.log('')
                    }
                    r = response
                    return response
                })
                .catch(function (error) {
                    console.log(error)
                    // const instance = Vue.$toast.open({
                    //   message: error,
                    //   type: 'error',
                    // })
                    r = error
                    return error
                })
        })
        .catch(function (error) {
            console.log(error)
            // const instance = Vue.$toast.open({
            //   message: error,
            //   type: 'error',
            // })
            r = error
            return error
        })

    return r
}

export async function keyCloakFunctionAppend(method, url, data2, token) {
    const qs = require('qs');
    var data = qs.stringify({
        'client_id': 'agency-banking',
        'maxBodyLength': Infinity,

        'grant_type': 'refresh_token',
        'refresh_token': token
    })

    var config = {
        method: 'post',
        url: '/keyclock/auth/realms/digital-onboarding/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data,
    }

    // console.log(Vue.cookie.get('token'))

    var config2 = {
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer ',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data2,
    }
//fff
    let r
    // Vue.use(VueToast, {
    //   // One of the options
    //   position: 'top-right',
    // })

    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data))
            config2.url += '&access_token=' + String(response.data.access_token)
            config2.headers.Authorization += String(response.data.access_token)
            return axios(config2)
                .then(function (response) {
                    if (config2.method === 'post' || config2.method === 'POST') {
                        // const instance = Vue.$toast.open({
                        //   message: 'Success',
                        //   type: 'success',
                        // })
                        console.log('')
                    }
                    r = response
                    return response
                })
                .catch(function (error) {
                    console.log(error)
                    // const instance = Vue.$toast.open({
                    //   message: error,
                    //   type: 'error',
                    // })
                    r = error
                    return error
                })
        })
        .catch(function (error) {
            console.log(error)
            // const instance = Vue.$toast.open({
            //   message: error,
            //   type: 'error',
            // })
            r = error
            return error
        })

    return r
}

export async function keyCloakFunctionZss(method, url, data2) {
    var data = {
        client_id: 'agency-banking',

        grant_type: 'password',
        username: 'zss',
        password: 'zss',
    }

    var config = {
        method: 'post',
        url: '/keyclock/auth/realms/digital-onboarding/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data,
    }

    var config2 = {
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer ',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data2,
    }

    let r

    // Vue.use(VueToast, {
    //   // One of the options
    //   position: 'top-right',
    // })

    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data))
            config2.headers.Authorization += String(response.data.access_token)
            return axios(config2)
                .then(function (response) {
                    if (config2.method === 'post' || config2.method === 'POST') {
                        // const instance = Vue.$toast.open({
                        //   message: 'Success',
                        //   type: 'success',
                        // })
                        console.log('')
                    }
                    r = response
                    return response
                })
                .catch(function (error) {
                    console.log(error)
                    // const instance = Vue.$toast.open({
                    //   message: error,
                    //   type: 'error',
                    // })
                    r = error
                    return error
                })
        })
        .catch(function (error) {
            console.log(error)
            // const instance = Vue.$toast.open({
            //   message: error,
            //   type: 'error',
            // })
            r = error
            return error
        })

    return r
}

export async function basicAuthFunction(method, url, data2, successMessage) {
    var data = JSON.stringify({})
    let r = null
    var config = {
        method: 'post',
        url: '/gateway/auth/api/oauth/token?grant_type=client_credentials',
        headers: {
            Bearer: 'bW9iaWxlOnBpbg==',
            Authorization: 'Basic bW9iaWxlOnBpbg==',
            'Content-Type': 'application/json',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data,
    }

    var config2 = {
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer ',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data2,
    }

    // Vue.use(VueToast, {
    //   // One of the options
    //   position: 'top-right',
    // })
    await axios(config)
        .then(function (response) {
            // console.log(String(response.data.access_token))
            config2.headers.Authorization = 'Bearer ' + String(response.data.access_token)
            return axios(config2)
                .then(function (response) {
                    if (successMessage) {
                        // const instance = Vue.$toast.open({
                        //   message: 'Success !!',
                        //   type: 'success',
                        // })
                    }
                    r = response
                    return response
                })
                .catch(function (error) {
                    console.log(error)
                    // const instance = Vue.$toast.open({
                    //   message: error,
                    //   type: 'error',
                    // })
                    r = error
                    return error
                })
        })
        .catch(function (error) {
            console.log(error)
            // const instance = Vue.$toast.open({
            //   message: error,
            //   type: 'error',
            // })
            r = error
            return error
        })

    return r
}

export async function keyCloakToken(username, password) {
    var r = {}
    var data = {
        client_id: 'agency-banking',

        grant_type: 'password',
        username: `${username}`,
        password: `${password}`,
    }

    var config = {
        method: 'post',
        url: '/keyclock/auth/realms/digital-onboarding/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Frame-Options': 'SAMEORIGIN',
        },
        data: data,
    }

    await axios(config)
        .then(function (response) {
            r = response
            return response
        })
        .catch(function (error) {
            console.log(error)
            r = error
            return error
        })
    return r
}
