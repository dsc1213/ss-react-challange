import React from "react";
import Tableheader from "./tableheader";
import Tabledata from "./tabledata";
import "./grid.css";

const Grid = ({ headers, data }) => {
  return (
    <table className="transactionsTable">
      <thead>
        <Tableheader data={headers} />
      </thead>
      <tbody>
        <Tabledata headers={headers} data={data} />
      </tbody>
    </table>
  );
};

export default Grid;
