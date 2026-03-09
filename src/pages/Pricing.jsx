import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/common/TextReveal';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const Pricing = () => {
  return (
    <div className="bg-black min-h-screen text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
         {/* Ambient Light */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-bold tracking-widest uppercase text-sm">
                Medical Packages
                </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              병의원 성장<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">올인원 패키지</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium max-w-3xl">
              단순 대행이 아닌, 매출을 만드는 파트너십.<br/>
              병원 규모와 진료 과목에 맞는 최적의 로드맵을 제안합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="space-y-32">
            {/* Main Marketing */}
            <div>
              <motion.h3 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="text-4xl font-black text-white mb-12 flex items-center gap-4"
              >
                <div className="w-2 h-12 bg-teal-500 rounded-full" />
                성장 단계별 통합 마케팅
              </motion.h3>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  { title: "초기 개원 부스터", staff: "PM 1인 / 기획 1인 / 에디터 1인", period: "3개월 집중", features: ["온라인 기본 세팅 (네이버 지도, 블로그)", "지역 상권 타겟팅 메타 광고", "의료법 검토 리뷰 빌드업", "초기 환자 DB 확보 랜딩페이지", "환자 경험(PX) 동선 컨설팅"] },
                  { title: "로컬 점유율 1위", staff: "메디컬 전문 마케터 2인 추가", period: "6개월 이상", features: ["경쟁 병원 대비 상위 노출 전략", "하이엔드 영상 매체(유튜브) 기획", "고관여 환자 유입 퍼포먼스 마케팅", "재방문 유도 CRM 자동화", "원내 상담 실장 화법 코칭"] },
                  { title: "프리미엄 지점 확장", staff: "브랜드 디렉터 전담", period: "연간 계약", features: ["VIP 환자 대상 프라이빗 브랜딩", "전 지점 통합 마케팅 가이드라인", "오가닉(자발적) 추천 바이럴 시스템", "언론 보도 및 학회 권위 PR", "전담 TF팀 배정 및 주간 리포팅"] },
                ].map((pkg, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md overflow-hidden hover:border-teal-500/50 hover:shadow-[0_0_50px_-12px_rgba(20,184,166,0.3)] transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">{pkg.title}</h4>
                        <div className="text-sm text-white/60 mb-8 space-y-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p><span className="text-teal-400 font-bold">전담 구성:</span> {pkg.staff}</p>
                        <p><span className="text-teal-400 font-bold">계약 기간:</span> {pkg.period}</p>
                        </div>
                        <ul className="space-y-4">
                        {pkg.features.map((feat, j) => (
                            <li key={j} className="flex items-start gap-3 text-white/80 text-sm">
                            <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                            {feat}
                            </li>
                        ))}
                        </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
