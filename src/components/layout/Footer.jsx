import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-secondary py-20 border-t border-border-primary transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-4 tracking-tight">BRANDUO</h2>
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
          <div className="space-y-2">
            <strong className="text-text-primary block uppercase tracking-wider mb-2">Address</strong>
            <p>서울 성동구 뚝섬로13길 38 KT&G상상플래닛 6층</p>
          </div>
          <div className="space-y-2">
            <strong className="text-text-primary block uppercase tracking-wider mb-2">Contact</strong>
            <p>Tel: 010-2339-9321</p>
            <p>E-mail: contact@branduo.co.kr</p>
          </div>
          <div className="space-y-2">
            <strong className="text-text-primary block uppercase tracking-wider mb-2">Info</strong>
            <p>상호명: 브랜듀오 | 대표: 안 형 원</p>
            <p>사업자 등록 번호: 659-03-03533</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
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
