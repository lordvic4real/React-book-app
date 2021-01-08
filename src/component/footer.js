import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  background: linear-gradient(rgba(3, 37, 65, 0.99), rgba(3, 38, 66, 0.99999));
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
