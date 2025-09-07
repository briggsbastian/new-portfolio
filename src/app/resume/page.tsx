"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ParticleBackground from "@/components/particlebackground";
import NavBar from "@/components/navigation";

export default function Resume() {
  const fadeRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setFadeRef = (el: HTMLDivElement) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      <ParticleBackground />
      <NavBar className="relative z-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold glow-white">
            Briggs Bastian
          </h1>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="mailto:briggsbastian@pm.me"
              className="text-gray-300 hover:text-green-600 transition"
            >
              Email
            </Link>
            <Link
              href="https://github.com/briggsbastian"
              className="text-gray-300 hover:text-teal-400 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/briggs-bastian"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              LinkedIn
            </Link>
          </div>
          <Link
            href="https://docs.google.com/document/d/1-CE8oNpvgX9QBiURO85Yp9uo3061Fz8Dl_r49UiNbR0/edit?usp=sharing"
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg font-semibold text-black"
          >
            Download Resume
          </Link>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Experience</h2>

            {[
              {
                title: "Kraft Kennedy",
                dates: "Aug 2022 – Sept 2025",
                desc: "Former subject matter expert for ConnectWise SIEM, creating and curating alerts related to Kibana. Assisted clients with SIEM onboarding, tuning, and any necessary action warranted from alerts. Also worked with EDR, DNS and email hygiene solutions to ensure client security.",
              },
              {
                title: "Sprout Mortgage",
                dates: "Feb 2022 – July 2022",
                desc: "Assisted employees with basic IT support, password resets, and troubleshooting office software such as the Office365 stack and Encompass.",
              },
              {
                title: "JNC Management",
                dates: "2019 to 2021",
                desc: "Operated as a sales representative in the Simi Valley and Topanga areas, and managed the Northridge location.",
              },
              {
                title: "McDonald's Crew Member",
                dates: "2017 – 2019",
                desc: "",
              },
            ].map((job, idx) => (
              <div
                key={idx}
                ref={setFadeRef}
                className="fade-in hover-lift transition-smooth bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl space-y-2"
              >
                <h3 className="text-xl font-semibold text-purple-500">
                  {job.title}
                </h3>
                <p className="text-gray-300 text-sm">{job.dates}</p>
                {job.desc && <p className="text-gray-200">{job.desc}</p>}
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">Skills</h2>

            {[
              { title: "SIEM / IDS", desc: "ConnectWise SIEM, Wazuh, BlackPoint, Microsoft Sentinel" },
              { title: "EDR", desc: "SentinelOne, Microsoft Defender for Endpoint" },
              { title: "DNS", desc: "Atakama, Cisco Umbrella/OpenDNS" },
              { title: "Email Hygiene", desc: "Mimecast, Barracuda, Tessian" },
              { title: "Security Awareness Training", desc: "KnowBe4, BreachSecureNow" },
              { title: "Networking Infrastructure", desc: "Cisco Catalyst & Meraki switches, Ubiquiti Unifi, SonicWall, Fortinet, PFSense" },
              { title: "Operating Systems", desc: "Linux, Windows, macOS" },
            ].map((skill, idx) => (
              <div
                key={idx}
                ref={setFadeRef}
                className="fade-in hover-lift transition-smooth bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl space-y-2"
              >
                <h3 className="font-semibold text-teal-300">{skill.title}</h3>
                <p className="text-gray-200">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Education</h2>

          {[
            { title: "UCSD Cybersecurity Bootcamp", date: "2021" },
            { title: "Simi Valley High School", date: "2019" },
          ].map((edu, idx) => (
            <div
              key={idx}
              ref={setFadeRef}
              className="fade-in hover-lift transition-smooth bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl space-y-2"
            >
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-gray-300">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

