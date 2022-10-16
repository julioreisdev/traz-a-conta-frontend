import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  open: boolean;
  close: () => void;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const Confirm: FC<IProps> = ({
  open,
  close,
  setConfirm,
  message,
}) => {
  return (
    <Container display={open ? "flex" : "none"}>
      <ConfirmContainer>
        <p>{message}</p>
        <div>
          <button
            onClick={() => {
              close();
            }}
          >
            Não
          </button>
          <button
            onClick={() => {
              setConfirm(true);
              close();
            }}
          >
            Sim
          </button>
        </div>
      </ConfirmContainer>
    </Container>
  );
};

interface IContainer {
  display: string;
}

const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;

const ConfirmContainer = styled.div`
  width: 250px;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #fdfdfd;

  p {
    font-weight: bold;
    color: #666;
    text-align: center;
  }

  div {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0.3rem;
      width: 49%;
      color: #777;
      font-weight: bold;
      background-color: #fdfdfd;
      border: 1px solid #ccc;
    }
  }
`;

export default Confirm;
