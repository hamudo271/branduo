import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
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

const ServiceDetail = () => {
  const { id } = useParams();

  const serviceData = {
    'service-1': {
      title: "유튜브 채널 육성",
      subtitle: "YouTube Channel Growth",
      desc: "단순 업로드가 아닙니다. 철저한 기획과 알고리즘 분석으로 채널을 확실하게 성장시킵니다.",
      heroImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "알고리즘의 선택을 받는 비결",
          text: "아무리 영상을 많이 올려도 조회수가 제자리라면 '기획'의 문제입니다. 유튜브는 더 이상 영상 창고가 아닌, 강력한 브랜딩 채널입니다. 브랜듀오는 채널의 정체성(Identity)을 확립하고, 시청자가 반응할 수밖에 없는 '킬러 콘텐츠'를 기획합니다. 썸네일 클릭률(CTR)과 시청 지속 시간(Retention)을 극대화하여 브랜드의 흐름을 주도합니다."
        },
        pricing: [
          { name: "채널 진단 컨설팅", price: "550,000", vat: "VAT포함", features: ["채널 현황 분석", "경쟁사 벤치마킹", "콘텐츠 방향성 제시", "알고리즘 최적화 전략"] },
          { name: "종합 성장 패키지", price: "3,500,000", vat: "VAT별도", features: ["전담 PM 배정", "기획/제작/업로드 올인원", "월간 성과 리포트", "썸네일 A/B 테스트", "댓글/커뮤니티 관리"] },
          { name: "프리미엄 채널 매니지먼트", price: "5,500,000", vat: "VAT별도", features: ["채널 총괄 운영", "브랜디드 시리즈물 기획", "유튜브 쇼츠 연계", "광고 집행(Ads) 관리", "크리에이터 섭외"] }
        ]
      }
    },
    'service-2': {
      title: "숏폼 바이럴 마케팅",
      subtitle: "Short-form Viral Marketing",
      desc: "15초 안에 세상을 사로잡습니다. 폭발적인 도달률로 브랜드 인지도를 높이세요.",
      heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "도파민을 자극하는 숏폼 전략",
          text: "숏폼(Short-form)은 이제 브랜드 성장을 위한 필수 전략입니다. 단순히 트렌드를 쫓는 것을 넘어 브랜드의 핵심 가치를 트렌디한 감각과 결합해야 합니다. 브랜듀오는 틱톡, 릴스, 유튜브 쇼츠의 문법을 완벽하게 이해하고, 대중이 먼저 열광하는 바이럴 콘텐츠를 제작합니다."
        },
        pricing: [
          { name: "숏폼 기획/제작 (건당)", price: "330,000", vat: "VAT포함", features: ["트렌드 기반 기획", "네이티브함 살린 촬영/편집", "저작권 해결 음원"] },
          { name: "바이럴 팩 (월 8편)", price: "2,200,000", vat: "VAT포함", features: ["주 2회 업로드 루틴", "채널 톤앤매너 최적화", "해시태그 유입 전략", "계정 육성 가이드"] },
          { name: "메가 바이럴 패키지", price: "5,500,000", vat: "VAT포함", features: ["인플루언서 협업", "챌린지 캠페인 기획", "광고 집행 연계", "도달률 극대화 전략"] }
        ]
      }
    },
    'service-3': {
      title: "퍼포먼스 마케팅",
      subtitle: "Performance Marketing",
      desc: "데이터로 증명합니다. 광고비 대비 최고의 매출 효율(ROAS)을 달성하세요.",
      heroImage: "https://images.unsplash.com/photo-1574717432707-c25c8587a3ea?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "돈 쓰는 광고가 아닌, 돈 버는 광고",
          text: "매력적인 상품도 고객의 인지 없이는 빛을 발할 수 없습니다. 퍼포먼스 마케팅의 정수는 '정교한 타겟팅'과 '설득력 있는 크리에이티브'입니다. 브랜듀오는 고객의 구매 여정(Customer Journey)을 면밀히 분석하여 최적의 전환 시나리오를 설계하고, 성과를 극대화하는 소재를 지속적으로 도출합니다."
        },
        pricing: [
          { name: "소재 기획/제작", price: "550,000", vat: "VAT포함", features: ["후킹 요소 극대화", "A/B 테스트용 베리에이션", "매체별(Meta/Google) 규격 최적화"] },
          { name: "광고 운영 대행", price: "Consulting", vat: "별도 협의", features: ["매체 믹스 제안", "타겟팅 최적화", "실시간 비딩 관리", "성과 분석 리포트"] },
          { name: "그로스 컨설팅", price: "3,300,000", vat: "VAT포함", features: ["퍼널 전체 진단", "랜딩페이지 개선 제안", "CRM 마케팅 전략", "LTV 증대방안"] }
        ]
      }
    },
    'service-4': {
      title: "브랜드 솔루션",
      subtitle: "Total Brand Solution",
      desc: "브랜드의 시작부터 성장까지, 마케팅의 A to Z를 함께 고민합니다.",
      heroImage: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000&auto=format&fit=crop",
      content: {
        intro: {
          title: "하나의 팀처럼 움직이는 파트너",
          text: "브랜딩은 단기적인 성과를 넘어선 깊은 연결입니다. 브랜듀오는 단순한 대행사를 넘어, 파트너사의 '브랜드 빌딩 파트너'가 되어드립니다. 브랜드 아이덴티티(BI) 정립부터 콘텐츠 전략, 퍼포먼스 운영까지 일관된 프리미엄 보이스를 구현합니다. 시장 진입부터 스케일업까지 맞춤형 브랜딩 솔루션을 제공합니다."
        },
        pricing: [
          { name: "스타트업 패키지", price: "3,300,000", vat: "VAT포함", features: ["브랜드 메시지 정립", "기초 콘텐츠 세팅", "초기 마케팅 로드맵"] },
          { name: "리브랜딩 프로젝트", price: "5,500,000", vat: "VAT 별도", features: ["기존 브랜드 진단", "NEW 컨셉 도출", "비주얼 리뉴얼 가이드", "런칭 캠페인"] },
          { name: "CMO 서비스", price: "Consulting", vat: "월 고정", features: ["마케팅 총괄 이사 역할 수행", "연간 마케팅 예산/전략 수립", "사내 마케팅 팀 교육"] }
        ]
      }
    }
  };

  const data = serviceData[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text-primary">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
          <Link to="/service" className="text-accent-primary hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-10 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 to-bg-primary" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-6">{data.subtitle}</span>
            <h1 className="text-5xl md:text-8xl font-black text-text-primary mb-8 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
              {data.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
                {data.content.intro.title}
              </h2>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                {data.content.intro.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-accent-primary font-bold tracking-widest uppercase block mb-4">Pricing</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary">가격 안내</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.content.pricing.map((plan, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-bg-primary p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-accent-primary transition-colors flex flex-col"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                <span className="text-sm text-text-secondary mb-8 block">{plan.vat}</span>
                
                <div className="mb-8">
                  <span className="text-3xl font-bold text-text-primary">₩{plan.price}</span>
                  <span className="text-text-secondary"> / 건</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-secondary">
                      <CheckCircle2 size={18} className="text-accent-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className="w-full py-4 rounded-xl font-bold text-center bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
                >
                  문의하기
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-black mb-8">돈되는 유튜브,<br/>그 비결을 알고 싶으신가요?</h2>
           <p className="text-xl text-white/70 mb-12">브랜듀오 미디어와 함께 당신의 브랜드가 세상의 중심에 서는 놀라운 변화를 확인하세요.</p>
           <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-accent-primary hover:text-white transition-all duration-300">
             전문상담 받기 <ArrowRight size={20} />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
