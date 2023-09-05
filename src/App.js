import "./App.css";
import HomeScreens from "./screens/HomeScreens";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreens />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
