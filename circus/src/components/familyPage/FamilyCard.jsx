import React from 'react';
import '../Style.scss';

class FamilyCard extends React.Component {
    render() {  
        return (
          <div className="CardContainer">
            <div className="Card">
              <p className="card-header">{this.props.pseudonym} : {this.props.work}</p>
              <div className="card-body">
                  <img className="card-img" src={this.props.img} alt='staff img'  />    
              </div>
              <div className="card-footer">
                <p>{this.props.description}</p>   
              </div>
            </div>
          </div>
        );
    }
}

export default FamilyCard;