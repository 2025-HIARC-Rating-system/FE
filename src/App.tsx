import {Routes, Route} from "react-router-dom";
import MainPage from "./page/MainPage";
import TestPage from "./page/TestPage";
import DivPage from "./page/DivPage";
import StreakPage from "./page/StreakPage";
import SearchPage from "./page/SearchPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/div" element={<DivPage />} />
      <Route path="/streak" element={<StreakPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
