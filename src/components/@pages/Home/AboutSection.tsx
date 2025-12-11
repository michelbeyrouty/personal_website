"use client";

import ServiceCard from "../../@common/Cards/ServiceCard";
import SectionTitle from "@common/SectionTitle";
import { SERVICES } from "@/constants";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={
            <>
              About <span className="text-blue-400">Me</span>
            </>
          }
          icon="👨‍💻"
          className="mb-8"
        />

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed text-center">
          Full-stack engineer with 7+ years of experience delivering scalable,
          innovative solutions and leading cross-functional teams. Proven
          ability to align technical development with business goals and
          stakeholder needs. Committed to team growth, clean architecture, and
          successful project delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
