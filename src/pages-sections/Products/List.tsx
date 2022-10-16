import { FC, useState } from "react";
import {
  AddContainer,
  FormAddSimple,
  ListContainer,
  Message,
} from "../../style";
import { Container, Product, ProductsContainer } from "./style";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ThreeDots } from "react-loader-spinner";
import { api, getHeaders } from "../../utils/api";
import useSWR, { useSWRConfig } from "swr";
import { useProducts } from "../../hooks/useProducts";
import { IProduct } from "../../interfaces/products.interface";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const List: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [productAmount, setProductAmount] = useState<string>("");
  const [message, setMessage] = useState("");
  const { productsList } = useProducts();
  const { mutate } = useSWRConfig();
  function createProduct(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: productName,
      amount: productAmount,
    };

    api
      .post("/companies/products", data, { headers: getHeaders() })
      .then((res) => {
        mutate("/companies/products/");
        setAddProduct(false);
        setProductName("");
        setProductAmount("");
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
      <ProductsContainer>
        <>
          <AddContainer>
            <button onClick={() => setAddProduct(!addProduct)}>
              {" "}
              <ShoppingBasketIcon sx={{ marginRight: "0.5rem" }} /> Adicionar
              Produto
            </button>
          </AddContainer>
          {addProduct && (
            <FormAddSimple
              inputMarginBottom="0.5rem"
              inputWidth="100%"
              buttonWidth="20%"
              flexDirection="column"
              onSubmit={(e) => createProduct(e)}
            >
              <input
                placeholder="Nome do produto"
                required
                type={"text"}
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              ></input>
              <input
                placeholder="Preço"
                required
                type={"number"}
                value={productAmount}
                onChange={(e) => {
                  setProductAmount(e.target.value);
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
          {addProduct && <Message color="red">{message}</Message>}
        </>
        <ListContainer>
          {productsList?.map((product: IProduct, index: number) => (
            <Product key={index}>
              <p>{product.name} - R$ {product.amount}</p>
              <div>
                <DeleteOutlineIcon color={'action'} />
              </div>
            </Product>
          ))}
        </ListContainer>
      </ProductsContainer>
    </Container>
  );
};

export default List;
