import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import NavbarCollapsed from '../navbar/Navbar';
import ShopCard from './ShopCard';
import Axios from 'axios';
import '../Style.scss';

const getShowURL = "http://localhost:3000/shows"

export default class ShopPage extends Component {
  constructor(props){
    super(props)
    this.state = {
        shows: [],
    };
  }

    getShow(){
      Axios.get(getShowURL)
      .then(response => {
        console.log(response)
        this.setState({
            shows:response.data.Shows,
        });
      });
    }
    componentDidMount(){
      this.getShow()
    }
  render() {
    return (
      <React.Fragment>
        <NavbarCollapsed/>
        <div className="ShopPage">
          <Col>
            <h2>Welcome to shop !</h2>
            <Row>
              {
                this.state.shows.map((show) => {
                  return (
                      <Col key={show.id} xs={4}>
                          <ShopCard  key={show.id} img={show.picture} pseudonym={show.staff.pseudonym} date={show.date} id={show.id}/>;  
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

