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

export const TableContainerUnit = styled.div`
  width: 100%;
  margin: 0 0 1rem 0;
  @media (min-width: 0) and (max-width: 520px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

interface ITableProps {
  radius: string;
}

export const Table = styled.div<ITableProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  padding: 0.5rem;
  background-color: #4682b4;
  border-radius: ${(props) => props.radius};

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
`;

export const TableOption = styled.div`
  width: 100%;
  background-color: #fdfdfd;

  select {
    border: 1px solid #ccc;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    color: #4682b4;
    font-weight: 400;
  }
`;

export const ButtonsOptionsTable = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    cursor: pointer;
    border: 1px solid #229954;
    background-color: #229954;
    border-radius: 2px;
    color: #fdfdfd;
    font-size: 1rem;
    width: 49%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LinkBalance = styled.div`
  width: 49%;
`;
