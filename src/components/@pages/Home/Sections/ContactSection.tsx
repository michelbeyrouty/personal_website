"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@common/SectionTitle";
import Button from "@common/Buttons/Button";
import RocketCanvas from "@common/Canvas/RocketCanvas";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("message");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 mx-auto max-w-6xl">
      <SectionTitle
        title={
          <>
            Contact <span className="text-blue-400">Me</span>
          </>
        }
        icon="🚀"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Tabbed Contact Interface - Right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-black/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-blue-500/30">
              <button
                onClick={() => setActiveTab("message")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "message"
                    ? "bg-blue-500/20 text-blue-300 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="mr-2">💌</span>
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "booking"
                    ? "bg-blue-500/20 text-blue-300 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="mr-2">📅</span>
                Book Meeting
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "message" && (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    <Button
                      variant="primary"
                      onClick={handleSubmit}
                      className="w-full"
                    >
                      Launch Message 🚀
                    </Button>
                  </form>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-center"
                    >
                      <p className="text-green-300">
                        🎉 Message launched successfully! I'll get back to you
                        soon.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {activeTab === "booking" && (
                <motion.div
                  key="booking"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Book a <span className="text-blue-400">Meeting</span>
                  </h3>

                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">📅</div>
                    <p className="text-gray-300">
                      Schedule a call to discuss your project in detail
                    </p>
                  </div>

                  {/* Meeting Options */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-black/30 border border-blue-500/30 rounded-lg p-6 hover:bg-black/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-lg mb-1">
                            Quick Consultation
                          </h4>
                          <p className="text-sm text-gray-400">
                            15 minutes • Perfect for initial discussions
                          </p>
                        </div>
                        <a
                          href="https://calendly.com/michelbeyrouty/15min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                        >
                          Book 15min
                        </a>
                      </div>
                    </div>

                    <div className="bg-black/30 border border-purple-500/30 rounded-lg p-6 hover:bg-black/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-lg mb-1">
                            Project Deep Dive
                          </h4>
                          <p className="text-sm text-gray-400">
                            45 minutes • Detailed project planning
                          </p>
                        </div>
                        <a
                          href="https://calendly.com/michelbeyrouty/45min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                        >
                          Book 45min
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Contact Methods */}
                  <div className="border-t border-blue-500/20 pt-6">
                    <p className="text-center text-gray-400 mb-4 text-sm">
                      Prefer other ways to connect?
                    </p>
                    <div className="flex justify-center space-x-6">
                      <a
                        href="mailto:michelbeyrouty@gmail.com"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <span>📧</span>
                        <span>Email</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/michelbeyrouty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <span>💼</span>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <RocketCanvas />
      </div>
    </section>
  );
}
