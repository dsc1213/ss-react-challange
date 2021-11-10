import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Transactions from "./features/transactions/transactions";
import TransactionDetails from "./features/transactions/transaction-detail";
const history = createBrowserHistory();

const PageRoutes = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/details" element={<TransactionDetails />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
