// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";

// export default function GoogleBook() {
//   let [responseData, setResponseData] = useState([]);
//   const api = "AIzaSyAD4q1zs_9r0zk0P84-I9ZoP7zWgeEFBTU";
//   const [allBooks, setAllBooks] = useState([]);

//   const fetchData = useCallback(() => {
//     axios({
//       method: "GET",
//       url: `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,

//       params: {
//         language_code: "en",
//       },
//     })
//       .then((response) => {
//         const bookData = response?.data;
//         const books = bookData.items;
//         setAllBooks(books);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h1>Fetching Google Book with React Hooks</h1>
//           <button type="button" onClick={fetchData}>
//             Click for Data
//           </button>
//         </header>
//       </div>
//     </>
//   );
// }
