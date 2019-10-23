import { connect } from 'react-redux'
import * as actions from '../Actions/index'
import Register from '../component/Register'


const token = localStorage.getItem("usertoken");

const mapStateToProps = state => ({
    store: state.login
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (username, email, password) => {
            dispatch(actions.handleRegisterRequest(username, email, password))
        },
        logOut: () => {
            dispatch(actions.logOutRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

