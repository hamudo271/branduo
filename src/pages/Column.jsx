import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/common/TextReveal';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const Column = () => {
  useSEO({
    title: '의료 마케팅 칼럼 | 병원 노출 확보 전략 리포트',
    description: '브랜듀오가 공유하는 병원 마케팅 인사이트. 개원 트렌드, 의료법 준수 블로그 작성법, 랜딩페이지 퍼널, 유튜브 마케팅, 네이버 SEO 등 최신 의료 마케팅 트렌드를 안내합니다.',
    keywords: '의료마케팅칼럼, 병원마케팅인사이트, 개원마케팅전략, 병원블로그SEO, 의료법마케팅, 네이버블로그마케팅',
    canonical: 'https://branduo.co.kr/column',
  });

  const columns = [
    { id: 1, title: "2024년 병의원 개원 마케팅 필수 체크리스트", desc: "개원 3개월 전부터 준비해야 할 마케팅 로드맵과 실패하지 않는 예산 분배 전략을 공개합니다.", date: "2024.03.20", category: "개원 전략" },
    { id: 2, title: "의료법 위반 없는 안전하고 확실한 블로그 작성법", desc: "보건소 민원 걱정 없이 원장님의 임상 전문성을 돋보이게 하는 합법적 카피라이팅 가이드.", date: "2024.03.15", category: "의료법 가이드" },
    { id: 3, title: "신환 DB 전환율 300% 높이는 랜딩페이지의 비밀", desc: "단순 트래픽이 아닌 실제 예약과 결제로 이어지는 성형/피부과 맞춤 랜딩페이지 기획 공식.", date: "2024.03.10", category: "전환(CRO)" },
    { id: 4, title: "우리 병원 영수증 리뷰, 왜 안 달릴까?", desc: "네이버 플레이스 상위 노출을 결정짓는 진성 리뷰 확보 전략과 원내 데스크 커뮤니케이션 팁.", date: "2024.03.05", category: "CRM 관리" },
    { id: 5, title: "유튜브 마케팅, 치과 원장님이 직접 출연해야 하는 이유", desc: "환자들이 선택하는 병원의 기준이 바뀌었습니다. 배우를 쓰면 안 되는 이유와 퍼스널 브랜딩의 중요성.", date: "2024.02.28", category: "Youtube" },
    { id: 6, title: "지역 내 검색 결과 1페이지를 장악하는 SEO 테크닉", desc: "비싼 파워링크 광고 없이 오가닉(Organic) 트래픽만으로 포털 사이트 상단을 점유하는 비법.", date: "2024.02.20", category: "SEO 최적화" }
  ];

  return (
    <div className="bg-black min-h-screen text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
        {/* Ambient Light */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-bold tracking-widest uppercase text-sm">
              Medical Insight
            </span>
          </motion.div>
          <TextReveal>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Column
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-medium">
              최상위권 병원들이 실천하고 있는 마케팅 인사이트를 공유합니다.<br/>
              개원의 생존과 성공을 위한 핵심 전략을 확인하세요.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative py-20 bg-zinc-950">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-8 flex flex-col h-full">
                   <div className="flex items-center justify-between mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/70 group-hover:bg-white/10 group-hover:text-white transition-colors">
                        {item.category}
                      </span>
                      <BookOpen size={20} className="text-white/20 group-hover:text-white/40 transition-colors" />
                   </div>
                   
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-sm text-white/40 font-mono">{item.date}</span>
                    <span className="flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">
                      Read Article <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Column;
