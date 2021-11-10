import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./transactionApi";
const requiredFilters = ["accountName", "transactionType"];
const initialState = {
  data: [],
  filteredData: [],
  filters: {},
  transactionDetaislData: {},
  loading: false,
};

export const getData = createAsyncThunk(
  "transactions/getData",
  async (_, thunkAPI) => {
    try {
      const response = await fetchData();
      const { transactions } = response?.data || {};
      thunkAPI.dispatch(setDefaultFilter(transactions));
      return transactions;
    } catch (err) {
      console.error(err);
    }
  }
);

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setFilterData: (state, action = {}) => {
      const { payload: { data, filters } = {} } = action;
      if (filters) {
        // { accountName: {}, transactionType: {}}
        const formattedFilters = Object.keys({ ...filters }).reduce(
          (acc, key) => {
            const d = filters[key];
            acc[key] = Object.keys(d).filter((m) => d[m]);
            return acc;
          },
          {}
        );
        // console.log(formattedFilters);
        const filteredData = data.filter((d) => {
          let cond1 = true;
          let cond2 = true;
          if (
            formattedFilters.accountName.length > 0 &&
            formattedFilters.accountName.indexOf(d.accountName) === -1
          ) {
            cond1 = false;
          }
          if (
            formattedFilters.transactionType.length > 0 &&
            formattedFilters.transactionType.indexOf(d.transactionType) === -1
          ) {
            cond2 = false;
          }
          return cond1 && cond2;
        });
        state.filteredData = filteredData;
      }
    },
    setDefaultFilter: (state, action = {}) => {
      const { payload } = action;
      const transactionDataById = {};
      let filters = {};
      payload.forEach((d) => {
        if (!transactionDataById[d.account]) {
          transactionDataById[d.account] = d;
        }
        requiredFilters.forEach((f) => {
          if (!filters[f]) filters[f] = {};
          filters[f][d[f]] = false;
        });
      });
      state.transactionDetaislData = transactionDataById;
      state.filters = filters;
    },
    setFilters: (state, action = {}) => {
      const { payload } = action;
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
      });
  },
});

export const { setFilterData, setFilters, setDefaultFilter } =
  transactionSlice.actions;

export default transactionSlice.reducer;
