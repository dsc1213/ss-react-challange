import data from "../../../data/data.json";
export const fetchData = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: Object.assign({}, data) }), 0)
  );
};
