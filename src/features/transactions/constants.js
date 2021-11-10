import React from "react";
import { Link } from "react-router-dom";

export const headers = [
  {
    field: "account",
    label: "Account",
    valRenderer: (val) => <Link to={`details?id=${val}`}>{val}</Link>,
  },
  { field: "accountName", label: "AccountName" },
  { field: "amount", label: "Amount" },
  { field: "currencyCode", label: "CurrencyCode" },
  { field: "transactionType", label: "TransactionType" },
];
