import React from 'react'

import { Button } from 'react-bootstrap'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleLogout = () => {
        this.props.logOut();
    }

    render() {
        console.log(this.props.store)
        const username = this.props.store.username;
        return (
            <div className="mr-5 mt-5">
                <h5>{username}</h5>
                <Button
                    onClick={this.handleLogout}
                >Logout</Button>
            </div>
        )
    }
}

export default Home