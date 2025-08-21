// src/pages/Register.jsx
import React from "react";
import mascot from '../../assets/drawn.png'
import logo from '../../assets/logo.png'

const Register = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left Section */}
      <div className="bg-[#2c234d] flex flex-col justify-center items-center p-10 text-white">
        <div className="max-w-xs">
          {/* <img
            src={mascot} // Replace with your SVG
            alt="Mascot"
            className="w-60 h-50 mx-auto mb-6"
          /> */}
          <div className="bg-white/10 p-4 rounded-lg mb-4">
            <p className="text-sm mb-2">Ask Joya question about this flashcard</p>
            <div className="flex gap-2 text-xs">
              <span className="bg-[#FFD233] text-black px-2 py-1 rounded">Zimbabwe is a country in...</span>
              <span className="bg-[#00D36C] text-black px-2 py-1 rounded">Explain this</span>
            </div>
          </div>
          <div className="flex justify-between text-sm mt-6">
            <div>
              <p className="font-bold text-lg">92%</p>
              <p className="text-xs text-gray-300">of students improve grades</p>
            </div>
            <div>
              <p className="font-bold text-lg">500+</p>
              <p className="text-xs text-gray-300">Universities</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-300">
            Trusted by NYU, Stanford, Harvard students & more
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <img
            src={logo} // Replace with your logo
            alt="StudyBuddy"
            className="w-32 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-center mb-2 text-[#2c234d]">
            Register
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            We are excited to have you on board. It’s time to ace your exams!
          </p>

          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg mb-4 flex items-center justify-center gap-2 hover:bg-gray-50">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
            Continue with Google
          </button>

          <div className="text-center text-sm text-gray-500 mb-4">Or sign up with email</div>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-xs text-blue-600 mb-4">
            Register with your <span className="font-semibold">.edu</span> email — your school might
            have free StudyFetch access!
          </div>

          <button  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            <a href="/platform/onboarding">
             Continue →
            </a>
           
          </button>

          <div className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </a>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            By logging in, you agree to our{" "}
            <a href="/terms" className="underline">Terms of Service</a> and{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
