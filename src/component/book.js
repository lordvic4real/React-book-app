import React from "react";
import { Link } from "react-router-dom";

export default function MyBook({ book }) {
  return (
    <>
      <div className="card shadow-sm" key={book.id}>
        <div>
          <Link to={`/books/${book.id}`}>
            <div className="img-container">
              <img src={book.volumeInfo.imageLinks?.smallThumbnail} />
            </div>
          </Link>
          <div className="card-body">
            <h2 className="card-title">{book.volumeInfo.title}</h2>
            {book.volumeInfo?.authors?.map((author) => (
              <span key={author}>{author}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
