import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-secondary py-20 border-t border-border-primary transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img 
                src="/branduo-logo-v2.png" 
                alt="BRANDUO" 
                className="h-8 md:h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100 invert brightness-0"
              />
            </Link>
            <p className="text-sm max-w-md leading-relaxed">
              We create impactful media that drives growth.<br />
              Your partner in digital transformation.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs border-t border-border-primary pt-8">
          <div className="space-y-4">
            <strong className="text-text-primary block uppercase tracking-wider mb-2">Address</strong>
            <p>서울 성동구 뚝섬로13길 38 KT&G상상플래닛 6층</p>
            <div className="pt-4 space-y-2 border-t border-border-primary/30">
              <p className="font-bold text-text-primary">병원 마케팅 전문 분야</p>
              <div className="flex flex-wrap gap-2 text-[10px]">
                <span className="hover:text-accent-primary cursor-default">#성형외과마케팅</span>
                <span className="hover:text-accent-primary cursor-default">#피부과마케팅</span>
                <span className="hover:text-accent-primary cursor-default">#치과마케팅</span>
                <span className="hover:text-accent-primary cursor-default">#안과마케팅</span>
                <span className="hover:text-accent-primary cursor-default">#정형외과마케팅</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <strong className="text-text-primary block uppercase tracking-wider mb-2">Contact</strong>
            <p>Tel: 010-2339-9321</p>
            <p>E-mail: contact@branduo.co.kr</p>
            <div className="pt-4 space-y-2 border-t border-border-primary/30">
              <p className="font-bold text-text-primary">핵심 서비스</p>
              <div className="flex flex-wrap gap-2 text-[10px]">
                <Link to="/service" className="hover:text-accent-primary">병원블로그SEO</Link>
                <Link to="/service" className="hover:text-accent-primary">병원SNS광고</Link>
                <Link to="/service" className="hover:text-accent-primary">의료영상제작</Link>
                <Link to="/service" className="hover:text-accent-primary">신환유입솔루션</Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <strong className="text-text-primary block uppercase tracking-wider mb-2">Info</strong>
            <p>상호명: 브랜듀오 | 대표: 안 형 원</p>
            <p>사업자 등록 번호: 659-03-03533</p>
            <div className="pt-4 space-y-2 border-t border-border-primary/30 text-[10px] leading-relaxed">
              <p>브랜듀오는 데이터 기반의 <span className="text-text-primary font-bold">병원 마케팅</span> 및 <span className="text-text-primary font-bold">의료 브랜딩</span> 전문 에이전시입니다. 검색 상위 노출과 실질적 성장을 숫자로 증명합니다.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary border-t border-border-primary/30 pt-8">
          <p>Copyright ⓒ 2026 BRANDUO. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/policy" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
