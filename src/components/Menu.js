import React, { Component } from 'react';
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Container = styled.div`
  width: 300px;
  color: white;
`;

const NavMenu = styled.nav`
  text-align:center;
  display: flex;
  flex-direction: column;
  width: 7%;
  background: #191512;
  color: white;
  position: absolute;
  margin-top: 2%;
  margin-right: 42%;
`;

const IconContainer = styled.div`
  color white;
  font-size: 3.3rem;
  // position: absolute;
`;

const StyledLink = styled(
  styled(NavLink)`
    color: palevioletred;
    display: block;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  `,
  'active'
)`
  color: white;
`;


class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      
        <Container>
         <IconContainer>
          <FaUserCircle onClick={this.showMenu}>
          </FaUserCircle> 
        </IconContainer>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }} >

                <NavMenu>
                <StyledLink className="navLinks" to="/profile-page"> Profile </StyledLink>
                <StyledLink className="navLinks" to="#"> Messages </StyledLink>
                <StyledLink className="navLinks" to="#"> Settings </StyledLink>
                <StyledLink className="navLinks" to="#"> Log Out </StyledLink>
                </NavMenu>

              </div>
              )
            : (
              null
              )
        }
      </Container>
    );
  }
}

export default DropDownMenu;


