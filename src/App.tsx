import { FC, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { Container } from "./style";
import Tables from "./pages/Tables/Tables";
import Header from "./components/Header/Header";
import Attendants from "./pages/Attendants/Attendants";
import Products from "./pages/Products/Products";

const App: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const master = localStorage.getItem("tac_master");
  return (
    <Container
      onClick={() => {
        menuIsOpen && setMenuIsOpen(false);
      }}
    >
      <BrowserRouter>
        <Header
          menuIsOpen={menuIsOpen}
          setMenuClose={() => setMenuIsOpen(!menuIsOpen)}
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tables" element={<Tables />} />
          {master === "true" && (
            <>
              <Route path="/attendants" element={<Attendants />} />
              <Route path="/products" element={<Products />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
