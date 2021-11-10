import React from "react";
import "./grid.css";

/*
  data = [{
    field: '',
    label: ''
    valueRender: val => val
  }]
*/

const Tableheader = (props) => {
  const { data } = props;
  return (
    <tr>
      {data.map(({ field, label, valueRender = (val) => val }) => (
        <th key={field}>{valueRender(label)}</th>
      ))}
    </tr>
  );
};

export default Tableheader;
