"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Optional: npm install lucide-react

export default function ForgotPassword() {
  const [showCode, setShowCode] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    console.log("Verifying:", { email, code });
    // Add your API logic here
  };

  return (
    <div className="flex min-h-[80vh] 2xl:min-h-[70vh] items-center justify-center bg-[#f8f9fa] p-4">
      <div className="w-full max-w-md rounded-[24px] bg-white p-10 shadow-sm border border-gray-100">
        {/* Header */}
        <h1 className="mb-8 text-3xl font-bold text-gray-900 tracking-tight">
          Forgot Password?
        </h1>

        <form onSubmit={handleVerify} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Verify
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-xl border-2 border-blue-500 px-4 py-3.5 outline-none transition-all focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          {/* Verification Code Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">
                Verification Code
              </label>
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot ?
              </button>
            </div>
            <div className="relative">
              <input
                type={showCode ? "text" : "password"}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="000-000"
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {/* Eye Toggle Icon */}
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCode ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#1a73e8] py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
          >
            Verify
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-gray-600 font-medium">
          Didn’t Get Code?{" "}
          <button className="text-blue-600 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
}
