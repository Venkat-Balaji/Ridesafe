import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * HomePage - shown after login/registration
 * - Matches the Landing / Signup UI (dark theme, rounded hero, cards).
 * - Slight differences: greeting, quick actions, recent activity, logout.
 *
 * Replace getUserFromToken() with your real user fetch if you store more info.
 */

const getUserFromToken = (token?: string | null) => {
  // Demo: token is base64(email:password) from fakeAuth used earlier
  if (!token) return null;
  try {
    const decoded = atob(token);
    const email = decoded.split(":")[0] ?? decoded;
    return { name: email.split("@")[0] || "Rider", email };
  } catch {
    return { name: "Rider", email: "user@demo.com" };
  }
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      // not logged in -> redirect to login
      navigate("/login", { replace: true });
      return;
    }
    const u = getUserFromToken(token);
    setUser(u);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white/6 flex items-center justify-center">
              <svg className="w-4 h-4 text-slate-200" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-semibold">BikeSafe</span>
            <nav className="ml-6 hidden md:flex gap-6 text-sm text-slate-300">
              <Link to="/home" className="hover:underline">Home</Link>
              <Link to="/profile" className="hover:underline">Your Information</Link>
              <Link to="/documents" className="hover:underline">Documents</Link>
              <Link to="/qr" className="hover:underline">QR Code</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/notifications")}
              className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071022] border border-slate-800 text-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M15 17h5l-1.405-1.405" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 17H4l1.405-1.405" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-slate-400">Signed in as</div>
                <div className="text-sm font-medium">{user?.name ?? "Rider"}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0b1220] border border-slate-800 overflow-hidden flex items-center justify-center">
                <img
                  alt="avatar"
                  src={`https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(user?.email ?? "demo")}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handleLogout}
                className="ml-2 text-xs px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-sky-500 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-slate-800/30 to-transparent p-4">
            <div className="rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('/assets/hero.jpg')` }}>
              <div className="bg-[rgba(3,7,12,0.45)] p-8 rounded-xl">
                <div className="max-w-3xl">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ride with Confidence</h2>
                  <p className="mt-3 text-slate-300">
                    Your emergency information and ride tools are available right here. Keep your details updated and share with trusted contacts easily.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/profile" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1720] border border-slate-800 text-sm">
                      Your Information
                    </Link>
                    <Link to="/documents" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1720] border border-slate-800 text-sm">
                      Documents
                    </Link>
                    <Link to="/qr" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1720] border border-slate-800 text-sm">
                      My QR Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key features + Quick status */}
          <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-md bg-[#071022] border border-slate-800">
                  <div className="text-sm font-medium mb-1">Emergency Information Storage</div>
                  <p className="text-xs text-slate-400">Securely store medical history, allergies, and insurance details for quick access.</p>
                </div>
                <div className="p-4 rounded-md bg-[#071022] border border-slate-800">
                  <div className="text-sm font-medium mb-1">Location Sharing</div>
                  <p className="text-xs text-slate-400">Share your real-time location with trusted contacts during rides.</p>
                </div>
                <div className="p-4 rounded-md bg-[#071022] border border-slate-800">
                  <div className="text-sm font-medium mb-1">Emergency Contacts</div>
                  <p className="text-xs text-slate-400">Designate emergency contacts to be notified when needed.</p>
                </div>
              </div>
            </div>

            <aside className="p-4 rounded-md bg-[#071022] border border-slate-800">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-slate-400">Recent Status</div>
                  <div className="mt-2 text-sm font-medium">All systems normal</div>
                  <div className="mt-1 text-xs text-slate-400">Last sync: a few minutes ago</div>
                </div>
              </div>

              <div className="mt-4">
                <Link to="/share" className="block text-center text-sm px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white">
                  Share my Location
                </Link>
              </div>
            </aside>
          </section>

          {/* CTA section */}
          <section className="mt-12 text-center">
            <h4 className="text-lg font-semibold">Ready to keep your rides safer?</h4>
            <p className="text-sm text-slate-400 mt-2">Keep your profile updated and share only when you need to.</p>
            <div className="mt-4">
              <Link to="/profile" className="inline-block px-5 py-2 rounded-full bg-[#0f1720] border border-slate-800">Edit Profile</Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} BikeSafe</div>
            <div className="flex gap-6 text-slate-400">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
