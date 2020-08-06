import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

const products = [
  {
    id: "1",
    name: "Product 1",
    price: "100",
  },
  {
    id: "2",
    name: "Product 2",
    price: "100",
  },
  {
    id: "3",
    name: "Product 3",
    price: "100",
  },
];
const selectAll = (isSelected) => {
  console.log(isSelected);
};

const selectRow = {
  mode: "checkbox",
  clickToSelect: false,

  onSelectAll: selectAll,
};

function App() {
  return (
    <>
      <ToolkitProvider keyField="id" data={products} columns={columns} search>
        {(props) => (
          <div>
            <h3>Table</h3>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              keyField="id"
              data={products}
              selectRow={selectRow}
              condensed
              striped
              columns={columns}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
}

export default App;
