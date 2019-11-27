import React from 'react';
import styled from 'styled-components';

import SideMenu from './components/SideMenu/SideMenu';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const AppStyled = styled.div`
  display: flex;
  font-family: Roboto;
  min-height: 100%;

  .flex-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`

class App extends React.Component {
  state = {
    isOpen: false
  };

  toggleSideMenu = () => {
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  }
  
  render () {
    return (
      <AppStyled>
          <SideMenu className="side-menu" isOpen={this.state.isOpen} />
          <div className="flex-container">
            <Header className="header" isOpen={this.state.isOpen} toggleSideMenu={this.toggleSideMenu} />
            <Home className="home" />
          </div>
      </AppStyled>
    )
  }
}

export default App;
