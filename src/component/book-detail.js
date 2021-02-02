import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  const { id } = useParams();

  const [bookData, setBookData] = useState({});

  const getSingleBook = async () => {
    try {
      const getBook = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
      );
      const response = getBook?.data;
      const bookInfo = response.volumeInfo;
      // console.log(bookInfo);
      setBookData(bookInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBook();
  }, []);

  return (
    <>
      <DetailContainer>
        <div>
          <div>{bookData.title}</div>
          <img src={bookData.imageLinks?.smallthumbnail} alt="pix" />
          <div>{bookData.description}</div>
        </div>
      </DetailContainer>
    </>
  );
}
