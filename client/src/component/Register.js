import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { register } from '../api/user'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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

    handleRegister = (e) => {
        e.preventDefault()
        const { username, email, password } = this.state;
        if (register(username, email, password) === false) {
            console.log("error")
        } else {
            register(username, email, password).then(res => {
                const data = res;
                if (data) {
                    if (data.type === 1) {
                        this.props.handleLogin(data.data.username)
                    } else {
                        this.setState({
                            error: true
                        })
                    }
                }

            })
        }
    }


    render() {
        const { error, username, email, password } = this.state;
        const errorNoti = error && <p className="text-danger d-flex justify-content-center mb-5 ">Your e-mail/password is invalid! </p>;
        return (
            <div className="row ">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 ">
                    <h2 className="mt-5 mb-2 d-flex justify-content-center ">Register</h2>
                    {errorNoti}
                    <Form className=" mt-5">
                        <Form.Group controlId="formGroupUsername" className="d-flex">
                            <Form.Label className="mr-5">Username </Form.Label>
                            <Form.Control
                                name="username"
                                type="text"
                                value={username}
                                placeholder="Enter username"
                                onChange={this.onChange}
                                onFocus={this.handleFocus} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail" className="d-flex">
                            <Form.Label className="mr-5">Email </Form.Label>
                            <Form.Control name="email"
                                type="email" className="ml-4"
                                placeholder="Enter email"
                                value={email}
                                onChange={this.onChange}
                                onFocus={this.handleFocus}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword" className="d-flex">
                            <Form.Label className="mr-5">Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.onChange}

                                onFocus={this.handleFocus} />
                        </Form.Group>
                    </Form>
                    <p className="mt-5 mb-3">Have an account? <Link to="/" className="ml-3">Login</Link></p>
                    <hr />
                    <div className=" d-flex justify-content-center">
                        <Button className=" ml-5 mr-5 mt-4" size="md" onClick={this.handleRegister}>Register</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Register