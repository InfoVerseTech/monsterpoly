import React from "react";
import { Link } from "react-router-dom";
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
  FaMoon
} from "react-icons/fa";
import { Nav } from "react-bootstrap";
import DarkMode from "./DarkMode.tsx";
export default function MobileSidebar() {
  return (
    <div>
      <div className="mobile-side-menu">
        <div className="sidebar-menu">
          <Nav className="flex-column">
            <Nav.Item className="item">
              <Link className="nav-link menu-btn" to="/">
                <FaChessQueen className="sidebar-icons" />
                <span>MY NFTS</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link className="nav-link menu-btn" to="/chestshop">
                <FaGift className="sidebar-icons" />
                <span>CHEST SHOP</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link className="nav-link menu-btn" to="/marketplace">
                <FaLandmark className="sidebar-icons" />
                <span>MARKETPLACE</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link className="nav-link menu-btn" to="/training">
                <FaAngleDoubleUp className="sidebar-icons" />
                <span>TRAINING</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link className="nav-link menu-btn" to="/stakefarm">
                <FaCoins className="sidebar-icons" />
                <span>STAKE / FARM</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link className="nav-link menu-btn" to="/fusion">
                <FaBolt className="sidebar-icons" />
                <span>FUSION</span>
              </Link>
            </Nav.Item>
          </Nav>
          <div className="sidebar-footer">
            <Nav className="d-flex justify-content-between align-items-center mb-3">
              <Nav.Link href="#">9999$</Nav.Link>
              <Nav.Link href="#">
                <FaTwitterSquare size={20} />
              </Nav.Link>
              <Nav.Link href="#">
                <FaTelegram size={20} />
              </Nav.Link>
              <Nav.Link href="#">
                <FaTelegram size={20} />
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-between align-items-center">
              <div>9999</div>
              <div>
                <div class="d-flex justify-content-center align-items-center">
                  <div>
                    <FaSun size={20} className="color-white" />
                  </div>
                  <div>
                    <DarkMode />
                  </div>
                  <div>
                    <FaMoon size={20} className="color-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
