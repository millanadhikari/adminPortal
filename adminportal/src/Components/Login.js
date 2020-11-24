import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

function Login({handleOnchange, handleOnSubmit, formSwitcher, email, password}) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-info text-center">Admin Login Shree!</h2>
                    <hr/>
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>

                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                autoComplete="off"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnchange}
                                placeholder="Enter Email "
                                required
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnchange}
                                placeholder="Password "
                                required
                                />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                        </Form>

                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={()=>formSwitcher('reset')}>Forget Password</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
Login.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}