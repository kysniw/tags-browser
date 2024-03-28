import { useEffect } from "react";
import TagsTable from "./components/TagsTable";
import { useTagsContext } from "./context/TagsContext";

function App() {
  const { getTags } = useTagsContext();

  useEffect(() => {
    getTags();
  }, [getTags]);

  return (
    <div
      className="h-screen flex items-center justify-center
     bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <TagsTable />
    </div>
  );
}

export default App;
