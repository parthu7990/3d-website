import { motion } from "motion/react";

export default function FeaturesChess() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white font-body">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-8"
          >
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              Designed to convert. <br /> Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-lg leading-relaxed">
              Every pixel is intentional. Our AI studies what works across
              thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium">
              Learn more
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-2xl overflow-hidden aspect-video relative group"
          >
            <img
              src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif"
              alt="Feature Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:order-1 liquid-glass rounded-2xl overflow-hidden aspect-video relative group"
          >
            <img
              src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"
              alt="Feature Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2 flex flex-col items-start gap-8"
          >
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              It gets smarter. <br /> Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-lg leading-relaxed">
              Your site evolves on its own. AI monitors every click, scroll, and
              conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium">
              See how it works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
