import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative overflow-visible min-h-[1000px] flex flex-col items-center justify-start pt-[150px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_bg.jpeg"
          className="absolute top-[20%] left-0 w-full h-auto object-contain opacity-60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/10" />
        <div 
          className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, black)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            New
          </span>
          <span className="text-white/90 text-sm font-body pr-3">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-4px] mb-8"
          delay={100}
        />

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-white/70 font-body font-light leading-relaxed max-w-2xl mb-12"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-2 text-white font-medium group transition-all hover:scale-105">
            Get Started
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="flex items-center gap-3 text-white font-medium hover:text-white/80 transition-colors">
            <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <Play className="h-4 w-4 fill-white" />
            </div>
            Watch the Film
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <div className="mt-auto w-full max-w-7xl px-8 pb-12 pt-24 flex flex-col items-center gap-12">
        <div className="liquid-glass rounded-full px-6 py-2 text-white/50 text-sm font-body">
          Trusted by the teams behind
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
          {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
            <span
              key={partner}
              className="text-3xl md:text-4xl font-heading italic text-white"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
