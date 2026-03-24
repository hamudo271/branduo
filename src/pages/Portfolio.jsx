import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TextReveal from '../components/common/TextReveal';
import useSEO from '../hooks/useSEO';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  useSEO({
    title: '병의원 마케팅 포트폴리오 | 성형외과·피부과·치고·안과 실제 성과',
    description: '브랜듀오의 실제 병의원 마케팅 성공 사례. 성형외과 조회수 4배 증가, 피부과 15배 증가, 안과 30배 증가 등 수치로 증명된 마케팅 성과를 확인하세요.',
    keywords: '성형외과마케팅사례, 피부과마케팅성과, 치과마케팅, 안과마케팅사례, 병원마케팅포트폴리오, 의료마케팅성공사례, 신환유치사례',
    canonical: 'https://branduo.co.kr/portfolio',
  });

  
  const projects = [
    { title: "A 강남 성형외과 브랜딩", category: "피부/성형", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" },
    { title: "B 네트워크 치과 마케팅", category: "치과/안과", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" },
    { title: "C 피부과 의원 블로그 SEO", category: "피부/성형", image: "https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=2074&auto=format&fit=crop" },
    { title: "S 여성의원 마케팅 솔루션", category: "여성/비뇨기과", image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1974&auto=format&fit=crop" },
    { title: "M 척추관절 한의원 브랜딩", category: "한의원/요양", image: "https://images.unsplash.com/photo-1576089201977-eb8595cb2db5?q=80&w=1974&auto=format&fit=crop" },
    { title: "V 프리미엄 요양병원 마케팅", category: "한의원/요양", image: "https://images.unsplash.com/photo-1512678080530-7760d81f1115?q=80&w=2052&auto=format&fit=crop" },
  ];

  const categories = ['All', '피부/성형', '치과/안과', '여성/비뇨기과', '한의원/요양'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-black min-h-screen text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
         {/* Ambient Light */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
           <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-bold tracking-widest uppercase text-sm">
                Medical Portfolio
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              성공적인<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">병의원 마케팅 사례</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium max-w-3xl">
              수치로 증명된 브랜듀오의 다양한 마케팅 성공 사례를 확인하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="relative py-20">
         {/* Ambient Light */}
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />
         
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">구체적인 마케팅 성과 및 포트폴리오</h2>
            <p className="text-white/60">진료과별로 분류된 브랜듀오의 성공 사례를 확인하세요.</p>
          </div>
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                  filter === item 
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="group relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={`${project.title} - 브랜듀오 병원 마케팅 성공 사례`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-2">
                         <span className="inline-block px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-teal-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-white text-3xl font-bold flex items-center gap-2 group-hover:text-teal-200 transition-colors">
                      {project.title}
                      <ArrowUpRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
