import { FaChessQueen, FaGift, FaLandmark, FaAngleDoubleUp, FaCoins, FaBolt, FaTwitterSquare, FaTelegram, FaSun, FaMoon, FaCog } from "react-icons/fa";
import { Nav, Row, Col } from "react-bootstrap";
import DarkMode from "./DarkMode";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar mobile-side-menu">
        <div className="sidebar-menu">
          <Nav className="flex-column">
            <Nav.Item className="item">
              <Link href="/mynfts">
                <FaChessQueen className="sidebar-icons" />
                <span>MY NFTS</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link href="/chestshop" className="nav-link menu-btn">
                <FaGift className="sidebar-icons" />
                <span>CHEST SHOP</span>
              </Link>
            </Nav.Item>

            <Nav.Item className="item">
              <Link href="/marketplace" className="nav-link menu-btn">
              <FaLandmark className="sidebar-icons" />
                <span>MARKETPLACE</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link href="/training" className="nav-link menu-btn">
              <FaAngleDoubleUp className="sidebar-icons" />
                <span>TRAINING</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link href="/stakefarm" className="nav-link menu-btn">
              <FaCoins className="sidebar-icons" />
                <span>STAKE / FARM</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link href="/fusion" className="nav-link menu-btn">
              <FaBolt className="sidebar-icons" />
                <span>FUSION</span>
              </Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Link href="/stakefarm" className="nav-link menu-btn">
              <FaCog className="sidebar-icons" />
                <span>setting</span>
              </Link>
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
                  <div className="d-flex justify-content-between align-items-center">
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

export default Sidebar;
