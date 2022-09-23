import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <h1>You're using this wrong!</h1>
      <p>
        Even though there is a vite command in this project, vite is just there
        as a build tool.
      </p>
      <p>To actually use this, run the storybook command.</p>
    </div>
  </React.StrictMode>
);
