// src/components/RideSafeLanding.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/react.svg"; // update path to your actual image

const RideSafeLanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f1720] text-slate-100 antialiased font-sans">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            </svg>
          </div>
          <span className="text-lg font-semibold">RideSafe</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300" aria-label="Main navigation">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="hidden md:inline-block px-4 py-1.5 rounded-full bg-slate-700 text-white text-sm hover:bg-slate-600 transition"
            aria-label="Register"
          >
            Register
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-1.5 rounded-full border border-slate-600 text-sm hover:bg-white/5 transition"
            aria-label="Log in"
          >
            Log In
          </button>

          <button
            className="md:hidden px-3 py-1 rounded bg-slate-700"
            aria-label="Open menu"
            onClick={() => {/* implement mobile menu if needed */}}
          >
            Menu
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#08101a]/50 to-transparent rounded-xl overflow-hidden shadow-lg">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-6 md:p-10">
            <div className="order-2 md:order-1 md:pr-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">Ride with Confidence</h1>
              <p className="mt-3 text-slate-300 max-w-xl">
                Store your emergency information securely and access it when you need it most — designed for riders who value safety and peace of mind.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => navigate("/signup")}
                  className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-medium shadow hover:scale-105 transition"
                >
                  Register
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700 transition"
                >
                  Log In
                </button>
              </div>
            </div>

            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img src={heroImage} alt="Rider on motorcycle" className="w-full h-56 md:h-72 object-cover block" />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-12">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <p className="mt-2 text-slate-300 max-w-xl">RideSafe offers a range of features designed to enhance your safety and peace of mind on the road.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              title="Emergency Information Storage"
              description="Securely store critical information such as medical history, allergies, and insurance details."
              icon="🛡️"
            />
            <FeatureCard
              title="Location Sharing"
              description="Share your real-time location with trusted contacts during your rides."
              icon="📍"
            />
            <FeatureCard
              title="Emergency Contacts"
              description="Designate emergency contacts who can be notified in case of an incident."
              icon="📞"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center">
          <h3 className="text-xl font-semibold">Ready to Ride Safer?</h3>
          <p className="mt-2 text-slate-300">Join RideSafe today and take control of your safety on every journey.</p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 rounded-full bg-white text-slate-900 font-medium hover:scale-[1.02] transition"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-slate-800 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <div className="mb-4 md:mb-0">© {new Date().getFullYear()} RideSafe. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
            <a href="#contact" className="hover:text-white">Contact Us</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#0b1216] border border-slate-800 rounded-lg p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-md bg-white/6 flex items-center justify-center text-sm font-semibold">
          <span aria-hidden>{icon ?? "•"}</span>
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2 text-slate-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RideSafeLanding;
