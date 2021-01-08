import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserContainer = styled.div`
  padding: 5%;
  background: linear-gradient(rgba(3, 37, 65, 0.99), rgba(3, 38, 66, 0.99999));
  color: rgba(255, 241, 207, 0.9);
  .flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  .flex img {
    width: 300px;
  }
  .hr {
    border: 1px solid grey;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
    width: 50%;
    @media (max-width: 767px) {
      width: 100%;
      padding: 4%;
    }
  }
  .link a {
    font-size: 18px;
    transition: all 0.3s ease;
    color: rgba(255, 241, 207, 0.9);
    text-decoration: none;
    margin: 10px;
  }
`;

export default function People() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <UserContainer>
        {!isLoading &&
          data.map((person, index) => {
            return (
              <div key={index} className="flex hr">
                <Link to={`/person/${index + 1}`}>{person.name}</Link>
              </div>
            );
          })}
      </UserContainer>
    </>
  );
}
