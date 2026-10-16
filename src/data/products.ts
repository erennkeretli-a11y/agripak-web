import type { Lang } from '../i18n/ui';

export type L = Record<Lang, string>;

export interface Spec { k: L; v: L }
export interface AppRow { method: L; dose: L; note?: L }

export interface Product {
  slug: { tr: string; en: string };
  name: string;
  short: L;
  tagline: L;
  status: 'first' | 'soon';
  form: L;
  formShort: L;
  category: L;
  image: string;
  intro: L;
  specs: Spec[];
  benefits: L[];
  apps: AppRow[];
  pack: L;
  active?: L;
}

const m = (tr: string, en: string, ru: string): L => ({ tr, en, ru });

export const products: Product[] = [
  {
    slug: { tr: 'igrow-revive-kuru', en: 'igrow-revive-dry' },
    name: 'iGrow Revive',
    short: m('Kuru form · humik ve fulvik asit tuzları + iz elementler', 'Dry form · salts of humic and fulvic acids + trace elements', 'Сухая форма · соли гуминовых и фульвовых кислот + микроэлементы'),
    tagline: m('Kuru, %100 suda çözünür bitki biyostimülantı', 'Dry, 100% water soluble plant biostimulant', 'Сухой, полностью водорастворимый биостимулятор растений'),
    status: 'first',
    form: m('Kuru, suda çözünür toz/granül', 'Dry, water soluble powder/granule', 'Сухой, водорастворимый порошок/гранулы'),
    formShort: m('Kuru', 'Dry', 'Сухой'),
    category: m('Organik kaynaklı toprak düzenleyici ve biyostimülant', 'Organic origin soil conditioner and biostimulant', 'Почвенный кондиционер и биостимулятор органического происхождения'),
    image: '/img/products/revive_small.png',
    intro: m(
      'iGrow Revive, modifiye lignin kaynağından elde edilen humik ve fulvik asit tuzlarını bor, kobalt, bakır, mangan, molibden ve çinko ile birleştirir. Tohum uygulaması, toprak uygulaması ve damla sulama için tasarlanmış kuru formdur; küçük dozlarla geniş alanları kapsar.',
      'iGrow Revive combines salts of humic and fulvic acids obtained from modified lignin with boron, cobalt, copper, manganese, molybdenum and zinc. The dry form is designed for seed treatment, soil application and drip irrigation; small doses cover large areas.',
      'iGrow Revive сочетает соли гуминовых и фульвовых кислот, полученные из модифицированного лигнина, с бором, кобальтом, медью, марганцем, молибденом и цинком. Сухая форма предназначена для обработки семян, внесения в почву и капельного полива; малые дозы покрывают большие площади.'
    ),
    active: m('Aktif madde 700 g/kg · humik maddeler %81 (humik asit %50’ye kadar, fulvik asit %25)', 'Active substance 700 g/kg · humic substances 81% (humic acids up to 50%, fulvic acids 25%)', 'Действующее вещество 700 г/кг · гуминовые вещества 81% (гуминовые кислоты до 50%, фульвовые 25%)'),
    specs: [
      { k: m('Aktif madde', 'Active substance', 'Действующее вещество'), v: m('700 g/kg', '700 g/kg', '700 г/кг') },
      { k: m('Humik maddeler', 'Humic substances', 'Гуминовые вещества'), v: m('%81', '81%', '81%') },
      { k: m('Humik asitler', 'Humic acids', 'Гуминовые кислоты'), v: m('%50’ye kadar', 'up to 50%', 'до 50%') },
      { k: m('Fulvik asitler', 'Fulvic acids', 'Фульвовые кислоты'), v: m('%25', '25%', '25%') },
      { k: m('İz elementler', 'Trace elements', 'Микроэлементы'), v: m('B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn') },
      { k: m('Diğer', 'Other', 'Прочее'), v: m('Potasyum, kükürt, demir', 'Potassium, sulfur, iron', 'Калий, сера, железо') },
      { k: m('Çözünürlük', 'Solubility', 'Растворимость'), v: m('%100 suda çözünür', '100% water soluble', '100% растворим в воде') },
    ],
    benefits: [
      m('Derin ve dallanmış kök sistemi; bitki toprağa daha iyi tutunur ve beslenir.', 'Deep, branched root system; the plant anchors and feeds better.', 'Глубокая разветвлённая корневая система; растение лучше закрепляется и питается.'),
      m('Su ve besin elementlerinin alım verimliliği artar, girdi israfı azalır.', 'Improved uptake efficiency of water and nutrients, less input waste.', 'Повышается эффективность усвоения воды и питательных элементов, меньше потерь.'),
      m('Faydalı toprak mikroorganizmalarını besler, toprak yaşamını canlandırır.', 'Feeds beneficial soil microorganisms, revives soil life.', 'Питает полезные почвенные микроорганизмы, оживляет почву.'),
      m('Kuraklık ve diğer abiyotik stres dönemlerinde dayanıklılık.', 'Resilience during drought and other abiotic stress periods.', 'Устойчивость в периоды засухи и другого абиотического стресса.'),
      m('Klorofil üretimi ve fotosentez hızı yükselir, gelişme süresi kısalır.', 'Higher chlorophyll production and photosynthesis rate, shorter development time.', 'Выше выработка хлорофилла и скорость фотосинтеза, короче период развития.'),
      m('Bitki koruma uygulamalarıyla uyumlu, tank karışımına girer.', 'Compatible with plant protection applications, suitable for tank mixes.', 'Совместим со средствами защиты растений, подходит для баковых смесей.'),
    ],
    apps: [
      { method: m('Tohum uygulaması', 'Seed treatment', 'Обработка семян'), dose: m('1000 kg tohuma 0,1 kg', '0.1 kg per 1000 kg of seed', '0,1 кг на 1000 кг семян'), note: m('Tohum ilaçlama karışımıyla birlikte', 'Together with seed dressing mix', 'Вместе с протравителем') },
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('Hektara 0,1 kg', '0.1 kg per hectare', '0,1 кг на гектар'), note: m('Bitki türüne göre ayarlanır', 'Adjusted to crop', 'Корректируется по культуре') },
      { method: m('Damla sulama', 'Drip irrigation', 'Капельный полив'), dose: m('Hektara 0,2–0,5 kg', '0.2–0.5 kg per hectare', '0,2–0,5 кг на гектар'), note: m('Sezon boyunca 2–4 uygulama', '2–4 applications per season', '2–4 обработки за сезон') },
      { method: m('Toprak uygulaması', 'Soil application', 'Внесение в почву'), dose: m('Hektara 0,5–1 kg', '0.5–1 kg per hectare', '0,5–1 кг на гектар'), note: m('Ekim veya dikim öncesi', 'Before sowing or planting', 'Перед посевом или посадкой') },
    ],
    pack: m('1 kg poşet', '1 kg pouch', 'Пакет 1 кг'),
  },
  {
    slug: { tr: 'igrow-revive-sivi', en: 'igrow-revive-liquid' },
    name: 'iGrow Revive',
    short: m('Sıvı form · yaprak ve damla uygulamaları için', 'Liquid form · for foliar and drip applications', 'Жидкая форма · для листовых подкормок и капельного полива'),
    tagline: m('Sıvı, kullanıma hazır bitki biyostimülantı', 'Liquid, ready to use plant biostimulant', 'Жидкий, готовый к применению биостимулятор растений'),
    status: 'first',
    form: m('Sıvı konsantre', 'Liquid concentrate', 'Жидкий концентрат'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    category: m('Sıvı organik gübre / biyostimülant', 'Liquid organic fertilizer / biostimulant', 'Жидкое органическое удобрение / биостимулятор'),
    image: '/img/products/revive_set.png',
    intro: m(
      'iGrow Revive sıvı, aynı humik ve fulvik asit kompleksini sulama sistemine ve yaprak uygulamasına uygun konsantre formda sunar. Sera ve açık alanda, damla sulama hattına doğrudan dozlanır; bitki koruma ürünleriyle tank karışımına girer.',
      'iGrow Revive liquid delivers the same humic and fulvic acid complex in a concentrate suited to irrigation systems and foliar application. In greenhouses and open fields it is dosed directly into the drip line and mixes in the tank with plant protection products.',
      'Жидкий iGrow Revive содержит тот же комплекс гуминовых и фульвовых кислот в концентрате, подходящем для систем полива и листовых обработок. В теплицах и открытом грунте дозируется напрямую в линию капельного полива, совместим в баковых смесях со средствами защиты растений.'
    ),
    active: m('Humik ve fulvik asit tuzları + B, Co, Cu, Mn, Mo, Zn', 'Salts of humic and fulvic acids + B, Co, Cu, Mn, Mo, Zn', 'Соли гуминовых и фульвовых кислот + B, Co, Cu, Mn, Mo, Zn'),
    specs: [
      { k: m('Aktif madde', 'Active substance', 'Действующее вещество'), v: m('Humik ve fulvik asit tuzları', 'Salts of humic and fulvic acids', 'Соли гуминовых и фульвовых кислот') },
      { k: m('İz elementler', 'Trace elements', 'Микроэлементы'), v: m('B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn', 'B, Co, Cu, Mn, Mo, Zn') },
      { k: m('Form', 'Form', 'Форма'), v: m('Sıvı konsantre', 'Liquid concentrate', 'Жидкий концентрат') },
      { k: m('Uygulama', 'Application', 'Применение'), v: m('Damla, yaprak, tank karışımı', 'Drip, foliar, tank mix', 'Капельный полив, по листу, баковая смесь') },
      { k: m('Çözünürlük', 'Solubility', 'Растворимость'), v: m('Tam çözünür, tortu bırakmaz', 'Fully soluble, no residue', 'Полностью растворим, без осадка') },
    ],
    benefits: [
      m('Damla sulama hattına doğrudan dozlanır, ek karıştırma gerektirmez.', 'Dosed directly into the drip line, no extra mixing needed.', 'Дозируется напрямую в капельную линию, не требует дополнительного перемешивания.'),
      m('Yaprak yüzeyinden hızlı alım; stres sonrası toparlanmayı hızlandırır.', 'Rapid uptake through the leaf surface; speeds up recovery after stress.', 'Быстрое усвоение через лист; ускоряет восстановление после стресса.'),
      m('Kök bölgesinde besin elementlerinin alınabilirliğini artırır.', 'Increases nutrient availability in the root zone.', 'Повышает доступность элементов питания в корневой зоне.'),
      m('Bitki koruma ürünlerinin etkinliğini destekler.', 'Supports the efficacy of plant protection products.', 'Повышает эффективность средств защиты растений.'),
      m('Sera, bağ, meyve bahçesi ve tarla bitkilerinde kullanılır.', 'Used in greenhouses, vineyards, orchards and field crops.', 'Применяется в теплицах, виноградниках, садах и полевых культурах.'),
    ],
    apps: [
      { method: m('Damla sulama', 'Drip irrigation', 'Капельный полив'), dose: m('Dekara 100–200 ml', '100–200 ml per decare', '100–200 мл на декар'), note: m('10–14 gün arayla', 'Every 10–14 days', 'Каждые 10–14 дней') },
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('100 L suya 100–150 ml', '100–150 ml per 100 L water', '100–150 мл на 100 л воды'), note: m('Sabah veya akşam saatlerinde', 'Morning or evening hours', 'Утром или вечером') },
      { method: m('Fide ve dikim', 'Seedling and transplanting', 'Рассада и высадка'), dose: m('100 L suya 200 ml', '200 ml per 100 L water', '200 мл на 100 л воды'), note: m('Can suyu ile', 'With transplant water', 'С поливом при посадке') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister', 'Флакон 1 л · канистра 5 л'),
  },
  {
    slug: { tr: 'igrow-m5-micromix', en: 'igrow-m5-micromix' },
    name: 'iGrow M5 Micromix',
    short: m('Kuru, %100 suda çözünür organik mineral mikro element gübresi', 'Dry, 100% water soluble organic mineral micronutrient fertilizer', 'Сухое, полностью водорастворимое органоминеральное микроудобрение'),
    tagline: m('Yaprak ve damla uygulamaları için mikro element kompleksi', 'Micronutrient complex for foliar and drip applications', 'Комплекс микроэлементов для листовых подкормок и капельного полива'),
    status: 'soon',
    form: m('Kuru, suda çözünür', 'Dry, water soluble', 'Сухой, водорастворимый'),
    formShort: m('Kuru', 'Dry', 'Сухой'),
    category: m('Organomineral mikro element gübresi', 'Organomineral micronutrient fertilizer', 'Органоминеральное микроудобрение'),
    image: '/img/products/igrow_m5.png',
    intro: m(
      'iGrow M5, çinko, bor, mangan, bakır, kobalt ve molibdeni %28’e varan fulvik asit ile birleştirir. AB organik tarım girdi listesinde yer alır; 100 g ürün bir hektarı kapsar.',
      'iGrow M5 combines zinc, boron, manganese, copper, cobalt and molybdenum with up to 28% fulvic acid. Listed as an EU organic farming input; 100 g treats one hectare.',
      'iGrow M5 сочетает цинк, бор, марганец, медь, кобальт и молибден с фульвовой кислотой до 28%. Включён в список разрешённых средств для органического земледелия ЕС; 100 г обрабатывают один гектар.'
    ),
    specs: [
      { k: m('Toplam mikro element', 'Total micronutrients', 'Микроэлементы, всего'), v: m('%5,04', '5.04%', '5,04%') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%40', '40%', '40%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%11', '11%', '11%') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%4', '4%', '4%') },
      { k: m('Nem', 'Moisture', 'Влажность'), v: m('%15', '15%', '15%') },
    ],
    benefits: [
      m('Hidroponik, toprak, kokopit ve kaya yünü dahil her yetiştirme sistemine uyar.', 'Fits every growing system including hydroponics, soil, coco coir and rockwool.', 'Подходит для любых систем выращивания, включая гидропонику, почву, кокосовый субстрат и минеральную вату.'),
      m('Yüksek fulvik asit içeriği besin alımını hızlandırır.', 'High fulvic acid content speeds up nutrient uptake.', 'Высокое содержание фульвовой кислоты ускоряет усвоение питания.'),
      m('Diğer gübre ve katkılarla birlikte kullanılabilir.', 'Can be used alongside other fertilizers and additives.', 'Совместим с другими удобрениями и добавками.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('Hektara 100 g', '100 g per hectare', '100 г на гектар') },
      { method: m('Damla sulama', 'Drip irrigation', 'Капельный полив'), dose: m('Hektara 100–200 g', '100–200 g per hectare', '100–200 г на гектар') },
    ],
    pack: m('1 kg · 100 g paket', '1 kg · 100 g packs', 'Пакеты 1 кг · 100 г'),
  },
  {
    slug: { tr: 'igrow-b-boron-plus', en: 'igrow-b-boron-plus' },
    name: 'iGrow B Boron Plus',
    short: m('Sıvı, borlu yaprak gübresi; çiçek ve tomurcuk koruması', 'Liquid borated foliar fertilizer; bud and flower protection', 'Жидкое борсодержащее листовое удобрение; защита бутонов и цветков'),
    tagline: m('Organik bor ile çiçek dökümüne karşı', 'Organic boron against flower drop', 'Органический бор против опадения цветков'),
    status: 'soon',
    form: m('Sıvı', 'Liquid', 'Жидкий'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    category: m('Sıvı organomineral gübre', 'Liquid organomineral fertilizer', 'Жидкое органоминеральное удобрение'),
    image: '/img/products/igrow_b.png',
    intro: m(
      'iGrow B, boru fulvik ve humik asitlerle bağlayarak toksik etki olmadan anında alınabilir hale getirir. Tomurcuk dökümünü ve kısır çiçeklenmeyi önlemek için tasarlanmıştır. 5 L bidon 2000 L çalışma çözeltisi hazırlar.',
      'iGrow B binds boron with fulvic and humic acids so it is immediately available without toxic reactions. Designed to prevent bud drop and barren flowers. A 5 L canister makes 2000 L of working solution.',
      'iGrow B связывает бор с фульвовыми и гуминовыми кислотами, делая его немедленно доступным без токсического эффекта. Разработан для предотвращения опадения бутонов и пустоцвета. Канистра 5 л даёт 2000 л рабочего раствора.'
    ),
    specs: [
      { k: m('Bor', 'Boron', 'Бор'), v: m('%2,0', '2.0%', '2,0%') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%6', '6%', '6%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%10', '10%', '10%') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%0,3', '0.3%', '0,3%') },
      { k: m('Kuru madde', 'Dry matter', 'Сухое вещество'), v: m('%28', '28%', '28%') },
      { k: m('Aktif madde', 'Active substance', 'Действующее вещество'), v: m('230 g/L', '230 g/L', '230 г/л') },
    ],
    benefits: [
      m('Çiçek tutumu ve meyve bağlama döneminde bor ihtiyacını karşılar.', 'Covers boron demand during flowering and fruit set.', 'Покрывает потребность в боре в период цветения и завязывания плодов.'),
      m('Tohumlarda protein, şeker ve yağ oranını destekler.', 'Supports protein, sugar and oil content in seeds.', 'Повышает содержание белка, сахаров и масла в семенах.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('100 L suya 250 ml', '250 ml per 100 L water', '250 мл на 100 л воды') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister', 'Флакон 1 л · канистра 5 л'),
  },
  {
    slug: { tr: 'igrow-v', en: 'igrow-v' },
    name: 'iGrow V',
    short: m('Sıvı, çiçeklenme dönemi biyostimülantı', 'Liquid flowering phase biostimulant', 'Жидкий биостимулятор фазы цветения'),
    tagline: m('Çiçeklenmeyi ve gelişim evrelerini hızlandırır', 'Accelerates flowering and growth stages', 'Ускоряет цветение и фазы развития'),
    status: 'soon',
    form: m('Sıvı', 'Liquid', 'Жидкий'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    category: m('Özel gübre / biyostimülant', 'Special fertilizer / biostimulant', 'Специальное удобрение / биостимулятор'),
    image: '/img/products/igrow_v.png',
    intro: m(
      'iGrow V, 2-2-2 NPK ile organik bileşenleri hücre zarı seçiciliği teknolojisiyle birleştirir; besin ve su akışını düzenler, abiyotik ve pestisit stresini azaltır. 5 L bidon 625 L çalışma çözeltisi hazırlar.',
      'iGrow V combines 2-2-2 NPK with organic components through cell membrane selectivity technology; it regulates nutrient and water flow and relieves abiotic and pesticide stress. A 5 L canister makes 625 L of working solution.',
      'iGrow V сочетает NPK 2-2-2 с органическими компонентами по технологии селективности клеточных мембран; регулирует поток питания и воды, снижает абиотический и пестицидный стресс. Канистра 5 л даёт 625 л рабочего раствора.'
    ),
    specs: [
      { k: m('Azot (N)', 'Nitrogen (N)', 'Азот (N)'), v: m('%2', '2%', '2%') },
      { k: m('Fosfor (P₂O₅)', 'Phosphorus (P₂O₅)', 'Фосфор (P₂O₅)'), v: m('%2', '2%', '2%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%2', '2%', '2%') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%9', '9%', '9%') },
      { k: m('Kuru madde', 'Dry matter', 'Сухое вещество'), v: m('%15', '15%', '15%') },
    ],
    benefits: [
      m('Daha hızlı ve bol çiçeklenme.', 'Faster and more abundant flowering.', 'Более быстрое и обильное цветение.'),
      m('Her yetiştirme sistemine uyar, diğer ürünlerle karışır.', 'Fits every growing system, mixes with other products.', 'Подходит для любой системы выращивания, совместим с другими продуктами.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('100 L suya 800 ml', '800 ml per 100 L water', '800 мл на 100 л воды') },
    ],
    pack: m('1 L şişe · 5 L bidon', '1 L bottle · 5 L canister', 'Флакон 1 л · канистра 5 л'),
  },
  {
    slug: { tr: 'igrow-alga', en: 'igrow-alga' },
    name: 'iGrow Alga',
    short: m('Kahverengi alg özlü kök gelişim aktivatörü', 'Brown algae root growth activator', 'Активатор роста корней на основе бурых водорослей'),
    tagline: m('Dikim, şaşırtma ve stres sonrası toparlanma için', 'For planting, transplanting and recovery after stress', 'Для посадки, пересадки и восстановления после стресса'),
    status: 'soon',
    form: m('Sıvı', 'Liquid', 'Жидкий'),
    formShort: m('Sıvı', 'Liquid', 'Жидкий'),
    category: m('Alg özlü biyostimülant', 'Seaweed based biostimulant', 'Биостимулятор на основе водорослей'),
    image: '/img/products/igrow_alga.png',
    intro: m(
      'iGrow Alga, %50 kahverengi alg özünü humik ve fulvik asitler, amino asitler, oligopeptitler ve oksinlerle birleştirir. Erken dönem kök ve doku gelişimini hızlandırır; 1 L ürün 500 L çalışma çözeltisi hazırlar.',
      'iGrow Alga combines 50% brown algae extract with humic and fulvic acids, amino acids, oligopeptides and auxins. It accelerates early root and tissue development; 1 L makes 500 L of working solution.',
      'iGrow Alga сочетает 50% экстракта бурых водорослей с гуминовыми и фульвовыми кислотами, аминокислотами, олигопептидами и ауксинами. Ускоряет раннее развитие корней и тканей; 1 л даёт 500 л рабочего раствора.'
    ),
    specs: [
      { k: m('Kahverengi alg özü', 'Brown algae extract', 'Экстракт бурых водорослей'), v: m('%50', '50%', '50%') },
      { k: m('Humik asit potasyum tuzları', 'Potassium salts of humic acids', 'Калиевые соли гуминовых кислот'), v: m('%25', '25%', '25%') },
      { k: m('Fulvik asitler', 'Fulvic acids', 'Фульвовые кислоты'), v: m('%25', '25%', '25%') },
    ],
    benefits: [
      m('Şaşırtma şokunu azaltır, fide tutmasını hızlandırır.', 'Reduces transplant shock, speeds up seedling establishment.', 'Снижает стресс при пересадке, ускоряет приживаемость рассады.'),
      m('Kuraklık, soğuk ve tuzluluk stresini hafifletir.', 'Mitigates drought, cold and salinity stress.', 'Смягчает стресс от засухи, холода и засоления.'),
    ],
    apps: [
      { method: m('Kök bölgesi sulama', 'Root zone watering', 'Полив под корень'), dose: m('500 L suya 1 L', '1 L per 500 L water', '1 л на 500 л воды') },
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('500 L suya 1 L', '1 L per 500 L water', '1 л на 500 л воды') },
    ],
    pack: m('1 L şişe', '1 L bottle', 'Флакон 1 л'),
  },
  {
    slug: { tr: 'lignogro', en: 'lignogro' },
    name: 'LignoGro',
    short: m('Kuru, suda çözünür organik mineral mikro element gübresi', 'Dry water soluble organic mineral micronutrient fertilizer', 'Сухое водорастворимое органоминеральное микроудобрение'),
    tagline: m('Yaprak ve damla için ekonomik mikro element kaynağı', 'Economical micronutrient source for foliar and drip', 'Экономичный источник микроэлементов для листовых подкормок и капельного полива'),
    status: 'soon',
    form: m('Kuru, suda çözünür', 'Dry, water soluble', 'Сухой, водорастворимый'),
    formShort: m('Kuru', 'Dry', 'Сухой'),
    category: m('Organomineral mikro element gübresi', 'Organomineral micronutrient fertilizer', 'Органоминеральное микроудобрение'),
    image: '/img/products/lignogro.png',
    intro: m(
      'LignoGro, humik ve fulvik asit taşıyıcı üzerinde bor, bakır, mangan, çinko ve molibden sunar; azot, fosfor ve potasyumun bitkiye taşınmasını kolaylaştırır. 0,8 kg paket 1600 L çalışma çözeltisi hazırlar.',
      'LignoGro delivers boron, copper, manganese, zinc and molybdenum on a humic and fulvic acid carrier, easing the transport of nitrogen, phosphorus and potassium into the plant. A 0.8 kg pack makes 1600 L of working solution.',
      'LignoGro содержит бор, медь, марганец, цинк и молибден на носителе из гуминовых и фульвовых кислот, облегчая транспорт азота, фосфора и калия в растение. Пакет 0,8 кг даёт 1600 л рабочего раствора.'
    ),
    specs: [
      { k: m('Toplam mikro element', 'Total micronutrients', 'Микроэлементы, всего'), v: m('%5,04', '5.04%', '5,04%') },
      { k: m('Organik madde', 'Organic matter', 'Органическое вещество'), v: m('%4', '4%', '4%') },
      { k: m('Potasyum (K₂O)', 'Potassium (K₂O)', 'Калий (K₂O)'), v: m('%11', '11%', '11%') },
      { k: m('Kükürt', 'Sulfur', 'Сера'), v: m('%4', '4%', '4%') },
    ],
    benefits: [
      m('Klorofil seviyesini ve yaprak yüzeyini artırır.', 'Raises chlorophyll level and leaf surface.', 'Повышает уровень хлорофилла и площадь листа.'),
      m('Pestisit uygulaması sonrası kimyasal stresi hafifletir.', 'Relieves chemical stress after pesticide application.', 'Снимает химический стресс после обработки пестицидами.'),
    ],
    apps: [
      { method: m('Yaprak uygulaması', 'Foliar spray', 'Листовая подкормка'), dose: m('1600 L suya 0,8 kg', '0.8 kg per 1600 L water', '0,8 кг на 1600 л воды') },
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

export function findProduct(lang: Lang, slug: string): Product | undefined {
  const key = lang === 'tr' ? 'tr' : 'en';
  return products.find((p) => p.slug[key] === slug);
}
