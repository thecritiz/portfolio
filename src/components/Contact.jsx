import React, { useRef } from "react";
import { CONTACT } from "../constants";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

const Contact = () => {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    amount: 0.4,
  });

  const contactInfo = [
    {
      icon: MapPin,
      text: CONTACT.address,
    },
    {
      icon: Phone,
      text: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`,
    },
    {
      icon: Mail,
      text: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-purple-500/10 blur-3xl"
      />

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16 text-center text-4xl font-semibold text-white"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
      >
        <div className="space-y-8">
          {contactInfo.map(({ icon: Icon, text, href }) => {
            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <span className="text-lg text-neutral-300 transition-colors group-hover:text-white">
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
              <div key={text} className="flex items-center gap-4">
                {content}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;