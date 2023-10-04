import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/login.jpg";
import elogo from "../images/elogo.svg";
import plogo from "../images/padlock 1.svg";
import hide from "../images/hide.svg";
import show from "../images/show.svg";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "employee") {
      navigate("/employee");
    }
  };

  const handleRole = (e) => {
    setRole(e.target.value);
    console.log(role);
  };

  return (
    <div className="login-container flex">
      <div className="img w-1/2 h-full bg-cover">
        <img src={img1} alt="" />
      </div>
      <div className="content w-1/2">
        <div className="content-container flex flex-col font-sans mt-28 mx-28 ">
          <div className="heading text-3xl font-semibold">Sign in</div>
          <div className=" register-redirect mt-5 flex flex-col">
            <div>If you don't have an account register</div>
            <div>
              You can{" "}
              <Link to="/signup">
                <span className="font-bold text-orange-600">
                  Register here !
                </span>
              </Link>
            </div>
            <form onSubmit={submitHandler}>
              <div className="input-field flex flex-col mt-5 gap-3">
                <div className="role">
                  <div className="text font-medium mb-3">Role</div>
                  <select
                    value={role}
                    onChange={handleRole}
                    onClick={() => {
                      setEmailFocus(false);
                      setPassFocus(false);
                    }}
                    className="bg-gray-100 w-60 h-9 rounded"
                  >
                    <option value="" disabled selected hidden>
                      Select a role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="employee" >Employee</option>
                  </select>
                </div>

                <div className="email mt-3">
                  <div className="text font-medium mb-3">Email</div>
                  <div className="input flex h-6">
                    <img className="w-6 h-6" src={elogo} alt="" />
                    <div className="ml-4">
                      <input
                        type="text"
                        className="focus:outline-none"
                        onFocus={() => {
                          setEmailFocus(true);
                          setPassFocus(false);
                        }}
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  {emailFocus ? (
                    <hr className="mt-2 w-10/12 border-2 border-orange-600" />
                  ) : (
                    <hr className="mt-2 w-10/12 border-2 " />
                  )}
                </div>
                <div className="password mt-3">
                  <div className="text font-medium mb-3">Password</div>
                  <div className="input flex h-6">
                    <img className="w-6 h-6" src={plogo} alt="" />
                    <div className="ml-4 pr-40">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="focus:outline-none "
                        placeholder="Enter password"
                        onFocus={() => {
                          setEmailFocus(false);
                          setPassFocus(true);
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {showPassword ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      >
                        <img src={show} alt="" />{" "}
                      </div>
                    ) : (
                      <img src={hide} alt="" />
                    )}
                  </div>
                  {passFocus ? (
                    <hr className="mt-2 w-10/12 border-2 border-orange-600" />
                  ) : (
                    <hr className="mt-2 w-10/12 border-2 " />
                  )}
                </div>
                <div className="checkbox-text flex justify-between">
                  <div className="checkbox-content">
                    <input type="checkbox" id="logCheck" />
                    <label htmlFor="logCheck" className="text">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="#" className="text mr-20">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-2 w-3/4 mt-16 h-12 bg-orange-600 p-3 text-center ml-8 rounded-full font-medium text-l text-white ">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
