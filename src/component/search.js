import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Banner = styled.div`
  height: 350px;
  display: grid;
  place-items: center;
  background: linear-gradient(rgba(223, 77, 33, 0.9), rgba(88, 22, 99, 0.5)),
    url(/images/book2.jpg);
  background-position: center center;
  background-size: cover;
  input {
    width: 700px;
    height: 50px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.5);
    /* border: none; */
    border-radius: 30px;
    padding: 10px 20px;
    @media (max-width: 767px) {
      max-width: 360px;
      text-align: center;
    }
  }
  form button {
    line-height: 46px;
    font-size: 1.1em;
    margin: 0 0 0 -52px;
    width: 130px;
    /* padding: 12px; */
    transition: all 0.3s ease;
    border: none;
    background: rgba(3, 37, 65, 0.99);
    border-radius: 30px;
    color: rgba(255, 255, 255, 1);
    border: 1px solid white;
    @media (max-width: 640px) {
      margin: 0 0 0 -32px;
      height: 58px;
      padding: 12px 22px;
    }
  }
  *:focus {
    outline: none;
  }
`;
const CardWrap = styled.div`
  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    padding: 20px 5% 20px 5%;
  }
  .card {
    min-height: 220px;
  }
  .img-container img {
    object-fit: contain;
    object-position: center;
  }
  .card-body {
    padding: 0 12px 12px 12px;
  }
  .loading {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
  }
`;

export default function Search(props) {
  const [query, setQuery] = useState("");
  const [filterBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    try {
      setLoading(true);
      const apiBooks = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=christian+intitle${query}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
      );
      const response = apiBooks?.data;
      const searchedBook = response.items;
      setFilteredBooks(searchedBook);
      setQuery("");

      console.log(searchedBook);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Banner>
        <div className="bg">
          <form onSubmit={handleSearch}>
            <div>
              <input
                className="sm"
                placeholder="Search for books and Author"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <button type="submit" className="bt-sm">
                search
              </button>
            </div>
          </form>
        </div>
      </Banner>
      <CardWrap>
        <div className="card-wrapper">
          {filterBooks && filterBooks.length > 0 && filterBooks !== null ? (
            filterBooks.map((filterBook) => (
              <div className="card shadow-sm" key={filterBook.id}>
                <Link to={`/books/${filterBook.id}`}>
                  <div className="img-container">
                    <img
                      src={filterBook.volumeInfo.imageLinks?.smallThumbnail}
                      className="shadow-sm "
                      alt="pix"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h6 className="card-title">{filterBook.volumeInfo.title}</h6>
                  <small className="card-title">
                    {/* {filterBook.volumeInfo.subtitle} */}
                  </small>
                  {filterBook?.volumeInfo?.authors?.map((author) => (
                    <span key={author}>{author}</span>
                  ))}
                  <a
                    href={`${filterBook.volumeInfo?.previewLink}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    learn more
                  </a>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="loading">
                {loading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    color="blue"
                    filter="blue"
                    size="2x"
                  />
                ) : hasSearched ? (
                  "book not found"
                ) : (
                  "Please, search something"
                )}
              </div>
            </>
          )}
        </div>
      </CardWrap>
    </>
  );
}
