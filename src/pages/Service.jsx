import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, MonitorPlay, Share2, Smartphone, CheckCircle2, ArrowRight, Plus, Minus, AlertCircle, Lightbulb } from 'lucide-react';
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

const ServiceHero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-black text-white">
      {/* Ambient Light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-bold tracking-widest uppercase text-sm">
              Our Strategy
            </span>
          </motion.div>
          
          <TextReveal>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              기획부터 신환 유치까지 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-teal-500 to-accent-secondary">All-in-One Medical Marketing</span>
            </h1>
          </TextReveal>
          
          <TextReveal delay={0.2}>
            <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
              원내 브랜딩, 바이럴, 퍼포먼스 마케팅을 하나로.<br />
              브랜듀오는 단순한 대행을 넘어, 병원의 권위를 강화하고 지속 가능한 병의원 개원 마케팅 성공을 설계합니다.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

const FailureAnalysisSection = () => {
  const reasons = [
    { title: "타겟팅이 없는 노출", desc: "누구에게 보여줄지 모르는 콘텐츠는 아무에게도 도달하지 않습니다. 정밀한 타겟 페르소나 설정이 없는 마케팅은 예산 낭비입니다." },
    { title: "전환(Conversion) 설계 부재", desc: "단순히 조회수만 높은 것은 의미가 없습니다. 고객을 설득하고 구매 버튼을 누르게 만드는 '장치'가 콘텐츠 안에 숨겨져 있어야 합니다." },
    { title: "데이터 없는 감(Feeling)", desc: "데이터 분석 없는 마케팅은 도박입니다. 클릭률(CTR), 이탈률, 전환율 데이터를 기반으로 끊임없이 최적화해야 합니다." },
    { title: "일관성 없는 브랜딩", desc: "채널마다 다른 목소리를 내면 고객은 혼란스럽습니다. 하나의 통일된 메시지와 톤앤매너로 브랜드 팬덤을 구축해야 합니다." }
  ];

  return (
    <section className="relative py-40 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <span className="text-red-500 font-bold tracking-widest uppercase block mb-4">Problem</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">마케팅이 실패하는 이유</h2>
          <p className="text-base text-white/60">왜 돈을 써도 성과가 나지 않을까요? 원인은 명확합니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-red-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed text-base">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrinciplesSection = () => {
  const principles = [
    { num: "01", title: "환자 중심 설계 (PX)", desc: "지나친 상업적 접근 대신, 환자가 겪는 질환적 페인포인트를 공감하며 신뢰를 쌓는 '콘텐츠'가 선행되어야 합니다." },
    { num: "02", title: "의료법 준수 (Compliance)", desc: "의료법을 100% 준수하면서도 원장님의 임상 전문성을 돋보이게 하는 합법적이고 세련된 카피라이팅을 구사합니다." },
    { num: "03", title: "신뢰 구축 (Trust)", desc: "단순 조회수가 아닌, '이 병원에 꼭 가야겠다'는 확신을 주는 권위 있는 브랜딩으로 오가닉 예약률을 높입니다." },
    { num: "04", title: "신환 전환 (Conversion)", desc: "DB 트래픽이 이탈하지 않도록 정교하게 설계된 랜딩페이지와 CRM 시나리오로 실질적인 '내원'을 이끌어냅니다." }
  ];

  return (
    <section className="relative py-40 bg-black text-white overflow-hidden border-t border-white/5">
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-bold tracking-widest uppercase text-sm">
              Principles
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">성공을 부르는 4가지 원칙</h2>
          <p className="text-base text-white/60">브랜듀오는 이 4가지 원칙을 준수하며 비즈니스의 격을 높입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {principles.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-teal-500/50 hover:shadow-[0_0_50px_-12px_rgba(20,184,166,0.3)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                 <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-transparent group-hover:from-teal-400 group-hover:to-teal-600 transition-all duration-500 block mb-6">
                  {item.num}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">{item.title}</h3>
                <p className="text-base text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { step: "01", title: "원내 현황 진단 (Audit)", desc: "현재 병원의 입지, 상권, 경쟁 병원, 기존 마케팅 히스토리를 정밀 진단합니다." },
    { step: "02", title: "환자 페르소나 도출 (Persona)", desc: "실제 내원하는 주력 환자군의 연령, 성별, 주요 시술 및 고민을 분석합니다." },
    { step: "03", title: "진료 과목 차별화 (Positioning)", desc: "원장님만의 특수한 술기나 장비를 바탕으로 지역 내 독보적인 의료 포지셔닝을 설정합니다." },
    { step: "04", title: "콘텐츠 및 채널 믹스", desc: "네이버 블로그, 인스타, 유튜브 등 타겟 환자에 맞는 최적의 매체 전략을 수립합니다." },
    { step: "05", title: "의료 콘텐츠 기획·배포", desc: "의료법 검토가 완료된 고품질의 원내 브랜딩/퍼포먼스 콘텐츠를 정기 발행합니다." },
    { step: "06", title: "성과 트래킹 및 리포팅", 단: "전화 문의, 네이버 예약, 카카오톡 채널 유입 등 실질적인 신환 데이터를 분석합니다." },
    { step: "07", title: "원내 CRM 동기화", desc: "상담 실장님 및 데스크와의 협력을 통해 내원 후 결제 및 재방문 전략을 고도화합니다." },
    { step: "08", title: "지점 네트워크 스케일업", desc: "안정적인 매출 궤도 진입 후, 진료 과목 확장 및 프랜차이즈 지점 스케일업을 지원합니다." }
  ];

  return (
    <section className="relative py-40 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold tracking-widest uppercase text-sm">
              Workflow
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-5xl font-black"
          >
            체계적인<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">마케팅 프로세스</span>
          </motion.h2>
        </div>
        
        <div className="border-t-2 border-white/10">
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border-b border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              <div className="py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-24 px-4 md:px-8">
                <div className="text-5xl md:text-7xl font-black text-white/5 group-hover:text-emerald-500/20 transition-all duration-300 w-24 shrink-0 leading-none">
                  {item.step}
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="text-emerald-500 w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecializedServices = () => {
  const fields = [
    { 
      title: "성형외과 마케팅 전문가", 
      keywords: ["성형외과마케팅", "수술영상제작", "전환율최적화"],
      desc: "심미적 요구가 높은 성형외과 타겟의 심리를 꿰뚫는 비주얼 브랜딩과 전후 사진 활용 가이드라인을 준수하는 고퀄리티 콘텐츠를 제작합니다." 
    },
    { 
      title: "피부과 마케팅 최적화", 
      keywords: ["피부과마케팅", "SNS바이럴", "지역점유율"],
      desc: "시술 주기가 짧고 트렌드에 민감한 피부과 고객을 위해 인스타그램, 유튜브 채널을 연계한 강력한 바이럴 루프를 설계합니다." 
    },
    { 
      title: "치과 마케팅 신뢰 구축", 
      keywords: ["치과마케팅", "임플란트브랜딩", "교정마케팅"],
      desc: "임플란트, 교정치료 등 고단가 진료 과목의 신뢰도를 높이기 위해 원장님의 전문성을 강조하는 스토리텔링 기반 블로그 SEO를 실행합니다." 
    },
    { 
      title: "안과 마케팅 권위 확보", 
      keywords: ["안과마케팅", "라식라섹광고", "의료데이터"],
      desc: "최첨단 장비와 수술 결과를 정밀한 데이터 시각화로 구현하여 안과만의 고유한 기술력과 권위를 타겟 환자에게 각인시킵니다." 
    }
  ];

  return (
    <section className="py-32 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6">진료과별 특화 마케팅 솔루션</h2>
          <p className="text-white/60 text-base">각 과목의 특수성을 이해하는 메디컬 디렉터가 전략을 수립합니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((field, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-primary transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                {field.keywords.map((kw, j) => (
                  <span key={j} className="text-[10px] font-bold text-accent-primary uppercase tracking-widest px-2 py-1 bg-accent-primary/10 rounded-md">#{kw}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{field.title}</h3>
              <p className="text-white/60 leading-relaxed">{field.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Service = () => {
  useSEO({
    title: '병원 마케팅 서비스 | 개원마케팅 & 병의원 상위 노출 전문',
    description: '브랜듀오는 성형외과, 피부과, 치과, 안과 전문 병원마케팅회사입니다. 검색 상위 5위 이내 노출을 약속하는 개원 마케팅과 정교한 SEO로 신환 유입을 증명합니다.',
    keywords: '병원마케팅, 병원마케팅회사, 개원마케팅, 병의원마케팅, 성형외과마케팅, 피부과마케팅, 치과마케팅, 병원블로그SEO',
    canonical: 'https://branduo.co.kr/service',
  });
  return (
    <div className="bg-black min-h-screen text-white">
      <ServiceHero />
      <SpecializedServices />
      <FailureAnalysisSection />
      <PrinciplesSection />
      <ProcessSection />
    </div>
  );
};

export default Service;
