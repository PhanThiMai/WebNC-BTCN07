import * as types from '../Constant/index'
import { login, register } from '../api/user'


export const handleLogin = (token, username) => {
    return {
        type: types.HANDLE_LOGIN,
        token,
        username
    }
}


export const logOut = () => {
    return {
        type: types.LOG_OUT
    }
}


export const handleLoginRequest = (email, psw) => {
    return (dispatch) => {
        if (!login(email, psw))
            dispatch(logOut())
        else {
            login(email, psw).then(res => {
                dispatch(handleLogin(res.token, res.data.username))
            })
        }
    }

}


export const handleRegisterRequest = (username, email, psw) => {
    return (dispatch) => {
        if (!register(username, email, psw))
            dispatch(logOut())
        else {
            register(username, email, psw).then(res => {
                dispatch(handleLogin(res.token, res.data.username))
            })
        }
    }

}

export const logOutRequest = () => {
    return (dispatch) => {
        dispatch(logOut())
    }
}
