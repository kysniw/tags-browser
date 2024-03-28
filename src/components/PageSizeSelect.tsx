import { Select, SelectItem } from "@nextui-org/select";
import React from "react";

const PageSizeSelect = () => {
  return (
    <Select label="Tags per page" labelPlacement="outside-left">
      <SelectItem key={1} value={10}>
        10
      </SelectItem>
      <SelectItem key={2} value={25}>
        25
      </SelectItem>
      <SelectItem key={3} value={100}>
        100
      </SelectItem>
    </Select>
  );
};

export default PageSizeSelect;
