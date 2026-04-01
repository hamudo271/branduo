import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, BarChart3, ArrowRight, Heart, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/common/TextReveal';
import useSEO from '../hooks/useSEO';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const Company = () => {
  useSEO({
    title: '브랜듀오 소개 | 성과 중심의 병원마케팅회사',
    description: '브랜듀오는 병원마케팅과 병의원 개원 마케팅을 데이터로 실현하는 전문 에이전시입니다. 병원마케팅회사로서 실질적인 신환 유입 성과를 증명합니다.',
    keywords: '브랜듀오, 병원마케팅회사, 병의원마케팅, 개원마케팅전문, 의료마케팅에이전시, 병원브랜딩추천',
    canonical: 'https://branduo.co.kr/company',
  });
  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500 text-text-primary">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-border-primary">
         {/* Ambient Light */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-8">
                <span className="text-accent-primary font-bold tracking-widest uppercase text-xs">
                Medical Branding Agency
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-text-primary mb-8 leading-[1.1] tracking-tighter">
              의료의 본질을<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">데이터로 브랜딩합니다.</span>
            </h1>
            <p className="text-base text-text-secondary leading-relaxed font-medium max-w-3xl">
              브랜듀오는 단순한 대행사를 넘어, 병의원 개원 마케팅의 본질과 철학을<br className="hidden md:block" />
              숫자와 브랜드 언어로 번역하는 No.1 병원마케팅회사입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 bg-bg-secondary border-t border-border-primary">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20">
             <h2 className="text-2xl md:text-4xl font-black text-text-primary mb-4">Why Branduo?</h2>
             <p className="text-base text-text-secondary">우리가 일하는 방식</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group p-10 rounded-[2.5rem] bg-bg-primary border border-border-primary hover:border-accent-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(13,148,136,0.1)]"
            >
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 size={32} className="text-accent-primary"/>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-4">01. Clinical Data</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                <strong className="text-text-primary block mb-2">모든 근거는 데이터에 있습니다.</strong>
                내원 경로, 환자 체류 시간, 상담 전환 지표를 정밀 분석합니다. 
                의료 현장의 목소리를 데이터로 정량화하여 가장 효율적인 성과를 도출합니다.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group p-10 rounded-[2.5rem] bg-bg-primary border border-border-primary hover:border-accent-secondary/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.1)]"
            >
               <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-8 border border-accent-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck size={32} className="text-accent-secondary"/>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-4">02. Ethical Compliance</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                <strong className="text-text-primary block mb-2">지속 가능한 성장을 추구합니다.</strong>
                단기적인 과장 광고가 아닌, 의료법 가이드라인 내에서 병원의 권위를 높입니다.
                리스크를 0%로 통제하며 지역 내 압도적인 브랜드 포지셔닝을 실현합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 bg-bg-primary border-t border-border-primary overflow-hidden">
        {/* Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="max-w-4xl mb-20 relative"
          >
            <div className="absolute -left-12 -top-12 text-[120px] text-text-primary/5 font-serif leading-none">"</div>
            <h2 className="text-2xl md:text-4xl font-black text-text-primary mb-6 relative z-10">단순 대행사가 아닙니다.<br/>우리는 '팀'입니다.</h2>
            <p className="text-base text-text-secondary leading-relaxed relative z-10">
              클라이언트의 성공이 곧 우리의 성공입니다.<br />
              외부 업체처럼 일하지 않고, 내부 팀처럼 치열하게 고민합니다.
              가장 가까운 곳에서 함께 성장하는 파트너가 되겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branduo System Section */}
      <section className="relative py-32 bg-bg-secondary border-t border-border-primary">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Branduo System</span>
            <h2 className="text-2xl md:text-4xl font-black text-text-primary mb-6">성공을 만드는 체계적인 시스템</h2>
            <p className="text-base text-text-secondary">브랜듀오 미디어는 각 분야의 전문가들이 유기적으로 협업하여 최상의 브랜드 가치를 창출합니다.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
               {[
                 { 
                   step: "01",
                   icon: <Zap size={32} />, 
                   title: "Strategy Lab", 
                   subtitle: "전략 기획 및 입지 분석",
                   desc: ["상권 및 경쟁 병원 분석", "타겟 환자군 설정", "진료 과목 차별화 선언"], 
                   color: "text-teal-400", 
                   bg: "bg-teal-400/10", 
                   border: "border-teal-400/20" 
                 },
                 { 
                   step: "02",
                   icon: <Sparkles size={32} />, 
                   title: "Medical Studio", 
                   subtitle: "의료 콘텐츠 브랜딩",
                   desc: ["전문성 강조 의료 칼럼", "원내 포토존 및 공간 배너", "시술/장비 원리 설명 이미지"], 
                   color: "text-cyan-400", 
                   bg: "bg-cyan-400/10", 
                   border: "border-cyan-400/20" 
                 },
                 { 
                   step: "03",
                   icon: <BarChart3 size={32} />, 
                   title: "Performance", 
                   subtitle: "퍼포먼스 및 신환 유치",
                   desc: ["환자 DB 최적화 페이스북/DB광고", "원내 상담 유도 랜딩페이지", "의료법 검토 및 안전 광고"], 
                   color: "text-emerald-400", 
                   bg: "bg-emerald-400/10", 
                   border: "border-emerald-400/20" 
                 },
                 { 
                   step: "04",
                   icon: <Users size={32} />, 
                   title: "CRM & Mgmt", 
                   subtitle: "재방문 및 고객 CRM",
                   desc: ["알림톡 및 해피콜 시나리오", "리뷰 (영수증/예약) 관리", "단골 환자 충성도 전략"], 
                   color: "text-teal-300", 
                   bg: "bg-teal-300/10", 
                   border: "border-teal-300/20" 
                 },
               ].map((system, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.2 }}
                   className="group relative bg-bg-primary p-8 rounded-[2rem] border border-border-primary hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col"
                 >
                   <div className="absolute -top-6 left-8 bg-bg-secondary px-4 py-1 rounded-full border border-border-primary text-sm font-bold text-text-secondary">
                      STEP {system.step}
                   </div>
                   
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${system.bg} ${system.color} ${system.border} border group-hover:scale-110 transition-transform duration-300`}>
                     {system.icon}
                   </div>
                   
                   <h3 className="text-2xl font-bold text-text-primary mb-1">{system.title}</h3>
                   <p className="text-accent-primary text-sm font-bold mb-6">{system.subtitle}</p>
                   
                   <ul className="space-y-3 mt-auto">
                      {system.desc.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${system.color.replace('text-', 'bg-')}`} />
                          {item}
                        </li>
                      ))}
                   </ul>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
      
       {/* CTA */}
      <section className="py-32 bg-bg-primary border-t border-border-primary">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-8 tracking-tighter">귀 원의 가치를<br/>데이터로 증명할 준비 되셨나요?</h2>
           <p className="text-base text-text-secondary mb-12 font-light">지금 바로 무료 정밀 진단과 전문 컨설팅을 신청하세요.</p>
           <Link to="/contact" className="group relative overflow-hidden inline-flex items-center gap-3 px-10 py-5 bg-text-primary text-bg-primary rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(13,148,136,0.5)]">
             <span className="relative z-10">Consultation Request</span>
             <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
             <div className="absolute inset-0 bg-accent-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Company;
