import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: #fdfdfd;
`;

export const FormContainer = styled.div`
  background-color: #fdfdfd;
  padding: 1rem;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    color: #4682B4;
    font-weight: 500;
    
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 100%;
        margin: 1rem 0 0 0;
        padding: 1rem;
        border-radius: 5px;
        border: none;
        font-size: 1rem;
        border: 1px solid #ccc;
        outline: none;
        color: #888;
        font-weight: 400;

        :focus {
            border-color: #2499ef;
            color: #2499ef;

            ::placeholder {
                color: #2499ef;
            }
        }
    }

    button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        width: 50%;
        margin-top: 1rem;
        padding: 0.75rem;
        border-radius: 5px;
        font-size: 1rem;
        border: none;
        background-color: #4682B4;
        color: #fdfdfd;
        font-weight: bold;

        :hover {
            background-color: #2499ef;
        }
    }
  }

  span {
    margin: 1rem 0 0.5rem 0;
  }

  @media (min-width: 0px) and (max-width: 520px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const AlertErroForm = styled.div`
  color: red;
  margin: 1rem 0 0.5rem 0;
`