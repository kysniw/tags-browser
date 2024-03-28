import { Pagination } from "@nextui-org/pagination";
import React from "react";

const PaginationBar = () => {
  return <Pagination isCompact showControls page={1} total={10} />;
};

export default PaginationBar;
