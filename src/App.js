import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularMovie from "./pages/PopularMovie";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PopularMovie />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
