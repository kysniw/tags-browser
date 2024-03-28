export type TagResponseProps = {
  error?: string;
  error_id?: number;
  error_message?: string;
  error_name?: string;
  items?: TagProps[];
};

export type TagProps = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

export type QueryParamsProps = {
  sort: "popular" | "name";
  order: "desc" | "asc";
  pagesize: 10 | 25 | 50 | 100;
  page: number;
};
