import { useEffect } from 'react';

/**
 * useSEO - 각 페이지별 SEO 메타 태그를 동적으로 설정하는 훅
 * @param {object} options
 * @param {string} options.title - 페이지 제목 (브랜듀오 | ... 앞에 오는 부분)
 * @param {string} options.description - meta description
 * @param {string} options.keywords - meta keywords (콤마 구분)
 * @param {string} [options.canonical] - canonical URL (기본값: 현재 URL)
 * @param {string} [options.ogImage] - OG 이미지 URL
 */
const useSEO = ({ title, description, keywords, canonical, ogImage }) => {
  useEffect(() => {
    const siteName = '브랜듀오';
    const fullTitle = !title
      ? `${siteName} | 병원 의료 마케팅 전문 에이전시`
      : title.includes(siteName)
        ? title
        : `${title} | ${siteName}`;
    const ogImg = ogImage || 'https://branduo.co.kr/og-image.png';
    const canonicalUrl = canonical || `https://branduo.co.kr${window.location.pathname}`;

    // Title
    document.title = fullTitle;

    // Helper to set meta content
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.startsWith('meta[name') ? 'name' : 'property';
        const val = selector.match(/["']([^"']+)["']/)[1];
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Primary
    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    // Canonical
    setLink('canonical', canonicalUrl);

    // OG
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', ogImg);

    // Twitter
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImg);
  }, [title, description, keywords, canonical, ogImage]);
};

export default useSEO;
