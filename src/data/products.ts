import type { Lang } from '../i18n/ui';

export type L = Record<Lang, string>;

export interface Spec { k: L; v: L }
export interface AppRow { method: L; dose: L; note?: L }

export interface Product {
  slug: Record<Lang, string>;
  name: string;
  short: L;            // kart alt başlığı
  tagline: L;          // detay sayfası başlık altı
  status: 'first' | 'soon';
  form: L;
  category: L;
  image: string;       // public path
  intro: L;
  specs: Spec[];
  benefits: L[];
  apps: AppRow[];
  pack: L;
  active?: L;          // aktif madde özeti
}

const m = (tr: string, en: string): L => ({ tr, en });

export const products: Product[] = [
  {
    slug: { tr: 'igrow-revive-kuru', en: 'igrow-revive-dry' },
    name: 'iGrow Revive',
    short: m('Kuru form · humik ve fulvik asit tuzları + iz elementler', 'Dry form · salts of humic and fulvic acids + trace elements'),
    tagline: m('Kuru, %100 suda çözünür bitki biyostimülantı', 'Dry, 100% water soluble plant biostimulant'),
    status: 'first',
    form: m('Kuru, suda çözünür toz/granül', 'Dry, water soluble powder/granule'),
    category: m('Organik kaynaklı toprak düzenleyici ve biyostimülant', 'Organic origin soil conditioner and biostimulant'),
    image: '/img/products/revive_small.png',
    intro: m(
      'iGrow Revive, modifiye lignin kaynağından elde edilen humik ve fulvik asit tuzlarını bor, kobalt, bakır, mangan, molibden ve çinko ile birleştirir. Tohum uygulaması, toprak uygulaması ve damla sulama için tasarlanmış kuru formdur; küçük dozlarla geniş alanları kapsar.',
      'iGrow Revive combines salts of humic and fulvic acids obtained from modified lignin with boron, cobalt, copper, manganese, molybdenum and zinc. The dry form is designed for seed treatment, soil application and drip irrigation; small doses cover large areas.'
    ),
    active: m('Aktif madde 700 g/kg · humik maddeler %81 (humik asit %50’ye kadar, fulvik asit %25)', 'Active substance 700 g/kg · humic substances 81% (humic acids up to 50%, fulvic acids 25%)'),
    specs: [
      { k: m('Aktif madde', 'Active substance'), v: m('700 g/kg', '700 g/kg') },
      { k: m('Humik maddeler', 'Humic substances'), v: m('%81', '81%') },
      { k: m('Humik asitler', 'Humic acids'), v: m('%50’ye kadar', 'up to 50%') },
      { k: m('Fulvik asitler', 'Fulvic acids'), v: m('%25', '25%') },
      { k: m('İz elementler', 'Trace elements'), v: m('B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn') },
      { k: m('Diğer', 'Other'), v: m('Potasyum, kükürt, demir', 'Potassium, sulfur, iron') },
      { k: m('Çözünürlük', 'Solubility'), v: m('%100 suda çözünür', '100% water soluble') },
    ],
    benefits: [
      m('Derin ve dallanmış kök sistemi; bitki toprağa daha iyi tutunur ve beslenir.', 'Deep, branched root system; the plant anchors and feeds better.'),
      m('Su ve besin elementlerinin alım verimliliği artar, girdi israfı azalır.', 'Improved uptake efficiency of water and nutrients, less input waste.'),
      m('Faydalı toprak mikroorganizmalarını besler, toprak yaşamını canlandırır.', 'Feeds beneficial soil microorganisms, revives soil life.'),
      m('Kuraklık ve diğer abiyotik stres dönemlerinde dayanıklılık.', 'Resilience during drought and other abiotic stress periods.'),
      m('Klorofil üretimi ve fotosentez hızı yükselir, gelişme süresi kısalır.', 'Higher chlorophyll production and photosynthesis rate, shorter development time.'),
      m('Bitki koruma uygulamalarıyla uyumlu, tank karışımına girer.', 'Compatible with plant protection applications, suitable for tank mixes.'),
    ],
    apps: [
      { method: m('Tohum uygulaması', 'Seed treatment'), dose: m('1000 kg tohuma 0,1 kg', '0.1 kg per 1000 kg of seed'), note: m('Tohum ilaçlama karışımıyla birlikte', 'Together with seed dressing mix') },
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('Hektara 0,1 kg', '0.1 kg per hectare'), note: m('Bitki türüne göre ayarlanır', 'Adjusted to crop') },
      { method: m('Damla sulama', 'Drip irrigation'), dose: m('Hektara 0,2–0,5 kg', '0.2–0.5 kg per hectare'), note: m('Sezon boyunca 2–4 uygulama', '2–4 applications per season') },
      { method: m('Toprak uygulaması', 'Soil application'), dose: m('Hektara 0,5–1 kg', '0.5–1 kg per hectare'), note: m('Ekim veya dikim öncesi', 'Before sowing or planting') },
    ],
    pack: m('1 kg poşet', '1 kg pouch'),
  },
  {
    slug: { tr: 'igrow-revive-sivi', en: 'igrow-revive-liquid' },
    name: 'iGrow Revive',
    short: m('Sıvı form · yaprak ve damla uygulamaları için', 'Liquid form · for foliar and drip applications'),
    tagline: m('Sıvı, kullanıma hazır bitki biyostimülantı', 'Liquid, ready to use plant biostimulant'),
    status: 'first',
    form: m('Sıvı konsantre', 'Liquid concentrate'),
    category: m('Sıvı organik gübre / biyostimülant', 'Liquid organic fertilizer / biostimulant'),
    image: '/img/products/revive_set.png',
    intro: m(
      'iGrow Revive sıvı, aynı humik ve fulvik asit kompleksini sulama sistemine ve yaprak uygulamasına uygun konsantre formda sunar. Sera ve açık alanda, damla sulama hattına doğrudan dozlanır; bitki koruma ürünleriyle tank karışımına girer.',
      'iGrow Revive liquid delivers the same humic and fulvic acid complex in a concentrate suited to irrigation systems and foliar application. In greenhouses and open fields it is dosed directly into the drip line and mixes in the tank with plant protection products.'
    ),
    active: m('Humik ve fulvik asit tuzları + B, Co, Cu, Mn, Mo, Zn', 'Salts of humic and fulvic acids + B, Co, Cu, Mn, Mo, Zn'),
    specs: [
      { k: m('Aktif madde', 'Active substance'), v: m('Humik ve fulvik asit tuzları', 'Salts of humic and fulvic acids') },
      { k: m('İz elementler', 'Trace elements'), v: m('B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn') },
      { k: m('Form', 'Form'), v: m('Sıvı konsantre', 'Liquid concentrate') },
      { k: m('Uygulama', 'Application'), v: m('Damla, yaprak, tank karışımı', 'Drip, foliar, tank mix') },
      { k: m('Çözünürlük', 'Solubility'), v: m('Tam çözünür, tortu bırakmaz', 'Fully soluble, no residue') },
    ],
    benefits: [
      m('Damla sulama hattına doğrudan dozlanır, ek karıştırma gerektirmez.', 'Dosed directly into the drip line, no extra mixing needed.'),
      m('Yaprak yüzeyinden hızlı alım; stres sonrası toparlanmayı hızlandırır.', 'Rapid uptake through the leaf surface; speeds up recovery after stress.'),
      m('Kök bölgesinde besin elementlerinin alınabilirliğini artırır.', 'Increases nutrient availability in the root zone.'),
      m('Bitki koruma ürünlerinin etkinliğini destekler.', 'Supports the efficacy of plant protection products.'),
      m('Sera, bağ, meyve bahçesi ve tarla bitkilerinde kullanılır.', 'Used in greenhouses, vineyards, orchards and field crops.'),
    ],
    apps: [
      { method: m('Damla sulama', 'Drip irrigation'), dose: m('Dekara 100–200 ml', '100–200 ml per decare'), note: m('10–14 gün arayla', 'Every 10–14 days') },
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('100 L suya 100–150 ml', '100–150 ml per 100 L water'), note: m('Sabah veya akşam saatlerinde', 'Morning or evening hours') },
      { method: m('Fide ve dikim', 'Seedling and transplanting'), dose: m('100 L suya 200 ml', '200 ml per 100 L water'), note: m('Can suyu ile', 'With transplant water') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister'),
  },
  {
    slug: { tr: 'igrow-m5-micromix', en: 'igrow-m5-micromix' },
    name: 'iGrow M5 Micromix',
    short: m('Kuru, %100 suda çözünür organik mineral mikro element gübresi', 'Dry, 100% water soluble organic mineral micronutrient fertilizer'),
    tagline: m('Yaprak ve damla uygulamaları için mikro element kompleksi', 'Micronutrient complex for foliar and drip applications'),
    status: 'soon',
    form: m('Kuru, suda çözünür', 'Dry, water soluble'),
    category: m('Organomineral mikro element gübresi', 'Organomineral micronutrient fertilizer'),
    image: '/img/products/igrow_m5.png',
    intro: m(
      'iGrow M5, çinko, bor, mangan, bakır, kobalt ve molibdeni %28’e varan fulvik asit ile birleştirir. AB organik tarım girdi listesinde yer alır; 100 g ürün bir hektarı kapsar.',
      'iGrow M5 combines zinc, boron, manganese, copper, cobalt and molybdenum with up to 28% fulvic acid. Listed as an EU organic farming input; 100 g treats one hectare.'
    ),
    specs: [
      { k: m('Toplam mikro element', 'Total micronutrients'), v: m('%5,04', '5.04%') },
      { k: m('Organik madde', 'Organic matter'), v: m('%40', '40%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)'), v: m('%11', '11%') },
      { k: m('Kükürt', 'Sulfur'), v: m('%4', '4%') },
      { k: m('Nem', 'Moisture'), v: m('%15', '15%') },
    ],
    benefits: [
      m('Hidroponik, toprak, kokopit ve kaya yünü dahil her yetiştirme sistemine uyar.', 'Fits every growing system including hydroponics, soil, coco coir and rockwool.'),
      m('Yüksek fulvik asit içeriği besin alımını hızlandırır.', 'High fulvic acid content speeds up nutrient uptake.'),
      m('Diğer gübre ve katkılarla birlikte kullanılabilir.', 'Can be used alongside other fertilizers and additives.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('Hektara 100 g', '100 g per hectare') },
      { method: m('Damla sulama', 'Drip irrigation'), dose: m('Hektara 100–200 g', '100–200 g per hectare') },
    ],
    pack: m('1 kg · 100 g paket', '1 kg · 100 g packs'),
  },
  {
    slug: { tr: 'igrow-b-boron-plus', en: 'igrow-b-boron-plus' },
    name: 'iGrow B Boron Plus',
    short: m('Sıvı, borlu yaprak gübresi; çiçek ve tomurcuk koruması', 'Liquid borated foliar fertilizer; bud and flower protection'),
    tagline: m('Organik bor ile çiçek dökümüne karşı', 'Organic boron against flower drop'),
    status: 'soon',
    form: m('Sıvı', 'Liquid'),
    category: m('Sıvı organomineral gübre', 'Liquid organomineral fertilizer'),
    image: '/img/products/igrow_b.png',
    intro: m(
      'iGrow B, boru fulvik ve humik asitlerle bağlayarak toksik etki olmadan anında alınabilir hale getirir. Tomurcuk dökümünü ve kısır çiçeklenmeyi önlemek için tasarlanmıştır. 5 L bidon 2000 L çalışma çözeltisi hazırlar.',
      'iGrow B binds boron with fulvic and humic acids so it is immediately available without toxic reactions. Designed to prevent bud drop and barren flowers. A 5 L canister makes 2000 L of working solution.'
    ),
    specs: [
      { k: m('Bor', 'Boron'), v: m('%2,0', '2.0%') },
      { k: m('Organik madde', 'Organic matter'), v: m('%6', '6%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)'), v: m('%10', '10%') },
      { k: m('Kükürt', 'Sulfur'), v: m('%0,3', '0.3%') },
      { k: m('Kuru madde', 'Dry matter'), v: m('%28', '28%') },
      { k: m('Aktif madde', 'Active substance'), v: m('230 g/L', '230 g/L') },
    ],
    benefits: [
      m('Çiçek tutumu ve meyve bağlama döneminde bor ihtiyacını karşılar.', 'Covers boron demand during flowering and fruit set.'),
      m('Tohumlarda protein, şeker ve yağ oranını destekler.', 'Supports protein, sugar and oil content in seeds.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('100 L suya 250 ml', '250 ml per 100 L water') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister'),
  },
  {
    slug: { tr: 'igrow-v', en: 'igrow-v' },
    name: 'iGrow V',
    short: m('Sıvı, çiçeklenme dönemi biyostimülantı', 'Liquid flowering phase biostimulant'),
    tagline: m('Çiçeklenmeyi ve gelişim evrelerini hızlandırır', 'Accelerates flowering and growth stages'),
    status: 'soon',
    form: m('Sıvı', 'Liquid'),
    category: m('Özel gübre / biyostimülant', 'Special fertilizer / biostimulant'),
    image: '/img/products/igrow_v.png',
    intro: m(
      'iGrow V, 2-2-2 NPK ile organik bileşenleri hücre zarı seçiciliği teknolojisiyle birleştirir; besin ve su akışını düzenler, abiyotik ve pestisit stresini azaltır. 5 L bidon 625 L çalışma çözeltisi hazırlar.',
      'iGrow V combines 2-2-2 NPK with organic components through cell membrane selectivity technology; it regulates nutrient and water flow and relieves abiotic and pesticide stress. A 5 L canister makes 625 L of working solution.'
    ),
    specs: [
      { k: m('Azot (N)', 'Nitrogen (N)'), v: m('%2', '2%') },
      { k: m('Fosfor (P₂O₅)', 'Phosphorus (P₂O₅)'), v: m('%2', '2%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)'), v: m('%2', '2%') },
      { k: m('Organik madde', 'Organic matter'), v: m('%9', '9%') },
      { k: m('Kuru madde', 'Dry matter'), v: m('%15', '15%') },
    ],
    benefits: [
      m('Daha hızlı ve bol çiçeklenme.', 'Faster and more abundant flowering.'),
      m('Her yetiştirme sistemine uyar, diğer ürünlerle karışır.', 'Fits every growing system, mixes with other products.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('100 L suya 800 ml', '800 ml per 100 L water') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister'),
  },
  {
    slug: { tr: 'igrow-alga', en: 'igrow-alga' },
    name: 'iGrow Alga',
    short: m('Kahverengi alg özlü kök gelişim aktivatörü', 'Brown algae root growth activator'),
    tagline: m('Dikim, şaşırtma ve stres sonrası toparlanma için', 'For planting, transplanting and recovery after stress'),
    status: 'soon',
    form: m('Sıvı', 'Liquid'),
    category: m('Alg özlü biyostimülant', 'Seaweed based biostimulant'),
    image: '/img/products/igrow_alga.png',
    intro: m(
      'iGrow Alga, %50 kahverengi alg özünü humik ve fulvik asitler, amino asitler, oligopeptitler ve oksinlerle birleştirir. Erken dönem kök ve doku gelişimini hızlandırır; 1 L ürün 500 L çalışma çözeltisi hazırlar.',
      'iGrow Alga combines 50% brown algae extract with humic and fulvic acids, amino acids, oligopeptides and auxins. It accelerates early root and tissue development; 1 L makes 500 L of working solution.'
    ),
    specs: [
      { k: m('Kahverengi alg özü', 'Brown algae extract'), v: m('%50', '50%') },
      { k: m('Humik asit potasyum tuzları', 'Potassium salts of humic acids'), v: m('%25', '25%') },
      { k: m('Fulvik asitler', 'Fulvic acids'), v: m('%25', '25%') },
    ],
    benefits: [
      m('Şaşırtma şokunu azaltır, fide tutmasını hızlandırır.', 'Reduces transplant shock, speeds up seedling establishment.'),
      m('Kuraklık, soğuk ve tuzluluk stresini hafifletir.', 'Mitigates drought, cold and salinity stress.'),
    ],
    apps: [
      { method: m('Kök bölgesi sulama', 'Root zone watering'), dose: m('500 L suya 1 L', '1 L per 500 L water') },
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('500 L suya 1 L', '1 L per 500 L water') },
    ],
    pack: m('1 L şişe', '1 L bottle'),
  },
  {
    slug: { tr: 'lignogro', en: 'lignogro' },
    name: 'LignoGro',
    short: m('Kuru, suda çözünür organik mineral mikro element gübresi', 'Dry water soluble organic mineral micronutrient fertilizer'),
    tagline: m('Yaprak ve damla için ekonomik mikro element kaynağı', 'Economical micronutrient source for foliar and drip'),
    status: 'soon',
    form: m('Kuru, suda çözünür', 'Dry, water soluble'),
    category: m('Organomineral mikro element gübresi', 'Organomineral micronutrient fertilizer'),
    image: '/img/products/lignogro.png',
    intro: m(
      'LignoGro, humik ve fulvik asit taşıyıcı üzerinde bor, bakır, mangan, çinko ve molibden sunar; azot, fosfor ve potasyumun bitkiye taşınmasını kolaylaştırır. 0,8 kg paket 1600 L çalışma çözeltisi hazırlar.',
      'LignoGro delivers boron, copper, manganese, zinc and molybdenum on a humic and fulvic acid carrier, easing the transport of nitrogen, phosphorus and potassium into the plant. A 0.8 kg pack makes 1600 L of working solution.'
    ),
    specs: [
      { k: m('Toplam mikro element', 'Total micronutrients'), v: m('%5,04', '5.04%') },
      { k: m('Organik madde', 'Organic matter'), v: m('%4', '4%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)'), v: m('%11', '11%') },
      { k: m('Kükürt', 'Sulfur'), v: m('%4', '4%') },
    ],
    benefits: [
      m('Klorofil seviyesini ve yaprak yüzeyini artırır.', 'Raises chlorophyll level and leaf surface.'),
      m('Pestisit uygulaması sonrası kimyasal stresi hafifletir.', 'Relieves chemical stress after pesticide application.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray'), dose: m('1600 L suya 0,8 kg', '0.8 kg per 1600 L water') },
    ],
    pack: m('0,8 kg paket', '0.8 kg pack'),
  },
];

export function productUrl(lang: Lang, p: Product): string {
  return lang === 'tr' ? `/urunler/${p.slug.tr}/` : `/en/products/${p.slug.en}/`;
}

export function findProduct(lang: Lang, slug: string): Product | undefined {
  return products.find((p) => p.slug[lang] === slug);
}
