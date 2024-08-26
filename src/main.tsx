import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";

function Redirect() {
  const location = useLocation();

  // Get the pathname from the current location and construct the new URL
  const redirectTo = `http://localhost:3000${location.pathname}${location.search}`;

  // Perform the redirect using window.location
  window.location.href = redirectTo;

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="redirectBox">
      <a href="https://jaimy.ai">Redirecting...</a>
    </div>
    <Router>
      <Routes>
        <Route path="/*" element={<Redirect />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
