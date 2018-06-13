import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';

export default class LoginForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };   

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
}
	
  render() {
    return (
			<Container>
			<Row className="justify-content-center">	
			<Col xs="4">
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="exampleEmail"/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="Password"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
			</Col>
			</Row>
			</Container>
    );
  }
}