import { FC, useState } from "react";
import {
  ButtonsOptionsTable,
  Container,
  LinkBalance,
  Table,
  TableContainerUnit,
  TableOption,
  TablesContainer,
} from "./style";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import {
  AddContainer,
  FormAddSimple,
  ListContainer,
  Message,
} from "../../style";
import { ThreeDots } from "react-loader-spinner";
import { useTables } from "../../hooks/useTables";
import { api, getHeaders } from "../../utils/api";
import useSWR, { useSWRConfig } from "swr";
import { ITable } from "../../interfaces/tables.interface";
import { useProducts } from "../../hooks/useProducts";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface IPropsTablesList {
  setBalanceId: React.Dispatch<React.SetStateAction<number>>;
}

const List: FC<IPropsTablesList> = ({ setBalanceId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addTable, setAddTable] = useState<boolean>(false);
  const [table, setTable] = useState("");
  const [message, setMessage] = useState("");
  const { tablesList } = useTables();
  const { productsList } = useProducts();
  const { mutate } = useSWRConfig();

  function createTable(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      description: table,
    };

    api
      .post("/companies/tables", data, { headers: getHeaders() })
      .then((res) => {
        mutate("/companies/tables/");
        setAddTable(false);
        setTable("");
        setMessage("");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setMessage("Mesa já cadastrada!");
        } else {
          setMessage("Não foi possível cadastrar mesa!");
        }
      })
      .finally(() => setLoading(false));
  }

  function TableContainer(props: { table: ITable }) {
    const [optionsIsOpen, setOptionsIsOpen] = useState(false);
    const [loadingRequest, setLoadingRequest] = useState<boolean>(false);
    const [messageAddRequest, setMessageAddRequest] = useState("");
    const [messageColor, setMessageColor] = useState("");
    const [productIdSelected, setProductIdSelected] = useState<number>(0);

    function createRequest(e: any) {
      e.preventDefault();

      if (productIdSelected === 0) {
        setMessageAddRequest("Selecione um produto!");
        setMessageColor("red");
        return;
      }
      setLoadingRequest(true);
      const data = { tableId: props.table.id, productId: productIdSelected };
      api
        .post("/requests", data, { headers: getHeaders() })
        .then((res) => {
          /* mutate("/companies/tables/"); */
          setMessageAddRequest(
            `Pedido adicionado a ${props.table.description}`
          );
          setMessageColor("green");
          setProductIdSelected(0);
          setTimeout(() => {
            setMessageAddRequest("");
          }, 2000);
        })
        .catch((err) => {
          setMessageAddRequest("Não foi possível adicionar esse pedido");
          setMessageColor("red");
        })
        .finally(() => setLoadingRequest(false));
    }

    return (
      <TableContainerUnit>
        <Table
          radius={optionsIsOpen ? "0" : "10px"}
          onClick={(e) => {
            e.stopPropagation();
            setOptionsIsOpen(!optionsIsOpen);
          }}
        >
          <p>{props.table.description}</p>
          <div>
            <DeleteOutlineIcon color={"action"} />
          </div>
        </Table>
        {optionsIsOpen && (
          <TableOption>
            <select
              value={productIdSelected}
              onChange={(e) => {
                setProductIdSelected(Number(e.target.value));
              }}
            >
              <option value={0}></option>
              {productsList?.map((product, index: number) => (
                <option key={index} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            <Message color={messageColor}>{messageAddRequest}</Message>
            <ButtonsOptionsTable>
              <button
                disabled={loadingRequest}
                onClick={(e) => createRequest(e)}
              >
                <ShoppingBasketIcon
                  sx={{ fontSize: "1rem", marginRight: "0.5rem" }}
                />
                {loadingRequest ? (
                  <ThreeDots color="#555" width={20} height={20} />
                ) : (
                  "Adicionar"
                )}
              </button>
              <LinkBalance
                onClick={() => {
                  setBalanceId(props.table.id);
                }}
              >
                <Link className="linkBalance" to={"/balance"}>
                  <BookmarkAddedIcon
                    sx={{ fontSize: "1rem", marginRight: "0.5rem" }}
                  />
                  Conta
                </Link>
              </LinkBalance>
            </ButtonsOptionsTable>
          </TableOption>
        )}
      </TableContainerUnit>
    );
  }

  return (
    <Container>
      <TablesContainer>
        <>
          <AddContainer>
            <button onClick={() => setAddTable(!addTable)}>
              {" "}
              <TableRestaurantIcon sx={{ marginRight: "0.5rem" }} /> Adicionar
              Mesa
            </button>
          </AddContainer>
          {addTable && (
            <FormAddSimple
              inputWidth="78%"
              buttonWidth="18%"
              flexDirection="row"
              onSubmit={(e) => createTable(e)}
            >
              <input
                placeholder="N°/ Descrição da mesa"
                required
                type={"text"}
                value={table}
                onChange={(e) => {
                  setTable(e.target.value);
                }}
              ></input>
              <button disabled={loading}>
                {loading ? (
                  <ThreeDots color="#555" width={20} height={20} />
                ) : (
                  "Salvar"
                )}
              </button>
            </FormAddSimple>
          )}
          {addTable && <Message color="red">{message}</Message>}
        </>
        <ListContainer>
          {tablesList?.map((table: ITable, index: number) => (
            <TableContainer key={index} table={table} />
          ))}
        </ListContainer>
      </TablesContainer>
    </Container>
  );
};

export default List;
