import Login from "./Pages/Login";
import Netflix from "./Pages/Netflix";
import Sign from "./Pages/Sign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
