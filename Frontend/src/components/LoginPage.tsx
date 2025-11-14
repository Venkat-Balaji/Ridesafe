import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/**
 * LoginPage - mirrors the UI / layout of your SignupPage
 * Drop into src/components and register route /login
 *
 * Replace fakeAuth.login with your real API call when ready.
 */

const fakeAuth = {
  login: async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    if (email === "test@demo.com" && password === "password") {
      return { ok: true, token: "demo-token-123" };
    }
    if (email && password) {
      return { ok: true, token: btoa(email + ":" + password) };
    }
    return { ok: false, error: "Invalid credentials" };
  },
  saveToken: (token: string) => localStorage.setItem("auth_token", token),
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fakeAuth.login(email.trim(), password);
      if (!res.ok) {
        setError(res.error ?? "Login failed.");
        setLoading(false);
        return;
      }
      if (res.token) fakeAuth.saveToken(res.token);
      // navigate to home (or dashboard)
      navigate("/", { replace: true });
    } catch (err: any) {
      setError(err?.message ?? "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col">
      {/* Top bar */}
      <header className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white/6 flex items-center justify-center">
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
            <h1 className="text-2xl font-semibold text-center">Welcome back</h1>
            <p className="text-center text-sm text-slate-400 mt-1">Sign in to your account</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto">
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
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">Password</span>
                  <Link to="/forgot" className="text-sky-400 text-xs hover:underline">
                    Forgot?
                  </Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="mt-2 w-full bg-[#0f1720] border border-slate-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
                />
              </label>

              {error && <div className="text-red-400 text-sm text-center">{error}</div>}

              <button
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow hover:scale-[1.01] transition disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <div className="text-center text-xs text-slate-400 mt-2">
                Don't have an account? <Link to="/signup" className="text-sky-400 hover:underline">Sign up</Link>
              </div>

              <div className="text-center text-xs text-slate-500 mt-4">
                Demo account: <span className="font-medium text-slate-200">test@demo.com / password</span>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BikeSafe
      </footer>
    </div>
  );
};

export default LoginPage;
