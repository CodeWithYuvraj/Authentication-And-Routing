import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/profile");
  }, [navigate]);

  const formHandle = async (e) => {
    e.preventDefault();

    let newErrors = {};

   
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Invalid email (must contain @)";
    }

   
    if (!pass.trim()) {
      newErrors.password = "Password is required";
    }

    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setMsg("");

    try {
      const response = await axios.post(
        "https://api.automizeplus.com:8000/v1/user/login",
        {
          email_mobile: email,
          password: pass,
          country_code: "",
          login_type: "website",
          device_token: "wddwedq",
          public_ip_address: "127.0.0.1",
          broswer: "chrome",
          browser_version: "54",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": "hi",
          },
        }
      );

      setMsg(response.data.replyMsg || response.data.replyMSG);

      if (response.data.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setSuccess(true);
        navigate("/profile");
      }
    } catch (err) {
      const apiMsg =
        err.response?.data?.replyMsg ||
        err.response?.data?.replyMSG;

      setMsg(apiMsg || "Login failed");
      setSuccess(false);
    }
  };

  return (
    <div className="flex justify-center h-screen bg-[#14161b] p-28">
      <form
        onSubmit={formHandle}
        className="flex flex-col w-1/3 bg-violet-200 rounded-lg justify-center p-10 gap-10"
      >
        <h1 className="text-blue-950 font-extrabold text-4xl text-center">
          Login
        </h1>

        
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setErrors({});
              setMsg("");
            }}
            placeholder="Enter your email"
            className="w-full border-2 border-gray-800 rounded px-4 py-2 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

       
        <div>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onFocus={() => {
              setErrors({});
              setMsg("");
            }}
            placeholder="Enter password"
            className="w-full border-2 border-gray-800 rounded px-4 py-2 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

       
        {msg && (
          <p
            className={`text-center ${
              success ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

        <button className="bg-green-900 text-white py-3 rounded font-bold active:scale-95">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
