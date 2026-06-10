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
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500 via-sky-500 to-purple-500 opacity-10 blur-3xl"
      />

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16 text-center text-4xl font-semibold"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto flex max-w-xl flex-col gap-6 px-4"
      >
        {contactInfo.map(({ icon: Icon, text, href }) => {
          const content = (
            <>
              <Icon className="h-5 w-5 text-cyan-400 transition-colors group-hover:text-white" />
              <span>{text}</span>
            </>
          );

          const className =
            "group flex items-center justify-center gap-3 text-lg font-medium text-neutral-300 transition-all hover:text-white";

          return href ? (
            <motion.a
              key={text}
              href={href}
              whileHover={{ scale: 1.05 }}
              className={className}
            >
              {content}
            </motion.a>
          ) : (
            <motion.div
              key={text}
              whileHover={{ scale: 1.05 }}
              className={className}
            >
              {content}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Contact;