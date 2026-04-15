import { motion } from "motion/react";

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    author: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote: "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    author: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote: "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    author: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white font-body">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="liquid-glass rounded-2xl p-10 flex flex-col gap-8 h-full"
            >
              <p className="text-white/80 font-body font-light text-lg italic leading-relaxed flex-grow">
                "{t.quote}"
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-white font-body font-medium text-base">
                  {t.author}
                </span>
                <span className="text-white/50 font-body font-light text-xs uppercase tracking-widest">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
