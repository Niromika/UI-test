import React from 'react';
import styled from 'styled-components';
import burgerIcon from '../../img/burger-icon.png';
import search from '../../img/search-icon.png';
import message from '../../img/messages-icon.png';
import notification from '../../img/notifications-icon.png';
import counter from '../../img/counter-ball-icon.png';
import user from '../../img/user-photo-icon.png';
import downArrow from '../../img/down-arrow-icon.png';

const TopMenuStyled = styled.div`
  background-color: #fff;
  height: 91px;
  border: 1px solid rgba(132, 146, 175, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 0 40px;
  box-sizing: border-box;

  .left-tabs {
    display: flex;
    align-items: center;

    .burger {
      height: 21px;
      width: 26px;
      padding-right: 28px;
      background-image: url(${burgerIcon});
      background-repeat: no-repeat;
      cursor: pointer;
      position: relative;

      &:before {
        content: '▼';
        position: absolute;
        color: #5584ff;
        top: 0px;
        transform: rotate(90deg) translateY(-50%);
        left: ${props => props.isOpen ? '-30px' : '-3px'};
        opacity: ${props => props.isOpen ? '1' : '0'};
        transition: all .3s ease-in-out;
      }
    }
    
    .search {
      width: 18px;
    }
  }
    
  .right-tabs {
    display: flex;
    align-items: center;

    .add-button {
      width: 135px;
      height: 36px;
      background-color: #5584ff;
      right: 237px;
      position: absolute;
      border: none;
      border-radius: 25px;
      color: #ffffff;
      font-weight: 600;
      font-size: 13px;
    }

    .message-icon {
      width: 25px;
      right: 170px;
      position: absolute;
    }

    .notification-icon {
      width: 18px;
      right: 129px;
      position: absolute;
    }

    .counter-icon {
      position: absolute;
      width: 15px;
      right: 123px;
      top: 30px;
    }
      
    .counter-number {
      position: absolute;
      font-size: 8px;
      font-weight: 800;
      color: #fff;
      right: 128px;
      top: 33px;
    }

    .user-icon {
      position: absolute;
      width: 40px;
      right: 55.5px;
    }

    .down-arrow-icon {
      width: 9px;
    }

  }

    @media (max-width: 740px) {
        .add-button,
        .notification-icon,
        .message-icon,
        .counter-icon, 
        .counter-number {
          display: none;
        }
    }

    @media (max-width: 500px) {
        .user-icon,
        .down-arrow-icon {
          display: none;
        }
    }
`

class Header extends React.Component {

  render () {
    const {isOpen, toggleSideMenu} = this.props;
    return (
      <TopMenuStyled className="Header" isOpen={isOpen}>
        <div className="left-tabs">
          <i className="burger" onClick={toggleSideMenu} />
          <img className="search" src={search} alt="" />
        </div>
        <div className="right-tabs">
          <button className="add-button">+  Add project</button>
          <img className="message-icon" src={message} alt=""/>
          <img className="notification-icon" src={notification} alt=""/>
          <img className="counter-icon" src={counter} alt=""/>
          <span className="counter-number">3</span>
          <img className="user-icon" src={user} alt=""/>
          <img className="down-arrow-icon" src={downArrow} alt=""/>
        </div>
      </TopMenuStyled>
    )
  }
}
  
export default Header;