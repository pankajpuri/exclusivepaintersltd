import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { columns, sortColumn, onSort, jobs } = props;
  return (
    <table className="table table-striped">
      <TableHeader sortColumn={sortColumn} columns={columns} onSort={onSort} />
      <TableBody data={jobs} columns={columns} />
    </table>
  );
};

export default Table;
