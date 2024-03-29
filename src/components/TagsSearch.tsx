import { Input } from "@nextui-org/input";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useTagsContext } from "../context/TagsContext";

const TagsSearch = () => {
  const { queryParams, handleChangeParams } = useTagsContext();

  //   const [value, setValue] = useState("");

  const handleInputChange = useDebouncedCallback((term: string) => {
    // if(term && term !== ''){
    console.log(term);
    handleChangeParams({ ...queryParams, inname: term });
    // }
  }, 900);

  return (
    <Input
      label="Search tags by name"
      defaultValue={queryParams.inname?.toString() || ""}
      onValueChange={handleInputChange}
    />
  );
};

export default TagsSearch;
