import React from "react";
import Filtersection from "./filtersection";
import { useSelector } from "react-redux";
import "./filters.css";

const Filters = (props) => {
  const { data = {}, headers, onFilterChange } = props;
  const { data: originalData, filters } = useSelector(
    (state) => state.transactions
  );
  const onCheckboxClick = (d, key, val) => {
    let newFilters = Object.assign(
      {},
      {
        ...filters,
        [d]: { ...filters[d], [key]: val },
      }
    );
    onFilterChange({ data: originalData, filters: newFilters });
  };

  return (
    <>
      {Object.keys(data).map((d) => (
        <Filtersection
          key={`filtersection-${d}`}
          parentKey={`filtersection-${d}`}
          title={headers?.filter((h) => h.field === d)?.pop().label}
          onFilterChange={(val, key) => onCheckboxClick(d, key, val)}
          filters={filters[d]}
          data={data[d]}
        />
      ))}
    </>
  );
};

export default Filters;
