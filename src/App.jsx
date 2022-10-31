import "./index.css";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
