import React from "react";
// import MainContentAnimation from "./MainContentAnimation";
// import { Container } from "react-bootstrap";
import MainLayout from "./MainLayout.tsx";
export default function Page(props) {
  const { children } = props;
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}
