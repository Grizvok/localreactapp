import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
  }

/**
 * You mix tabs and spaces in one file - again that problem with consistent formatting :)
 */

  render() {
    return (
			<Container>
			<Row className="justify-content-center">	
			<Col xs="4">
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail"/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password"/>
        </FormGroup>
				<FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" name="password" id="confirmPassword"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
			</Col>
			</Row>
			</Container>
    );
  }
}