import "tailwindcss/tailwind.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { SelectedUserProvider } from "./services/context/SelectedUserContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <SelectedUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:uuid" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </SelectedUserProvider>
  );
}

export default App;
