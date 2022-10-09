import { FC, useState } from "react";
import {
  BalanceContainer,
  BalanceFooter,
  BalanceHeader,
  BalanceList,
  Container,
} from "./style";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useRequests } from "../../hooks/useRequests";
import { api, getHeaders } from "../../utils/api";
import useSWR, { useSWRConfig } from "swr";
import { ThreeDots } from "react-loader-spinner";

interface IPropsTableBalance {
  balanceId: number;
}

const TableBalance: FC<IPropsTableBalance> = ({ balanceId }) => {
  const { requestList } = useRequests(balanceId);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [message, setMessage] = useState("");
  const { mutate } = useSWRConfig();

  function deleteBalance() {
    setLoadingDelete(true);
    api
      .delete(`/requests/${balanceId}`, { headers: getHeaders() })
      .then((res) => {
        mutate(`/requests/${balanceId}`);
      })
      .catch((err) => {
        setMessage("Não foi possível limpar pedidos");
        console.log(err);
      })
      .finally(() => {
        setLoadingDelete(false);
      });
  }

  return (
    <Container>
      <BalanceContainer>
        <BalanceHeader>
          <Link to={"/tables"}>
            <button>Voltar</button>
          </Link>

          {/*  <button>
            <QrCode2OutlinedIcon sx={{ fontSize: "1rem" }} />
          </button> */}
        </BalanceHeader>
        <BalanceList>
          {requestList?.requests.length !== 0 ? (
            requestList?.requests.map((request, index: number) => (
              <div key={index}>
                <ShoppingBasketIcon /> <p>{request.productName}</p>
              </div>
            ))
          ) : (
            <p>Nenhum pedido</p>
          )}
          <h5>{message}</h5>
        </BalanceList>
      </BalanceContainer>
      <BalanceFooter>
        {requestList?.requests.length !== 0 ? (
          <p>
            TOTAL: R$ <>{requestList?.balance}</>
          </p>
        ) : (
          <p>Nenhum produto</p>
        )}

        {requestList?.requests.length !== 0 && (
          <button
            onClick={() => {
              deleteBalance();
            }}
            disabled={loadingDelete}
          >
            {loadingDelete ? (
              <ThreeDots color="#555" width={20} height={20} />
            ) : (
              "Limpar"
            )}
          </button>
        )}
      </BalanceFooter>
    </Container>
  );
};

export default TableBalance;
