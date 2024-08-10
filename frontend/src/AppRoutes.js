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
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
function AppRoutes() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pingBackend = async () => {
      try {
        await axios.get("https://ishi-nexo-task.onrender.com");
        setLoading(false);
      } catch (error) {
        console.error("There was an error!", error.response.data.message);
      }
    };
    pingBackend();
  });
  return (
    <Router>
      <div className="App overflow-x-hidden">
        {loading ? (
          <Loader message="The backend has been deployed on Render, which may result in loading times of up to 50 seconds. We appreciate your patience and understanding. Thank you." />
        ) : (
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
        )}
      </div>
    </Router>
  );
}
export default AppRoutes;
