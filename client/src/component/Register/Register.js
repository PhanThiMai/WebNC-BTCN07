import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ' '
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        console.log(this.state.username, this.state.password)
    }


    render() {
        return (
            <div className="row ">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-5 ">
                    <h2 className="m-5 d-flex justify-content-center ">Register</h2>
                    <Form className="">
                        <Form.Group controlId="formGroupEmail" className="d-flex">
                            <Form.Label className="mr-5">Username </Form.Label>
                            <Form.Control name="username" type="text" placeholder="Enter username" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail" className="d-flex">
                            <Form.Label className="mr-5">Email </Form.Label>
                            <Form.Control name="email" type="email" className="ml-4" placeholder="Enter email" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword" className="d-flex">
                            <Form.Label className="mr-5">Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this.onChange} />
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