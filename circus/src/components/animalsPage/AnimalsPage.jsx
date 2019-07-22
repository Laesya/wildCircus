import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import NavbarCollapsed from '../navbar/Navbar';
import AnimalCard from './AnimalCard';
import Axios from 'axios';
import '../Style.scss';

const getAnimal = "http://localhost:3000/animals"


export default class AnimalsPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      animals: [],
    };
  }

    getAnimal(){
      Axios.get(getAnimal)
      .then(response => {
        console.log(response)
        this.setState({
          animals:response.data.Animals,
        });
      });
    }
    componentDidMount(){
      this.getAnimal()
    }
  render() {
    return (
      <React.Fragment>
        <NavbarCollapsed/>
        <div className="FamilyPage">
          <Col>
            <h2>Wild Circus's Animals</h2>
            <Row>
              {
                this.state.animals.map((animal) => {
                  return (
                      <Col key={animal.firstname} xs={4}>
                          <AnimalCard  key={animal.id} img={animal.picture} name={animal.firstname} genre={animal.genre} race={animal.race} dresseur={animal.staff.pseudonym} />;  
                      </Col>
                  )
                })
              }
            </Row>
          </Col>
        </div>
      </React.Fragment>
      
    );
  }
}

