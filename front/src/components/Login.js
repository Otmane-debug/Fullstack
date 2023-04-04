import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../context/AuthContext';

export default class Login extends Component {
 
  static contextType = AuthContext

render() {

  const {loginUser} = this.context
  
    return (
      <div className='log_res'>
              <Form onSubmit={loginUser} method="POST">
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter username" />
                  <Form.Text className="text-muted">
                    We'll never share your username with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
                <Button variant="dark" onClick={this.handleClose_login}>
                  Close
                </Button>
              </Form>
      </div>
    )
  }
}
