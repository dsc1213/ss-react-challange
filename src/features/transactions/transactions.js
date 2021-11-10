import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, setFilters, setFilterData } from "./redux/transactionSlice";
import Grid from "../../components/Grid/grid";
import Filters from "../../components/Filters/filters";
import { headers } from "./constants";
import "./transactions.css";

const Transactions = () => {
  const dispatch = useDispatch();

  const { data, filteredData, loading, filters } = useSelector((state) => {
    return state.transactions;
  });
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, [data.length, dispatch]);
  const onFilterChange = (filterData) => {
    dispatch(setFilters(filterData.filters));
    dispatch(setFilterData(filterData));
  };

  return (
    <div className={"transactions-wrapper"}>
      <h1>My Transactions </h1>
      {loading && <div>loading...</div>}
      {!loading && (
        <div className={"transactions-body"}>
          <div className="filters-wrapper">
            <Filters
              data={filters}
              headers={headers}
              onFilterChange={(filters) => onFilterChange(filters)}
            />
          </div>
          <div className="grid-wrapper">
            <Grid headers={headers} data={filteredData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
