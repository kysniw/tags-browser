import { Spinner } from "@nextui-org/spinner";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  SortDescriptor,
} from "@nextui-org/table";
import React from "react";
import { useTagsContext } from "../context/TagsContext";
import PageSizeSelect from "./PageSizeSelect";
import PaginationBar from "./PaginationBar";

const TagsTable = () => {
  const { tags, queryParams, handleChangeParams, isLoading } = useTagsContext();

  const error = tags?.error || tags?.error_message || null;
  const sortDescriptor: SortDescriptor = {
    column: queryParams.sort === "popular" ? "count" : "name",
    direction: queryParams.order === "asc" ? "ascending" : "descending",
  };

  const handleSortClick = (sortData: SortDescriptor) => {
    const sort = sortData.column === "count" ? "popular" : "name";
    const order = sortData.direction === "ascending" ? "asc" : "desc";
    handleChangeParams({ ...queryParams, sort, order });
  };

  return (
    <div className="max-w-[40rem] w-full h-full py-10">
      {error && <p className="text-danger font-semibold">{error}</p>}
      <Table
        isHeaderSticky
        aria-label="Table with tags"
        onSortChange={handleSortClick}
        sortDescriptor={sortDescriptor}
        classNames={{
          base: "h-full",
          wrapper: "h-full",
        }}
        topContentPlacement="outside"
        topContent={<PageSizeSelect />}
        bottomContentPlacement="outside"
        bottomContent={<PaginationBar />}
      >
        <TableHeader>
          <TableColumn key="name" allowsSorting>
            Tag
          </TableColumn>
          <TableColumn key="count" allowsSorting>
            Count
          </TableColumn>
        </TableHeader>
        <TableBody
          items={tags?.items || []}
          isLoading={isLoading}
          loadingContent={<Spinner />}
          emptyContent={"No tags to display."}
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TagsTable;
