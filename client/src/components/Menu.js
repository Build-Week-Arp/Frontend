import React, { Component } from 'react';
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavMenu = styled.nav`
  text-align:center;
  display: flex;
  flex-direction: column;
  width: 10%;
  background: #191512;
`;


class BioCard extends Component {
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
      <div>
        <FaUserCircle onClick={this.showMenu}>
          Show menu
        </FaUserCircle>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <NavMenu>
                <NavLink className="navLinks" to="#"> Profile </NavLink>
                <NavLink className="navLinks" to="#"> Messages </NavLink>
                <NavLink className="navLinks" to="#"> Settings </NavLink>
                <NavLink className="navLinks" to="#"> Log Out </NavLink>
                </NavMenu>
                
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default BioCard;


