import React from "react";
import TagsSearch from "./TagsSearch";
import PageSizeSelect from "./PageSizeSelect";

const TableTopContent = () => {
  return (
    <div className="flex w-full items-stretch gap-4 bg-background bg-opacity-40 rounded-xl px-4 py-2 ">
      <TagsSearch />
      <PageSizeSelect />
    </div>
  );
};

export default TableTopContent;
