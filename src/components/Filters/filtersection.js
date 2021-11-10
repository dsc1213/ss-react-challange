import React from "react";
import "./filters.css";

const Filtersection = (props) => {
  const { data = {}, parentKey, title, onFilterChange, filters } = props;

  return (
    <div key={`${parentKey}-wrapper`} className={"flter-section"}>
      <h4>{title}</h4>
      {Object.keys(data).map((d) => {
        return (
          <div className="filtersecion" key={`${parentKey}-wrapper-${d}`}>
            <input
              type="checkbox"
              id={d}
              name={d}
              value={d}
              checked={filters[d]}
              onClick={(e) => onFilterChange(e.target.checked, d)}
            />
            <label for={d}>{d}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Filtersection;
