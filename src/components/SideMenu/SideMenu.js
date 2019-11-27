import React from 'react';
import styled from 'styled-components';

import logo from '../../img/side-bar-logo.png';
import home from '../../img/home-icon.png';
import workflow from '../../img/workflow-icon.png';
import statistics from '../../img/statistics-icon.png';
import calendar from '../../img/calendar-icon.png';
import user from '../../img/user-icon.png';
import settings from '../../img/settings-icon.png';

import MenuItem from './MenuItem/MenuItem';

const SideMenuStyled = styled.div`
    width: ${props => props.isOpen ? '240px' : '0'};
    min-height: 100%;
    background-color: #0e1a35; 
    transition: width .3s ease-in-out;
    overflow: hidden;

    .logo-wrapper {
        height: 91px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 30px;

        .logo {
          width: 140px;
        }
    }

`

class SideMenu extends React.Component {

  render () {
    const {isOpen} = this.props;
    return (
      <SideMenuStyled className="side-menu" isOpen={isOpen}>
          <div className="logo-wrapper">
              <img className="logo" src={logo} alt=''/>
          </div>
          <MenuItem img={home} content="Home"/>
          <MenuItem img={workflow} content="Workflow"/>
          <MenuItem img={statistics} content="Statistics"/>
          <MenuItem img={calendar} content="Calendar"/>
          <MenuItem img={user} content="Users"/>
          <MenuItem img={settings} content="Settings"/>
      </SideMenuStyled>
    )
  }
}
  
export default SideMenu;