import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Public from "./pages/Public";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* layout - kötelező elem */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
