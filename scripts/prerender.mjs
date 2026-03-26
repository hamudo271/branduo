import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import http from 'http';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

const routes = [
  '/',
  '/service',
  '/portfolio',
  '/column',
  '/company',
  '/pricing',
  '/contact',
];

async function prerender() {
  console.log('🚀 프리렌더링 시작...');

  // serve-handler로 정적 파일 서빙 (SPA fallback 포함)
  const server = http.createServer((req, res) => {
    return handler(req, res, {
      public: DIST,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });

  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    console.log(`  📄 렌더링: ${route}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // React 렌더링이 완료될 때까지 대기 (root 안에 실제 콘텐츠가 생길 때까지)
    await page.waitForFunction(
      () => {
        const root = document.getElementById('root');
        return root && root.innerHTML.length > 100;
      },
      { timeout: 15000 }
    );

    // 추가 안정화 대기
    await new Promise((r) => setTimeout(r, 1000));

    const html = await page.content();

    // 라우트별 디렉토리 생성 후 index.html 저장
    const outDir = route === '/' ? DIST : join(DIST, route);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }
    writeFileSync(join(outDir, 'index.html'), html);

    const contentLen = html.length;
    console.log(`    ✅ 저장 완료 (${(contentLen / 1024).toFixed(1)}KB)`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log(`\n✅ 프리렌더링 완료! 총 ${routes.length}개 페이지`);
}

prerender().catch(console.error);
