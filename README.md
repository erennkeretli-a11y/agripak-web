# AgriPak Kimya — kurumsal web sitesi

Astro ile yazılmış, iki dilli (TR varsayılan, /en/) statik site. GitHub Pages üzerinde yayınlanır.

- Geliştirme: `npm install && npm run dev`
- Derleme: `npm run build` (çıktı `dist/`)
- Alt yol altında yayın için: `SITE_BASE=/depo-adi/ SITE_URL=https://kullanici.github.io npm run build`

İçerik: `src/i18n/ui.ts` (arayüz metinleri), `src/data/products.ts` (ürünler), `src/components/*Page.astro` (sayfalar).
