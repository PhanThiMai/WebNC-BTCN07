import * as types from '../Constant/index'

const token = localStorage.getItem("usertoken");

let initialState = {
    username: '',
    isLogin: token ? true : false
}

let login = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_LOGIN:
            return {
                username: action.username,
                isLogin: !state.isLogin
            }

        case types.LOG_OUT:
            localStorage.removeItem("usertoken")
            return {
                isLogin: false
            }

        default:
            return state
    }
}

export default login;

