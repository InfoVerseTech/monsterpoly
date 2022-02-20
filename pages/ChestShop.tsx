import React from "react";
import LayoutHeader from "../../Component/LayoutHeader.tsx";
import ChesBox from "./ChesBox.tsx";
import Page from "../../Layout/Page.tsx";
export default function ChestShop() {
  return (
    <>
      <Page>
        <LayoutHeader PageTitle="Chest Shop" filtdisableClass="d-none" />
        <ChesBox />
      </Page>
    </>
  );
}
