import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(4, 4, 4, 0.8));
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>HELLO</FooterContainer>
    </>
  );
}
