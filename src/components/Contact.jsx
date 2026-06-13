import React, { useRef, useState } from "react";
import { CONTACT } from "../constants";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const Contact = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const mailto = `mailto:${CONTACT.email}?subject=Portfolio contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  const contactInfo = [
    { icon: MapPin, text: CONTACT.address },
    { icon: Phone, text: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo.replace(/\s+/g, "")}` },
    { icon: Mail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-purple-500/10 blur-3xl"
      />

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16 text-center text-4xl font-semibold text-white"
      >
        Get in Touch
      </motion.h2>

      <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">

        {/* Contact info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col justify-center gap-8"
        >
          {contactInfo.map(({ icon: Icon, text, href }) => {
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 shrink-0">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-base text-neutral-300 transition-colors group-hover:text-white break-all">
                  {text}
                </span>
              </>
            );
            return href ? (
              <motion.a
                key={text}
                href={href}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4"
              >
                {content}
              </motion.a>
            ) : (
              <div key={text} className="flex items-center gap-4">{content}</div>
            );
          })}
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-mono">Name</label>
            <input
              name="name"
              required
              placeholder="Aditya Pandey"
              className="
                w-full rounded-xl border border-white/10 bg-white/[0.04]
                px-4 py-3 text-sm text-white placeholder-neutral-600
                focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07]
                transition-all duration-200
              "
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-mono">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="
                w-full rounded-xl border border-white/10 bg-white/[0.04]
                px-4 py-3 text-sm text-white placeholder-neutral-600
                focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07]
                transition-all duration-200
              "
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-500 font-mono">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="
                w-full rounded-xl border border-white/10 bg-white/[0.04]
                px-4 py-3 text-sm text-white placeholder-neutral-600 resize-none
                focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07]
                transition-all duration-200
              "
            />
          </div>

          <button
            type="submit"
            className="
              mt-1 w-full flex items-center justify-center gap-2
              rounded-xl bg-gradient-to-r from-purple-600 to-violet-600
              py-3 text-sm font-medium
              hover:from-purple-500 hover:to-violet-500
              shadow-[0_4px_20px_rgba(168,85,247,0.3)]
              hover:shadow-[0_4px_28px_rgba(168,85,247,0.5)]
              transition-all duration-200
            "
          >
            {sent ? "Opening your email client…" : <><Send size={14} /> Send Message</>}
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
