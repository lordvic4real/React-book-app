// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { UserContainer } from "./people";
// import Star from "../images/download.jpg";

// export default function Person({ match }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState();

//   const {
//     params: { personId },
//   } = match;

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/people/${personId}`, {})
//       .then((res) => res.json())
//       .then((response) => {
//         setData(response);
//         setIsLoading(false);
//         console.log(`https://swapi.dev/api/people/${personId}`);
//       })
//       .catch((error) => console.log(error));
//   }, [personId]);

//   return (
//     <>
//       {!isLoading && (
//         <UserContainer>
//           <div className="flex mb-4">
//             <div>
//               <h1>Name: {data.name}</h1>
//               <h2>Height: {data.height}</h2>
//               <h2>Mass: {data.mass}</h2>
//               <h2>Hair Color: {data.hair_color}</h2>
//               <h2>Skin Color: {data.skin_color}</h2>
//               <h2>Eye Color: {data.eye_color}</h2>
//               <h2>Birth Year: {data.birth_year}</h2>
//               <h2>Gender: {data.gender}</h2>
//             </div>
//             <div>
//               <img src={Star} />
//             </div>
//           </div>
//           <Link to="/">Back to dashboard</Link>
//         </UserContainer>
//       )}
//     </>
//   );
// }
