import React, { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// ─────────────────────────────────────────────
//  Animation variants
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 16 },
  },
};

const Contact = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.4 });

  const info = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: CONTACT.address,
      href: null,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative border-b border-transparent py-24 lg:py-32"
    >
      {/* decorative gradient bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500 via-sky-500 to-purple-500 opacity-10 blur-3xl"
      />

      {/* heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-16 text-center text-4xl font-semibold"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto max-w-xl space-y-6 px-4 text-center"
      >
        {info.map(({ icon, label, href }) => (
          <motion.a
            key={label}
            href={href || undefined}
            target={href ? '_blank' : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group flex items-center justify-center gap-3 text-lg font-medium text-neutral-300 hover:text-white"
          >
            <span className="text-cyan-400 transition-colors group-hover:text-white">
              {icon}
            </span>
            {label}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
