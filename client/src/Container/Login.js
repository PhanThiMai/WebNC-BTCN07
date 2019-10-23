import { connect } from 'react-redux'
import * as actions from '../Actions/index'
import Login from '../component/Login'


const token = localStorage.getItem("usertoken");

const mapStateToProps = state => ({
    store: state.login
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (email, password) => {
            dispatch(actions.handleLoginRequest(email, password))
        },

        logOut: () => {
            dispatch(actions.logOutRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

