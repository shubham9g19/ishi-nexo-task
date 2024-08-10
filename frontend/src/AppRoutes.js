import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import { useAuth } from "./context/AuthContext";
import ProfilePage from "./pages/Profile";
import LinkTreePage from "./pages/LinkTree";
function AppRoutes() {
  const { token } = useAuth();
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={token ? <ProfilePage /> : <Navigate to="/signup" />}
          />
          <Route path="/links/:username" element={<LinkTreePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default AppRoutes;
