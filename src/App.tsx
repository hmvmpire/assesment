import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { List } from "./Pages/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} replace />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
