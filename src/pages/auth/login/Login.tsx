import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormContainer, AlertErroForm } from "../style";
import { ThreeDots } from "react-loader-spinner";
import { api } from "../../../utils/api";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const navigate = useNavigate();

  function login(e: any) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const data = {
      user: username,
      password,
    };
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("tac_token", res.data.token);
        localStorage.setItem("tac_master", res.data.is_master);
        navigate("/tables");
      })
      .catch((err) => {
        if ([404, 401].includes(err.response.status)) {
          setAlertMessage("Dados inválidos");
        }
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>
        <form onSubmit={(e) => login(e)}>
          <input
            id="user"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={"text"}
            required
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            required
          />
          <AlertErroForm>{alertMessage}</AlertErroForm>
          <button disabled={loading}>
            {loading ? (
              <ThreeDots color="#fff" width={20} height={20} />
            ) : (
              "Entrar"
            )}
          </button>
        </form>
        <span>
          <Link className="link" to={"/register"}>
            Cadastre-se
          </Link>
        </span>
      </FormContainer>
    </Container>
  );
};

export default Login;
