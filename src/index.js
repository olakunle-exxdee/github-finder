import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UsersContextProvider } from "./context";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <UsersContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </UsersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
