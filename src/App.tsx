import {Routes, Route} from "react-router-dom";
import MainPage from "./page/MainPage";
import DivPage from "./page/DivPage";
import StreakPage from "./page/StreakPage";
import SearchPage from "./page/SearchPage";
import AdminPage from "./page/AdminPage";
import {AdminLoginPage} from "./page/AdminLoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/div" element={<DivPage />} />
      <Route path="/streak" element={<StreakPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/rlaehdghks8383" element={<AdminPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
    </Routes>
  );
}

export default App;
