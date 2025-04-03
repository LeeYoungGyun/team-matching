import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TeamMatching from "./pages/TeamMatching";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="pages/teamMatching" element={<TeamMatching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
