import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row, FormFeedback, Tooltip } from 'reactstrap';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isPasswordValid: 'Password is not valid',
      confirmPassword: '',
      isConfirmPasswordValid: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    return;
    axios.post('/api/register', {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs="4">
            <Form method="POST" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="exampleEmail" required />
                <FormFeedback>Sweet! that name is available</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="Password" required />
                <FormText>{this.state.isPasswordValid}</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input type="password" value={this.state.confirmPassword} onChange={this.handleChange} name="confirmPassword" id="confirmPassword" required />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}