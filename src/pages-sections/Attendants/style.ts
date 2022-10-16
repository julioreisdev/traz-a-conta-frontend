import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AttendantsContainer = styled.div`
  width: 60%;

  @media (min-width: 0) and (max-width: 920px) {
    width: 90%;
  }
`;

export const Attendant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  background-color: #4682b4;
  border-radius: 10px;
  transition: 0.1s all;

  :hover {
    opacity: 0.8;
  }

  p {
    font-size: 0.9rem;
    font-weight: bold;
    color: #fdfdfd;
  }
`;

