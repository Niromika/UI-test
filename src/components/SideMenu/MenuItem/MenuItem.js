import React from 'react';
import styled from 'styled-components';

const MenuItemStyled = styled.div`
    height: 75px;
    padding-left: 40px;
    color: #ffffff;
    font-size: 19px;
    line-height: 36px;
    display: flex;
    align-items: center;

    .icon {
      height: 14px;
      width: 14px;
      padding-right: 14px;
    }
    &:hover {
      background-color: #122143;
      box-shadow: inset 7px 0px 0px 0px rgba(85,132,255,1);
    }
`

class MenuItem extends React.Component {
    
  render () {
    return (
      <MenuItemStyled className="menu-item">
          <img className="icon" src={this.props.img} alt=""/>
          {this.props.content}
      </MenuItemStyled>
     )
  }
}
  
export default MenuItem;