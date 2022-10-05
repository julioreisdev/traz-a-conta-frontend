import { FC } from "react";
import TablesList from "../../pages-sections/dashboard/tablesList";
import { Container } from "./style";

const Dashboard: FC = () => {
  return (
    <Container>
      <TablesList />
    </Container>
  );
};

export default Dashboard;
