import React from "react";
import "./grid.css";

/*
  data = {
			"account": "85225264",
			"accountName": "Savings Account",
			"mask": "0124",
			"amount": 588.59,
			"transactionType": "deposit",
			"currencyCode": "PAB USD",
			"currencyName": "Liberian Dollar",
			"currencySymbol": "лв",
			"iban": "NO2607790970023",
			"bic": "YWGIGPX1"
		}
*/
const Tabledata = (props) => {
  const { data, headers } = props;
  return (
    <>
      {data.map((d, i) => {
        const { accountName, transactionType } = d;
        return (
          <tr key={`${accountName}-${transactionType}-${i}`}>
            {headers.map((header, j) => {
              const { field: key, valRenderer = (val) => val } = header;
              return (
                <td key={`${key}-data-${i}-${j}`}>{valRenderer(d[key])}</td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default Tabledata;
