import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(4, 4, 4, 0.8));
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 23px;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <span>&copy;2021 christian books</span>
      </FooterContainer>
    </>
  );
}
