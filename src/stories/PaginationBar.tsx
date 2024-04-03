import { Pagination } from "@nextui-org/pagination";
import React from "react";
import { useTagsContext } from "../context/TagsContext";

const PaginationBar = () => {
  const { queryParams, handleChangeParams, tags } = useTagsContext();

  const total = tags?.total ? Math.ceil(tags.total / queryParams.pagesize) : 1;

  const onPaginationChange = (page: number) => {
    handleChangeParams({ ...queryParams, page });
  };

  return (
    <div className="flex justify-center items-center">
      <Pagination
        color="warning"
        showControls
        isCompact
        page={queryParams.page}
        total={total}
        onChange={onPaginationChange}
      />
    </div>
  );
};

export default PaginationBar;
