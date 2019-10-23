import { connect } from 'react-redux'
import * as actions from '../Actions/index'
import Home from '../component/Home'


const mapStateToProps = state => ({
    store: state.login
})

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(actions.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

