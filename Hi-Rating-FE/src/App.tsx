import {Routes, Route} from "react-router-dom";
import MainPage from "./page/MainPage";
import TestPage from "./page/TestPage";
import DivPage from "./page/DivPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/div" element={<DivPage />} />
    </Routes>
  );
}

export default App;
