"use client";

import Grainient from "./Grainient";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

// --- Classic SVG Icons for Categories ---
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.94c1.5 0 4-1.73 4-6.39 0-4.67-2.5-6.67-4-6.67S8 9.88 8 14.55c0 4.66 2.5 6.39 4 6.39z"/>
    <path d="M10 2c0 2 2 3 2 3s2-1 2-3"/>
  </svg>
);

const DropIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const FlameIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

export default function GroceryLandingPage() {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(16px)"]);
  const heroPointer = useTransform(scrollY, (v) => (v > 600 ? "none" : "auto"));

  const featOpacity = useTransform(scrollY, [700, 1200], [0, 1]);
  const featY = useTransform(scrollY, [700, 1200], [80, 0]);
  const featPointer = useTransform(scrollY, (v) => (v < 700 ? "none" : "auto"));

  const footerOpacity = useTransform(scrollY, [1200, 1600], [0, 1]);
  const footerPointer = useTransform(scrollY, (v) => (v < 1200 ? "none" : "auto"));

  return (
    <div className="relative h-[300vh]" style={{ background: "#f0fdf4" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --green-50:  #f0fdf4;
          --green-100: #dcfce7;
          --green-200: #bbf7d0;
          --green-400: #4ade80;
          --green-600: #16a34a;
          --green-700: #15803d;
          --green-800: #166534;
          --green-900: #14532d;
          --text-dark: #14532d;
          --text-mid:  #166534;
          --text-soft: rgba(22,101,52,0.55);
        }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'Outfit', sans-serif; }

        .display-hero {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(62px, 9vw, 110px);
          line-height: 1.04;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: var(--green-900);
        }

        .h2-section {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 400;
          color: var(--green-800);
          line-height: 1.2;
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          color: var(--green-900);
          line-height: 1.3;
        }

        .label-xs {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .body-sm {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
        }

        .body-md {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
        }

        .glass-card {
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
          background: rgba(240,253,244,0.55);
          border: 1px solid rgba(187,247,208,0.8);
          box-shadow: 0 8px 32px rgba(22,101,52,0.07), inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .btn-primary {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          background: var(--green-700);
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 14px 36px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(22,101,52,0.25);
        }
        .btn-primary:hover {
          background: var(--green-800);
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(22,101,52,0.35);
        }

        .btn-ghost {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.06em;
          background: transparent;
          color: var(--green-700);
          border: 1.5px solid rgba(22,101,52,0.25);
          border-radius: 100px;
          padding: 13px 36px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover {
          border-color: var(--green-700);
          background: rgba(22,101,52,0.04);
        }

        .nav-link {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--green-700);
          text-decoration: none;
          padding-bottom: 2px;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: var(--green-600);
          transform: scaleX(0);
          transition: transform 0.2s;
          transform-origin: left;
        }
        .nav-link:hover { color: var(--green-900); }
        .nav-link:hover::after { transform: scaleX(1); }

        .dot-sep { width: 4px; height: 4px; background: var(--green-400); border-radius: 50%; display: inline-block; }

        .max-w { max-width: 1280px; margin: 0 auto; }
        .px-site { padding-left: 32px; padding-right: 32px; }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .px-site { padding-left: 20px; padding-right: 20px; }
        }
      `}} />

      {/* ── STICKY VIEWPORT ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* ── LAYER 1: GRAINIENT BACKGROUND ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#9fffda"
            color2="#ffffff"
            color3="#10B981"
            timeSpeed={1.05}
            colorBalance={0}
            warpStrength={1.9}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        {/* ── LAYER 2: HERO ── */}
        <motion.div
          style={{ opacity: heroOpacity, filter: heroBlur, pointerEvents: heroPointer }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-site"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.22)",
              border: "1px solid rgba(187,247,208,0.9)",
              borderRadius: 100,
              padding: "7px 18px",
              marginBottom: 32,
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="dot-sep" style={{ background: "#16a34a", boxShadow: "0 0 6px rgba(22,163,74,0.5)" }} />
            <span className="label-xs" style={{ color: "#16a34a" }}>Free delivery on orders above ₹299</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="display-hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "center", maxWidth: 860 }}
          >
            Groceries delivered<br />
            in{" "}
            <em style={{ color: "#16a34a", fontStyle: "italic" }}>minutes</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="body-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            style={{ color: "rgba(22,101,52,0.6)", maxWidth: 460, textAlign: "center", marginTop: 20, marginBottom: 40 }}
          >
            Farm-fresh produce, pantry staples, and daily essentials —
            ordered in seconds, delivered with care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex gap-4 flex-wrap"
            style={{ justifyContent: "center", marginBottom: 56 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <Link href="/auth/usersignup">
              <button className="btn-primary">Start shopping</button>
            </Link>
            <Link href="/auth/logincommon">
              <button className="btn-ghost">Sign in</button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── LAYER 3: FEATURES ── */}
        <motion.div
          style={{ opacity: featOpacity, y: featY, pointerEvents: featPointer }}
          className="absolute inset-0 z-20 flex flex-col justify-center px-site"
        >
          <div className="max-w w-full mx-auto">
            <div style={{ marginBottom: 48, textAlign: "center" }}>
              <p className="label-xs" style={{ color: "rgba(22,101,52,0.45)", marginBottom: 12 }}>Why FreshBasket</p>
              <h2 className="h2-section" style={{ fontStyle: "italic" }}>Freshness, refined.</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                {
                  badge: "QUALITY",
                  title: "Farm to Door",
                  body: "We source directly from local farms and trusted suppliers. Every product is checked for freshness before it reaches your basket.",
                  icon: <LeafIcon />,
                },
                {
                  badge: "SPEED",
                  title: "Lightning Fast",
                  body: "Our hyper-local dark stores mean your order is picked, packed, and dispatched in under 10 minutes — rain or shine.",
                  icon: <FlameIcon />,
                },
                {
                  badge: "SMART",
                  title: "Smart Inventory",
                  body: "Real-time stock tracking, substitute suggestions, and smart reorder reminders so you never run out of the essentials.",
                  icon: <GridIcon />,
                },
              ].map(({ badge, title, body, icon }) => (
                <div key={title} className="glass-card" style={{ borderRadius: 28, padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 14,
                      background: "rgba(187,247,208,0.5)",
                      border: "1px solid rgba(187,247,208,0.8)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#16a34a",
                    }}>
                      {icon}
                    </div>
                    <span className="label-xs" style={{
                      background: "rgba(187,247,208,0.45)",
                      border: "1px solid rgba(187,247,208,0.8)",
                      borderRadius: 100,
                      padding: "4px 12px",
                      color: "#16a34a",
                    }}>{badge}</span>
                  </div>
                  <p className="card-title" style={{ marginBottom: 12 }}>{title}</p>
                  <p className="body-sm" style={{ color: "rgba(22,101,52,0.55)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── LAYER 4: FOOTER ── */}
        <motion.footer
          style={{ opacity: footerOpacity, pointerEvents: footerPointer }}
          className="absolute bottom-0 w-full z-30 px-site"
        >
          <div style={{
            borderTop: "1px solid rgba(187,247,208,0.8)",
            background: "rgba(240,253,244,0.7)",
            backdropFilter: "blur(20px)",
            padding: "20px 0",
          }}>
            <div className="max-w flex flex-col md:flex-row justify-between items-center gap-4" style={{ gap: 16 }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#14532d",
              }}>
                Fresh<span style={{ color: "#16a34a", fontStyle: "italic" }}>Basket</span>
              </div>
              <p className="body-sm" style={{ color: "rgba(22,101,52,0.4)" }}>
                © {new Date().getFullYear()} FreshBasket. All Rights Reserved.
              </p>
              <div style={{ display: "flex", gap: 24 }}>
                {["Privacy", "Terms", "Support"].map((item) => (
                  <a key={item} href="#" className="nav-link" style={{ fontSize: 12 }}>{item}</a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}