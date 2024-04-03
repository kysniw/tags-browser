import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import { useTagsContext } from "../context/TagsContext";

const PageSizeSelect = () => {
  const { queryParams, handleChangeParams } = useTagsContext();

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pagesize = parseInt(e.target.value) as 10 | 25 | 50 | 100;
    handleChangeParams({ ...queryParams, pagesize: pagesize });
  };

  return (
    <Select
      label="Tags on page"
      selectedKeys={[queryParams.pagesize.toString()]}
      fullWidth={false}
      onChange={handleSelectionChange}
      classNames={{
        base: "w-fit",
        mainWrapper: "w-32",
      }}
    >
      <SelectItem key={10} value={10}>
        10
      </SelectItem>
      <SelectItem key={25} value={25}>
        25
      </SelectItem>
      <SelectItem key={50} value={50}>
        50
      </SelectItem>
      <SelectItem key={100} value={100}>
        100
      </SelectItem>
    </Select>
  );
};

export default PageSizeSelect;
