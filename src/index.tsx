import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/system";
import TagsProvider from "./context/TagsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <TagsProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </TagsProvider>
    </NextUIProvider>
  </React.StrictMode>
);
