import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Books } from "../data/books";

const DetailContainer = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 20px;
  }
`;

export default function BookDetail() {
  const [filterbooks, setFilterBooks] = useState([]);

  useEffect(() => {
    const booksFilter = Books.map((book) => book.id);
    setFilterBooks(getBookById(booksFilter));
  }, []);

  function getBookById(bookId) {
    const bookById = `/books/book-detail/:bookID/${Books.id}`;
    console.log(bookId);
  }

  return (
    <>
      <DetailContainer>
        {Books.map((book) => {
          <div className="container">
            <div className="img-sec">
              <img src={book.Image} alt="images" />
            </div>
            <div className="desc-sec">
              <span>{book.title}</span>
              <h1>{book.author}</h1>
              <p>
                The preferred choice of a vast range of acclaimed DJs. Punchy,
                bass-focused sound and high isolation. Sturdy headband and
                on-ear cushions suitable for live performance
              </p>
            </div>
          </div>;
        })}
      </DetailContainer>
    </>
  );
}
