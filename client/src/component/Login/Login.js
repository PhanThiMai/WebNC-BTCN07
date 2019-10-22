import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ' '

        }
    }



    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        console.log(this.state.email, this.state.password)
    }



    render() {
        return (
            <div className="row ">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-5 ">
                    <h2 className="m-5 d-flex justify-content-center ">Login</h2>
                    <Form className="">
                        <Form.Group controlId="formGroupEmail" className="d-flex">
                            <Form.Label className="mr-5">Email </Form.Label>
                            <Form.Control name="email" type="email" className="ml-4" onChange={this.onChange} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword" className="d-flex">
                            <Form.Label className="mr-5">Password</Form.Label>
                            <Form.Control name="password" type="password" onChange={this.onChange} placeholder="Password" />
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