import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
