import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button, {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5" style={style.NavWrapper}>
        <Link to='/'>
          <img src='' alt="Logo" className="navbar-brand" />
          Logo
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus" />
            My Cart
          </ButtonContainer>  
        </Link>
      </nav>
    )
  }
}

const style = {
  NavWrapper: {
    background: 'var(--mainBlue)'    
  }
}