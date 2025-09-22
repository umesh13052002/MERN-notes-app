import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      if (response.data.success) {
        navigate("/");
      }
      console.log("Signup successful", response.data);
    } catch (error) {
      console.log("Error in signup", error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div onClick={()=>navigate("/")} className="cursor-pointer flex-shrink-0 my-8 text-2xl font-bold text-blue-600">
            MyApp
          </div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="Enter Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none border-gray-300 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none border-gray-300 text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*****"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none border-gray-300 text-sm sm:text-base"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 text-sm sm:text-base"
          >
            Signup
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
