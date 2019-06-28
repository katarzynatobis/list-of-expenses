import React from "react";

interface Props {
  sumPln: number;
  sumEur: string;
}

export const Summary: React.SFC<Props> = ({ sumEur, sumPln }) => {
  return (
    <p>
      Sum: {sumPln} PLN ({sumEur} EUR)
    </p>
  );
};
