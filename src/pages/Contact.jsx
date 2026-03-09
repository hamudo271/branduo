import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import TextReveal from '../components/common/TextReveal';

const Contact = () => {
  return (
    <div className="pt-40 pb-20 bg-black min-h-screen text-white overflow-hidden relative">
      {/* Ambient Light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm mb-6"
          >
            <span className="text-accent-primary font-bold tracking-widest uppercase text-xs">
              Medical Consultation
            </span>
          </motion.div>
          
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">진단 신청 (Request)</h1>
          </TextReveal>
          <TextReveal delay={0.2}>
             <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
              귀 원의 현재 마케팅 상황을 분석하고, 최적의 성과 로드맵을 제안해 드립니다.<br/>
              문의주시면 24시간 이내에 메디컬 디렉터가 직접 연락드립니다.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: "Email", value: "contact@branduo.co.kr", color: "text-teal-400", bg: "bg-teal-400/10" },
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "010-2339-9321", color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Address", value: "서울 성동구 뚝섬로13길 38 KT&G상상플래닛 6층", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                  { icon: <Clock className="w-6 h-6" />, title: "Business Hours", value: "Mon - Fri, 10:00 - 19:00", color: "text-teal-300", bg: "bg-teal-300/10" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="group flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} border border-white/5`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors">{item.title}</h3>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl pointer-events-none" />
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">성함 / 직함</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 outline-none transition-all"
                    placeholder="홍길동 원장님"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">병의원 명 / 주소</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 outline-none transition-all"
                    placeholder="브랜듀오 성형외과 (강남점)"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">주요 진료 과목</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 outline-none transition-all"
                    placeholder="성형외과 / 피부과 / 치과 등"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">연락처</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 ml-1">현재 진행 중인 마케팅 예산</label>
                <select className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 outline-none transition-all appearance-none cursor-pointer">
                  <option value="" className="bg-zinc-900 text-white/50">예산 범위를 선택해주세요</option>
                  <option value="under_5m" className="bg-zinc-900">500만원 미만</option>
                  <option value="5m_10m" className="bg-zinc-900">500만원 ~ 1,000만원</option>
                  <option value="10m_30m" className="bg-zinc-900">1,000만원 ~ 3,000만원</option>
                  <option value="over_30m" className="bg-zinc-900">3,000만원 이상</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80 ml-1">고민 내용 (Diagnosis Target)</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 outline-none transition-all resize-none"
                  placeholder="현재 겪고 계신 마케팅 문제점이나 달성하고자 하는 목표를 적어주세요."
                ></textarea>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-black text-lg hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group uppercase tracking-widest font-black">
                Request Diagnostic Now
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
