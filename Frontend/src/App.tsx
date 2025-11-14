import { Routes, Route } from "react-router-dom";
import RideSafeLanding from "./components/RideSafeLanding";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RideSafeLanding />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />

    </Routes>
  );
}

export default App;
