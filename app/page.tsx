"use client";
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download, Database, Cpu, Cloud, Code2, ExternalLink, Award, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-cyan-400 font-mono font-bold text-xl tracking-tighter">Welcome To My Portfolio</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest"
          >
            Available for Opportunities
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Sembiyan S
          </h1>

          {/* New Generative AI Engineer Text */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-10 mb-8 overflow-hidden whitespace-nowrap"
          >
            <h2 className="text-xl md:text-2xl font-bold font-mono text-cyan-200">
              Generative AI Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            MCA Graduate with a First Class Distinction (8.5 CGPA).
            <br />Passionate about building stateful AI agents and scalable cloud solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-cyan-900/20 hover:scale-105 active:scale-95">
              Explore Projects
            </a>
            <a href="/Sembiyan_6374413840.pdf" download className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all border border-slate-700 hover:border-cyan-500/50">
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_60px_rgba(6,182,212,0.4)] hover:shadow-[0_0_100px_rgba(112,26,255,0.4)] transition-shadow duration-500">
            <img
              src="/profile.png"
              alt="Sembiyan S"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Sembiyan+S&background=020617&color=22d3ee&size=512&font-size=0.33"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* About/Academic Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Academic Excellence</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              With a Master of Computer Applications (MCA) from Periyar Maniammai Institute of Science and Technology,
              I have maintained a consistent top-tier performance with an 8.5 CGPA. My foundation in BCA (7.8 CGPA)
              at AVVM Sri Pushpam College further solidified my programming expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <Award className="text-cyan-400" size={24} />
                <div>
                  <h4 className="text-white font-bold">First Class With Distinction</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">MCA Specialization</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-slate-900/30 rounded-3xl border border-slate-800 text-center hover:bg-slate-800/50 transition-colors group">
              <span className="block text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform">8.5</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-2 block">MCA CGPA</span>
            </div>
            <div className="p-8 bg-slate-900/30 rounded-3xl border border-slate-800 text-center hover:bg-slate-800/50 transition-colors group">
              <span className="block text-4xl font-black text-purple-400 group-hover:scale-110 transition-transform">7.8</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-2 block">BCA CGPA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Cpu className="text-cyan-400" /> Featured AI Systems
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* SQL Generator */}
          <motion.div
            className="group bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors"><Database size={24} /></div>
              <a href="https://github.com/sembiyan-s" className="text-slate-600 hover:text-cyan-400 transition"><ExternalLink size={20} /></a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">AI-powered SQL Query Generator</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              A RAG-based application using LangGraph and Gemini API to extract schema context from MySQL and generate
              natural language database queries.
            </p>
            <div className="flex flex-wrap gap-2">
              {['LangGraph', 'RAG', 'MySQL', 'ChromaDB', 'Gemini API'].map(tech => (
                <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Chat Application */}
          <motion.div
            className="group bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors"><Cpu size={24} /></div>
              <a href="https://github.com/sembiyan-s" className="text-slate-600 hover:text-purple-400 transition"><ExternalLink size={20} /></a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">AI-Powered Chat Application</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Developed a contextual chat interface using Python and Streamlit, integrating Gemini API for advanced
              natural language understanding.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Streamlit', 'Gemini API', 'Gemini LLM'].map(tech => (
                <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Inventory */}
      <section id="skills" className="bg-[#030a1c] py-24 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-white mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Proficiency
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { title: "GenAI & Frameworks", skills: ["LangChain (RAG)", "LangGraph (Agents)", "LangSmith", "Gemini API"] },
              { title: "Cloud & DevOps", skills: ["Azure VM/Containers", "Azure App Services", "Function Apps", "Docker"] },
              { title: "Data & Backend", skills: ["Python", "MySQL", "MongoDB", "Linux/Bash"] },
              { title: "Networking", skills: ["Bridges", "Routers", "Switches", "Network Security"] }
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-6">{col.title}</h4>
                <ul className="space-y-3 text-slate-400 font-medium">
                  {col.skills.map(s => <li key={s} className="flex items-center gap-2 hover:text-white transition cursor-default">
                    <div className="h-1 w-3 bg-cyan-600/50 rounded-full" /> {s}
                  </li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          className="bg-gradient-to-b from-slate-900/50 to-transparent p-12 rounded-[3rem] border border-slate-800 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Let's Work Together</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Ready to apply my AI and Cloud skills to high-impact engineering teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left max-w-4xl mx-auto">
            <a
              href="mailto:sembiyansundaramoorthy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-slate-400 group hover:bg-slate-800/30 p-2 rounded-xl transition-all"
            >
              <div className="p-3 bg-slate-800 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform"><Mail size={20} /></div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest group-hover:text-cyan-400 transition-colors">Email</p>
                <p className="text-white text-sm">sembiyansundaramoorthy@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-slate-400 p-2">
              <div className="p-3 bg-slate-800 rounded-xl text-cyan-400"><Phone size={20} /></div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest">Mobile</p>
                <p className="text-white text-sm">+91-6374413840</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-400 p-2">
              <div className="p-3 bg-slate-800 rounded-xl text-cyan-400"><MapPin size={20} /></div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest">Location</p>
                <p className="text-white text-sm">Thanjavur, Tamilnadu, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-12">
            {/* GitHub Link */}
            <a
              href="https://github.com/sembiyan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 group-hover:text-white group-hover:border-cyan-500 transition shadow-xl group-hover:-translate-y-1 transition-all">
                <Github size={24} />
              </div>
              <span className="text-xs font-bold text-slate-500 group-hover:text-cyan-400 uppercase tracking-wider transition-colors">GitHub</span>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/sembiyan-data"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 group-hover:text-white group-hover:border-cyan-500 transition shadow-xl group-hover:-translate-y-1 transition-all">
                <Linkedin size={24} />
              </div>
              <span className="text-xs font-bold text-slate-500 group-hover:text-cyan-400 uppercase tracking-wider transition-colors">LinkedIn</span>
            </a>
          </div>

          <p className="mt-20 text-slate-600 text-xs font-mono">
            © 2026 Sembiyan S. Thanjavur, Tamilnadu, India.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
