const PRODUCTS = [
  {
    id: "majeste",
    name: "Majesté",
    price: "1 890 €",
    priceNum: 1890,
    height: "215 cm",
    heightNum: 215,
    desc: {
      fr: "Un élan vertical de plus de deux mètres. Base en Douglas sculpté par le feu, corps en frêne cintré à la vapeur d'eau, couronné d'un abat-jour en fines lames d'orme. La lumière filtre entre les lames comme un souffle doré.",
      en: "A vertical surge rising over two metres. Charred Douglas fir base, steam-bent ash body crowned with an elm blade shade. Light filters between the blades like a golden breath.",
      th: "ฐานไม้เฟอร์ดักลาสเผาไหม้ ลำตัวไม้แอชดัดด้วยไอน้ำ โคมบังแสงจากแผ่นไม้เอล์ม สูงกว่าสองเมตร",
      zh: "焦化花旗松底座，蒸汽弯曲白蜡木灯身，榆木薄片灯罩。逾两米的垂直气韵，光线自叶片间如金色呼吸般倾泻。",
      ru: "Основание из обожжённой дугласовой пихты, корпус из гнутого паром ясеня, абажур из пластин вяза. Более двух метров вертикального порыва — свет струится сквозь ламели золотым дыханием.",
      ar: "قاعدة من خشب التنوب الدوغلاسي المحروق، جسم من خشب الدردار المثنيّ بالبخار، وغطاء من شرائح خشب الدردار. أكثر من مترين من الارتفاع الرأسي، يتسرّب الضوء بين الشرائح كأنفاس ذهبية."
    },
    specs: [
      { key: "Base", val: "Douglas brûlé" },
      { key: "Corps", val: "Frêne cintré vapeur" },
      { key: "Abat-jour", val: "Lames d'orme" },
      { key: "Hauteur", val: "~215 cm" }
    ],
    images: ["images/06.jpg", "images/14.jpg", "images/15.jpg"],
    insta: "https://www.instagram.com/p/Cz1xL0-Nnyn/",
    woods: ["douglas", "frêne", "orme"],
    light: "LED blanc chaud",
    technique: ["shou-sugi-ban", "steam-bending"],
    year: 2023,
    edition: "Pièce unique",
    sold: true,
    featured: true
  },
  {
    id: "palissandre-noir",
    name: "Palissandre Noir",
    price: "1 280 €",
    priceNum: 1280,
    height: "120 cm",
    heightNum: 120,
    desc: {
      fr: "Abat-jour en placage de palissandre précieux, base en orme ébonisé, corps en chaîne d'acier suspendue. Un galet poli commande la lumière — alliance du brut et du raffiné.",
      en: "Precious rosewood veneer shade, ebonised elm base, suspended steel chain body. A polished pebble switch commands the light — where the raw meets the refined.",
      th: "โคมบังแสงจากไม้พะยูงอบอวล ฐานไม้เอล์มย้อมดำ ลำตัวโซ่เหล็ก สวิตช์หินกรวดขัดเงา",
      zh: "珍贵紫檀薄片灯罩，乌化榆木底座，悬挂钢链灯身。一枚磨光的鹅卵石开关掌控光源——粗犷与精致的交汇。",
      ru: "Абажур из драгоценного палисандрового шпона, основание из эбонизированного вяза, подвесной корпус из стальной цепи. Гладкая галька-выключатель управляет светом — союз грубого и утончённого.",
      ar: "غطاء من قشرة خشب الورد الثمين، قاعدة من خشب الدردار المُسوَّد، جسم من سلسلة فولاذية معلّقة. حصاة مصقولة تتحكّم بالضوء — حيث يلتقي الخام بالمُنمَّق."
    },
    specs: [
      { key: "Abat-jour", val: "Placage palissandre" },
      { key: "Base", val: "Orme ébonisé" },
      { key: "Corps", val: "Chaîne" },
      { key: "Interrupteur", val: "Galet" },
      { key: "Hauteur", val: "120 cm" }
    ],
    images: ["images/01.jpg", "images/04.jpg"],
    insta: "https://www.instagram.com/p/DT6EaKjiFKe/",
    woods: ["palissandre", "orme"],
    light: "LED blanc chaud",
    technique: ["shou-sugi-ban"],
    year: 2025,
    edition: "Pièce unique",
    sold: true,
    featured: true
  },
  {
    id: "flamme-noyer",
    name: "Flamme Noyer",
    price: "1 680 €",
    priceNum: 1680,
    height: "160 cm",
    heightNum: 160,
    desc: {
      fr: "Base en chêne normand sculptée au feu, structure en orme massif et abat-jour en placage de noyer aux veinures flammées. La flamme qui a façonné la base se retrouve dans les dessins du bois.",
      en: "Norman oak base sculpted by fire, solid elm structure and flamed walnut veneer shade. The fire that shaped the base echoes through the grain of the wood.",
      th: "ฐานไม้โอ๊คนอร์ม็องดีเผาไหม้ โครงสร้างไม้เอล์ม โคมบังแสงจากไม้วอลนัทลายเปลวไฟ",
      zh: "火焰雕琢的诺曼底橡木底座，榆木实木结构，胡桃木火焰纹理薄片灯罩。塑造底座的烈火，在木纹中余韵回响。",
      ru: "Основание из нормандского дуба, обработанного огнём, массивная структура из вяза и абажур из шпона ореха с пламенным рисунком. Пламя, создавшее основание, отзывается в рисунке древесины.",
      ar: "قاعدة من خشب البلوط النورماندي المنحوت بالنار، هيكل من خشب الدردار الصلب وغطاء من قشرة الجوز بعروق ملتهبة. النار التي شكّلت القاعدة تتردّد أصداؤها في نسيج الخشب."
    },
    specs: [
      { key: "Base", val: "Normann brûlé" },
      { key: "Structure", val: "Orme" },
      { key: "Abat-jour", val: "Placage noyer" },
      { key: "Hauteur", val: "160 cm" }
    ],
    images: ["images/09.jpg", "images/21.jpg", "images/22.jpg", "images/23.jpg"],
    insta: "https://www.instagram.com/p/DFYfsMes7aV/",
    woods: ["normann", "orme", "noyer"],
    light: "LED blanc chaud",
    technique: ["shou-sugi-ban"],
    year: 2025,
    edition: "Pièce unique",
    sold: true,
    featured: true
  },
  {
    id: "teck-originel",
    name: "Teck Originel",
    price: "1 780 €",
    priceNum: 1780,
    height: "190 cm",
    heightNum: 190,
    desc: {
      fr: "Base normande noircie par le feu, structure en orme et abat-jour en placage de teck ancien. Presque deux mètres de présence — la noblesse du teck magnifiée par l'ombre brûlée.",
      en: "Fire-blackened Norman base, elm structure and aged teak veneer shade. Nearly two metres of presence — the nobility of teak magnified by charred shadow.",
      th: "ฐานนอร์ม็องดีเผาจนดำสนิท โครงสร้างไม้เอล์ม โคมบังแสงจากไม้สักเก่า เกือบสองเมตรแห่งความสง่างาม",
      zh: "火烤发黑的诺曼底底座，榆木结构，陈年柚木薄片灯罩。近两米的庄严存在——柚木的高贵在焦影中愈显辉煌。",
      ru: "Нормандское основание, почернённое огнём, структура из вяза и абажур из выдержанного тикового шпона. Почти два метра присутствия — благородство тика, возвеличенное обугленной тенью.",
      ar: "قاعدة نورماندية مسوّدة بالنار، هيكل من خشب الدردار وغطاء من قشرة خشب الساج العتيق. ما يقارب المترين من الحضور — نبل الساج يتعاظم في ظلّ الاحتراق."
    },
    specs: [
      { key: "Base", val: "Normande brûlée" },
      { key: "Structure", val: "Orme" },
      { key: "Abat-jour", val: "Placage teck" },
      { key: "Hauteur", val: "190 cm" }
    ],
    images: ["images/03.jpg", "images/02.jpg"],
    insta: "https://www.instagram.com/p/DFccO8EsooI/",
    woods: ["normande", "orme", "teck"],
    light: "LED blanc chaud",
    technique: ["shou-sugi-ban"],
    year: 2025,
    edition: "Pièce unique",
    sold: true,
    featured: true
  },
  {
    id: "lumiere-teck",
    name: "Lumière Teck",
    price: "1 480 €",
    priceNum: 1480,
    height: "120 cm",
    heightNum: 120,
    desc: {
      fr: "Lames de frêne et placage de teck enlacés autour d'une base en orme d'Amérique. Un bandeau LED intérieur baigne l'ensemble d'une lueur ambrée, entre lanterne et sculpture.",
      en: "Ash blades and teak veneer intertwined around an American elm base. An interior LED strip bathes the form in amber glow — part lantern, part sculpture.",
      th: "แผ่นไม้แอชและไม้สักห่อหุ้มฐานไม้เอล์มอเมริกัน แถบ LED ภายในอาบแสงอำพันอบอุ่น",
      zh: "白蜡木叶片与柚木薄片交织缠绕于美洲榆木底座之上。内置LED灯带以琥珀色光芒沐浴全身——半是灯笼，半是雕塑。",
      ru: "Ясеневые пластины и тиковый шпон, переплетённые вокруг основания из американского вяза. Внутренняя LED-лента окутывает форму янтарным сиянием — между фонарём и скульптурой.",
      ar: "شرائح الدردار وقشرة الساج متشابكة حول قاعدة من خشب الدردار الأمريكي. شريط LED داخلي يغمر الكل بتوهّج عنبري — بين فانوس ومنحوتة."
    },
    specs: [
      { key: "Lames", val: "Frêne" },
      { key: "Placage", val: "Teck" },
      { key: "Base", val: "Orme d'Amérique" },
      { key: "Éclairage", val: "Bandeau LED" },
      { key: "Hauteur", val: "120 cm" }
    ],
    images: ["images/10.jpg", "images/24.jpg", "images/25.jpg", "images/26.jpg"],
    insta: "https://www.instagram.com/p/Czg35KSMKKT/",
    woods: ["frêne", "teck", "orme"],
    light: "Bandeau LED",
    technique: ["shou-sugi-ban"],
    year: 2023,
    edition: "Pièce unique",
    sold: true,
    featured: false
  },
  {
    id: "courbe-ebene",
    name: "Courbe Ébène",
    price: "1 380 €",
    priceNum: 1380,
    height: "150 cm",
    heightNum: 150,
    desc: {
      fr: "Base en Douglas calcinée, tige en frêne cintré à la vapeur d'eau, abat-jour en placage de chêne ébonisé et peint. La courbe du frêne dessine un geste suspendu entre terre et lumière.",
      en: "Calcined Douglas fir base, steam-bent ash stem, ebonised and painted oak veneer shade. The curve of the ash draws a gesture suspended between earth and light.",
      th: "ฐานไม้เฟอร์ดักลาสเผาไหม้ ก้านไม้แอชดัดด้วยไอน้ำ โคมบังแสงจากไม้โอ๊คย้อมดำและทาสี",
      zh: "焦化花旗松底座，蒸汽弯曲白蜡木灯杆，乌化彩绘橡木薄片灯罩。白蜡木的弧线勾勒出一个悬于大地与光之间的姿态。",
      ru: "Основание из кальцинированной дугласовой пихты, стержень из гнутого паром ясеня, абажур из эбонизированного и окрашенного дубового шпона. Изгиб ясеня рисует жест, застывший между землёй и светом.",
      ar: "قاعدة من خشب التنوب الدوغلاسي المتفحّم، ساق من خشب الدردار المثنيّ بالبخار، غطاء من قشرة البلوط المُسوَّد والملوّن. انحناءة الدردار ترسم إيماءة معلّقة بين الأرض والنور."
    },
    specs: [
      { key: "Base", val: "Douglas brûlé" },
      { key: "Tige", val: "Frêne cintré vapeur" },
      { key: "Abat-jour", val: "Placage chêne ébonisé et peint" },
      { key: "Hauteur", val: "~150 cm" }
    ],
    images: ["images/05.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg"],
    insta: "https://www.instagram.com/p/CzOZ4rtsVZH/",
    woods: ["douglas", "frêne", "chêne"],
    light: "LED blanc chaud",
    technique: ["shou-sugi-ban", "steam-bending"],
    year: 2023,
    edition: "Pièce unique",
    sold: true,
    featured: false
  },
  {
    id: "sculpture-brulee",
    name: "Sculpture Brûlée",
    price: "980 €",
    priceNum: 980,
    height: "35 cm",
    heightNum: 35,
    desc: {
      fr: "Orme d'Amérique brûlé et huilé à la main, éclairé d'un bandeau LED intérieur. Chaque facette carbonisée révèle une topographie unique — un paysage miniature né du feu.",
      en: "Hand-charred and oiled American elm, lit from within by an LED strip. Each carbonised facet reveals a unique topography — a miniature landscape born of fire.",
      th: "ไม้เอล์มอเมริกันเผาไหม้และเคลือบน้ำมันด้วยมือ ส่องสว่างจากภายในด้วยแถบ LED ภูมิทัศน์จำลองที่เกิดจากไฟ",
      zh: "手工焦化并涂油的美洲榆木，内置LED灯带照亮。每一面碳化肌理揭示独特的地貌——一片诞生于火焰的微型风景。",
      ru: "Американский вяз, обожжённый и умащённый вручную, освещённый изнутри LED-лентой. Каждая обугленная грань открывает уникальную топографию — миниатюрный пейзаж, рождённый огнём.",
      ar: "خشب الدردار الأمريكي المحروق والمُزيَّت يدوياً، مُضاء من الداخل بشريط LED. كل وجه متفحّم يكشف عن طبوغرافيا فريدة — مشهد مصغّر وُلد من النار."
    },
    specs: [
      { key: "Matériau", val: "Orme d'Amérique brûlé et huilé" },
      { key: "Éclairage", val: "Bandeau LED" },
      { key: "Hauteur", val: "35 cm" }
    ],
    images: ["images/07.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg", "images/19.jpg"],
    insta: "https://www.instagram.com/p/C63MPGwMROA/",
    woods: ["orme"],
    light: "Bandeau LED",
    technique: ["shou-sugi-ban"],
    year: 2024,
    edition: "Pièce unique",
    sold: true,
    featured: false
  },
  {
    id: "iroko-sipo",
    name: "Iroko & Sipo",
    price: "1 180 €",
    priceNum: 1180,
    height: "90 cm",
    heightNum: 90,
    desc: {
      fr: "Base en iroko massif, fine bande de frêne, abat-jour en sipo façonné au tour. Trois essences africaines et européennes en dialogue — disponible sur commande.",
      en: "Solid iroko base, slender ash strip, lathe-turned sipo shade. Three African and European timbers in dialogue — available on request.",
      th: "ฐานไม้อิโรโกะ แถบไม้แอชบาง โคมบังแสงไม้ซิโปกลึง สามชนิดไม้แอฟริกันและยุโรปสนทนากัน สั่งทำได้",
      zh: "实心绿柄桑底座，纤细白蜡木饰条，车削西波木灯罩。三种非洲与欧洲木材的对话——可接受定制。",
      ru: "Основание из массива ироко, тонкая полоса ясеня, абажур из сипо, выточенный на токарном станке. Три африканских и европейских породы в диалоге — доступно на заказ.",
      ar: "قاعدة من خشب الإيروكو الصلب، شريط رفيع من الدردار، غطاء من خشب السيبو المخروط. ثلاثة أخشاب أفريقية وأوروبية في حوار — متوفّر عند الطلب."
    },
    specs: [
      { key: "Base", val: "Iroko" },
      { key: "Bande", val: "Frêne" },
      { key: "Abat-jour", val: "Sipo tourné" },
      { key: "Hauteur", val: "90 cm" }
    ],
    images: ["images/08.jpg", "images/20.jpg"],
    insta: "https://www.instagram.com/p/C6o3kgXLqfb/",
    woods: ["iroko", "frêne", "sipo"],
    light: "LED blanc chaud",
    technique: ["turning"],
    year: 2024,
    edition: "Pièce unique",
    sold: true,
    featured: false
  },
  {
    id: "aurore-palissandre",
    name: "Aurore Palissandre",
    price: "1 080 €",
    priceNum: 1080,
    height: "85 cm",
    heightNum: 85,
    desc: {
      fr: "Base en épicéa façonnée au tour puis noircie à la flamme, structure en orme et abat-jour en placage de palissandre. L'aurore perce l'ombre — la lumière révèle les veinures profondes du bois de rose.",
      en: "Lathe-turned spruce base blackened by flame, elm structure and rosewood veneer shade. Dawn pierces the shadow — light reveals the deep grain of rosewood.",
      th: "ฐานไม้สปรูซกลึงแล้วเผาให้ดำ โครงสร้างไม้เอล์ม โคมบังแสงจากไม้พะยูง แสงเผยลายเนื้อไม้อันลึกล้ำ",
      zh: "车削后经火焰熏黑的云杉底座，榆木结构，紫檀薄片灯罩。黎明穿透暗影——光线揭示玫瑰木深邃的纹理。",
      ru: "Основание из ели, выточенное на станке и почернённое пламенем, структура из вяза и абажур из палисандрового шпона. Заря пронзает тень — свет раскрывает глубокий рисунок розового дерева.",
      ar: "قاعدة من خشب التنوب المخروط ثم المُسوَّد باللهب، هيكل من خشب الدردار وغطاء من قشرة خشب الورد. الفجر يخترق الظلّ — والضوء يكشف عروق خشب الورد العميقة."
    },
    specs: [
      { key: "Base", val: "Épicéa tourné et brûlé" },
      { key: "Structure", val: "Orme" },
      { key: "Abat-jour", val: "Placage palissandre" },
      { key: "Hauteur", val: "85 cm" }
    ],
    images: ["images/02.jpg", "images/04.jpg"],
    insta: "https://www.instagram.com/p/DR-MDAIiPXd/",
    woods: ["épicéa", "orme", "palissandre"],
    light: "LED blanc chaud",
    technique: ["turning", "shou-sugi-ban"],
    year: 2025,
    edition: "Pièce unique",
    sold: true,
    featured: false
  }
];
