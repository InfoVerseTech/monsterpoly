import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import MonsterCard from "../../Component/MonsterCard.tsx";
import LayoutHeader from "../../Component/LayoutHeader.tsx";
import Page from "../../Layout/Page.tsx";
export default function Fusion() {
  return (
    <Page>
      <LayoutHeader PageTitle="fusion" filtdisableClass="d-none" />
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={12} md={10} lg={6}>
          <Row className="training-mostercards m-1 py-1 px-2">
            <Col xs={12} sm={12} md={4} className="py-3">
              <MonsterCard />
            </Col>
            <Col xs={12} sm={12} md={4} className="py-3">
              <MonsterCard />
            </Col>
            <Col xs={12} sm={12} md={4} className="py-3">
              <MonsterCard />
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3">
              <Button variant="primary" className="start-training">
                APPROVE
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
}
