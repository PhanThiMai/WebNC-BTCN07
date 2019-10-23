import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { login } from '../api/user'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false
        }
    }

    handleFocus = e => {
        this.setState({
            error: false
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = this.state;
        this.props.handleLogin(email, password)

    }

    render() {
        const { error, email, password } = this.state;
        const errorNoti = error && <p className="text-danger d-flex justify-content-center mb-5 ">Your e-mail/password is invalid! </p>;

        return (
            <div className="row ">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-5 ">
                    <h2 className="mt-5 mb-2  d-flex justify-content-center ">Login</h2>
                    {errorNoti}
                    <Form className="mt-5">
                        <Form.Group controlId="formGroupEmail" className="d-flex">
                            <Form.Label className="mr-5">Email </Form.Label>
                            <Form.Control name="email"
                                type="email" className="ml-4"
                                value={email}
                                onChange={this.onChange} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword" className="d-flex">
                            <Form.Label className="mr-5">Password</Form.Label>
                            <Form.Control name="password"
                                type="password"
                                value={password}
                                onChange={this.onChange}
                                placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <p className="mt-5 mb-3">Don't have an account? <Link to="/register" className="ml-3">Register</Link></p>
                    <hr />
                    <div className=" d-flex justify-content-center">
                        <Button className=" ml-5 mr-5 mt-4" size="md" onClick={this.handleLogin}>Login</Button>
                    </div>


                </div>

            </div>
        )
    }
}

export default Login