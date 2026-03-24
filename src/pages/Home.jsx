import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, CheckCircle2, TrendingUp, Zap, Users, ShieldCheck, Clock, MonitorPlay, Video, Share2, Smartphone, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/common/TextReveal';
import useSEO from '../hooks/useSEO';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleOnHover = {
  hover: { 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// --- Components ---

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary border-b border-border-primary">
      {/* Abstract Medical Background Concept */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.5 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 via-transparent to-accent-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--accent-primary)_0%,transparent_70%)] opacity-[0.03] blur-3xl animate-pulse" />
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" style={{ backgroundImage: `radial-gradient(var(--border-primary) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-block px-6 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-accent-primary font-bold tracking-widest uppercase text-xs"
        >
          Specialized Hospital Marketing Agency
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-black text-text-primary mb-10 leading-[1] tracking-tighter">
          <TextReveal delay={0.4}>
            병원 마케팅의 본질, <br />
          </TextReveal>
          <TextReveal delay={0.6}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">데이터로 상위 5위를 증명합니다.</span>
          </TextReveal>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-medium mb-16"
        >
          성형외과·피부과·치과·안과 전문 병원 마케팅.<br className="hidden md:block" />
          정밀한 블로그 SEO와 SNS 광고로 귀 원의 브랜드 가치를 검색 상위 노출로 증명합니다.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link to="/contact" className="group relative overflow-hidden inline-flex items-center gap-3 px-10 py-5 bg-text-primary text-bg-primary rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(13,148,136,0.5)]">
            <span className="relative z-10 font-bold uppercase tracking-tight">병원 마케팅 상담 신청</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-accent-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-3 px-10 py-5 border border-border-primary text-text-primary rounded-xl font-bold text-lg hover:bg-bg-secondary transition-all duration-300">
            성공 사례 확인하기
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const MedicalSpecialization = () => {
  const fields = [
    { title: "성형외과 마케팅", desc: "심미적 가치를 강조하는 비주얼 콘텐츠와 고관여 타겟 대상의 정교한 퍼널 설계를 통해 신환 전환율을 극대화합니다." },
    { title: "피부과 마케팅", desc: "시술 트렌드에 민감한 타겟을 위해 SNS 바이럴과 블로그 검색 상위 노출 전략으로 지역 내 압도적 점유율을 확보합니다." },
    { title: "치과 마케팅", desc: "신뢰가 핵심인 임플란트, 교정 치료 등 전문 과목별 체계적인 브랜딩으로 환자가 먼저 찾아오는 병원을 만듭니다." },
    { title: "안과 마케팅", desc: "라식·라섹 등 최신 수술 데이터를 시각화하고 원장님의 전문성을 강조하는 고퀄리티 영상 콘텐츠로 권위를 구축합니다." }
  ];

  return (
    <section className="py-24 bg-bg-secondary border-b border-border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fields.map((field, i) => (
            <div key={i} className="p-8 rounded-2xl bg-bg-primary border border-border-primary hover:border-accent-primary transition-all duration-300">
              <h3 className="text-xl font-bold text-text-primary mb-4">{field.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{field.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const clients = ['Samsung', 'LG', 'Hyundai', 'SK', 'Naver', 'Kakao', 'Coupang', 'Woowa Bros', 'Toss', 'Krafton'];
  return (
    <div className="py-8 bg-black text-white overflow-hidden border-y border-white/10">
      <motion.div 
        className="flex whitespace-nowrap gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {[...clients, ...clients, ...clients].map((client, i) => (
          <span key={i} className="text-3xl font-bold text-white/30 uppercase tracking-tighter hover:text-white transition-colors cursor-default">
            {client}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SecretsSection = () => {
  const secrets = [
    { title: "의료 마케팅 법무 진단", icon: <ShieldCheck size={32} />, desc: "의료법 위반 리스크를 0%로 통제합니다. 보건부 가이드라인을 준수하면서도 소구점을 정확히 타격하는 합법적 마케팅을 지향합니다." },
    { title: "임상 데이터 시각화", icon: <TrendingUp size={32} />, desc: "환자는 숫자를 믿습니다. 귀 원의 임상 성공 사례와 수술 결과를 세련된 데이터 시각화로 구현하여 신뢰의 깊이를 더합니다." },
    { title: "하이엔드 브랜딩", icon: <Zap size={32} />, desc: "단순한 병원이 아닌, 하나의 '브랜드'로 자리 잡게 합니다. 원장님의 철학을 담은 톤앤매너로 고관여 타겟의 선택을 이끌어냅니다." }
  ];

  return (
    <section className="relative py-40 bg-zinc-950 text-white overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="mb-24 flex flex-col items-center text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary font-bold tracking-widest uppercase text-xs">
              Medical Specialization
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            압도적 전문성,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">메디컬 브랜딩의 정수</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secrets.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-accent-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-accent-primary group-hover:text-accent-secondary">
                   {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GrowthStepsSection = () => {
  return (
    <section className="relative py-40 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary font-bold tracking-widest uppercase text-xs">
              Medical Growth Strategy
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            지속 가능한 성장을 위한<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Clinical 5-Step Roadmap</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              step: "Step 01",
              title: "병의원 정밀 진단 (Diagnosis)",
              desc: [
                "지역 내 경쟁 병원 마케팅 점유율 분석",
                "핵심 키워드 추출 및 브랜드 강점 발굴",
                "환자 유입 데이터 정밀 추적 시스템 구축"
              ]
            },
            {
              step: "Step 02",
              title: "의료 퍼널 최적화 (Prescription)",
              desc: [
                "상담 전환을 유도하는 랜딩 페이지 설계",
                "이탈률을 낮추는 진료 과목별 특화 UI/UX",
                "신뢰도를 높이는 실제 시술 데이터 배치"
              ]
            },
            {
              step: "Step 03",
              title: "고관여 콘텐츠 제작 (Clinical Intro)",
              desc: [
                "시청각적 신뢰를 주는 시네마틱 수술 영상",
                "원장님의 철학을 담은 다큐멘터리 인터뷰",
                "의료법을 준수하는 고효율 숏폼 소재 제작"
              ]
            },
            {
              step: "Step 04",
              title: "성과 모니터링 (Treatment)",
              desc: [
                "매일 업데이트되는 광고 성과 리포트",
                "전환 단가 최소화를 위한 소재 최적화",
                "의료 데이터 기반의 타겟팅 정교화"
              ]
            },
            {
              step: "Step 05",
              title: "브랜드 권위 구축 (Authority)",
              desc: [
                "지역 내 1위 병원으로의 포지셔닝 확립",
                "팬덤 구축을 위한 커뮤니티 마케팅 확장",
                "자동화된 환자 관계 관리(CRM) 시스템 연동"
              ]
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center p-8 md:p-12 gap-8">
                <div className="shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                   <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-accent-primary to-accent-secondary">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-secondary transition-colors tracking-tight">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.desc.map((line, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/50 text-lg group-hover:text-white/80 transition-colors">
                        <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2.5 shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MovingGraph = ({ points, color }) => {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min;
  const padding = 20;
  const width = 300;
  const height = 150;

  const getX = (i) => (i / (points.length - 1)) * (width - padding * 2) + padding;
  const getY = (val) => height - ((val - min) / range) * (height - padding * 2) - padding;

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p)}`).join(' ');

  return (
    <div className="relative w-full h-[150px] bg-bg-primary/50 rounded-2xl border border-border-primary/50 overflow-hidden mb-6">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        {/* Grid Lines */}
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + (i * (height - padding * 2)) / 2}
            x2={width - padding}
            y2={padding + (i * (height - padding * 2)) / 2}
            stroke="currentColor"
            className="text-border-primary/30"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        {/* Animated Path */}
        <motion.path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Glow Effect */}
        <motion.path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          className="opacity-20 blur-sm"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Points */}
        {points.map((p, i) => (
          (i === 0 || i === points.length - 1) && (
            <motion.circle
              key={i}
              cx={getX(i)}
              cy={getY(p)}
              r="4"
              fill={color}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i === 0 ? 0 : 1.8, duration: 0.5 }}
            />
          )
        ))}
      </svg>
    </div>
  );
};

const BlogPortfolioSection = () => {
  const cases = [
    {
      title: "A 성형외과 블로그 브랜딩",
      specialty: "성형외과",
      highlight: "조회수 4배 증가",
      result: "월 신환 약 60명 증가",
      points: [1326, 1500, 1800, 2200, 2600, 3200, 4448],
      before: "1,326",
      after: "4,448",
      color: "#0D9488"
    },
    {
      title: "B 피부과 마케팅 최적화",
      specialty: "피부과",
      highlight: "조회수 15배 증가",
      result: "월 신환 약 100명 증가",
      points: [227, 500, 1200, 1800, 2400, 2800, 3189],
      before: "227",
      after: "3,189",
      color: "#22D3EE"
    },
    {
      title: "C 안과 퍼널 마케팅",
      specialty: "안과",
      highlight: "조회수 30배 증가",
      result: "월 신환 약 90명 증가",
      points: [107, 400, 1000, 1800, 2500, 3200, 3649],
      before: "107",
      after: "3,649",
      color: "#818CF8"
    },
    {
      title: "D 치과 지역 점유율 확보",
      specialty: "치과",
      highlight: "조회수 3배 증가",
      result: "월 신환 약 40명 증가",
      points: [2942, 3500, 4500, 5800, 7200, 8500, 9231],
      before: "2,942",
      after: "9,231",
      color: "#F472B6"
    },
    {
      title: "E 정형외과 브랜드 확립",
      specialty: "정형외과",
      highlight: "조회수 15배 증가",
      result: "월 신환 약 100명 증가",
      points: [1826, 3000, 4500, 6000, 7200, 8500, 9046],
      before: "1,826",
      after: "9,046",
      color: "#34D399"
    }
  ];

  return (
    <section className="py-40 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary font-bold tracking-widest uppercase text-xs">
              Blog Marketing Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            결과로 말하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">실제 마케팅 성과</span>
          </h2>
          <p className="text-white/60 text-xl font-light leading-relaxed max-w-3xl mx-auto">
            단순히 조회수를 높이는 것에 그치지 않습니다. <br />
            예리한 키워드 선점과 정교한 콘텐츠로 <span className="text-white font-bold">실제 내원 신환 수</span>를 증명합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-accent-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-accent-secondary mb-2 whitespace-nowrap">
                      {item.specialty}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <TrendingUp className="text-accent-primary opacity-50" size={24} />
                </div>

                <MovingGraph points={item.points} color={item.color} />

                <div className="flex justify-between items-end mb-6">
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Before (Marketing Start)</div>
                    <div className="text-xl font-black text-white/80">{item.before}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-accent-secondary">Currently</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                      {item.after}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    <span className="text-sm font-bold text-accent-secondary">{item.highlight}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                    <span className="text-lg font-black text-white">{item.result}</span>
                  </div>
                </div>

                <Link to="/portfolio" className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-accent-primary hover:text-white transition-all duration-300">
                  성과 자세히 확인하기 <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SafetySection = () => {
  return (
    <section className="relative py-40 bg-zinc-950 text-white overflow-hidden">
      {/* Ambient Background Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary font-bold tracking-widest uppercase text-xs">
              Risk Control & Compliance
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            의료 전문성을 담보하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">철저한 안전장치</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto font-light">
            의료 마케팅은 생명을 다루는 가치를 전달하는 일입니다. 브랜듀오는<br />
            보건부 가이드라인 준수는 물론, <span className="text-accent-secondary font-bold underline decoration-accent-primary/50 underline-offset-4">계약서 상의 성과 책임 조항</span>을 통해 신뢰를 증명합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10 }} 
            className="group relative p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-accent-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-accent-primary">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
                성과 미달성 시 
                <span className="text-accent-primary">무상 보강 진행</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                자신 없는 프로젝트는 수주하지 않습니다. <br/>
                사전 협의된 KPI(환자 유입 데이터, 조회수 등)에 미달할 경우,
                목표를 달성할 때까지 <span className="text-white font-bold">별도의 추가 비용 없이</span> 전담팀이 무제한 보강 작업을 수행합니다.
              </p>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10 }} 
            className="group relative p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-accent-secondary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-accent-secondary">
                <Users size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
                메디컬 전담 
                <span className="text-accent-secondary">Clinical 팀 배정</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                단순 운영 인력이 아닌 의료 시장을 꿰뚫고 있는 전담팀이 움직입니다. <br/>
                진료 과목에 대한 깊은 이해도를 가진 <span className="text-white font-bold">메디컬 디렉터와 전문 작가진</span>이 투입되어, 의료진의 철학을 가장 정확한 언어로 전달합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ResultSection = () => {
  const [inView, setInView] = useState(false);
  const metrics = [
    { label: "신규 환자 유입량", value: 312, unit: "%", color: "from-accent-primary to-accent-secondary" },
    { label: "상담 전환율 (CVR)", value: 48, unit: "%", color: "from-accent-secondary to-cyan-400" },
    { label: "마케팅 비용 절감 (CAC)", value: 65, unit: "%", color: "from-accent-primary to-teal-600" }
  ];

  return (
    <section className="py-40 bg-bg-primary overflow-hidden border-y border-border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} onViewportEnter={() => setInView(true)}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary font-bold tracking-widest uppercase text-xs mb-6">
              Proven Results
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-text-primary mb-8 tracking-tighter leading-tight">
              숫자로 증명하는<br />
              <span className="text-accent-primary">압도적 성장 지표</span>
            </h2>
            <p className="text-text-secondary text-xl font-light leading-relaxed mb-12">
              브랜듀오의 마케팅은 단순한 노출이 아닙니다. 실제 내원 데이터와<br />
              매출 지표를 기반으로 최적의 성과를 도출해냅니다.
            </p>
            <div className="space-y-8">
              {metrics.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-text-primary font-bold text-lg">{item.label}</span>
                    <span className="text-3xl font-black text-accent-primary">
                      {inView ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>{item.value}</motion.span> : 0}
                      <span className="text-xl ml-1">{item.unit}</span>
                    </span>
                  </div>
                  <div className="h-3 w-full bg-border-primary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.value}%` } : { width: 0 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
                      className={`h-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-accent-primary/5 blur-[100px] rounded-full" />
             <div className="relative p-12 rounded-[3rem] bg-bg-secondary border border-border-primary shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <TrendingUp size={48} className="text-accent-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-6">Case: A 성형외과</h3>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-bg-primary border border-border-primary">
                    <div className="text-sm text-text-secondary mb-1">매출 성장세</div>
                    <div className="text-4xl font-black text-text-primary">+210%</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-bg-primary border border-border-primary">
                    <div className="text-sm text-text-secondary mb-1">상담 예약 수</div>
                    <div className="text-4xl font-black text-accent-primary">8.5배 증가</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-bg-primary border border-border-primary">
                    <div className="text-sm text-text-secondary mb-1">ROAS (광고 수익률)</div>
                    <div className="text-4xl font-black text-text-primary">1,200%</div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { step: "01", title: "메디컬 정밀 진단", desc: "현재 병원의 브랜드 인지도와 시장 점유율을 정밀 진단합니다." },
    { step: "02", title: "전략적 처방 (Strategy)", desc: "진료 과목별 특성에 맞춘 최적화된 마케팅 미디어 믹스를 제안합니다." },
    { step: "03", title: "킥오프 및 가이드 수립", desc: "의료법 가이드를 준수하며 브랜딩 톤앤매너를 확정합니다." },
    { step: "04", title: "하이엔드 콘텐츠 제작", desc: "원장님의 전문성과 신뢰를 담은 고퀄리티 콘텐츠를 제작합니다." },
    { step: "05", title: "캠페인 정밀 실행", desc: "고객 여정(Journey)에 맞춰 타겟 오디언스에게 정교하게 노출합니다." },
    { step: "06", title: "실시간 성과 트래킹", desc: "대시보드를 통해 전환 성과를 실시간으로 모니터링하고 공유합니다." },
    { step: "07", title: "데이터 피드백 & 확장", desc: "분석 데이터를 토대로 캠페인 효율을 극대화하고 영역을 확장합니다." }
  ];

  return (
    <section className="relative py-40 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
       {/* Ambient Light */}
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary font-bold tracking-widest uppercase text-xs">
              Clinical Workflow
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            성장을 실현하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">7단계 Clinical 프로세스</span>
          </motion.h2>
        </div>
        
        <div className="relative border-l-2 border-white/10 ml-6 md:ml-0 md:border-l-0 md:border-t-2 md:grid md:grid-cols-4 lg:grid-cols-7">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-0 md:pt-12 pb-12 md:pb-0 group"
            >
              {/* Dot for timeline */}
              <div className="absolute left-[-9px] top-0 md:left-0 md:top-[-9px] w-[16px] h-[16px] rounded-full bg-zinc-800 border-4 border-black group-hover:bg-accent-primary transition-colors duration-300 z-10" />
              
              <div className="pr-6 md:pr-4">
                 <div className="text-4xl font-black text-white/10 mb-4 group-hover:text-accent-primary/50 transition-colors duration-300 tracking-tighter">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-secondary transition-colors duration-300 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300 font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Clinical Lite",
      price: "1.5M",
      features: ["의료법 준수 SNS 운영", "진료 과목별 정기 콘텐츠 (8건)", "기초 데이터 리포트", "전담 작가 배정"],
      accent: "accent-primary"
    },
    {
      name: "Clinical Pro",
      price: "3.5M",
      features: ["Pro 전담 클리니컬 팀 배정", "고관여 수술/시술 영상 제작", "랜딩 페이지 퍼널 최적화", "실시간 전환 추적 대시보드", "의료 광고 심의 대행"],
      accent: "accent-secondary",
      popular: true
    },
    {
      name: "Brand Master",
      price: "8.0M",
      features: ["종합 병원급 브랜딩 솔루션", "다큐멘터리식 원장님 인터뷰", "지역 내 압도적 점유율 보장", "오프라인 원내 경험(UX) 컨설팅", "프리미엄 CRM 시스템 구축"],
      accent: "accent-primary"
    }
  ];

  return (
    <section className="py-40 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary font-bold tracking-widest uppercase text-xs mb-6">
            Medical Solution Plans
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-8 tracking-tighter">
            귀 원의 규모와 목표에 맞는<br />
            <span className="text-accent-primary">최적의 솔루션을 선택하세요.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] bg-bg-primary border ${plan.popular ? 'border-accent-primary shadow-2xl' : 'border-border-primary'} transition-all duration-500 hover:shadow-xl group overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-2 px-8 bg-accent-primary text-white font-bold text-xs rounded-bl-2xl tracking-widest uppercase">
                  Most Selected
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-text-secondary mb-4 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-text-primary">{plan.price}</span>
                  <span className="text-text-secondary font-medium">KRW / mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary font-light">
                    <CheckCircle2 size={20} className={`mt-0.5 shrink-0 ${plan.popular ? 'text-accent-primary' : 'text-slate-300'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className={`block w-full py-4 rounded-2xl font-black text-center transition-all duration-300 ${plan.popular ? 'bg-accent-primary text-white hover:bg-teal-700 shadow-lg shadow-accent-primary/20' : 'bg-bg-secondary text-text-primary hover:bg-border-primary'}`}>
                Consultation Request
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "의료법 위반 소지가 걱정됩니다.", a: "브랜듀오는 의료법 전문 팀이 모든 콘텐츠를 사전 검수합니다. 보건부 가이드라인을 철저히 준수하며, 필요 시 의료 광고 사전 심의 대행까지 원스톱으로 진행합니다." },
    { q: "광고비 대비 실제 환자 유입이 저조하면 어떡하나요?", a: "브랜듀오는 단순 노출이 아닌 '내원 전환'에 집중합니다. 계약 시 약속한 KPI 미달성 시, 목표치에 도달할 때까지 무상 보강 작업을 진행하는 성과 책임제를 운영하고 있습니다." },
    { q: "기존 대행사와 차별점은 무엇인가요?", a: "단순히 콘텐츠를 제작하는 수준을 넘어, 병원의 브랜드 가치를 높이는 하이엔드 브랜딩과 정밀 데이터 분석을 결합합니다. 원장님의 진료 철학을 가장 잘 이해하는 메디컬 전문 팀이 전담합니다." },
    { q: "지역별 쿼터제가 있나요?", a: "네, 브랜듀오는 파트너 병원의 보호와 성과 집중을 위해 진료 과목별/지역별로 쿼터제를 운영하고 있습니다. 지역 내 1위 병원으로 포지셔닝하기 위해 경쟁 병원의 수주는 지양합니다." }
  ];

  return (
    <section className="py-40 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6 tracking-tighter">자주 묻는 질문 (FAQ)</h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed">궁금하신 사항을 확인해보세요. 더 자세한 상담은 진단 신청을 통해 가능합니다.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-secondary border border-border-primary hover:border-accent-primary/30 transition-all group"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-3">
                <span className="text-accent-primary group-hover:scale-110 transition-transform">Q.</span>
                {faq.q}
              </h3>
              <p className="text-text-secondary leading-relaxed font-light pl-8">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useSEO({
    title: '브랜듀오 | 병원 마케팅 전문 에이전시 - 상위 5위 노출 데이터 증명',
    description: '성형외과·피부과·치과·안과 전문 병원 마케팅 에이전시 브랜듀오. 네이버 블로그 SEO, SNS 광고, 랜딩페이지 최적화로 5위 이내 상위 노출과 실질적 신환 유입을 보장합니다.',
    keywords: '병원마케팅, 의료마케팅, 성형외과마케팅, 피부과마케팅, 치과마케팅, 안과마케팅, 병원블로그SEO, 신환유입, 병원브랜딩, 병원SNS마케팅, 의료에이전시, 브랜듀오',
    canonical: 'https://branduo.co.kr/',
  });
  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      <HeroSection />
      <MedicalSpecialization />
      <Marquee />
      <SecretsSection />
      <GrowthStepsSection />
      <ResultSection />
      <BlogPortfolioSection />
      <SafetySection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Home;
