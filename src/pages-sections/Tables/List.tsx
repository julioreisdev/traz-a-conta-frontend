import { FC, useState } from "react";
import { Container, Table, TablesContainer } from "./style";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { AddContainer, FormAddSimple, ListContainer, Message } from "../../style";
import { ThreeDots } from "react-loader-spinner";
import { useTables } from "../../hooks/useTables";
import { api, getHeaders } from "../../utils/api";
import useSWR, { useSWRConfig } from "swr";
import { ITable } from "../../interfaces/tables.interface";

const List: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addTable, setAddTable] = useState<boolean>(false);
  const [table, setTable] = useState("");
  const [message, setMessage] = useState("");
  const { tablesList } = useTables();
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
            <Table key={index}>
              <p>{table.description}</p>
            </Table>
          ))}
        </ListContainer>
      </TablesContainer>
    </Container>
  );
};

export default List;
