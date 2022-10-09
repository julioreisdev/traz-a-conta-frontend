import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const BalanceContainer = styled.div`
  width: 60%;
  min-height: calc(100vh - 80px);

  @media (min-width: 0) and (max-width: 920px) {
    width: 90%;
  }
`;

export const BalanceHeader = styled.div`
  button {
    width: 80px;
    padding: 0.5rem;
    border: 1px solid #4682B4;
    background-color: #4682B4;
    border-radius: 8px;
    color: #fdfdfd;
    font-weight: bold;
    :not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`;

export const BalanceList = styled.div`
  padding: 1rem 0 80px 0;

  div {
    color: #4682B4;
    font-weight: bold;
    display: flex;
    align-items: center;

    p {
      margin-left: 0.5rem;
    }
  }
  p {
     text-align: center;
     color: #4682B4;
    }

  h5 {
    margin-top: 1rem;
    color: red;
    font-size: 0.8rem;
    text-align: center;
  }
`

export const BalanceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  background-color: #2499ef;

  button {
    width: 80px;
    border: 1px solid #fdfdfd;
    background-color: #fdfdfd;
    color: #2499ef;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: bold;
    color: #fdfdfd;
  }

  @media (min-width: 0) and (max-width: 920px) {
    width: 100%;
  }
`;