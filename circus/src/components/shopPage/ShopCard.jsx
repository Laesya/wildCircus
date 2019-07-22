import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Style.scss';

const prettifyDate = (birthdateString) => {
    if (birthdateString) {
      let murricanBirthdate = birthdateString.split('T')[0].split('-')
      let prettyBirthdate = murricanBirthdate[2] + '/' + murricanBirthdate[1] + '/' + murricanBirthdate[0]
      return prettyBirthdate
    }
    else return 'Non spécifiée'
  }
  

class ShopCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          total: "",
          numberAdult: "",
          numberChildren: "",
          numberSenior: "",
        };

        this.toggle = this.toggle.bind(this);
        this.calcul = this.calcul.bind(this);

      }
      adult = event => {
        this.setState({ numberAdult: event.target.value });
      };
      children = event => {
        this.setState({ numberChildren: event.target.value});
      };
      senior = event => {
        this.setState({ numberSenior: event.target.value });
      };
      total = event => {
        this.setState({ total: event.target.value });
      };
      
      calcul() {

        let adultPrice = Number(this.state.numberAdult) * 60
        let childrenPrice = Number(this.state.numberChildren) * 15
        let seniorPrice = Number(this.state.numberSenior) * 45
        let totalPrice = adultPrice + childrenPrice + seniorPrice
        this.setState({total: totalPrice})
      }
      
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }     
      
    render() {  
        
        return (
            <div className="ShopCardContainer">
                <div className="CardContainer">
                    <div className="Card">
                        <p className="card-header">{this.props.pseudonym}</p>
                        <div className="card-body">
                            <img className="card-img" src={this.props.img} alt='staff img'  />    
                        </div>
                        <div className="card-footer">
                        <p>Le {prettifyDate(this.props.date)} retrouvez {this.props.pseudonym}!</p>
                        <Button outline onClick={this.toggle}>Buy ticket</Button>      
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modale">
                    <ModalHeader toggle={this.toggle} charCode="X">
                        <p id="title">
                            Buy a ticket for the {this.props.pseudonym}'s show
                        </p>
                    </ModalHeader>
                    <ModalBody>
                        <Col>
                            <p>Already registered ?</p>
                            <Button outline ><Link to="/loginRegister">Log In</Link></Button>      
                            <p>More than ten ? You have the right of group's prices ! </p>
                        </Col>
                        <Form>
                            <Row form className="justifyContain ">
                                <Col md={3}>
                                    <FormGroup>
                                    <Label for="numberAdult">Number of adult : </Label>
                                    <Input onChange={this.adult} value={this.state.numberAdult} type="number" name="number" min="0" max="10" id="numberAdult" />
                                    <p>Price: {this.state.numberAdult * 60}</p>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Label for="numberChildren">Number of children : </Label>
                                    <Input onChange={this.children} value={this.state.numberChildren} type="number" name="number" min="0" max="10" id="numberChildren"/>
                                        
                                        <p>Price: {this.state.numberChildren * 15}</p>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Label for="numberSenior">Number of senior: </Label>
                                    <Input onChange={this.senior} value={this.state.numberSenior} type="number" name="number" min="0" max="10" id="numberSenior"/>
                                    <p>Price: {this.state.numberSenior * 45}</p>
                                    </FormGroup>  
                                </Col>
                                
                                </Row>
                                <Row>
                                    <Col>
                                    <Button className="priceButton" outline onClick={this.calcul}>See total</Button>      
                                    <p>Price: {this.state.total}</p>
                                    </Col>
                                </Row>
                                <Button outline><Link to="/register">Register to buy</Link></Button>      
                            </Form>    
                    </ModalBody>
                </Modal>
            </div>        
        );
    }
}

export default ShopCard;