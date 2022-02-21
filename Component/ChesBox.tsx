import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import CestGun from "../assets/image/cesey_gun.png";
import CestLogo from "../assets/image/cesey_logo.png";
import ChestGolden2 from "../assets/image/ChestGolden2.png";
import ChestOrange2 from "../assets/image/ChestOrange2.png";
import ChestOrangebw2 from "../assets/image/ChestOrangebw2.png";
// import mgold from "../../assets/image/mgold.svg";
import mpoly from "../assets/image/mpoly.svg";
import stackCharacter from "../assets/image/stackCharacter.png";
import { FaPlus } from "react-icons/fa";

const ChesBox = () => {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center pb-5">
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={3}
          className="px-0 px-sm-0 px-md-3 px-lg-3"
        >
          <Row>
            <Col md={12}>
              <div className="d-flex justify-content-center align-items-center mb-2">
                <div className="text-center chestbox chestbox1">
                  <div>
                    <p className="color-white fs-13 mb-2 text-uppercase">
                      0 AVAILABLE
                    </p>
                    <h6 className="color-white text-uppercase fw-bold mb-1">
                      REGULAR
                    </h6>
                    <h6 className="color-white text-uppercase fw-bold">
                      combo box
                    </h6>
                  </div>
                  <div className="text-center my-4 contimg">
                    <Image src={ChestOrange2} className="img-fluid" />
                    <div className="contimbox">
                      <Image src={CestLogo} className="img-fluid" />
                      <br />
                      <p className="px-2">x1</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="color-white fw-bold">
                      <Image src={mpoly} className="img-fluid coinimg" /> 0.5
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="text-center chestbox chestbox1">
                  <div>
                    <p className="color-white fs-13 mb-2 text-uppercase">
                      0 AVAILABLE
                    </p>
                    <h6 className="color-white text-uppercase fw-bold mb-1">
                      REGULAR
                    </h6>
                    <h6 className="color-white text-uppercase fw-bold">
                      combo box
                    </h6>
                  </div>
                  <div className="text-center my-4 contimg">
                    <Image src={ChestOrangebw2} className="img-fluid" />
                    <div className="contimbox">
                      <Image src={CestLogo} className="img-fluid" />
                      <br />
                      <p className="px-2">x1</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="color-white fw-bold">
                      <Image src={mpoly} className="img-fluid coinimg" /> 0.5
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={3}
          className="px-0 px-sm-0 px-md-3 px-lg-3"
        >
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center chestbox">
              <div>
                <p className="color-white fs-14 text-uppercase">0 AVAILABLE</p>
                <h3 className="color-white text-uppercase fw-bold mb-0">
                  REGULAR
                </h3>
                <h3 className="color-white text-uppercase fw-bold">
                  combo box
                </h3>
              </div>
              <div className="text-center my-5">
                <Image src={ChestGolden2} className="img-fluid" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <div className="smallimg-box">
                    <Image src={CestLogo} className="img-fluid" />
                  </div>
                  <p className="tagim">x1</p>
                </div>
                <div>
                  <FaPlus color="white" />
                </div>
                <div>
                  <div className="smallimg-box d-flex align-items-center">
                    <Image src={CestGun} className="img-fluid" />
                  </div>
                  <p className="tagim">x1</p>
                </div>
              </div>
              <p className="color-white fs-12 text-uppercase py-3">
                Excluding common rarity
              </p>
              <div className="text-center">
                <h2 className="color-white fw-bold mb-4">
                  <Image src={mpoly} className="img-fluid coinimg" /> 0.5
                </h2>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={3}
          className="px-0 px-sm-0 px-md-3 px-lg-3"
        >
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center chestbox chestbox2">
              <div>
                <p className="color-white fs-14 text-uppercase">0 AVAILABLE</p>
                <h3 className="color-white text-uppercase fw-bold mb-0">
                  REGULAR
                </h3>
                <h3 className="color-white text-uppercase fw-bold">
                  combo box
                </h3>
              </div>
              <div className="text-center my-5">
                <Image src={ChestGolden2} className="img-fluid" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <div className="smallimg-box">
                    <Image src={CestLogo} className="img-fluid" />
                  </div>
                  <p className="tagim">x1</p>
                </div>
                <div>
                  <FaPlus color="white" />
                </div>
                <div>
                  <div className="smallimg-box d-flex align-items-center">
                    <Image src={CestGun} className="img-fluid" />
                  </div>
                  <p className="tagim">x1</p>
                </div>
              </div>
              <p className="color-white fs-12 text-uppercase py-3">
                Excluding common rarity
              </p>
              <div className="text-center">
                <h2 className="color-white fw-bold mb-4">
                  <Image src={mpoly} className="img-fluid coinimg" /> 0.5
                </h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="text-end">
        <Image src={stackCharacter} className="img-fluid stackcrimg" />
      </div>
    </>
  );
}


export default ChesBox;
