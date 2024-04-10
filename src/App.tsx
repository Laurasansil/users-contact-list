import "tailwindcss/tailwind.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { SelectedUserProvider } from "./services/context/SelectedUserContext";

function App() {
  return (
    <SelectedUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:uuid" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SelectedUserProvider>
  );
}

export default App;
