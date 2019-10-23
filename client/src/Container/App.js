import { connect } from 'react-redux'
import * as actions from '../Actions/index'
import App from '../App'


const mapStateToProps = state => ({
    store: state.login
})


export default connect(mapStateToProps, null)(App);

