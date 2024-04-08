import "tailwindcss/tailwind.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/:uuid" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
