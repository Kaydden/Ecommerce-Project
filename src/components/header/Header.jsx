import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import {motion} from "framer-motion";
import Logo from "../../assets/images/eco-logo.png";
import UserIcon from "../../assets/images/user-icon.png";

const nav__link = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  }
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={Logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {
                  nav__link.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""}>{item.display}</NavLink>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Icons */}
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{scale: 1.1}} src={UserIcon} alt="user-icon" />
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
