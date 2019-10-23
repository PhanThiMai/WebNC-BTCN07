import API from './index'
const emailRegEx = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

export const register = (username, email, password) => {
    if (!emailRegEx.test(email)) {
        return false;
    }
    if (username.length < 3 || email.length < 6 || password.length < 6) {
        return false;
    }

    return API
        .post(`/users/register`, {
            username,
            email,
            password,
        })
        .then(res => {

            localStorage.setItem('usertoken', res.data.token)
            return res.data
        }).catch(res => {
            console.log(res)
        })
}


export const login = (email, password) => {
    if (!emailRegEx.test(email)) {
        console.log("email is invalid")
        return false;
    }
    if (email.length < 6 || password.length < 6) {
        console.log("email/ password is invalid")
        return false;
    }

    return API
        .post(`/users/login`, {
            email,
            password
        })
        .then(res => {

            localStorage.setItem('usertoken', res.data.token)
            return res.data
        }).catch(res => {
            console.log(res)
        }
        )
}

