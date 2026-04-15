import Hls from "hls.js";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function CtaFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoUrl;
      }
    }
  }, []);

  return (
    <section className="relative min-h-[800px] flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-8 py-32">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-white leading-[0.85] max-w-4xl mb-12">
          Your next website <br /> starts here.
        </h2>
        <p className="text-white/70 font-body font-light text-lg md:text-xl max-w-2xl mb-12">
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass-strong rounded-full px-10 py-4 text-white font-medium text-lg"
          >
            Book a Call
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black rounded-full px-10 py-4 font-medium text-lg shadow-xl"
          >
            View Pricing
          </motion.button>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-8 py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white/40 text-xs font-body tracking-wider">
          &copy; 2026 STUDIO AI. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/40 text-xs font-body tracking-widest uppercase hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
