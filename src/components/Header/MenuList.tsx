import { FC } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuItem } from "../../interfaces/menu-item.interface";
import { ItemOption, MenuItemsContainer, TitleItem } from "./style";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GroupsIcon from "@mui/icons-material/Groups";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface IMenuList {
  open: string;
}

const MenuList: FC<IMenuList> = ({ open }) => {
  const location = useLocation();

  const currentRoute = location.pathname;
  const authRoutes = ["/", "/register", "/login"].includes(currentRoute);
  const master = localStorage.getItem("tac_master");

  let items: MenuItem[] | [] = [
    {
      route: "/tables",
      icon: <TableRestaurantIcon />,
      name: "Mesas",
    },
  ];

  const authItems: MenuItem[] | [] = [
    {
      route: "/attendants",
      icon: <GroupsIcon />,
      name: "Atendentes",
    },
    {
      route: "/products",
      icon: <ShoppingBasketIcon />,
      name: "Produtos",
    },
  ];

  master === "true" && items.push(...authItems);

  items.push({
    route: "/",
    icon: <ExitToAppIcon />,
    name: "Sair",
  });

  if (authRoutes) {
    items = [
      {
        link: "https://github.com/julioreisdev",
        icon: <GitHubIcon />,
        name: "Github",
      },
      {
        link: "https://www.youtube.com/channel/UCMB5UxKMgEBlGwcdLi6Ordg/videos",
        icon: <YouTubeIcon />,
        name: "YouTube",
      },
      {
        link: "https://www.linkedin.com/in/j%C3%BAlio-reis-67a36722b/",
        icon: <LinkedInIcon />,
        name: "LinkedIn",
      },
    ];
  }

  function Item(props: { item: MenuItem }) {
    return (
      <ItemOption>
        {props.item.link ? (
          <a href={props.item.link} target="_blank" rel="noreferrer">
            {" "}
            <div>
              <>{props.item.icon}</>
              <TitleItem>{props.item.name}</TitleItem>
            </div>{" "}
          </a>
        ) : (
          props.item.route && (
            <Link className="link" to={props.item.route}>
              <div>
                <>{props.item.icon}</>
                <TitleItem>{props.item.name}</TitleItem>
              </div>
            </Link>
          )
        )}
      </ItemOption>
    );
  }

  return (
    <MenuItemsContainer display={open}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </MenuItemsContainer>
  );
};

export default MenuList;
