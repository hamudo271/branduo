/**
 * IndexNow - 배포 후 네이버에 페이지 변경을 즉시 알림
 * 사용법: node scripts/indexnow.mjs
 */

const API_KEY = '87a841b4bb13e545d2ed395fbc348146';
const HOST = 'branduo.co.kr';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/service`,
  `https://${HOST}/portfolio`,
  `https://${HOST}/column`,
  `https://${HOST}/company`,
  `https://${HOST}/pricing`,
  `https://${HOST}/contact`,
];

async function submitIndexNow() {
  const body = {
    host: HOST,
    key: API_KEY,
    keyLocation: `https://${HOST}/${API_KEY}.txt`,
    urlList: urls,
  };

  console.log(`IndexNow: ${urls.length}개 URL 제출 중...`);

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`✅ 제출 완료 (${res.status})`);
  } else {
    console.error(`❌ 실패: ${res.status} ${res.statusText}`);
    const text = await res.text();
    if (text) console.error(text);
  }
}

submitIndexNow().catch(console.error);
