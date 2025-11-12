import { Routes, Route } from "react-router-dom";
import RideSafeLanding from "./components/RideSafeLanding";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RideSafeLanding />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
