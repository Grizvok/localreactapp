import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row, FormFeedback } from 'reactstrap';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
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
    console.log(this.state);
    axios.post('/api/register', {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function(error) {
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
          <Input valid type="email" value={this.state.email} onChange={this.handleChange} name="email" id="exampleEmail" required/>
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="Password" required/>
        </FormGroup>
				<FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" value={this.state.confirmPassword} onChange={this.handleChange} name="confirmPassword" id="confirmPassword" required/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
			</Col>
			</Row>
			</Container>
    );
  }
}