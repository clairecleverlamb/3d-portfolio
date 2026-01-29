import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      alert("Contact form is not configured. Please email me directly at clairechenszeying@gmail.com");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Claire Chen",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          alert("Thank you for your message! I'll get back to you soon.");
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong. Please try again or email me directly at clairechenszeying@gmail.com");
        }
      );
  };

  return (
    <div className="relative z-10 bg-primary py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center`}>Get In Touch</h2>
          <p className={`${styles.sectionSubText} text-center mt-4`}>Let's work together</p>
        </motion.div>

        <div className="mt-20 flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="flex-1 flex"
          >
            <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 w-full flex flex-col h-full">
              <h3 className="text-light text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I'd love to hear from you! Let's chat!
              </p>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-quaternary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-quaternary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-light font-semibold">Email</div>
                    <a 
                      href="mailto:clairechenszeying@gmail.com" 
                      className="text-gray-400 hover:text-quaternary transition-colors duration-300"
                    >
                      clairechenszeying@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-light font-semibold">Location</div>
                    <div className="text-gray-400">San Jose, CA</div>
                  </div>
                </div>

              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.youtube.com/@clairecleverlamb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-quaternary/20 rounded-xl flex items-center justify-center hover:bg-quaternary/30 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6 text-quaternary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/claire-sy-chen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-quaternary/20 rounded-xl flex items-center justify-center hover:bg-quaternary/30 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-quaternary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/clairecleverlamb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-quaternary/20 rounded-xl flex items-center justify-center hover:bg-quaternary/30 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-quaternary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 1)}
            className="flex-1 flex"
          >
            <div className="bg-tertiary/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 w-full flex flex-col h-full">
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label className="block text-light font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-tertiary/50 border border-gray-700 rounded-lg p-4 text-light placeholder-gray-400 focus:border-quaternary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full bg-tertiary/50 border border-gray-700 rounded-lg p-4 text-light placeholder-gray-400 focus:border-quaternary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="6"
                    className="w-full bg-tertiary/50 border border-gray-700 rounded-lg p-4 text-light placeholder-gray-400 focus:border-quaternary focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-quaternary text-primary font-bold py-4 px-8 rounded-lg hover:bg-quaternary/90 transition-all duration-300 shadow-lg hover:shadow-quaternary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");