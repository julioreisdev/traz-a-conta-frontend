import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
`;

export const AddContainer = styled.div`
  margin: 0 0 1rem 0;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 10px;
    color: #4682b4;
    font-weight: bold;
    padding: 0.5rem;
    border: 1px dashed #4682b4;
    background-color: transparent;
    cursor: pointer;
  }
`;

interface IFormAddSimple {
  flexDirection: string
  inputWidth: string
  buttonWidth: string
  inputMarginBottom?: string
}

export const FormAddSimple = styled.form<IFormAddSimple>`
  margin-bottom: 0.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  input {
    margin-bottom: ${(props) => props.inputMarginBottom};
    width: ${(props) => props.inputWidth};
    outline: none;

    ::placeholder {
      color: #4682b4;
    }
  }

  button {
    width: ${(props) => props.buttonWidth};
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

interface IMessage {
  color: string;
}

export const Message = styled.p<IMessage>`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 0.8rem;
`;

export const ListContainer = styled.div`
  width: 100%;
  margin: 2rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;