import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { QueryParamsProps, TagResponseProps } from "../lib/types";
import { getAllTags } from "../lib/data";

type TagsContextProps = {
  tags: TagResponseProps | null;
  isLoading: boolean;
  getTags: () => void;
  queryParams: QueryParamsProps;
  handleChangeParams: (queryParams: QueryParamsProps) => void;
};

const TagsContext = createContext<TagsContextProps | null>(null);

const TagsProvider = ({ children }: { children: React.ReactNode }) => {
  const [tags, setTags] = useState<TagResponseProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [queryParams, setQueryParams] = useState<QueryParamsProps>({
    sort: "popular",
    order: "desc",
    pagesize: 10,
    page: 1,
  });

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (queryParams.sort) {
      params.set("sort", queryParams.sort);
    }
    if (queryParams.order) {
      params.set("order", queryParams.order);
    }
    if (queryParams.pagesize) {
      params.set("pagesize", queryParams.pagesize.toString());
    }
    if (queryParams.page) {
      params.set("page", queryParams.page.toString());
    }

    return params.toString();
  }, [queryParams]);

  const getTags = useCallback(async () => {
    setIsLoading(true);
    const tagsRes = (await getAllTags(query)) as TagResponseProps;
    setTags(tagsRes);
    setIsLoading(false);
  }, [query]);

  const handleChangeParams = (queryParams: QueryParamsProps) => {
    setQueryParams(queryParams);
  };

  return (
    <TagsContext.Provider
      value={{ tags, isLoading, getTags, queryParams, handleChangeParams }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export const useTagsContext = () => {
  const context = useContext(TagsContext);

  if (!context) {
    throw new Error("You can only use useTagsContext within TagsProvider!");
  }

  return context;
};

export default TagsProvider;
