import { FC, useState } from "react";
import { Attendant, AttendantsContainer, Container } from "./style";
import { ThreeDots } from "react-loader-spinner";
import { api, getHeaders } from "../../utils/api";
import useSWR, { useSWRConfig } from "swr";
import {
  AddContainer,
  FormAddSimple,
  ListContainer,
  Message,
} from "../../style";
import GroupsIcon from "@mui/icons-material/Groups";
import { useAttendants } from "../../hooks/useAttendants";
import { IAttendants } from "../../interfaces/attendants.interface";

const List: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [addAttendant, setAddAttendant] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { attendantsList } = useAttendants();

  const { mutate } = useSWRConfig();

  function createAttendant(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: username,
      password: password,
    };

    api
      .post("/companies/attendants/register", data, { headers: getHeaders() })
      .then((res) => {
        mutate("/companies/attendants/");
        setAddAttendant(false);
        setUsername("");
        setPassword("");
        setMessage("");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setMessage("Produto já cadastrado!");
        } else {
          setMessage("Não foi possível cadastrar produto!");
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <Container>
      <AttendantsContainer>
        <>
          <AddContainer>
            <button onClick={() => setAddAttendant(!addAttendant)}>
              {" "}
              <GroupsIcon sx={{ marginRight: "0.5rem" }} /> Adicionar atendente
            </button>
          </AddContainer>
          {addAttendant && (
            <FormAddSimple
              inputMarginBottom="0.5rem"
              inputWidth="100%"
              buttonWidth="20%"
              flexDirection="column"
              onSubmit={(e) => createAttendant(e)}
            >
              <input
                placeholder="Nome de usuário"
                required
                type={"text"}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <input
                placeholder="Senha"
                required
                type={"text"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
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
          {addAttendant && <Message color="red">{message}</Message>}
        </>
        <ListContainer>
          {attendantsList?.map((product: IAttendants, index: number) => (
            <Attendant key={index}>
              <p>{product.name}</p>
            </Attendant>
          ))}
        </ListContainer>
      </AttendantsContainer>
    </Container>
  );
};

export default List;
