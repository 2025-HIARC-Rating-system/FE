import {Routes, Route} from "react-router-dom";
import MainPage from "./page/MainPage";
import TestPage from "./page/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
