import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularMovie from "./pages/PopularMovie";
import PopularPeople from "./pages/PopularPeople";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/Navigation/Navigation";
import PersonProfilePage from "./pages/PersonProfile";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PopularMovie />}></Route>
        <Route path="/movies" element={<PopularMovie />}></Route>
        <Route path="/people" element={<PopularPeople />}></Route>
        <Route
          path="/peopleProfile/:id"
          element={<PersonProfilePage />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
