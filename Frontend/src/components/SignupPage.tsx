import React, { useState } from "react";

/**
 * SignupPage - React + TypeScript + Tailwind component
 * Drop into a React (TS) project (Vite/CRA) with Tailwind set up.
 *
 * Usage: import SignupPage from "./components/SignupPage"; <SignupPage />
 */

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !email.trim() || !password) {
      setError("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    // Replace this with your API call
    setTimeout(() => {
      setLoading(false);
      alert("Account created (demo).");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col">
      {/* Top bar */}
      <header className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white/6 flex items-center justify-center">
            {/* simple icon */}
            <svg className="w-4 h-4 text-slate-200" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-semibold">BikeSafe</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full px-6">
          <div className="bg-[#0b1220] border border-slate-800 rounded-lg p-10 shadow-lg">
            <h1 className="text-2xl font-semibold text-center">Sign up to create an account</h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto">
              {/* Username */}
              <label className="block text-sm">
                <span className="text-slate-400 text-xs">Username</span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="mt-2 w-full bg-[#0f1720] border border-slate-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
                />
              </label>

              {/* Email */}
              <label className="block text-sm">
                <span className="text-slate-400 text-xs">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="mt-2 w-full bg-[#0f1720] border border-slate-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
                />
              </label>

              {/* Password */}
              <label className="block text-sm">
                <span className="text-slate-400 text-xs">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="mt-2 w-full bg-[#0f1720] border border-slate-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
                />
              </label>

              {/* Confirm */}
              <label className="block text-sm">
                <span className="text-slate-400 text-xs">Confirm Password</span>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Confirm Password"
                  className="mt-2 w-full bg-[#0f1720] border border-slate-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
                />
              </label>

              {/* Error */}
              {error && <div className="text-red-400 text-sm text-center">{error}</div>}

              {/* Button */}
              <button
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow hover:scale-[1.01] transition disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>

              <div className="text-center text-xs text-slate-400 mt-2">
                Already have an account? <a href="/login" className="text-sky-400 hover:underline">Login</a>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer small */}
      <footer className="py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BikeSafe
      </footer>
    </div>
  );
};

export default SignupPage;
