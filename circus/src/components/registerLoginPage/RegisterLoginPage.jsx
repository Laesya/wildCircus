import React, { Component } from 'react';
import NavbarCollapsed from '../navbar/Navbar';
import { Form, FormGroup, Label, Input, Button ,Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Style.scss';

export default class RegisterLoginPage extends Component {
    render() {
      return (
            <React.Fragment>
                <NavbarCollapsed/>
                <div className="FamilyPage RegisterPage">
                    <Container>
                        <Col>
                            <h2>Log In</h2>
                            <Form>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input  type="email" name="email" id="Email" placeholder="Enter your mail" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Input  type="password" name="password" id="Password" placeholder="Enter your password" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button outline><Link to="/account">Log In</Link></Button>      

                            </Form>
                            <h2>Sign up</h2>
                            <Form>
                                <Row form>
                                    <FormGroup>
                                        <Input className="resizeInput" type="select" name="select" id="civilitySelect">
                                            <option>Mr</option>
                                            <option>Mrs</option>
                                        </Input>
                                    </FormGroup>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Input type="text" name="name" id="name" placeholder="Enter your name" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Input type="name" name="firstname" id="firstname" placeholder="Enter your firstname" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Input type="email" name="email" id="Email" placeholder="Enter your mail" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Input type="password" name="password" id="PasswordRegister" placeholder="Enter your password" />
                                        </FormGroup>
                                    </Col>
                                    <FormGroup>
                                        <Input type="text" name="address" id="Address" placeholder="Enter your adress"/>
                                    </FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input type="text" name="city" id="City" placeholder="Enter your adress"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Input type="text" name="zip" id="Zip" placeholder="Zip"/>
                                            </FormGroup>  
                                        </Col>
                                    </Row>
                                    
                                </Row>
                                <FormGroup >
                                    <Label for="date">Birthday :</Label>
                                    <Input className="resizeInput"
                                        type="date"
                                        name="date"
                                        id="birthday"
                                        placeholder="birthday"
                                    />
                                </FormGroup>
                            </Form>
                            <Button outline><Link to="/account">Sign up</Link></Button>      
                        </Col>
                    </Container>
                </div>
            </React.Fragment>
      )
    }
}