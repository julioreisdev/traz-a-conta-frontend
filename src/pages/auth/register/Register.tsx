import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertErroForm, Container, FormContainer } from "../style";
import { ThreeDots } from "react-loader-spinner";
import { api } from "../../../utils/api";

const Register: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [url, setUrl] = useState<string>(
    "https://icons.iconarchive.com/icons/graphicloads/flat-finance/128/world-stat-icon.png"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const navigate = useNavigate();

  function register(e: any) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const data = {
      name,
      email,
      password,
      url,
    };

    api
      .post("/companies/register", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setAlertMessage("E-mail já cadastrado!");
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
        <h1>Cadastre-se</h1>
        <form onSubmit={(e) => register(e)}>
          <input
            placeholder="Nome da empresa"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type={"text"}
            required
          />
          <input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              "Cadastrar"
            )}
          </button>
        </form>
        <span>
          <Link className="link" to={"/"}>
            Faça login
          </Link>
        </span>
      </FormContainer>
    </Container>
  );
};

export default Register;
