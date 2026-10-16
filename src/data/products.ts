import type { Lang } from '../i18n/ui';

export type L = Record<Lang, string>;

export interface Spec { k: L; v: L }
export interface AppRow { method: L; info: L }

export interface Product {
  slug: { tr: string; en: string };
  name: string;
  short: L;
  tagline: L;
  seo: L;
  status: 'prep' | 'portfolio';
  form: L;
  formShort: L;
  image: string;
  intro: L;
  specs: Spec[];
  benefits: L[];
  apps: AppRow[];
  pack: L;
  active?: L;
  organicCert?: boolean;
}

const m = (tr: string, en: string, ru: string): L => ({ tr, en, ru });

// Kaynak: Ligno OÜ ürün broşürü, sayfa 13–19. Baskı tarihi doğrulanmamıştır. Yalnızca broşürde yazan değerler ve ifadeler;
// Türkiye için uygulama dozu YOK, onaylı etiket sonrasında eklenecek.

export const products: Product[] = [
  {
    slug: { tr: 'igrow-revive-kuru', en: 'igrow-revive-dry' },
    name: 'iGrow Revive',
    short: m('Humik ve fulvik asit tuzları ile iz element içeren kuru formülasyon', 'Dry formulation containing humic and fulvic acid salts and trace elements', 'Сухая форма с солями гуминовых и фульвовых кислот и микроэлементами'),
    tagline: m('Kuru, suda çözünür formülasyon', 'Dry, water-soluble formulation', 'Сухая водорастворимая форма'),
    seo: m('iGrow Revive kuru formunun üretici belgelerine dayanan içerik bilgileri ve Türkiye tescil hazırlıklarının durumu.', 'Manufacturer-documented information on iGrow Revive Dry and the status of preparations for registration in Türkiye.', 'Состав сухой формы iGrow Revive по документам производителя и информация о подготовке к регистрации в Турции.'),
    status: 'prep',
    form: m('Kuru, suda çözünür', 'Dry, water-soluble', 'Сухая, водорастворимая'),
    formShort: m('Kuru', 'Dry', 'Сухой'),
    image: '/img/products/revive_small.png',
    intro: m(
      'iGrow Revive’ın kuru formu, üretici belgelerine göre modifiye ligninden elde edilen humik ve fulvik asit tuzları ile bor, kobalt, bakır, mangan, molibden ve çinko içerir. Üretici broşüründe tohum uygulaması, yaprak uygulaması, toprak uygulaması ve damla sulama sistemi üzerinden kullanım belirtilir. Türkiye için uygulama bilgileri, Türkçe etiket onaylandıktan sonra yayımlanacaktır.',
      'According to manufacturer documentation, iGrow Revive Dry contains salts of humic and fulvic acids derived from modified lignin, together with boron, cobalt, copper, manganese, molybdenum and zinc. The manufacturer’s brochure lists seed treatment, foliar application, soil application and use through drip irrigation systems. Application information for Türkiye will be published after label approval.',
      'iGrow Revive в сухой форме, по документам производителя, содержит соли гуминовых и фульвовых кислот, полученные из модифицированного лигнина, а также бор, кобальт, медь, марганец, молибден и цинк. В брошюре производителя указаны обработка семян, внекорневая обработка, внесение в почву и применение через систему капельного полива. Рекомендации для применения в Турции будут опубликованы после утверждения этикетки.'
    ),
    active: m('Üretici broşüründe belirtilen aktif madde miktarı: 900 g/kg', 'Active substance content stated in the manufacturer’s brochure: 900 g/kg', 'Содержание действующих веществ по данным брошюры производителя — 900 г/кг'),
    specs: [
      { k: m('Aktif madde', 'Active substance', 'Действующие вещества'), v: m('900 g/kg', '900 g/kg', '900 г/кг') },
      { k: m('Humik maddeler', 'Humic substances', 'Гуминовые вещества'), v: m('%81', '81%', '81 %') },
      { k: m('Humik asitler', 'Humic acids', 'Гуминовые кислоты'), v: m('%50’ye kadar', 'up to 50%', 'до 50 %') },
      { k: m('Fulvik asitler', 'Fulvic acids', 'Фульвовые кислоты'), v: m('%25', '25%', '25 %') },
      { k: m('İz elementler', 'Trace elements', 'Микроэлементы'), v: m('B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn') },
      { k: m('Diğer bileşenler', 'Other components', 'Прочие компоненты'), v: m('Potasyum, kükürt, demir', 'Potassium, sulfur, iron', 'Калий, сера, железо') },
    ],
    benefits: [
      m('Üretici, ürünün kök gelişimini desteklediğini belirtir.', 'The manufacturer states that the product supports root development.', 'По данным производителя, продукт способствует развитию корневой системы.'),
      m('Üretici, su ve besin elementlerinin alım verimliliğinin arttığını belirtir.', 'The manufacturer states that the product improves the uptake of water and nutrients.', 'Производитель заявляет о повышении эффективности усвоения воды и элементов питания.'),
      m('Broşürde ürünün faydalı toprak mikroorganizmalarının etkinliği üzerindeki etkisine yer verilir.', 'The brochure notes an effect on the activity of beneficial soil microorganisms.', 'В брошюре отмечено влияние продукта на активность полезных почвенных микроорганизмов.'),
      m('Üretici, abiyotik stres koşullarında bitkiye destek sağladığını belirtir.', 'The manufacturer states that the product supports plants under abiotic stress.', 'Производитель указывает на поддержку растений в условиях абиотического стресса.'),
      m('Broşürde klorofil oluşumu ve fotosentez süreçleri üzerindeki etki belirtilir.', 'The brochure reports effects on chlorophyll formation and photosynthesis.', 'В брошюре заявлено влияние на образование хлорофилла и процессы фотосинтеза.'),
    ],
    apps: [
      { method: m('Tohum uygulaması', 'Seed treatment', 'Обработка семян'), info: m('1.000 kg tohuma 0,1 kg, tohum uygulama karışımıyla', '0.1 kg per 1,000 kg of seed, together with the seed treatment mix', '0,1 кг на 1 000 кг семян, вместе со смесью для обработки семян') },
      { method: m('Yaprak uygulaması', 'Foliar application', 'Внекорневая обработка'), info: m('Broşürde başlangıç dozu hektara 0,1 kg olarak belirtilir; bitkiye göre ayarlanır', 'The brochure states a starting rate of 0.1 kg per hectare, adjusted to the crop', 'В брошюре указана начальная норма 0,1 кг/га с корректировкой в зависимости от культуры') },
    ],
    pack: m('1 kg paket', '1 kg pack', 'Пакет 1 кг'),
  },
  {
    slug: { tr: 'igrow-revive-sivi', en: 'igrow-revive-liquid' },
    name: 'iGrow Revive',
    short: m('Humik ve fulvik asit tuzları içeren sıvı formülasyon', 'Liquid formulation containing humic and fulvic acid salts', 'Жидкая форма на основе солей гуминовых и фульвовых кислот'),
    tagline: m('Sıvı formülasyon', 'Liquid formulation', 'Жидкая форма'),
    seo: m('iGrow Revive sıvı formunun üretici belgelerine dayanan içerik bilgileri ve Türkiye tescil hazırlıklarının durumu.', 'Manufacturer-documented information on iGrow Revive Liquid and the status of preparations for registration in Türkiye.', 'Состав жидкой формы iGrow Revive по документам производителя и информация о подготовке к регистрации в Турции.'),
    status: 'prep',
    form: m('Sıvı', 'Liquid', 'Жидкая'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    image: '/img/products/revive_set.png',
    intro: m(
      'iGrow Revive’ın sıvı formu, humik ve fulvik asit tuzları ile iz elementler içerir. Seyreltme, uygulama ve karışım bilgileri sıvı forma ait doğrulanmış teknik belgeye göre belirlenir; Türkiye için uygulama bilgileri, Türkçe etiket onaylandıktan sonra yayımlanacaktır.',
      'iGrow Revive Liquid contains salts of humic and fulvic acids and trace elements. Dilution, application and mixing instructions follow the verified technical documentation for the liquid formulation; application information for Türkiye will be published after label approval.',
      'Жидкая форма iGrow Revive содержит соли гуминовых и фульвовых кислот и микроэлементы. Условия разведения, нормы внесения и совместимость с другими средствами уточняются по технической документации на жидкую форму продукта; рекомендации для применения в Турции будут опубликованы после утверждения этикетки.'
    ),
    active: m('Humik ve fulvik asit tuzları + B, Co, Cu, Mn, Mo, Zn', 'Salts of humic and fulvic acids + B, Co, Cu, Mn, Mo, Zn', 'Соли гуминовых и фульвовых кислот + B, Co, Cu, Mn, Mo, Zn'),
    specs: [
      { k: m('Aktif bileşen', 'Active component', 'Действующий компонент'), v: m('Humik ve fulvik asit tuzları', 'Salts of humic and fulvic acids', 'Соли гуминовых и фульвовых кислот') },
      { k: m('İz elementler', 'Trace elements', 'Микроэлементы'), v: m('B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn') },
    ],
    benefits: [
      m('Üretici broşüründe iGrow Revive’ın kuru ve sıvı ambalajları birlikte gösterilir; her formun bileşimi kendi teknik belgesi üzerinden değerlendirilmelidir.', 'The manufacturer’s brochure presents dry and liquid packs of iGrow Revive together; the composition of each formulation should be assessed using its own technical documentation.', 'В брошюре производителя представлены сухая и жидкая формы iGrow Revive; состав каждой формы следует оценивать по соответствующей технической документации.'),
      m('Üretici, iGrow Revive’ın yaprak uygulaması ve sulama sistemleri için kullanılabildiğini belirtir.', 'The manufacturer lists foliar application and use through irrigation systems for iGrow Revive.', 'В брошюре производителя для iGrow Revive указаны внекорневая обработка и применение через системы полива.'),
    ],
    apps: [
      { method: m('Uygulama bilgisi', 'Application information', 'Сведения о применении'), info: m('Sıvı forma özel doz bilgisi için ürünün teknik belgesi esas alınır.', 'Application rates for the liquid form follow the product’s technical documentation.', 'Нормы внесения для жидкой формы определяются по технической документации на продукт.') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister', 'Флакон 1 л · канистра 5 л'),
  },
  {
    slug: { tr: 'igrow-m5-micromix', en: 'igrow-m5-micromix' },
    name: 'iGrow M5 Micromix',
    short: m('Suda çözünür iz element formülasyonu', 'Water-soluble micronutrient formulation', 'Водорастворимая форма с микроэлементами'),
    tagline: m('Kuru, suda çözünür iz element formülasyonu', 'Dry, water-soluble micronutrient formulation', 'Сухая водорастворимая форма с микроэлементами'),
    seo: m('iGrow M5 Micromix’in üretici broşürüne dayanan içerik bilgileri.', 'Manufacturer-documented information on iGrow M5 Micromix.', 'Состав iGrow M5 Micromix по документам производителя.'),
    status: 'portfolio',
    form: m('Kuru, suda çözünür', 'Dry, water-soluble', 'Сухая, водорастворимая'),
    formShort: m('Kuru', 'Dry', 'Сухой'),
    image: '/img/products/igrow_m5.png',
    organicCert: true,
    intro: m(
      'iGrow M5 Micromix çinko, bor, mangan, bakır, kobalt ve molibden içerir. Üretici belgelerine göre fulvik asit içeriği %28’e kadardır. Broşürde hektara 100 g belirtilir; bu miktarın hangi uygulama yöntemi ve koşulları için geçerli olduğu ayrıca açıklanmaz.',
      'iGrow M5 Micromix contains zinc, boron, manganese, copper, cobalt and molybdenum. According to manufacturer documentation, fulvic acid content is up to 28%. The brochure states 100 g per hectare but does not specify the application method or conditions to which this rate applies.',
      'iGrow M5 Micromix содержит цинк, бор, марганец, медь, кобальт и молибден. По данным производителя, содержание фульвовых кислот достигает 28 %. В брошюре производителя указан расход 100 г/га, однако не уточняется, к какому способу и условиям применения относится эта норма.'
    ),
    specs: [
      { k: m('Toplam iz element', 'Total micronutrients', 'Микроэлементы, всего'), v: m('%5,04', '5.04%', '5,04 %') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%40', '40%', '40 %') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%11', '11%', '11 %') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%4', '4%', '4 %') },
      { k: m('Nem', 'Moisture', 'Влажность'), v: m('%15', '15%', '15 %') },
    ],
    benefits: [
      m('Üretici, ürünün hidroponik, toprak, kokopit ve kaya yünü dahil farklı yetiştirme sistemlerinde kullanılabildiğini belirtir.', 'The manufacturer states that the product can be used in different growing systems, including hydroponics, soil, coco coir and rockwool.', 'Производитель указывает, что продукт применим в разных системах выращивания, включая гидропонику, почву, кокосовый субстрат и минеральную вату.'),
      m('Üretici, yüksek fulvik asit içeriğinin besin elementi alımını desteklediğini belirtir.', 'The manufacturer states that the high fulvic acid content supports nutrient uptake.', 'По данным производителя, высокое содержание фульвовых кислот способствует усвоению элементов питания.'),
    ],
    apps: [
      { method: m('Miktar bilgisi', 'Quantity', 'Расход'), info: m('Üretici broşüründe hektara 100 g belirtilir; uygulama yöntemi ve koşulları ayrıca açıklanmaz', 'The manufacturer’s brochure states 100 g per hectare; the application method and conditions are not specified', 'В брошюре производителя указан расход 100 г/га; способ и условия применения не уточняются') },
    ],
    pack: m('1 kg · 100 g paket', '1 kg · 100 g packs', 'Пакеты 1 кг · 100 г'),
  },
  {
    slug: { tr: 'igrow-b-boron-plus', en: 'igrow-b-boron-plus' },
    name: 'iGrow B Boron Plus',
    short: m('%2 bor içeren sıvı formülasyon', 'Liquid formulation containing 2% boron', 'Жидкая форма с содержанием бора 2 %'),
    tagline: m('Bor içeren sıvı formülasyon', 'Liquid formulation containing boron', 'Жидкая форма с бором'),
    seo: m('iGrow B Boron Plus’ın üretici broşürüne dayanan içerik bilgileri.', 'Manufacturer-documented information on iGrow B Boron Plus.', 'Состав iGrow B Boron Plus по документам производителя.'),
    status: 'portfolio',
    form: m('Sıvı', 'Liquid', 'Жидкая'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    image: '/img/products/igrow_b.png',
    organicCert: true,
    intro: m(
      'iGrow B Boron Plus, %2 bor içeren sıvı formülasyondur; bileşiminde humik ve fulvik asitler de yer alır. Üretici broşüründe yapraktan uygulama için tanımlanır.',
      'iGrow B Boron Plus is a liquid formulation containing 2% boron; its composition also includes humic and fulvic acids. The manufacturer’s brochure describes it for foliar application.',
      'iGrow B Boron Plus — жидкий продукт с содержанием бора 2 %. В состав также входят гуминовые и фульвовые кислоты. Согласно брошюре производителя, продукт предназначен для внекорневой подкормки.'
    ),
    specs: [
      { k: m('Bor', 'Boron', 'Бор'), v: m('%2,0', '2.0%', '2,0 %') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%6', '6%', '6 %') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%10', '10%', '10 %') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%0,3', '0.3%', '0,3 %') },
      { k: m('Kuru madde', 'Dry matter', 'Сухое вещество'), v: m('%28', '28%', '28 %') },
      { k: m('Aktif madde', 'Active substance', 'Действующие вещества'), v: m('230 g/L', '230 g/L', '230 г/л') },
    ],
    benefits: [
      m('Ürün, bitkiler için bor kaynağı olarak tanımlanır.', 'The product is described as a source of boron for plants.', 'Продукт служит источником бора для растений.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar application', 'Внекорневая обработка'), info: m('Üretici broşürüne göre 5 L ürünle 2.000 L’ye kadar uygulama çözeltisi hazırlanabilir', 'According to the manufacturer’s brochure, 5 L can prepare up to 2,000 L of spray solution', 'По данным брошюры производителя, из 5 л продукта можно приготовить до 2 000 л рабочего раствора') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister', 'Флакон 1 л · канистра 5 л'),
  },
  {
    slug: { tr: 'igrow-v', en: 'igrow-v' },
    name: 'iGrow V',
    short: m('NPK 2-2-2 ve organik bileşenler içeren sıvı formülasyon', 'Liquid NPK 2-2-2 formulation with organic components', 'Жидкая форма NPK 2-2-2 с органическими компонентами'),
    tagline: m('Çiçeklenme dönemine yönelik sıvı formülasyon', 'Liquid formulation for the flowering period', 'Жидкий продукт для применения в период цветения'),
    seo: m('iGrow V’nin üretici broşürüne dayanan içerik bilgileri.', 'Manufacturer-documented information on iGrow V.', 'Состав iGrow V по документам производителя.'),
    status: 'portfolio',
    form: m('Sıvı', 'Liquid', 'Жидкая'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    image: '/img/products/igrow_v.png',
    intro: m(
      'iGrow V, NPK 2-2-2 ve organik bileşenler içeren sıvı formülasyondur. Üretici broşüründe çiçeklenme dönemine yönelik olarak tanımlanır; içerik bilgileri broşüre dayanır.',
      'iGrow V is a liquid formulation containing NPK 2-2-2 and organic components. The manufacturer’s brochure positions it for the flowering period; composition details are taken from the brochure.',
      'iGrow V — жидкий продукт с NPK 2-2-2 и органическими компонентами. Производитель позиционирует его для применения в период цветения. Сведения о составе приведены по брошюре производителя.'
    ),
    specs: [
      { k: m('Azot (N)', 'Nitrogen (N)', 'Азот (N)'), v: m('%2', '2%', '2 %') },
      { k: m('Fosfor (P₂O₅)', 'Phosphorus (P₂O₅)', 'Фосфор (P₂O₅)'), v: m('%2', '2%', '2 %') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%2', '2%', '2 %') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%9', '9%', '9 %') },
      { k: m('Kuru madde', 'Dry matter', 'Сухое вещество'), v: m('%15', '15%', '15 %') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%0,4', '0.4%', '0,4 %') },
    ],
    benefits: [
      m('Üretici, ürünü çiçeklenme döneminde kullanım için konumlandırır.', 'The manufacturer positions the product for use during the flowering period.', 'Производитель позиционирует продукт для применения в период цветения.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar application', 'Внекорневая обработка'), info: m('Üretici broşürüne göre 5 L ürünle 625 L’ye kadar uygulama çözeltisi hazırlanabilir', 'According to the manufacturer’s brochure, 5 L can prepare up to 625 L of spray solution', 'По данным брошюры производителя, из 5 л продукта можно приготовить до 625 л рабочего раствора') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister', 'Флакон 1 л · канистра 5 л'),
  },
  {
    slug: { tr: 'igrow-alga', en: 'igrow-alga' },
    name: 'iGrow Alga',
    short: m('Kahverengi alg özü içeren sıvı formülasyon', 'Liquid formulation containing brown algae extract', 'Жидкая форма с экстрактом бурых водорослей'),
    tagline: m('Erken gelişim dönemi ve dikim sonrası için', 'For early growth stages and after transplanting', 'Для ранних этапов развития и после пересадки'),
    seo: m('iGrow Alga’nın üretici broşürüne dayanan içerik bilgileri.', 'Manufacturer-documented information on iGrow Alga.', 'Состав iGrow Alga по документам производителя.'),
    status: 'portfolio',
    form: m('Sıvı', 'Liquid', 'Жидкая'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    image: '/img/products/igrow_alga.png',
    intro: m(
      'iGrow Alga, kahverengi alg özü, humik asitlerin potasyum tuzları ve fulvik asitler içerir. Üretici, ürünü bitkilerin erken gelişim dönemi ve dikim sonrası kullanım için önerir.',
      'iGrow Alga contains brown algae extract, potassium salts of humic acids and fulvic acids. The manufacturer recommends it for early growth stages and use after transplanting.',
      'iGrow Alga содержит экстракт бурых водорослей, калиевые соли гуминовых кислот и фульвовые кислоты. Производитель рекомендует продукт для ранних этапов развития растений и применения после пересадки.'
    ),
    specs: [
      { k: m('Kahverengi alg özü', 'Brown algae extract', 'Экстракт бурых водорослей'), v: m('%50', '50%', '50 %') },
      { k: m('Humik asit potasyum tuzları', 'Potassium salts of humic acids', 'Калиевые соли гуминовых кислот'), v: m('%25', '25%', '25 %') },
      { k: m('Fulvik asitler', 'Fulvic acids', 'Фульвовые кислоты'), v: m('%25', '25%', '25 %') },
    ],
    benefits: [
      m('Üretici, ürünün dikim sonrasında fidelerin tutmasını desteklediğini belirtir.', 'The manufacturer states that the product supports seedling establishment after transplanting.', 'По данным производителя, продукт способствует приживанию рассады после пересадки.'),
    ],
    apps: [
      { method: m('Kök bölgesi veya yaprak uygulaması', 'Root zone or foliar application', 'Полив под корень или внекорневая обработка'), info: m('Broşürde 500 L suya 1 L belirtilir', 'The brochure states 1 L per 500 L of water', 'В брошюре указано 1 л на 500 л воды') },
    ],
    pack: m('1 L şişe', '1 L bottle', 'Флакон 1 л'),
  },
  {
    slug: { tr: 'lignogro', en: 'lignogro' },
    name: 'LignoGro',
    short: m('İz element ve humik maddeler içeren suda çözünür formülasyon', 'Water-soluble formulation containing micronutrients and humic substances', 'Водорастворимая форма с микроэлементами и гуминовыми веществами'),
    tagline: m('Kuru, suda çözünür formülasyon', 'Dry, water-soluble formulation', 'Сухая водорастворимая форма'),
    seo: m('LignoGro’nun üretici broşürüne dayanan içerik bilgileri.', 'Manufacturer-documented information on LignoGro.', 'Состав LignoGro по документам производителя.'),
    status: 'portfolio',
    form: m('Kuru, suda çözünür', 'Dry, water-soluble', 'Сухая, водорастворимая'),
    formShort: m('Kuru', 'Dry', 'Сухой'),
    image: '/img/products/lignogro.png',
    intro: m(
      'LignoGro, iz elementler ile humik ve fulvik asitler içeren kuru, suda çözünür bir üründür. Üretici broşürüne göre organik madde oranı %40’tır. Ambalaj 0,8 kg ürün içerir.',
      'LignoGro is a dry, water-soluble product containing micronutrients and humic and fulvic acids. According to the manufacturer’s brochure, organic matter content is 40%. The pack contains 0.8 kg of product.',
      'LignoGro — сухой водорастворимый продукт с микроэлементами, гуминовыми и фульвовыми кислотами. По данным брошюры производителя, содержание органического вещества составляет 40 %. Упаковка содержит 0,8 кг продукта.'
    ),
    specs: [
      { k: m('Toplam iz element', 'Total micronutrients', 'Микроэлементы, всего'), v: m('%5,04', '5.04%', '5,04 %') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%40', '40%', '40 %') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%11', '11%', '11 %') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%4', '4%', '4 %') },
      { k: m('Nem', 'Moisture', 'Влажность'), v: m('%15', '15%', '15 %') },
    ],
    benefits: [
      m('Üretici, ürünün klorofil içeriği ve yaprak alanı gelişimi üzerindeki etkisini belirtir.', 'The manufacturer reports effects on chlorophyll content and leaf area development.', 'Производитель заявляет о влиянии продукта на содержание хлорофилла и развитие листовой поверхности.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar application', 'Внекорневая обработка'), info: m('Üretici broşürüne göre 0,8 kg ürünle 1.600 L’ye kadar uygulama çözeltisi hazırlanabilir', 'According to the manufacturer’s brochure, 0.8 kg can prepare up to 1,600 L of spray solution', 'По данным брошюры производителя, из 0,8 кг продукта можно приготовить до 1 600 л рабочего раствора') },
    ],
    pack: m('0,8 kg paket', '0.8 kg pack', 'Пакет 0,8 кг'),
  },
];

export function productUrl(lang: Lang, p: Product): string {
  if (lang === 'tr') return `/urunler/${p.slug.tr}/`;
  return `/${lang}/products/${p.slug.en}/`;
}

export function productPaths(p: Product): Record<Lang, string> {
  return { tr: productUrl('tr', p), en: productUrl('en', p), ru: productUrl('ru', p) };
}
