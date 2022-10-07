import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ListContainer = styled.div`
  width: 60%;

  @media (min-width: 0) and (max-width: 920px) {
    width: 90%;
  }
`;
