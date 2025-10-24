import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import panda from "../../assets/20251011_0510_image.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default function CreateAccount() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/platform/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f2f5f8] items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl 2xl:max-w-screen-2xl shadow-none md:shadow-lg rounded-none md:rounded-3xl overflow-hidden">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-28 py-10 bg-white">
           <img
                src={logo}
                alt="Logo"
                className="h-8 w-32 object-contain"
              />

          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-8 text-gray-800">
           Sign In
          </h2>

          <button className="flex items-center justify-center gap-3 border border-gray-300 py-3 2xl:py-4 rounded-lg font-medium hover:bg-gray-50 transition text-base 2xl:text-lg">
            <FcGoogle className="text-xl 2xl:text-2xl" />
            Sign in with Google
          </button>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="text-gray-500 text-sm 2xl:text-base">OR</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 2xl:gap-6">
           

            <div>
              <label className="block text-sm 2xl:text-base font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 2xl:py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
              />
            </div>

            <div>
              <label className="block text-sm 2xl:text-base font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Secret passkey"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 2xl:py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
              />
            </div>

            <button
              type="submit"
              className="inline-block rounded-full bg-gradient-to-r from-[#CD2574] to-[#E46708] px-10 md:px-12 py-4 2xl:py-5 font-medium text-white shadow-sm hover:from-[#E46708] hover:to-[#CD2574] focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:outline-none text-lg 2xl:text-xl"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm 2xl:text-base text-gray-500 mt-4">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-orange-500 hover:underline">terms of services</a> and{' '}
            <a href="#" className="text-orange-500 hover:underline">privacy policy</a>.
          </p>

          <p className="text-sm 2xl:text-base mt-4">
            Don't have an account?{' '}
            <Link
              to="/signup" href="#" className="text-orange-500 font-medium hover:underline">Sign up</Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-white p-6 2xl:p-10">
          <div className="relative bg-gray-100 rounded-3xl overflow-hidden w-[85%] lg:w-[75%] 2xl:w-[70%] h-[60vh] lg:h-[75%] 2xl:h-[80%] shadow-md">
            <img
              src={panda}
              alt="Designer working"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 text-white drop-shadow-lg">
              <h3 className="text-xl md:text-2xl 2xl:text-3xl font-semibold leading-snug">
                Achieve your academic goals with {' '}
                <span className="text-orange-500">learning paths,interactive</span>
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
