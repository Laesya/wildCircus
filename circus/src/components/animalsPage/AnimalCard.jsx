import React from 'react';
import '../Style.scss';

class AnimalCard extends React.Component {
    render() {  
        return (
          <div className="CardContainer">
            <div className="Card">
              <p className="card-header">{this.props.name} : {this.props.race}</p>
              <div className="card-body">
                  <img className="card-img" src={this.props.img} alt='animal img'  />    
              </div>
              <div className="card-footer">
                  {
                    this.props.genre === "male" ? <p>{this.props.name} est un {this.props.genre} éduqué par {this.props.dresseur} </p> : <p>{this.props.name} est une {this.props.genre} éduquée par {this.props.dresseur} </p>
                  }
              </div>
            </div>
          </div>
        );
    }
}

export default AnimalCard;

