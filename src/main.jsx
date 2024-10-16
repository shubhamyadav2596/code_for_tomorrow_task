import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
       <Routes>
       <Route path="/feedback" Component={FeedbackForm} />
       <Route path="/" Component={App} />
       </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
