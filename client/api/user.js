import API from './index'
const emailRegEx = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

export const register = (fullname, email, password) => {
    if (!emailRegEx.test(email)) {
        return false;
    }
    if (fullname.length < 3 || email.length < 6 || password.length < 6) {
        return false;
    }

    return API
        .post(`/user/register`, {
            fullname,
            email,
            password,
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}


export const login = (email, password) => {
    if (!emailRegEx.test(email)) {
        return false;
    }
    if (email.length < 6 || password.length < 6) {
        return false;
    }
    return API
        .post(`/user/login`, {
            email,
            password,
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}

