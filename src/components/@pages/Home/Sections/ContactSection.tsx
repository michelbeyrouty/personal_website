"use client";

import { motion } from "framer-motion";
import SectionTitle from "@common/SectionTitle";
import RocketCanvas from "@common/Canvas/RocketCanvas";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 mx-auto max-w-6xl">
      <SectionTitle
        title={
          <>
            Contact <span className="text-blue-400">Me</span>
          </>
        }
        icon="🗓️"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Booking Interface */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-black/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Book a <span className="text-blue-400">Meeting</span>
              </h3>

              <div className="text-center mb-8">
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
                        15 minutes • Initial discussions
                      </p>
                    </div>
                    <a
                      href="https://calendly.com/michelbeyrouty/15-minute-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Book
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
                        45 minutes • Project planning
                      </p>
                    </div>
                    <a
                      href="https://calendly.com/michelbeyrouty/45-minute-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Book
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
            </div>
          </div>
        </motion.div>

        <div className="h-80 md:h-96 lg:h-auto">
          <RocketCanvas />
        </div>
      </div>
    </section>
  );
}
