import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChessQueen,
  FaGift,
  FaLandmark,
  FaAngleDoubleUp,
  FaCoins,
  FaBolt,
  FaTwitterSquare,
  FaTelegram,
  FaSun,
  FaMoon,
  FaCog
} from "react-icons/fa";
import { Nav, Row, Col } from "react-bootstrap";
import DarkMode from "./DarkMode.tsx";
import { BsDiscord } from "react-icons/bs";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar mobile-side-menu">
        <div className="sidebar-menu">
          <Nav className="flex-column">
            <Nav.Item className="item">
              <NavLink
                to="/mynfts"
                className={props => {
                  return `${props.isActive ? "active " : ""}nav-link menu-btn`;
                }}
              >
                <FaChessQueen className="sidebar-icons" />
                <span>MY NFTS</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item className="item">
              <NavLink
                to="/chestshop"
                className={props => {
                  return `${props.isActive ? "active " : ""}nav-link menu-btn`;
                }}
              >
                <FaGift className="sidebar-icons" />
                <span>CHEST SHOP</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item className="item">
              <NavLink
                to="/marketplace"
                className={props => {
                  return `${props.isActive ? "active " : ""}nav-link menu-btn`;
                }}
              >
                <FaLandmark className="sidebar-icons" />
                <span>MARKETPLACE</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item className="item">
              <NavLink
                to="/training"
                className={props => {
                  return `${props.isActive ? "active " : ""}nav-link menu-btn`;
                }}
              >
                <FaAngleDoubleUp className="sidebar-icons" />
                <span>TRAINING</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item className="item">
              <NavLink
                to="/stakefarm"
                className={props => {
                  return `${props.isActive ? "active " : ""}nav-link menu-btn`;
                }}
              >
                <FaCoins className="sidebar-icons" />
                <span>STAKE / FARM</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item className="item">
              <NavLink
                to="/fusion"
                className={props => {
                  return `${props.isActive ? "active " : ""}nav-link menu-btn`;
                }}
              >
                <FaBolt className="sidebar-icons" />
                <span>FUSION</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link className="nav-link menu-btn">
                <FaCog className="sidebar-icons" />
                <span>setting</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="sidebar-footer">
            <Row className=" d-flex justify-content-between align-items-center m-0">
              <Col className="footfirtcl ps-0">
                <Nav className="d-flex justify-content-center align-items-center">
                  <Nav.Link href="#">9999$</Nav.Link>
                </Nav>
              </Col>
              <Col className="footlastcl pe-0">
                <Nav className="d-flex justify-content-between align-items-center">
                  <Nav.Link href="#">
                    <BsDiscord />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <FaTelegram />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <FaTwitterSquare />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row className=" d-flex justify-content-between align-items-center m-0 mt-2 pt-1">
              <Col className="ps-0">
                <Nav className="d-flex justify-content-center align-items-center">
                  <Nav.Link href="#">9999$</Nav.Link>
                </Nav>
              </Col>
              <Col className="pe-0 sidfotlang">
                <div className="py-1">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <FaSun className="color-white" />
                    </div>
                    <div>
                      <DarkMode />
                    </div>
                    <div>
                      <FaMoon className="color-white" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
