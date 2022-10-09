import React, { FC } from "react";
import List from "../../pages-sections/Tables/List";

interface IPropsTables {
  setBalanceId: React.Dispatch<React.SetStateAction<number>>
}

const Tables: FC<IPropsTables> = ({setBalanceId}) => {
  return (
    <>
      <List setBalanceId={setBalanceId} />
    </>
  );
};

export default Tables;
