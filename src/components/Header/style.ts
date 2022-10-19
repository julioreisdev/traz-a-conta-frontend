import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
`;

interface IHeaderContainer {
  bgColor: string;
  color: string;
}
export const HeaderContainer = styled.header<IHeaderContainer>`
  display: flex;
  color: ${(props) => props.color};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: ${(props) => props.bgColor};
`;

export const Menu = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

interface IMenuItemsContainer {
  display: string;
}

export const MenuItemsContainer = styled.div<IMenuItemsContainer>`
  display: ${(props) => props.display};
  position: absolute;
  top: 8px;
  left: -200px;
  width: 200px;
  border-radius: 5px;
  background-color: #fdfdfd;
  box-shadow: 0 0 3px #ccc;
`;

export const ItemOption = styled.div`
  padding: 0.5rem;
  border-radius: 5px;

  :hover {
    background-color: #00000008;
  }

  div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #4682b4;
  }
`;

export const TitleItem = styled.h4`
  margin-left: 0.5rem;
`;

export const Company = styled.div`
  display: flex;
  align-items: center;
`
