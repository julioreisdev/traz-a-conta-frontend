import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TablesContainer = styled.div`
  width: 60%;

  @media (min-width: 0) and (max-width: 920px) {
    width: 90%;
  }
`;

export const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  padding: 0.5rem;
  background-color: #4682b4;
  border-radius: 10px;
  margin: 0 0.5rem 1rem 0.5rem;
  transition: 0.1s all;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #fdfdfd;
    text-transform: uppercase;
  }

  @media (min-width: 0) and (max-width: 520px) {
    width: 100%;
    height: 100px;
    margin: 0 0 1rem 0;
  }
`;
