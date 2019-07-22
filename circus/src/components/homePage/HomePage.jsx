import React from 'react';
import logo from './logo.png';
import NavbarCollapsed from '../navbar/Navbar';
import '../Style.scss';

function HomePage() {
  return (
      <React.Fragment>
        <NavbarCollapsed />
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} alt="red text 'Wild Circus', flat design big top" className="App-logo" />
        <div id="slogan-parent">
          <div className="slogan"> 
            <p>One circus, one <span className="italic">big top</span> marvel !</p>
          </div>
        </div>
      </header>
    </div>
      </React.Fragment>
    
  );
}

export default HomePage;
