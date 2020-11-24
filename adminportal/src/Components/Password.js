import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

function Password({handleOnchange, handleOnResetSubmit, email, formSwitcher}) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-info text-center">Reset Password</h2>
                    <hr/>
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>

                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                               
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnchange}
                                placeholder="Enter Email "
                                />
                        </Form.Group>
                       
                        <Button type="submit">Reset Password</Button>
                        </Form>

                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={()=>formSwitcher('login')} >Loging now</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Password
Password.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    formSwitcher: PropTypes.string.isRequired,

   
}