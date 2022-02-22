import { useState } from 'react';
import { Container, Button, Modal } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContentAnimation from "./MainContentAnimation";
import WellcomeGif from "../public/assets/gif/wellcome.gif";
import MetaMask_Fox from "../public/assets/image/MetaMask_Fox.svg";
import WaletIcon from "../public/assets/image/walleteconecticons.svg";
import Image from 'next/image';

interface Children {
  children: any;
}

const MainLayout = ({children}:Children) => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <div className="main-container pt-4 pb-5 pb-3">
          <MainContentAnimation />
          <div className="mainpage">
            <Container fluid>{children}</Container>
          </div>
          <Modal
            // show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="sm"
            className="loginmodal"
          >
            <Modal.Header
              closeButton
              className="border-bottom-0"
            ></Modal.Header>
            <Modal.Body className="text-center">
              <Image src={WellcomeGif} className="img-fluid w-75" />
              <h1 className="color-white fw-bold fs-20 my-3">
                PLEASE, USE <Image src={MetaMask_Fox} className="img-fluid" />
                METAMASK <br /> FOR BROWSER
              </h1>
              <Button className="Logpage-btn mb-3" onClick={handleClose}>
                <Image src={MetaMask_Fox} className="img-fluid me-2" />
                METAMASK
              </Button>
              <br />

              <Button className="Logpage-btn btn" onClick={handleClose}>
                <Image src={WaletIcon} className="img-fluid me-2" />
                WALLET CONNECT
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
