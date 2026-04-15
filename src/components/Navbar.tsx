import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <span className="text-black font-heading italic text-xl">S</span>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
          {["Home", "Services", "Work", "Process", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1.5 shadow-lg"
        >
          Get Started
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </div>
    </nav>
  );
}
