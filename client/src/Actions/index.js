import * as types from '../Constant/index'


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

