import { FC, useState } from "react";
import { Container, HeaderContainer, Logo, Menu } from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import MenuList from "./MenuList";
import CloseIcon from "@mui/icons-material/Close";

interface IHeader {
  menuIsOpen: boolean;
  setMenuClose: () => void;
}

const Header: FC<IHeader> = ({ menuIsOpen, setMenuClose }) => {
  const location = useLocation();

  const currentRoute = location.pathname;
  const authRoutes = ["/", "/register", "/login"].includes(currentRoute);

  return (
    <Container>
      <HeaderContainer
        color={authRoutes ? "#4682B4" : "#fdfdfd"}
        bgColor={authRoutes ? "#fdfdfd" : "#4682b4"}
      >
        <Logo>
          <h2>TAC</h2>
          <BookmarkAddedIcon />
        </Logo>
        <Menu>
          <div
            onClick={() => {
              setMenuClose();
            }}
          >
            {!menuIsOpen ? (
              <MenuIcon fontSize={"large"} />
            ) : (
              <CloseIcon fontSize={"large"} />
            )}
          </div>
          <MenuList open={menuIsOpen ? "normal" : "none"} />
        </Menu>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
