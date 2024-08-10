import React, { useState } from "react";
import LinkTree from "../../images/Linktree New 2022.png";
import pic_10 from "../../images/pic_10.png";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import google_pic from "../../images/google_pic.png";
import apple_pic from "../../images/apple_pic.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const { setToken } = useAuth();
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("The email does not look right. Try again.");
      return;
    }
    setEmailError("");
    try {
      const response = await api.post("/auth/register", {
        email,
        password,
      });
      setToken(response.data.token);
      navigate("/profile");
    } catch (error) {
      console.error("There was an error!", error.response.data.message);
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2  ">
        <div className="w-[150px] h-[150px] ml-10">
          <Link to="/">
            <img src={LinkTree} alt="" />
          </Link>
        </div>

        <div>
          <p className="text-5xl font-extrabold mb-6">Join Linktree</p>
          <p className="text-gray-500">Sign up for free!</p>
        </div>
        <div>
          <div className="flex justify-center items-center mt-[80px] w-[600px] ml-20 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center">
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!validateEmail(e.target.value)) {
                      setEmailError(
                        "The email does not look right. Try again."
                      );
                    } else setEmailError("");
                  }}
                  className="h-12 border-none bg-[rgb(246,247,245)] p-2 rounded-md w-[560px]"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-left w-full">{emailError}</p>
                )}
              </div>

              <div className="flex flex-col items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (password.length >= 8)
                      setPasswordError(
                        "Password must be at least 8 characters"
                      );
                    else setPasswordError("");
                  }}
                  className="h-12 border-none bg-[rgb(246,247,245)] p-2 rounded-md pr-10 w-[560px]"
                  required
                />
                {passwordError && password.length !== 0 && (
                  <p className="text-red-500 text-left w-full">
                    {passwordError}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="absolute right-2 top-[24px] transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className={`w-full py-2 bg-[rgb(129,41,217)] border-none h-[50px] text-white rounded-full ${
                  !isFormValid ? `bg-[rgb(224,226,217)]` : ""
                } `}
                disabled={!isFormValid}
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="w-[600px] ml-20 mt-[40px]">
            <p className="text-center text-gray-500">
              By clicking Create account, you agree to Linktree's privacy
              notice, T&Cs and to receive offers, news and updates.
            </p>
          </div>

          <p className="mt-5">OR</p>

          <div className="w-[580px] ml-20 mt-8 space-y-3">
            <button className="w-full py-2 border border-gray-300 h-[50px] text-black text-[18px] rounded-full font-semibold">
              <div className="inline-flex space-x-4">
                <img
                  src={google_pic}
                  alt=""
                  className="w-5 h-5 py-0 px-0 ml-5 mt-2"
                />
                <span className="mt-1">Sign up with Google</span>
              </div>
            </button>
            <button className="w-full py-2 border border-gray-300 h-[50px] text-black text-[18px] rounded-full font-semibold">
              <div className="inline-flex space-x-1 ml-0">
                <img
                  src={apple_pic}
                  alt=""
                  className="w-10 h-10 py-0 px-0 ml-5 mt-[-4px]"
                />
                <span className="mt-1">Sign up with Apple</span>
              </div>
            </button>
          </div>

          <div className="mt-10 mb-[100px]">
            <span className="text-gray-500">Already have an account?</span>
            <Link to="/login">
              <span className="text-purple-500 underline">Log in</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img src={pic_10} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Signup;
