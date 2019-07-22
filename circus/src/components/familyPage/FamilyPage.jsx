import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import NavbarCollapsed from '../navbar/Navbar';
import FamilyCard from './FamilyCard';
import Axios from 'axios';
import '../Style.scss';

const getStaff = "http://localhost:3000/staffs"


export default class FamilyPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      staffs: [],
    };
  }

    getStaff(){
      Axios.get(getStaff)
      .then(response => {
        console.log(response)
        this.setState({
          staffs:response.data.Staffs,
        });
      });
    }
    componentDidMount(){
      this.getStaff()
    }
  render() {
    return (
      <React.Fragment>
        <NavbarCollapsed/>
        <div className="FamilyPage">
          <Col>
            <h2>Wild Circus's Family</h2>
            <Row>
              {
                this.state.staffs.map((staff) => {
                  return (
                      <Col key={staff.name} xs={4}>
                          <FamilyCard  key={staff.id} img={staff.picture} name={staff.name} firstname={staff.firstname}id={staff.id} pseudonym={staff.pseudonym} work={staff.work} description={staff.description}/>;  
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

