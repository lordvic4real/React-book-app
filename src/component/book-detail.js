import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Books } from "../data/books";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailContainer = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 20px;
  }
`;

export default function BookDetail({ match }) {
  const [filterbooks, setFilterBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    params: { personId },
  } = match;

  useEffect(() => {
    const BookDetail = Books.filter((book) => book);
    setFilterBooks(BookDetail);
  }, []);

  // function getBooks(id) {
  //   const bookDetails = Books.filter((book) => book === id);

  //   if (getBooks && getBooks.length > 0) {
  //     setFilterBooks(bookDetails[0]);
  //   }
  // }

  return (
    <>
      <DetailContainer>
        <p>
          {/* Your name is <strong>{book.image}</strong>
          Your name is <strong>{book.title}</strong> */}
        </p>
      </DetailContainer>
    </>
  );
}
