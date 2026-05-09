import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Dog Shelter Management System</h1>
      <p>Frontend is running successfully.</p>
      <ul>
        <li>Dog Intake System</li>
        <li>Medical Records System</li>
        <li>Adoption Management System</li>
        <li>Dog Status Tracking</li>
        <li>Admin Dashboard</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
