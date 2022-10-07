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

export const FormAddTable = styled.form`
  margin-bottom: 0.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 78%;
    outline: none;

    ::placeholder {
      color: #4682b4;
    }
  }

  button {
    width: 18%;
    background-color: #fdfdfd;
    transition: 0.1s all;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      color: #fdfdfd;
      background-color: #4682b4;
    }
  }

  input,
  button {
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid #4682b4;
    color: #4682b4;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  margin: 2rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

interface IMessage {
  color: string;
}

export const Message = styled.p<IMessage>`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 0.8rem;
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
    margin: 0 0 1rem 0;
  }
`;
