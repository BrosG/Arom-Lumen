/* ═══════════════════════════════════════════════════════════
   AROM LUMEN — Main JavaScript (2026 Edition)
   Shared across all pages
   Performance-first: rAF scroll, passive listeners,
   IntersectionObserver v2, View Transitions API,
   touch gestures, keyboard nav, URL state, prefetch
   ═══════════════════════════════════════════════════════════ */

;(function () {
'use strict';

// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════

function debounce(fn, ms) {
    let t;
    return function () {
        const ctx = this, args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { fn.apply(ctx, args); }, ms);
    };
}

function raf(fn) {
    let ticking = false;
    return function () {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(function () {
                fn();
                ticking = false;
            });
        }
    };
}

// ═══════════════════════════════════════
// 6-LANGUAGE TRANSLATIONS
// ═══════════════════════════════════════
const T = {
en: {
    nav_home:"Home", nav_collection:"Collection", nav_about:"About", nav_contact:"Contact", scroll:"Scroll",
    hero_sub:"Artisan Wood Creations", hero_title:'Where Nature Becomes <em>Art</em>',
    hero_desc:"Handcrafted sculptural lamps and wood art — each piece a unique dialogue between fire, grain, and light.",
    hero_cta:"Discover the Collection",
    story_label:"The Artist", story_title:"Romain Davidico",
    story_p1:"A cabinetmaker and woodworker for over a dozen years, Romain Davidico now dedicates himself with passion to creating luminaires from wood. He learned to tame this living material, bending it to his vision through steam — a dialogue of patience and precision.",
    story_p2:"He blends essences and sculpts them into harmonious, weightless forms, balanced on the edge of the extraordinary — giving birth to decorative luminaires that cast soft, subdued, soothing atmospheres of light.",
    story_quote:'"I bend the wood to my desire, but always with respect. The material guides me as much as I shape it."',
    story_p3:"Every creation is a unique piece. No two lamps are alike — each carries the memory of the tree it once was, the marks of fire that revealed its soul, and the patient hands that gave it a second life as a vessel of light.",
    stat_pieces:"Unique Pieces", stat_handmade:"Handcrafted", stat_woods:"Wood Species",
    pc_cta:"Commission Similar Piece", pc_insta:"View on Instagram",
    f_sold:"Sold Out — Commission a similar piece",
    philo_label:"Our Philosophy", philo_title:"Three Truths of Wood",
    philo_1t:"Respect the Grain", philo_1d:"Every piece of wood carries a story written by decades of sun, rain, and wind. We never force a shape. The natural grain guides every cut.",
    philo_2t:"Honor by Fire", philo_2d:"Through Shou Sugi Ban, we use controlled flame to reveal the wood's hidden character — its deepest colors that only fire can unlock.",
    philo_3t:"Light as Soul", philo_3d:"Each lamp is designed so light doesn't merely pass through — it breathes. The glow becomes part of the sculpture, transforming space into sanctuary.",
    cre_label:"The Collection", cre_title:"Curated Creations", cre_note:"All pieces shown are sold — click to commission a similar creation",
    proc_label:"The Craft", proc_title:"From Forest to Form",
    s1t:"Selection", s1d:"Each piece of wood is personally chosen from sustainable forests for its grain, character, and story.",
    s2t:"Vision", s2d:"The wood speaks first. We study its natural curves, letting the material guide the design.",
    s3t:"Crafting", s3d:"Hand tools, steam bending, and Shou Sugi Ban — each technique reveals the wood's essence.",
    s4t:"Finishing", s4d:"Natural oils and hand-polishing create a living finish that grows more beautiful with time.",
    f_badge:"Signature Piece", f_label:"Signature Collection", f_name:"Majeste", f_price:"1 890 EUR",
    f_desc:"Over two meters of pure presence. A charred Douglas fir base rises through steam-bent ash curves, crowned by elm blade shades that diffuse a warm, living glow. Each one unique.",
    sp1:"Base", sp1v:"Charred Douglas Fir", sp2:"Body", sp2v:"Steam-Bent Ash", sp3:"Shade", sp3v:"Elm Blades", sp4:"Light", sp4v:"Warm LED, dimmable", sp5:"Edition", sp5v:"One of a kind",
    f_cta:"Inquire About This Piece",
    htl_label:"For Hotels & Hospitality", htl_title:"Transform Your Spaces",
    htl_desc:"From grand lobby installations to intimate suite lighting, Arom Lumen collaborates with architects and hoteliers worldwide to create bespoke collections. Volume commissions available with dedicated project management.",
    htl_cta1:"Message Us on Instagram", htl_cta2:"View Full Portfolio",
    te_label:"Kind Words", te_title:"What Hoteliers Say",
    te1q:"The lamps Arom Lumen created for our lobby have become the most photographed feature of the hotel. Guests constantly ask about them.", te1r:"Design Director, Boutique Hotel Paris",
    te2q:"We commissioned twelve unique pieces for our suites. Each one is different, and our guests love discovering which creation awaits them.", te2r:"General Manager, Luxury Resort Singapore",
    te3q:"The craftsmanship is extraordinary. These are not decorations — they are works of art that give our spa a soul.", te3r:"Spa Director, Grand Hotel Stockholm",
    ig_label:"Follow the Journey", ig_cta:"Follow @arom_lumen",
    ct_label:"Get in Touch", ct_title:"Let's Create Together",
    ct_desc:"Whether for a single statement piece or a full hotel collection, we bring your vision to life with bespoke craftsmanship.",
    ct_artisan:"Artisan", ct_atelier:"Atelier", ct_appt:"By appointment only", ct_follow:"Follow",
    ct_dm:"Message us on Instagram", ct_email_label:"Email", ct_social:"Social",
    footer:"All creations are one of a kind.",
    discover_story:"Discover the Story", view_collection:"View Full Collection",
    featured_label:"Featured Creations", featured_title:"Signature Pieces",
    collection_title:"All Creations", collection_subtitle:"Every piece is sold — each one unique. Commission a similar creation.",
    filter_all:"All", filter_label:"Filter by Wood", sort_label:"Sort",
    sort_price_asc:"Price: Low to High", sort_price_desc:"Price: High to Low",
    sort_height_asc:"Height: Short to Tall", sort_height_desc:"Height: Tall to Short",
    piece_sold:"Sold Out", piece_commission:"Commission Similar Piece",
    piece_view_insta:"View on Instagram", piece_specs:"Specifications",
    piece_prev:"Previous", piece_next:"Next", piece_also_like:"You May Also Like",
    about_hero_title:"The Art of Light & Wood", about_hero_sub:"Our Story"
},
fr: {
    nav_home:"Accueil", nav_collection:"Collection", nav_about:"L'Artiste", nav_contact:"Contact", scroll:"Defiler",
    hero_sub:"Creations Artisanales en Bois", hero_title:'Quand la Nature Devient <em>Art</em>',
    hero_desc:"Lampes sculpturales et art du bois faits main — chaque piece un dialogue unique entre le feu, le grain et la lumiere.",
    hero_cta:"Decouvrir la Collection",
    story_label:"L'Artiste", story_title:"Romain Davidico",
    story_p1:"Menuisier ebeniste depuis une douzaine d'annees, Romain Davidico se dedie avec passion a la creation de luminaires en bois. Il s'applique a dompter cette matiere vivante en la courbant selon ses envies grace a la vapeur — un dialogue de patience et de precision.",
    story_p2:"Il marie les essences et les sculpte pour creer des formes harmonieuses et legeres, a l'equilibre precaire — donnant naissance a des luminaires decoratifs, des ambiances lumineuses douces, tamisees et apaisantes.",
    story_quote:"\u00ab Je courbe le bois selon mon desir, mais toujours avec respect. La matiere me guide autant que je la faconne. \u00bb",
    story_p3:"Toutes ses creations sont des modeles uniques. Aucune lampe ne ressemble a une autre — chacune porte la memoire de l'arbre qu'elle fut, les marques du feu qui a revele son ame, et les mains patientes qui lui ont donne une seconde vie comme vaisseau de lumiere.",
    stat_pieces:"Pieces Uniques", stat_handmade:"Fait Main", stat_woods:"Essences de Bois",
    pc_cta:"Commander une Piece Similaire", pc_insta:"Voir sur Instagram",
    f_sold:"Vendue — Commandez une piece similaire",
    philo_label:"Notre Philosophie", philo_title:"Trois Verites du Bois",
    philo_1t:"Respecter le Fil", philo_1d:"Chaque bois porte une histoire ecrite par des decennies de soleil, de pluie et de vent. Nous ne forcons jamais une forme. Le fil naturel guide chaque coupe.",
    philo_2t:"Honorer par le Feu", philo_2d:"Par le Shou Sugi Ban, nous utilisons la flamme controlee pour reveler le caractere cache du bois — ses couleurs les plus profondes.",
    philo_3t:"La Lumiere comme Ame", philo_3d:"Chaque lampe est concue pour que la lumiere ne passe pas simplement a travers — elle respire. La lueur transforme l'espace en sanctuaire.",
    cre_label:"La Collection", cre_title:"Creations d'Exception", cre_note:"Toutes les pieces presentees sont vendues — cliquez pour commander une creation similaire",
    proc_label:"Le Savoir-faire", proc_title:"De la Foret a la Forme",
    s1t:"Selection", s1d:"Chaque bois est choisi personnellement pour son grain, son caractere et son histoire — issu de forets durables.",
    s2t:"Vision", s2d:"Le bois parle en premier. Nous etudions ses courbes naturelles, laissant la matiere guider le design.",
    s3t:"Faconnage", s3d:"Outils manuels, cintrage vapeur et Shou Sugi Ban — chaque technique revele l'essence du bois.",
    s4t:"Finition", s4d:"Huiles naturelles et polissage patient creent une finition vivante qui embellit avec le temps.",
    f_badge:"Piece Signature", f_label:"Collection Signature", f_name:"Majeste", f_price:"1 890 EUR",
    f_desc:"Plus de deux metres de pure presence. Une base en Douglas brule s'eleve a travers des courbes de frene cintre, couronnee par des lames d'orme qui diffusent une lueur chaude et vivante.",
    sp1:"Base", sp1v:"Douglas brule", sp2:"Corps", sp2v:"Frene cintre vapeur", sp3:"Abat-jour", sp3v:"Lames d'orme", sp4:"Lumiere", sp4v:"LED blanc chaud, variable", sp5:"Edition", sp5v:"Piece unique",
    f_cta:"Renseignement",
    htl_label:"Hotellerie & Hospitalite", htl_title:"Transformez vos Espaces",
    htl_desc:"Des installations de hall aux eclairages de suites, Arom Lumen collabore avec architectes et hoteliers du monde entier. Commandes en volume avec suivi de projet dedie.",
    htl_cta1:"Ecrivez-nous sur Instagram", htl_cta2:"Voir le Portfolio",
    te_label:"Temoignages", te_title:"Ce que disent les Hoteliers",
    te1q:"Les lampes qu'Arom Lumen a creees pour notre hall sont devenues l'element le plus photographie de l'hotel.", te1r:"Directrice Design, Hotel Boutique Paris",
    te2q:"Nous avons commande douze pieces uniques pour nos suites. Chacune est differente, et nos hotes adorent decouvrir quelle creation les attend.", te2r:"Directeur General, Resort de Luxe Singapour",
    te3q:"L'artisanat est extraordinaire. Ce ne sont pas des decorations — ce sont des oeuvres d'art qui donnent une ame a notre spa.", te3r:"Directrice Spa, Grand Hotel Stockholm",
    ig_label:"Suivez l'Aventure", ig_cta:"Suivre @arom_lumen",
    ct_label:"Nous Contacter", ct_title:"Creons Ensemble",
    ct_desc:"Que ce soit pour une piece unique ou une collection hoteliere complete, nous donnons vie a votre vision avec un artisanat sur mesure.",
    ct_artisan:"Artisan", ct_atelier:"Atelier", ct_appt:"Sur rendez-vous uniquement", ct_follow:"Suivre",
    ct_dm:"Ecrivez-nous sur Instagram", ct_email_label:"Email", ct_social:"Reseaux",
    footer:"Toutes les creations sont des pieces uniques.",
    discover_story:"Decouvrir l'Histoire", view_collection:"Voir la Collection Complete",
    featured_label:"Creations Vedettes", featured_title:"Pieces Signatures",
    collection_title:"Toutes les Creations", collection_subtitle:"Chaque piece est vendue — chacune unique. Commandez une creation similaire.",
    filter_all:"Toutes", filter_label:"Filtrer par bois", sort_label:"Trier",
    sort_price_asc:"Prix croissant", sort_price_desc:"Prix decroissant",
    sort_height_asc:"Hauteur croissante", sort_height_desc:"Hauteur decroissante",
    piece_sold:"Vendue", piece_commission:"Commander une Piece Similaire",
    piece_view_insta:"Voir sur Instagram", piece_specs:"Specifications",
    piece_prev:"Precedent", piece_next:"Suivant", piece_also_like:"Vous Aimerez Aussi",
    about_hero_title:"L'Art de la Lumiere & du Bois", about_hero_sub:"Notre Histoire"
},
th: {
    nav_home:"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01", nav_collection:"\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19", nav_about:"\u0e28\u0e34\u0e25\u0e1b\u0e34\u0e19", nav_contact:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d", scroll:"\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19",
    hero_sub:"\u0e07\u0e32\u0e19\u0e28\u0e34\u0e25\u0e1b\u0e4c\u0e44\u0e21\u0e49\u0e2b\u0e31\u0e15\u0e16\u0e01\u0e23\u0e23\u0e21", hero_title:'\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e18\u0e23\u0e23\u0e21\u0e0a\u0e32\u0e15\u0e34 \u0e01\u0e25\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19<em>\u0e28\u0e34\u0e25\u0e1b\u0e30</em>',
    hero_desc:"\u0e42\u0e04\u0e21\u0e44\u0e1f\u0e1b\u0e23\u0e30\u0e15\u0e34\u0e21\u0e32\u0e01\u0e23\u0e23\u0e21\u0e41\u0e25\u0e30\u0e28\u0e34\u0e25\u0e1b\u0e30\u0e44\u0e21\u0e49\u0e17\u0e33\u0e21\u0e37\u0e2d \u2014 \u0e41\u0e15\u0e48\u0e25\u0e30\u0e0a\u0e34\u0e49\u0e19\u0e04\u0e37\u0e2d\u0e1a\u0e17\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e44\u0e1f \u0e25\u0e32\u0e22\u0e44\u0e21\u0e49 \u0e41\u0e25\u0e30\u0e41\u0e2a\u0e07",
    hero_cta:"\u0e04\u0e49\u0e19\u0e1e\u0e1a\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19",
    story_label:"\u0e28\u0e34\u0e25\u0e1b\u0e34\u0e19", story_title:"\u0e42\u0e23\u0e41\u0e21\u0e47\u0e07 \u0e14\u0e32\u0e27\u0e34\u0e14\u0e34\u0e42\u0e01",
    story_p1:"\u0e0a\u0e48\u0e32\u0e07\u0e44\u0e21\u0e49\u0e41\u0e25\u0e30\u0e0a\u0e48\u0e32\u0e07\u0e04\u0e23\u0e38\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e21\u0e32\u0e01\u0e27\u0e48\u0e32\u0e2a\u0e34\u0e1a\u0e2a\u0e2d\u0e07\u0e1b\u0e35 \u0e42\u0e23\u0e41\u0e21\u0e47\u0e07 \u0e14\u0e32\u0e27\u0e34\u0e14\u0e34\u0e42\u0e01 \u0e17\u0e38\u0e48\u0e21\u0e40\u0e17\u0e14\u0e49\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e25\u0e07\u0e43\u0e2b\u0e25\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2a\u0e23\u0e23\u0e04\u0e4c\u0e42\u0e04\u0e21\u0e44\u0e1f\u0e08\u0e32\u0e01\u0e44\u0e21\u0e49",
    story_p2:"\u0e40\u0e02\u0e32\u0e1c\u0e2a\u0e21\u0e1c\u0e2a\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e44\u0e21\u0e49\u0e2b\u0e25\u0e32\u0e01\u0e0a\u0e19\u0e34\u0e14\u0e41\u0e25\u0e30\u0e41\u0e01\u0e30\u0e2a\u0e25\u0e31\u0e01\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e39\u0e1b\u0e17\u0e23\u0e07\u0e17\u0e35\u0e48\u0e01\u0e25\u0e21\u0e01\u0e25\u0e37\u0e19 \u0e40\u0e1a\u0e32\u0e2b\u0e27\u0e34\u0e27",
    story_quote:'"\u0e1c\u0e21\u0e14\u0e31\u0e14\u0e44\u0e21\u0e49\u0e15\u0e32\u0e21\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e32\u0e23\u0e16\u0e19\u0e32 \u0e41\u0e15\u0e48\u0e14\u0e49\u0e27\u0e22\u0e04\u0e27\u0e32\u0e21\u0e40\u0e04\u0e32\u0e23\u0e1e\u0e40\u0e2a\u0e21\u0e2d"',
    story_p3:"\u0e17\u0e38\u0e01\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e0a\u0e34\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e43\u0e19\u0e42\u0e25\u0e01",
    stat_pieces:"\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e40\u0e09\u0e1e\u0e32\u0e30", stat_handmade:"\u0e17\u0e33\u0e14\u0e49\u0e27\u0e22\u0e21\u0e37\u0e2d", stat_woods:"\u0e0a\u0e19\u0e34\u0e14\u0e44\u0e21\u0e49",
    philo_label:"\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32", philo_title:"\u0e2a\u0e31\u0e08\u0e18\u0e23\u0e23\u0e21\u0e2a\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e23\u0e41\u0e2b\u0e48\u0e07\u0e44\u0e21\u0e49",
    philo_1t:"\u0e40\u0e04\u0e32\u0e23\u0e1e\u0e25\u0e32\u0e22\u0e44\u0e21\u0e49", philo_1d:"\u0e44\u0e21\u0e49\u0e17\u0e38\u0e01\u0e0a\u0e34\u0e49\u0e19\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e08\u0e32\u0e01\u0e41\u0e2a\u0e07\u0e41\u0e14\u0e14 \u0e1d\u0e19 \u0e41\u0e25\u0e30\u0e25\u0e21",
    philo_2t:"\u0e43\u0e2b\u0e49\u0e40\u0e01\u0e35\u0e22\u0e23\u0e15\u0e34\u0e14\u0e49\u0e27\u0e22\u0e44\u0e1f", philo_2d:"\u0e1c\u0e48\u0e32\u0e19 Shou Sugi Ban \u0e40\u0e23\u0e32\u0e43\u0e0a\u0e49\u0e40\u0e1b\u0e25\u0e27\u0e44\u0e1f\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1c\u0e22\u0e15\u0e31\u0e27\u0e15\u0e19\u0e17\u0e35\u0e48\u0e0b\u0e48\u0e2d\u0e19\u0e2d\u0e22\u0e39\u0e48",
    philo_3t:"\u0e41\u0e2a\u0e07\u0e04\u0e37\u0e2d\u0e08\u0e34\u0e15\u0e27\u0e34\u0e0d\u0e0d\u0e32\u0e13", philo_3d:"\u0e42\u0e04\u0e21\u0e44\u0e1f\u0e41\u0e15\u0e48\u0e25\u0e30\u0e14\u0e27\u0e07\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e43\u0e2b\u0e49\u0e41\u0e2a\u0e07\u0e44\u0e21\u0e48\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1c\u0e48\u0e32\u0e19 \u2014 \u0e21\u0e31\u0e19\u0e2b\u0e32\u0e22\u0e43\u0e08",
    cre_label:"\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19", cre_title:"\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e04\u0e31\u0e14\u0e2a\u0e23\u0e23", cre_note:"\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e02\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27 \u2014 \u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e31\u0e48\u0e07\u0e17\u0e33\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19",
    pc_cta:"\u0e2a\u0e31\u0e48\u0e07\u0e17\u0e33\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19", pc_insta:"\u0e14\u0e39\u0e1a\u0e19 Instagram",
    f_sold:"\u0e02\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27 \u2014 \u0e2a\u0e31\u0e48\u0e07\u0e17\u0e33\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19",
    proc_label:"\u0e1d\u0e35\u0e21\u0e37\u0e2d\u0e0a\u0e48\u0e32\u0e07", proc_title:"\u0e08\u0e32\u0e01\u0e1b\u0e48\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e39\u0e1b\u0e17\u0e23\u0e07",
    s1t:"\u0e04\u0e31\u0e14\u0e2a\u0e23\u0e23", s1d:"\u0e44\u0e21\u0e49\u0e17\u0e38\u0e01\u0e0a\u0e34\u0e49\u0e19\u0e16\u0e39\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e14\u0e49\u0e27\u0e22\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e1b\u0e48\u0e32\u0e22\u0e31\u0e48\u0e07\u0e22\u0e37\u0e19",
    s2t:"\u0e27\u0e34\u0e2a\u0e31\u0e22\u0e17\u0e31\u0e28\u0e19\u0e4c", s2d:"\u0e44\u0e21\u0e49\u0e1e\u0e39\u0e14\u0e01\u0e48\u0e2d\u0e19 \u0e40\u0e23\u0e32\u0e28\u0e36\u0e01\u0e29\u0e32\u0e40\u0e2a\u0e49\u0e19\u0e42\u0e04\u0e49\u0e07\u0e18\u0e23\u0e23\u0e21\u0e0a\u0e32\u0e15\u0e34",
    s3t:"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2a\u0e23\u0e23\u0e04\u0e4c", s3d:"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e21\u0e37\u0e2d \u0e14\u0e31\u0e14\u0e44\u0e2d\u0e19\u0e49\u0e33 \u0e41\u0e25\u0e30 Shou Sugi Ban",
    s4t:"\u0e15\u0e01\u0e41\u0e15\u0e48\u0e07", s4d:"\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19\u0e18\u0e23\u0e23\u0e21\u0e0a\u0e32\u0e15\u0e34\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e02\u0e31\u0e14\u0e14\u0e49\u0e27\u0e22\u0e21\u0e37\u0e2d",
    f_badge:"\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e40\u0e2d\u0e01\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c", f_label:"\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19\u0e1e\u0e34\u0e40\u0e28\u0e29", f_name:"\u0e42\u0e04\u0e21\u0e44\u0e1f\u0e1b\u0e23\u0e30\u0e15\u0e34\u0e21\u0e32\u0e01\u0e23\u0e23\u0e21", f_price:"1 890 EUR",
    f_desc:"\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e2a\u0e2d\u0e07\u0e40\u0e21\u0e15\u0e23\u0e02\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e07\u0e48\u0e32\u0e07\u0e32\u0e21",
    sp1:"\u0e10\u0e32\u0e19", sp1v:"\u0e14\u0e31\u0e01\u0e25\u0e32\u0e2a\u0e40\u0e1c\u0e32", sp2:"\u0e25\u0e33\u0e15\u0e49\u0e19", sp2v:"\u0e40\u0e1f\u0e23\u0e19\u0e14\u0e31\u0e14\u0e44\u0e2d\u0e19\u0e49\u0e33", sp3:"\u0e42\u0e04\u0e21", sp3v:"\u0e25\u0e32\u0e22\u0e44\u0e21\u0e49\u0e40\u0e2d\u0e25\u0e4c\u0e21", sp4:"\u0e41\u0e2a\u0e07", sp4v:"LED \u0e2d\u0e38\u0e48\u0e19 \u0e1b\u0e23\u0e31\u0e1a\u0e44\u0e14\u0e49", sp5:"\u0e23\u0e38\u0e48\u0e19", sp5v:"\u0e0a\u0e34\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e43\u0e19\u0e42\u0e25\u0e01",
    f_cta:"\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21",
    htl_label:"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21", htl_title:"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
    htl_desc:"\u0e08\u0e32\u0e01\u0e25\u0e47\u0e2d\u0e1a\u0e1a\u0e35\u0e49\u0e16\u0e36\u0e07\u0e2a\u0e27\u0e35\u0e17 Arom Lumen \u0e23\u0e48\u0e27\u0e21\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a\u0e2a\u0e16\u0e32\u0e1b\u0e19\u0e34\u0e01\u0e41\u0e25\u0e30\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01",
    htl_cta1:"\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e1a\u0e19 Instagram", htl_cta2:"\u0e14\u0e39\u0e1e\u0e2d\u0e23\u0e4c\u0e15\u0e42\u0e1f\u0e25\u0e34\u0e42\u0e2d",
    te_label:"\u0e04\u0e33\u0e0a\u0e37\u0e48\u0e19\u0e0a\u0e21", te_title:"\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e08\u0e32\u0e01\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
    te1q:"\u0e42\u0e04\u0e21\u0e44\u0e1f\u0e17\u0e35\u0e48 Arom Lumen \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e25\u0e47\u0e2d\u0e1a\u0e1a\u0e35\u0e49\u0e01\u0e25\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e08\u0e38\u0e14\u0e16\u0e48\u0e32\u0e22\u0e23\u0e39\u0e1b\u0e22\u0e2d\u0e14\u0e19\u0e34\u0e22\u0e21", te1r:"\u0e1c\u0e39\u0e49\u0e2d\u0e33\u0e19\u0e27\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a, \u0e1a\u0e39\u0e17\u0e35\u0e04\u0e42\u0e2e\u0e40\u0e17\u0e25 \u0e1b\u0e32\u0e23\u0e35\u0e2a",
    te2q:"\u0e40\u0e23\u0e32\u0e2a\u0e31\u0e48\u0e07\u0e17\u0e33\u0e2a\u0e34\u0e1a\u0e2a\u0e2d\u0e07\u0e0a\u0e34\u0e49\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e27\u0e35\u0e17 \u0e41\u0e15\u0e48\u0e25\u0e30\u0e0a\u0e34\u0e49\u0e19\u0e44\u0e21\u0e48\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19", te2r:"\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b, \u0e23\u0e35\u0e2a\u0e2d\u0e23\u0e4c\u0e17\u0e2b\u0e23\u0e39 \u0e2a\u0e34\u0e07\u0e04\u0e42\u0e1b\u0e23\u0e4c",
    te3q:"\u0e1d\u0e35\u0e21\u0e37\u0e2d\u0e0a\u0e48\u0e32\u0e07\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e2a\u0e38\u0e14 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e02\u0e2d\u0e07\u0e15\u0e01\u0e41\u0e15\u0e48\u0e07 \u2014 \u0e40\u0e1b\u0e47\u0e19\u0e07\u0e32\u0e19\u0e28\u0e34\u0e25\u0e1b\u0e4c", te3r:"\u0e1c\u0e39\u0e49\u0e2d\u0e33\u0e19\u0e27\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e1b\u0e32, \u0e41\u0e01\u0e23\u0e19\u0e14\u0e4c\u0e42\u0e2e\u0e40\u0e17\u0e25 \u0e2a\u0e15\u0e2d\u0e01\u0e42\u0e2e\u0e25\u0e4c\u0e21",
    ig_label:"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07", ig_cta:"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21 @arom_lumen",
    ct_label:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e23\u0e32", ct_title:"\u0e21\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2a\u0e23\u0e23\u0e04\u0e4c\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19",
    ct_desc:"\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e0a\u0e34\u0e49\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
    ct_artisan:"\u0e0a\u0e48\u0e32\u0e07\u0e1d\u0e35\u0e21\u0e37\u0e2d", ct_atelier:"\u0e2d\u0e32\u0e40\u0e17\u0e25\u0e34\u0e40\u0e22\u0e23\u0e4c", ct_appt:"\u0e19\u0e31\u0e14\u0e2b\u0e21\u0e32\u0e22\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32", ct_follow:"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21",
    ct_dm:"\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e1a\u0e19 Instagram", ct_email_label:"\u0e2d\u0e35\u0e40\u0e21\u0e25", ct_social:"\u0e42\u0e0b\u0e40\u0e0a\u0e35\u0e22\u0e25",
    footer:"\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e17\u0e38\u0e01\u0e0a\u0e34\u0e49\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27\u0e43\u0e19\u0e42\u0e25\u0e01",
    discover_story:"\u0e04\u0e49\u0e19\u0e1e\u0e1a\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27", view_collection:"\u0e14\u0e39\u0e04\u0e2d\u0e25\u0e40\u0e25\u0e01\u0e0a\u0e31\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
    featured_label:"\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e40\u0e14\u0e48\u0e19", featured_title:"\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e40\u0e2d\u0e01\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c",
    collection_title:"\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", collection_subtitle:"\u0e1c\u0e25\u0e07\u0e32\u0e19\u0e17\u0e38\u0e01\u0e0a\u0e34\u0e49\u0e19\u0e02\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27 \u2014 \u0e2a\u0e31\u0e48\u0e07\u0e17\u0e33\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19",
    filter_all:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14", filter_label:"\u0e01\u0e23\u0e2d\u0e07\u0e15\u0e32\u0e21\u0e44\u0e21\u0e49", sort_label:"\u0e40\u0e23\u0e35\u0e22\u0e07",
    sort_price_asc:"\u0e23\u0e32\u0e04\u0e32: \u0e15\u0e48\u0e33-\u0e2a\u0e39\u0e07", sort_price_desc:"\u0e23\u0e32\u0e04\u0e32: \u0e2a\u0e39\u0e07-\u0e15\u0e48\u0e33",
    sort_height_asc:"\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e39\u0e07: \u0e40\u0e15\u0e35\u0e49\u0e22-\u0e2a\u0e39\u0e07", sort_height_desc:"\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e39\u0e07: \u0e2a\u0e39\u0e07-\u0e40\u0e15\u0e35\u0e49\u0e22",
    piece_sold:"\u0e02\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27", piece_commission:"\u0e2a\u0e31\u0e48\u0e07\u0e17\u0e33\u0e0a\u0e34\u0e49\u0e19\u0e07\u0e32\u0e19\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19",
    piece_view_insta:"\u0e14\u0e39\u0e1a\u0e19 Instagram", piece_specs:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",
    piece_prev:"\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32", piece_next:"\u0e16\u0e31\u0e14\u0e44\u0e1b", piece_also_like:"\u0e04\u0e38\u0e13\u0e2d\u0e32\u0e08\u0e0a\u0e2d\u0e1a",
    about_hero_title:"\u0e28\u0e34\u0e25\u0e1b\u0e30\u0e41\u0e2b\u0e48\u0e07\u0e41\u0e2a\u0e07\u0e41\u0e25\u0e30\u0e44\u0e21\u0e49", about_hero_sub:"\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27"
},
zh: {
    nav_home:"\u9996\u9875", nav_collection:"\u6536\u85cf", nav_about:"\u5320\u4eba", nav_contact:"\u8054\u7cfb", scroll:"\u6eda\u52a8",
    hero_sub:"\u624b\u5de5\u6728\u827a\u81fb\u54c1", hero_title:'\u5f53\u81ea\u7136 \u5316\u4e3a<em>\u827a\u672f</em>',
    hero_desc:"\u624b\u5de5\u96d5\u5851\u706f\u4e0e\u6728\u827a\u2014\u2014\u6bcf\u4ef6\u4f5c\u54c1\u90fd\u662f\u706b\u7130\u3001\u7eb9\u7406\u4e0e\u5149\u7684\u72ec\u7279\u5bf9\u8bdd\u3002",
    hero_cta:"\u63a2\u7d22\u5178\u85cf",
    story_label:"\u5320\u4eba", story_title:"\u7f57\u66fc\u00b7\u5927\u536b\u8fea\u79d1",
    story_p1:"\u4ece\u4e8b\u6728\u5320\u4e0e\u7ec6\u6728\u5de5\u5341\u4e8c\u5e74\u6709\u4f59\uff0c\u7f57\u66fc\u5982\u4eca\u6ee1\u6000\u70ed\u5ff1\u5730\u6295\u8eab\u4e8e\u6728\u8d28\u706f\u5177\u521b\u4f5c\u3002",
    story_p2:"\u4ed6\u878d\u5408\u4e0d\u540c\u6728\u79cd\uff0c\u96d5\u7422\u4e3a\u548c\u8c10\u8f7b\u76c8\u7684\u5f62\u6001\uff0c\u5728\u975e\u51e1\u7684\u8fb9\u7f18\u4fdd\u6301\u5fae\u5999\u5e73\u8861\u3002",
    story_quote:'"\u6211\u6309\u7167\u5fc3\u610f\u5f2f\u66f2\u6728\u6750\uff0c\u4f46\u59cb\u7ec8\u6000\u7740\u656c\u610f\u3002\u6750\u6599\u5f15\u5bfc\u6211\uff0c\u6b63\u5982\u6211\u5851\u9020\u5b83\u3002"',
    story_p3:"\u6bcf\u4e00\u4ef6\u4f5c\u54c1\u90fd\u662f\u5b64\u54c1\u3002\u6ca1\u6709\u4e24\u76cf\u706f\u76f8\u540c\u3002",
    stat_pieces:"\u72ec\u521b\u4f5c\u54c1", stat_handmade:"\u7eaf\u624b\u5de5", stat_woods:"\u6728\u6750\u79cd\u7c7b",
    philo_label:"\u6211\u4eec\u7684\u7406\u5ff5", philo_title:"\u6728\u4e4b\u4e09\u771f",
    philo_1t:"\u656c\u754f\u7eb9\u7406", philo_1d:"\u6bcf\u5757\u6728\u6750\u627f\u8f7d\u7740\u6570\u5341\u5e74\u9633\u5149\u3001\u96e8\u6c34\u548c\u98ce\u4e66\u5199\u7684\u6545\u4e8b\u3002",
    philo_2t:"\u4ee5\u706b\u81f4\u656c", philo_2d:"\u901a\u8fc7\u713c\u6749\u677f\u6280\u6cd5\uff0c\u6211\u4eec\u4ee5\u53d7\u63a7\u7684\u706b\u7130\u63ed\u793a\u6728\u6750\u9690\u85cf\u7684\u6027\u683c\u3002",
    philo_3t:"\u5149\u4e3a\u7075\u9b42", philo_3d:"\u6bcf\u76cf\u706f\u7684\u8bbe\u8ba1\u4e0d\u4ec5\u8ba9\u5149\u901a\u8fc7\u2014\u2014\u800c\u662f\u8ba9\u5149\u547c\u5438\u3002",
    cre_label:"\u5178\u85cf\u7cfb\u5217", cre_title:"\u81fb\u9009\u4e4b\u4f5c", cre_note:"\u6240\u6709\u5c55\u793a\u4f5c\u54c1\u5747\u5df2\u552e\u51fa\u2014\u2014\u70b9\u51fb\u5b9a\u5236\u7c7b\u4f3c\u4f5c\u54c1",
    pc_cta:"\u5b9a\u5236\u7c7b\u4f3c\u4f5c\u54c1", pc_insta:"\u5728Instagram\u67e5\u770b",
    f_sold:"\u5df2\u552e\u51fa\u2014\u2014\u53ef\u5b9a\u5236\u7c7b\u4f3c\u4f5c\u54c1",
    proc_label:"\u5320\u5fc3\u5de5\u827a", proc_title:"\u4ece\u68ee\u6797\u5230\u5f62\u6001",
    s1t:"\u7504\u9009", s1d:"\u6bcf\u5757\u6728\u6750\u56e0\u7eb9\u7406\u3001\u6027\u683c\u548c\u6545\u4e8b\u88ab\u4eb2\u81ea\u6311\u9009\u3002",
    s2t:"\u613f\u666f", s2d:"\u6728\u6750\u5148\u5f00\u53e3\u3002\u6211\u4eec\u7814\u7a76\u81ea\u7136\u66f2\u7ebf\u3002",
    s3t:"\u5851\u9020", s3d:"\u624b\u5de5\u5de5\u5177\u3001\u84b8\u6c7d\u5f2f\u66f2\u4e0e\u713c\u6749\u677f\u3002",
    s4t:"\u7cbe\u9970", s4d:"\u5929\u7136\u6cb9\u8102\u548c\u624b\u5de5\u629b\u5149\u521b\u9020\u968f\u65f6\u95f4\u6108\u53d1\u7f8e\u4e3d\u7684\u6d3b\u6027\u8d28\u611f\u3002",
    f_badge:"\u7b7e\u540d\u4e4b\u4f5c", f_label:"\u7b7e\u540d\u7cfb\u5217", f_name:"\u96d5\u5851\u706f", f_price:"1 890 EUR",
    f_desc:"\u6986\u6728\u5e95\u5ea7\u624e\u6839\u5927\u5730\u3002\u70ad\u5316\u82b1\u65d7\u677e\u5982\u56fe\u817e\u5347\u8d77\u3002",
    sp1:"\u5e95\u5ea7", sp1v:"\u70ad\u5316\u82b1\u65d7\u677e", sp2:"\u6811\u5e72", sp2v:"\u84b8\u6c7d\u5f2f\u66f2\u6881\u6728", sp3:"\u706f\u7f69", sp3v:"\u6986\u6728\u53f6\u7247", sp4:"\u5149\u6e90", sp4v:"\u6696\u8272LED\u53ef\u8c03\u5149", sp5:"\u7248\u672c", sp5v:"\u72ec\u4e00\u65e0\u4e8c",
    f_cta:"\u54a8\u8be2\u6b64\u4f5c\u54c1",
    htl_label:"\u9152\u5e97\u4e0e\u9152\u5e97\u4e1a", htl_title:"\u6539\u9020\u60a8\u7684\u7a7a\u95f4",
    htl_desc:"\u4ece\u5927\u5802\u88c5\u7f6e\u5230\u5957\u623f\u7167\u660e\uff0cArom Lumen\u4e0e\u5168\u7403\u5efa\u7b51\u5e08\u548c\u9152\u5e97\u4e1a\u8005\u5408\u4f5c\u3002",
    htl_cta1:"\u5728Instagram\u7ed9\u6211\u4eec\u53d1\u6d88\u606f", htl_cta2:"\u67e5\u770b\u4f5c\u54c1\u96c6",
    te_label:"\u8d5e\u8a89", te_title:"\u9152\u5e97\u4e1a\u8005\u4e4b\u58f0",
    te1q:"\u706f\u5177\u6210\u4e3a\u9152\u5e97\u6700\u53d7\u6b22\u8fce\u7684\u62cd\u7167\u70b9\u3002", te1r:"\u8bbe\u8ba1\u603b\u76d1\uff0c\u5df4\u9ece\u7cbe\u54c1\u9152\u5e97",
    te2q:"\u6211\u4eec\u4e3a\u5957\u623f\u5b9a\u5236\u4e86\u5341\u4e8c\u4ef6\u72ec\u7279\u4f5c\u54c1\u3002", te2r:"\u603b\u7ecf\u7406\uff0c\u65b0\u52a0\u5761\u8c6a\u534e\u5ea6\u5047\u6751",
    te3q:"\u5de5\u827a\u975e\u51e1\u3002\u8fd9\u4e0d\u662f\u88c5\u9970\u2014\u2014\u662f\u8d4b\u4e88\u6211\u4eec\u6c34\u7597\u7075\u9b42\u7684\u827a\u672f\u54c1\u3002", te3r:"\u6c34\u7597\u603b\u76d1\uff0c\u65af\u5fb7\u54e5\u5c14\u6469\u5927\u9152\u5e97",
    ig_label:"\u5173\u6ce8\u65c5\u7a0b", ig_cta:"\u5173\u6ce8 @arom_lumen",
    ct_label:"\u8054\u7cfb\u6211\u4eec", ct_title:"\u4e00\u8d77\u521b\u9020",
    ct_desc:"\u65e0\u8bba\u662f\u5355\u4ef6\u7cbe\u54c1\u8fd8\u662f\u6574\u5957\u9152\u5e97\u7cfb\u5217\u3002",
    ct_artisan:"\u5320\u4eba", ct_atelier:"\u5de5\u4f5c\u5ba4", ct_appt:"\u4ec5\u9650\u9884\u7ea6", ct_follow:"\u5173\u6ce8",
    ct_dm:"\u5728Instagram\u7ed9\u6211\u4eec\u53d1\u6d88\u606f", ct_email_label:"\u90ae\u7bb1", ct_social:"\u793e\u4ea4",
    footer:"\u6bcf\u4ef6\u4f5c\u54c1\u7686\u4e3a\u5b64\u54c1\u3002",
    discover_story:"\u4e86\u89e3\u6545\u4e8b", view_collection:"\u67e5\u770b\u5168\u90e8\u6536\u85cf",
    featured_label:"\u7cbe\u9009\u4f5c\u54c1", featured_title:"\u7b7e\u540d\u4e4b\u4f5c",
    collection_title:"\u6240\u6709\u4f5c\u54c1", collection_subtitle:"\u6240\u6709\u4f5c\u54c1\u5747\u5df2\u552e\u51fa\u2014\u2014\u5b9a\u5236\u7c7b\u4f3c\u4f5c\u54c1\u3002",
    filter_all:"\u5168\u90e8", filter_label:"\u6309\u6728\u6750\u7b5b\u9009", sort_label:"\u6392\u5e8f",
    sort_price_asc:"\u4ef7\u683c\u4ece\u4f4e\u5230\u9ad8", sort_price_desc:"\u4ef7\u683c\u4ece\u9ad8\u5230\u4f4e",
    sort_height_asc:"\u9ad8\u5ea6\u4ece\u4f4e\u5230\u9ad8", sort_height_desc:"\u9ad8\u5ea6\u4ece\u9ad8\u5230\u4f4e",
    piece_sold:"\u5df2\u552e\u51fa", piece_commission:"\u5b9a\u5236\u7c7b\u4f3c\u4f5c\u54c1",
    piece_view_insta:"\u5728Instagram\u67e5\u770b", piece_specs:"\u89c4\u683c",
    piece_prev:"\u4e0a\u4e00\u4ef6", piece_next:"\u4e0b\u4e00\u4ef6", piece_also_like:"\u60a8\u53ef\u80fd\u8fd8\u559c\u6b22",
    about_hero_title:"\u5149\u4e0e\u6728\u7684\u827a\u672f", about_hero_sub:"\u6211\u4eec\u7684\u6545\u4e8b"
},
ru: {
    nav_home:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f", nav_collection:"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f", nav_about:"\u041c\u0430\u0441\u0442\u0435\u0440", nav_contact:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442", scroll:"\u041b\u0438\u0441\u0442\u0430\u0442\u044c",
    hero_sub:"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u0438\u0437\u0434\u0435\u043b\u0438\u044f \u0438\u0437 \u0434\u0435\u0440\u0435\u0432\u0430", hero_title:'\u041a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f <em>\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e\u043c</em>',
    hero_desc:"\u0421\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0435 \u0441\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a\u0438 \u0440\u0443\u0447\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u2014 \u043a\u0430\u0436\u0434\u043e\u0435 \u0438\u0437\u0434\u0435\u043b\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0430\u043b\u043e\u0433 \u043e\u0433\u043d\u044f, \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0438 \u0441\u0432\u0435\u0442\u0430.",
    hero_cta:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e",
    story_label:"\u041c\u0430\u0441\u0442\u0435\u0440", story_title:"\u0420\u043e\u043c\u0435\u043d \u0414\u0430\u0432\u0438\u0434\u0438\u043a\u043e",
    story_p1:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0435\u0440\u0435\u0432\u0449\u0438\u043a \u0441 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u0438\u043b\u0435\u0442\u043d\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c, \u0420\u043e\u043c\u0435\u043d \u0414\u0430\u0432\u0438\u0434\u0438\u043a\u043e \u043f\u043e\u0441\u0432\u044f\u0442\u0438\u043b \u0441\u0435\u0431\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u0438\u0437 \u0434\u0435\u0440\u0435\u0432\u0430.",
    story_p2:"\u041e\u043d \u0441\u043e\u0447\u0435\u0442\u0430\u0435\u0442 \u043f\u043e\u0440\u043e\u0434\u044b \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u044b \u0438 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u043d\u044b\u0435, \u043d\u0435\u0432\u0435\u0441\u043e\u043c\u044b\u0435 \u0444\u043e\u0440\u043c\u044b.",
    story_quote:"\u00ab\u042f \u0433\u043d\u0443 \u0434\u0435\u0440\u0435\u0432\u043e \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0436\u0435\u043b\u0430\u043d\u0438\u044e, \u043d\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0441 \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c.\u00bb",
    story_p3:"\u041a\u0430\u0436\u0434\u043e\u0435 \u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u2014 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440.",
    stat_pieces:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442", stat_handmade:"\u0420\u0443\u0447\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430", stat_woods:"\u041f\u043e\u0440\u043e\u0434 \u0434\u0435\u0440\u0435\u0432\u0430",
    philo_label:"\u0424\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f", philo_title:"\u0422\u0440\u0438 \u0438\u0441\u0442\u0438\u043d\u044b \u0434\u0435\u0440\u0435\u0432\u0430",
    philo_1t:"\u0423\u0432\u0430\u0436\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0443", philo_1d:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u0443\u0441\u043e\u043a \u0434\u0435\u0440\u0435\u0432\u0430 \u043d\u0435\u0441\u0451\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u044e.",
    philo_2t:"\u0427\u0442\u0438\u0442\u044c \u043e\u0433\u043d\u0451\u043c", philo_2d:"\u0427\u0435\u0440\u0435\u0437 Shou Sugi Ban \u043c\u044b \u0440\u0430\u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0434\u0435\u0440\u0435\u0432\u0430.",
    philo_3t:"\u0421\u0432\u0435\u0442 \u043a\u0430\u043a \u0434\u0443\u0448\u0430", philo_3d:"\u0421\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0432\u0435\u0442 \u0434\u044b\u0448\u0430\u043b.",
    cre_label:"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f", cre_title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b", cre_note:"\u0412\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0434\u0430\u043d\u044b \u2014 \u0437\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u0445\u043e\u0436\u0443\u044e",
    pc_cta:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443", pc_insta:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 Instagram",
    f_sold:"\u041f\u0440\u043e\u0434\u0430\u043d\u043e \u2014 \u0437\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u0445\u043e\u0436\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443",
    proc_label:"\u041c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043e", proc_title:"\u041e\u0442 \u043b\u0435\u0441\u0430 \u043a \u0444\u043e\u0440\u043c\u0435",
    s1t:"\u041e\u0442\u0431\u043e\u0440", s1d:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u0443\u0441\u043e\u043a \u0434\u0435\u0440\u0435\u0432\u0430 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0447\u043d\u043e.",
    s2t:"\u0412\u0438\u0434\u0435\u043d\u0438\u0435", s2d:"\u0414\u0435\u0440\u0435\u0432\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043f\u0435\u0440\u0432\u044b\u043c.",
    s3t:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435", s3d:"\u0420\u0443\u0447\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b, \u043f\u0430\u0440\u043e\u0432\u043e\u0439 \u0438\u0437\u0433\u0438\u0431 \u0438 Shou Sugi Ban.",
    s4t:"\u041e\u0442\u0434\u0435\u043b\u043a\u0430", s4d:"\u041d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0441\u043b\u0430 \u0438 \u0440\u0443\u0447\u043d\u0430\u044f \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u0430.",
    f_badge:"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430", f_label:"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f", f_name:"\u0421\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0439 \u0441\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a", f_price:"1 890 EUR",
    f_desc:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437 \u043e\u0431\u043e\u0436\u0436\u0451\u043d\u043d\u043e\u0439 \u0434\u0443\u0433\u043b\u0430\u0441\u0438\u0438, \u0442\u0435\u043b\u043e \u0438\u0437 \u044f\u0441\u0435\u043d\u044f \u043f\u0430\u0440\u043e\u0432\u043e\u0433\u043e \u0438\u0437\u0433\u0438\u0431\u0430.",
    sp1:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435", sp1v:"\u041e\u0431\u043e\u0436\u0436\u0451\u043d\u043d\u0430\u044f \u0434\u0443\u0433\u043b\u0430\u0441\u0438\u044f", sp2:"\u0421\u0442\u0432\u043e\u043b", sp2v:"\u042f\u0441\u0435\u043d\u044c \u043f\u0430\u0440\u043e\u0432\u043e\u0439 \u0433\u0438\u0431\u043a\u0438", sp3:"\u0410\u0431\u0430\u0436\u0443\u0440", sp3v:"\u0412\u044f\u0437 \u043b\u0430\u043c\u0435\u043b\u0438", sp4:"\u0421\u0432\u0435\u0442", sp4v:"\u0422\u0451\u043f\u043b\u044b\u0439 LED \u0441 \u0434\u0438\u043c\u043c\u0435\u0440\u043e\u043c", sp5:"\u0422\u0438\u0440\u0430\u0436", sp5v:"\u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440",
    f_cta:"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
    htl_label:"\u0414\u043b\u044f \u043e\u0442\u0435\u043b\u0435\u0439", htl_title:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430",
    htl_desc:"\u041e\u0442 \u043b\u043e\u0431\u0431\u0438 \u0434\u043e \u043b\u044e\u043a\u0441\u043e\u0432 \u2014 Arom Lumen \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u0435\u0442 \u0441 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440\u0430\u043c\u0438 \u0438 \u043e\u0442\u0435\u043b\u044c\u0435\u0440\u0430\u043c\u0438.",
    htl_cta1:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c \u0432 Instagram", htl_cta2:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",
    te_label:"\u041e\u0442\u0437\u044b\u0432\u044b", te_title:"\u0427\u0442\u043e \u0433\u043e\u0432\u043e\u0440\u044f\u0442 \u043e\u0442\u0435\u043b\u044c\u0435\u0440\u044b",
    te1q:"\u0421\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a\u0438 \u0432 \u043d\u0430\u0448\u0435\u043c \u043b\u043e\u0431\u0431\u0438 \u0441\u0442\u0430\u043b\u0438 \u0441\u0430\u043c\u044b\u043c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0435\u043c\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c.", te1r:"\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440 \u043f\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0443, \u0431\u0443\u0442\u0438\u043a-\u043e\u0442\u0435\u043b\u044c \u041f\u0430\u0440\u0438\u0436",
    te2q:"\u041c\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u043b\u0438 \u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442 \u0434\u043b\u044f \u043d\u0430\u0448\u0438\u0445 \u043b\u044e\u043a\u0441\u043e\u0432.", te2r:"\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440, \u043b\u044e\u043a\u0441\u043e\u0432\u044b\u0439 \u043a\u0443\u0440\u043e\u0440\u0442 \u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440",
    te3q:"\u041c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435. \u042d\u0442\u043e \u043d\u0435 \u0434\u0435\u043a\u043e\u0440 \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0430.", te3r:"\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440 \u0441\u043f\u0430, \u0413\u0440\u0430\u043d\u0434 \u041e\u0442\u0435\u043b\u044c \u0421\u0442\u043e\u043a\u0433\u043e\u043b\u044c\u043c",
    ig_label:"\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435\u043c", ig_cta:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f @arom_lumen",
    ct_label:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f", ct_title:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u0435",
    ct_desc:"\u0411\u0443\u0434\u044c \u0442\u043e \u043e\u0434\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0438\u043b\u0438 \u043f\u043e\u043b\u043d\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u043e\u0442\u0435\u043b\u044f.",
    ct_artisan:"\u041c\u0430\u0441\u0442\u0435\u0440", ct_atelier:"\u0410\u0442\u0435\u043b\u044c\u0435", ct_appt:"\u0422\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u0438", ct_follow:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",
    ct_dm:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c \u0432 Instagram", ct_email_label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430", ct_social:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438",
    footer:"\u041a\u0430\u0436\u0434\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u2014 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432 \u0441\u0432\u043e\u0451\u043c \u0440\u043e\u0434\u0435.",
    discover_story:"\u0423\u0437\u043d\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e", view_collection:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u044e \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e",
    featured_label:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435", featured_title:"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b",
    collection_title:"\u0412\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u044b", collection_subtitle:"\u0412\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0434\u0430\u043d\u044b \u2014 \u0437\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u0445\u043e\u0436\u0443\u044e.",
    filter_all:"\u0412\u0441\u0435", filter_label:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0434\u0435\u0440\u0435\u0432\u0443", sort_label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",
    sort_price_asc:"\u0426\u0435\u043d\u0430: \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e", sort_price_desc:"\u0426\u0435\u043d\u0430: \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",
    sort_height_asc:"\u0412\u044b\u0441\u043e\u0442\u0430: \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e", sort_height_desc:"\u0412\u044b\u0441\u043e\u0442\u0430: \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",
    piece_sold:"\u041f\u0440\u043e\u0434\u0430\u043d\u043e", piece_commission:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0443\u044e",
    piece_view_insta:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 Instagram", piece_specs:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",
    piece_prev:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f", piece_next:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f", piece_also_like:"\u0412\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",
    about_hero_title:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u0441\u0432\u0435\u0442\u0430 \u0438 \u0434\u0435\u0440\u0435\u0432\u0430", about_hero_sub:"\u041d\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f"
},
ar: {
    nav_home:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", nav_collection:"\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629", nav_about:"\u0627\u0644\u0641\u0646\u0627\u0646", nav_contact:"\u0627\u062a\u0635\u0644", scroll:"\u0645\u0631\u0631",
    hero_sub:"\u0625\u0628\u062f\u0627\u0639\u0627\u062a \u062e\u0634\u0628\u064a\u0629 \u062d\u0631\u0641\u064a\u0629", hero_title:'\u062d\u064a\u0646 \u062a\u0635\u0628\u062d \u0627\u0644\u0637\u0628\u064a\u0639\u0629 <em>\u0641\u0646\u0651\u064b\u0627</em>',
    hero_desc:"\u0645\u0635\u0627\u0628\u064a\u062d \u0646\u062d\u062a\u064a\u0629 \u0648\u0641\u0646 \u062e\u0634\u0628\u064a \u064a\u062f\u0648\u064a \u2014 \u0643\u0644 \u0642\u0637\u0639\u0629 \u062d\u0648\u0627\u0631 \u0641\u0631\u064a\u062f.",
    hero_cta:"\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629",
    story_label:"\u0627\u0644\u0641\u0646\u0627\u0646", story_title:"\u0631\u0648\u0645\u0627\u0646 \u062f\u0627\u0641\u064a\u062f\u064a\u0643\u0648",
    story_p1:"\u0646\u062c\u0651\u0627\u0631 \u0648\u062d\u0631\u0641\u064a \u0623\u062b\u0627\u062b \u0645\u0646\u0630 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u062b\u0646\u064a \u0639\u0634\u0631 \u0639\u0627\u0645\u064b\u0627\u060c \u064a\u0643\u0631\u0651\u0633 \u0631\u0648\u0645\u0627\u0646 \u0634\u063a\u0641\u0647 \u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u0635\u0627\u0628\u064a\u062d \u0645\u0646 \u0627\u0644\u062e\u0634\u0628.",
    story_p2:"\u064a\u0645\u0632\u062c \u0628\u064a\u0646 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062e\u0634\u0628 \u0648\u064a\u0646\u062d\u062a\u0647\u0627 \u0641\u064a \u0623\u0634\u0643\u0627\u0644 \u0645\u062a\u0646\u0627\u063a\u0645\u0629.",
    story_quote:"\u00ab\u0623\u062b\u0646\u064a \u0627\u0644\u062e\u0634\u0628 \u0648\u0641\u0642 \u0631\u063a\u0628\u062a\u064a\u060c \u0644\u0643\u0646 \u062f\u0627\u0626\u0645\u064b\u0627 \u0628\u0627\u062d\u062a\u0631\u0627\u0645.\u00bb",
    story_p3:"\u0643\u0644 \u0625\u0628\u062f\u0627\u0639 \u0642\u0637\u0639\u0629 \u0641\u0631\u064a\u062f\u0629.",
    stat_pieces:"\u0642\u0637\u0639 \u0641\u0631\u064a\u062f\u0629", stat_handmade:"\u0635\u0646\u0639 \u064a\u062f\u0648\u064a", stat_woods:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062e\u0634\u0628",
    philo_label:"\u0641\u0644\u0633\u0641\u062a\u0646\u0627", philo_title:"\u062d\u0642\u0627\u0626\u0642 \u0627\u0644\u062e\u0634\u0628 \u0627\u0644\u062b\u0644\u0627\u062b",
    philo_1t:"\u0627\u062d\u062a\u0631\u0627\u0645 \u0627\u0644\u0623\u0644\u064a\u0627\u0641", philo_1d:"\u0643\u0644 \u0642\u0637\u0639\u0629 \u062e\u0634\u0628 \u062a\u062d\u0645\u0644 \u0642\u0635\u0629.",
    philo_2t:"\u0627\u0644\u062a\u0643\u0631\u064a\u0645 \u0628\u0627\u0644\u0646\u0627\u0631", philo_2d:"\u0639\u0628\u0631 \u0634\u0648 \u0633\u0648\u062c\u064a \u0628\u0627\u0646\u060c \u0646\u0643\u0634\u0641 \u0634\u062e\u0635\u064a\u0629 \u0627\u0644\u062e\u0634\u0628 \u0627\u0644\u0645\u062e\u0641\u064a\u0629.",
    philo_3t:"\u0627\u0644\u0636\u0648\u0621 \u0643\u0631\u0648\u062d", philo_3d:"\u0643\u0644 \u0645\u0635\u0628\u0627\u062d \u0645\u0635\u0645\u0645 \u0644\u064a\u062a\u0646\u0641\u0633 \u0627\u0644\u0636\u0648\u0621.",
    cre_label:"\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629", cre_title:"\u0625\u0628\u062f\u0627\u0639\u0627\u062a \u0645\u062e\u062a\u0627\u0631\u0629", cre_note:"\u062c\u0645\u064a\u0639 \u0627\u0644\u0642\u0637\u0639 \u0645\u0628\u0627\u0639\u0629 \u2014 \u0627\u0646\u0642\u0631 \u0644\u0637\u0644\u0628 \u0625\u0628\u062f\u0627\u0639 \u0645\u0634\u0627\u0628\u0647",
    pc_cta:"\u0627\u0637\u0644\u0628 \u0642\u0637\u0639\u0629 \u0645\u0634\u0627\u0628\u0647\u0629", pc_insta:"\u0634\u0627\u0647\u062f \u0639\u0644\u0649 \u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645",
    f_sold:"\u0645\u0628\u0627\u0639\u0629 \u2014 \u0627\u0637\u0644\u0628 \u0642\u0637\u0639\u0629 \u0645\u0634\u0627\u0628\u0647\u0629",
    proc_label:"\u0627\u0644\u062d\u0631\u0641\u0629", proc_title:"\u0645\u0646 \u0627\u0644\u063a\u0627\u0628\u0629 \u0625\u0644\u0649 \u0627\u0644\u0634\u0643\u0644",
    s1t:"\u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631", s1d:"\u0643\u0644 \u0642\u0637\u0639\u0629 \u062e\u0634\u0628 \u062a\u064f\u062e\u062a\u0627\u0631 \u0634\u062e\u0635\u064a\u064b\u0627.",
    s2t:"\u0627\u0644\u0631\u0624\u064a\u0629", s2d:"\u0627\u0644\u062e\u0634\u0628 \u064a\u062a\u0643\u0644\u0645 \u0623\u0648\u0644\u0627\u064b.",
    s3t:"\u0627\u0644\u0635\u0646\u0639", s3d:"\u0623\u062f\u0648\u0627\u062a \u064a\u062f\u0648\u064a\u0629\u060c \u062b\u0646\u064a \u0628\u0627\u0644\u0628\u062e\u0627\u0631\u060c \u0648\u0634\u0648 \u0633\u0648\u062c\u064a \u0628\u0627\u0646.",
    s4t:"\u0627\u0644\u062a\u0634\u0637\u064a\u0628", s4d:"\u0632\u064a\u0648\u062a \u0637\u0628\u064a\u0639\u064a\u0629 \u0648\u062a\u0644\u0645\u064a\u0639 \u064a\u062f\u0648\u064a.",
    f_badge:"\u0642\u0637\u0639\u0629 \u0645\u0645\u064a\u0632\u0629", f_label:"\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0645\u064a\u0632\u0629", f_name:"\u0627\u0644\u0645\u0635\u0628\u0627\u062d \u0627\u0644\u0646\u062d\u062a\u064a", f_price:"1 890 EUR",
    f_desc:"\u0642\u0627\u0639\u062f\u0629 \u062f\u0631\u062f\u0627\u0631 \u0645\u062a\u062c\u0630\u0631\u0629 \u0641\u064a \u0627\u0644\u0623\u0631\u0636.",
    sp1:"\u0627\u0644\u0642\u0627\u0639\u062f\u0629", sp1v:"\u062a\u0646\u0648\u0628 \u0645\u062d\u0631\u0648\u0642", sp2:"\u0627\u0644\u062c\u0630\u0639", sp2v:"\u062f\u0631\u062f\u0627\u0631 \u0645\u062b\u0646\u064a \u0628\u0627\u0644\u0628\u062e\u0627\u0631", sp3:"\u0627\u0644\u0623\u0628\u0627\u062c\u0648\u0631", sp3v:"\u0634\u0641\u0631\u0627\u062a \u062f\u0631\u062f\u0627\u0631", sp4:"\u0627\u0644\u0625\u0636\u0627\u0621\u0629", sp4v:"LED \u062f\u0627\u0641\u0626 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0639\u062a\u064a\u0645", sp5:"\u0627\u0644\u0625\u0635\u062f\u0627\u0631", sp5v:"\u0642\u0637\u0639\u0629 \u0648\u062d\u064a\u062f\u0629",
    f_cta:"\u0627\u0633\u062a\u0641\u0633\u0627\u0631",
    htl_label:"\u0644\u0644\u0641\u0646\u0627\u062f\u0642 \u0648\u0627\u0644\u0636\u064a\u0627\u0641\u0629", htl_title:"\u062d\u0648\u0651\u0644 \u0641\u0636\u0627\u0621\u0627\u062a\u0643",
    htl_desc:"\u0645\u0646 \u062a\u0631\u0643\u064a\u0628\u0627\u062a \u0627\u0644\u0628\u0647\u0648 \u0625\u0644\u0649 \u0625\u0646\u0627\u0631\u0629 \u0627\u0644\u0623\u062c\u0646\u062d\u0629\u060c \u064a\u062a\u0639\u0627\u0648\u0646 Arom Lumen \u0645\u0639 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a\u064a\u0646 \u0648\u0627\u0644\u0641\u0646\u062f\u0642\u064a\u064a\u0646.",
    htl_cta1:"\u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0644\u0649 \u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645", htl_cta2:"\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
    te_label:"\u0643\u0644\u0645\u0627\u062a \u0637\u064a\u0628\u0629", te_title:"\u0645\u0627\u0630\u0627 \u064a\u0642\u0648\u0644 \u0627\u0644\u0641\u0646\u062f\u0642\u064a\u0648\u0646",
    te1q:"\u0645\u0635\u0627\u0628\u064a\u062d \u0627\u0644\u0628\u0647\u0648 \u0623\u0635\u0628\u062d\u062a \u0623\u0643\u062b\u0631 \u0639\u0646\u0635\u0631 \u064a\u064f\u0635\u0648\u064e\u0631 \u0641\u064a \u0627\u0644\u0641\u0646\u062f\u0642.", te1r:"\u0645\u062f\u064a\u0631\u0629 \u0627\u0644\u062a\u0635\u0645\u064a\u0645\u060c \u0641\u0646\u062f\u0642 \u0628\u0648\u062a\u064a\u0643\u064a \u0628\u0627\u0631\u064a\u0633",
    te2q:"\u0637\u0644\u0628\u0646\u0627 \u0627\u062b\u0646\u062a\u064a \u0639\u0634\u0631\u0629 \u0642\u0637\u0639\u0629 \u0641\u0631\u064a\u062f\u0629 \u0644\u0623\u062c\u0646\u062d\u062a\u0646\u0627.", te2r:"\u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0639\u0627\u0645\u060c \u0645\u0646\u062a\u062c\u0639 \u0641\u0627\u062e\u0631 \u0633\u0646\u063a\u0627\u0641\u0648\u0631\u0629",
    te3q:"\u0627\u0644\u062d\u0631\u0641\u064a\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629. \u0647\u0630\u0647 \u0623\u0639\u0645\u0627\u0644 \u0641\u0646\u064a\u0629 \u062a\u0645\u0646\u062d \u0633\u0628\u0627\u0646\u0627 \u0631\u0648\u062d\u064b\u0627.", te3r:"\u0645\u062f\u064a\u0631\u0629 \u0627\u0644\u0633\u0628\u0627\u060c \u063a\u0631\u0627\u0646\u062f \u0623\u0648\u062a\u064a\u0644 \u0633\u062a\u0648\u0643\u0647\u0648\u0644\u0645",
    ig_label:"\u062a\u0627\u0628\u0639 \u0627\u0644\u0631\u062d\u0644\u0629", ig_cta:"\u062a\u0627\u0628\u0639 @arom_lumen",
    ct_label:"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", ct_title:"\u0644\u0646\u0628\u062f\u0639 \u0645\u0639\u064b\u0627",
    ct_desc:"\u0633\u0648\u0627\u0621 \u0642\u0637\u0639\u0629 \u0648\u0627\u062d\u062f\u0629 \u0623\u0648 \u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u0646\u062f\u0642\u064a\u0629 \u0643\u0627\u0645\u0644\u0629.",
    ct_artisan:"\u0627\u0644\u062d\u0631\u0641\u064a", ct_atelier:"\u0627\u0644\u0645\u062d\u062a\u0631\u0641", ct_appt:"\u0628\u0645\u0648\u0639\u062f \u0645\u0633\u0628\u0642 \u0641\u0642\u0637", ct_follow:"\u062a\u0627\u0628\u0639",
    ct_dm:"\u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0644\u0649 \u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645", ct_email_label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", ct_social:"\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a",
    footer:"\u0643\u0644 \u0625\u0628\u062f\u0627\u0639 \u0641\u0631\u064a\u062f \u0645\u0646 \u0646\u0648\u0639\u0647.",
    discover_story:"\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0642\u0635\u0629", view_collection:"\u0639\u0631\u0636 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629",
    featured_label:"\u0623\u0639\u0645\u0627\u0644 \u0645\u062e\u062a\u0627\u0631\u0629", featured_title:"\u0642\u0637\u0639 \u0645\u0645\u064a\u0632\u0629",
    collection_title:"\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", collection_subtitle:"\u062c\u0645\u064a\u0639 \u0627\u0644\u0642\u0637\u0639 \u0645\u0628\u0627\u0639\u0629 \u2014 \u0627\u0637\u0644\u0628 \u0625\u0628\u062f\u0627\u0639 \u0645\u0634\u0627\u0628\u0647.",
    filter_all:"\u0627\u0644\u0643\u0644", filter_label:"\u062a\u0635\u0641\u064a\u0629 \u062d\u0633\u0628 \u0627\u0644\u062e\u0634\u0628", sort_label:"\u062a\u0631\u062a\u064a\u0628",
    sort_price_asc:"\u0627\u0644\u0633\u0639\u0631: \u0645\u0646 \u0627\u0644\u0623\u0642\u0644", sort_price_desc:"\u0627\u0644\u0633\u0639\u0631: \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",
    sort_height_asc:"\u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639: \u0645\u0646 \u0627\u0644\u0623\u0642\u0644", sort_height_desc:"\u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639: \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",
    piece_sold:"\u0645\u0628\u0627\u0639\u0629", piece_commission:"\u0627\u0637\u0644\u0628 \u0642\u0637\u0639\u0629 \u0645\u0634\u0627\u0628\u0647\u0629",
    piece_view_insta:"\u0634\u0627\u0647\u062f \u0639\u0644\u0649 \u0625\u0646\u0633\u062a\u063a\u0631\u0627\u0645", piece_specs:"\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a",
    piece_prev:"\u0627\u0644\u0633\u0627\u0628\u0642\u0629", piece_next:"\u0627\u0644\u062a\u0627\u0644\u064a\u0629", piece_also_like:"\u0642\u062f \u064a\u0639\u062c\u0628\u0643 \u0623\u064a\u0636\u064b\u0627",
    about_hero_title:"\u0641\u0646 \u0627\u0644\u0636\u0648\u0621 \u0648\u0627\u0644\u062e\u0634\u0628", about_hero_sub:"\u0642\u0635\u062a\u0646\u0627"
}
};

// ═══════════════════════════════════════
// i18n ENGINE
// ═══════════════════════════════════════
let lang = localStorage.getItem('aromphuc_lang') || 'en';

/** Translate a single key */
function t(key) {
    return (T[lang] && T[lang][key]) || (T.en && T.en[key]) || key;
}

/** Get product description in current language */
function getProductDesc(product) {
    return product.desc[lang] || product.desc.en || product.desc.fr || '';
}

function setLang(l) {
    lang = l;
    localStorage.setItem('aromphuc_lang', l);
    var isRtl = l === 'ar';
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : l;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        if (T[l] && T[l][k]) el.innerHTML = T[l][k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-ph');
        if (T[l] && T[l][k]) el.placeholder = T[l][k];
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.classList.toggle('active', b.dataset.lang === l);
    });

    // Re-render dynamic content if available
    if (typeof renderFeatured === 'function') renderFeatured();
    if (typeof renderCollection === 'function') renderCollection();
    if (typeof renderPiece === 'function') renderPiece();
}

// Expose globally
window.T = T;
window.t = t;
window.lang = null; // getter below
window.getProductDesc = getProductDesc;
window.setLang = setLang;
Object.defineProperty(window, 'lang', { get: function () { return lang; }, set: function (v) { lang = v; } });

// ═══════════════════════════════════════
// INTERSECTION OBSERVER — STAGGERED REVEAL
// ═══════════════════════════════════════
function initRevealObserver() {
    var staggerDelay = 100; // ms between each element
    var batchMap = new Map(); // parent -> count of revealed children

    var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) {
                var parent = en.target.parentElement || document.body;
                var count = batchMap.get(parent) || 0;
                batchMap.set(parent, count + 1);

                en.target.style.transitionDelay = (count * staggerDelay) + 'ms';
                en.target.classList.add('visible');
                revealObs.unobserve(en.target);

                // Clear stagger count after batch settles
                setTimeout(function () {
                    batchMap.set(parent, 0);
                }, 600);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
        revealObs.observe(el);
    });

    return revealObs;
}

// ═══════════════════════════════════════
// IMAGE LAZY LOADING — blur-up fallback
// ═══════════════════════════════════════
function initLazyImages() {
    // For browsers without native loading="lazy", use IO fallback
    if ('loading' in HTMLImageElement.prototype) {
        // Native support: just ensure blur-up class removes on load
        document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function () { img.classList.add('loaded'); }, { once: true });
            }
        });
        return;
    }

    // IO fallback for older browsers
    var lazyObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) {
                var img = en.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                img.addEventListener('load', function () { img.classList.add('loaded'); }, { once: true });
                lazyObs.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(function (img) {
        lazyObs.observe(img);
    });
}

// ═══════════════════════════════════════
// SMOOTH PAGE TRANSITIONS — View Transitions API
// ═══════════════════════════════════════
function navigateWithTransition(url) {
    if (document.startViewTransition) {
        document.startViewTransition(function () {
            return new Promise(function (resolve) {
                document.body.classList.add('page-exit');
                setTimeout(function () {
                    window.location.href = url;
                    resolve();
                }, 250);
            });
        });
    } else {
        // Fallback: simple fade
        document.body.classList.add('page-exit');
        setTimeout(function () {
            window.location.href = url;
        }, 250);
    }
}

function initPageTransitions() {
    // Intercept internal links for smooth transitions
    document.querySelectorAll('a[href]').forEach(function (a) {
        var href = a.getAttribute('href');
        // Only intercept local page navigations
        if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || a.target === '_blank') return;

        a.addEventListener('click', function (e) {
            e.preventDefault();
            navigateWithTransition(href);
        });
    });
}

// ═══════════════════════════════════════
// PRODUCT GRID — DocumentFragment rendering
// ═══════════════════════════════════════
function createProductCard(product, extraClass) {
    var desc = getProductDesc(product);
    var a = document.createElement('a');
    a.href = 'piece.html?id=' + product.id;
    a.className = 'g-item ' + (extraClass || '') + ' reveal';

    var img = document.createElement('img');
    img.src = product.images[0];
    img.alt = product.name;
    img.loading = 'lazy';
    img.className = 'lazy-img';

    var overlay = document.createElement('div');
    overlay.className = 'g-overlay';

    var h3 = document.createElement('h3');
    h3.textContent = product.name;

    var span = document.createElement('span');
    span.textContent = product.height;

    var price = document.createElement('div');
    price.className = 'price';
    price.textContent = product.price;

    var sold = document.createElement('div');
    sold.className = 'sold';
    sold.textContent = t('piece_sold');

    overlay.appendChild(h3);
    overlay.appendChild(span);
    overlay.appendChild(price);
    overlay.appendChild(sold);
    a.appendChild(img);
    a.appendChild(overlay);

    return a;
}

function renderProductGrid(container, products) {
    if (!container) return;
    var frag = document.createDocumentFragment();
    products.forEach(function (p) {
        frag.appendChild(createProductCard(p));
    });
    container.innerHTML = '';
    container.appendChild(frag);

    // Re-init reveal observer for new elements
    initRevealObserver();
    initLazyImages();
}

// Expose globally
window.createProductCard = createProductCard;
window.renderProductGrid = renderProductGrid;

// ═══════════════════════════════════════
// GALLERY — crossfade thumbnail switching (piece.html)
// ═══════════════════════════════════════
function initGallery() {
    var mainImg = document.getElementById('mainImg') || document.getElementById('pieceMainImg');
    var thumbs = document.querySelectorAll('.gallery-thumb, .piece-thumb');
    if (!mainImg || thumbs.length === 0) return;

    var currentIndex = 0;

    function switchImage(index) {
        if (index < 0 || index >= thumbs.length) return;
        currentIndex = index;
        var newSrc = thumbs[index].dataset.src || thumbs[index].src;

        // Crossfade effect
        mainImg.style.opacity = '0';
        setTimeout(function () {
            mainImg.src = newSrc;
            mainImg.addEventListener('load', function () {
                mainImg.style.opacity = '1';
            }, { once: true });
            // Fallback if cached (load fires synchronously)
            if (mainImg.complete) mainImg.style.opacity = '1';
        }, 200);

        thumbs.forEach(function (th, i) {
            th.classList.toggle('active', i === index);
        });
    }

    thumbs.forEach(function (th, i) {
        th.addEventListener('click', function () { switchImage(i); });
    });

    // Keyboard navigation for gallery
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            switchImage((currentIndex + 1) % thumbs.length);
        } else if (e.key === 'ArrowLeft') {
            switchImage((currentIndex - 1 + thumbs.length) % thumbs.length);
        }
    });

    // Touch swipe for gallery
    initSwipeGesture(mainImg.parentElement || mainImg, function () {
        // swipe left = next
        switchImage((currentIndex + 1) % thumbs.length);
    }, function () {
        // swipe right = prev
        switchImage((currentIndex - 1 + thumbs.length) % thumbs.length);
    });

    return { switchImage: switchImage, getIndex: function () { return currentIndex; } };
}

// ═══════════════════════════════════════
// TOUCH — swipe gesture handler
// ═══════════════════════════════════════
function initSwipeGesture(el, onSwipeLeft, onSwipeRight) {
    if (!el) return;
    var startX = 0, startY = 0, distX = 0, distY = 0;
    var threshold = 50; // min px to register as swipe
    var restraint = 100; // max perpendicular deviation

    el.addEventListener('touchstart', function (e) {
        var t = e.changedTouches[0];
        startX = t.pageX;
        startY = t.pageY;
    }, { passive: true });

    el.addEventListener('touchend', function (e) {
        var t = e.changedTouches[0];
        distX = t.pageX - startX;
        distY = t.pageY - startY;
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            if (distX < 0) {
                onSwipeLeft();
            } else {
                onSwipeRight();
            }
        }
    }, { passive: true });
}

// ═══════════════════════════════════════
// TESTIMONIAL CAROUSEL with touch + auto
// ═══════════════════════════════════════
function initTestimonialCarousel() {
    var slides = document.querySelectorAll('.t-slide');
    var dots = document.querySelectorAll('.t-dot');
    if (slides.length === 0) return;

    var cs = 0;
    var autoTimer = null;

    function showSlide(i) {
        slides.forEach(function (s) { s.classList.remove('active'); });
        dots.forEach(function (d) { d.classList.remove('active'); });
        slides[i].classList.add('active');
        if (dots[i]) dots[i].classList.add('active');
        cs = i;
    }

    function nextSlide() { showSlide((cs + 1) % slides.length); }
    function prevSlide() { showSlide((cs - 1 + slides.length) % slides.length); }

    dots.forEach(function (d) {
        d.addEventListener('click', function () {
            showSlide(+d.dataset.slide);
            resetAuto();
        });
    });

    // Auto-advance
    function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(nextSlide, 5000);
    }
    resetAuto();

    // Touch swipe support
    var carouselEl = slides[0].parentElement;
    initSwipeGesture(carouselEl, function () {
        nextSlide();
        resetAuto();
    }, function () {
        prevSlide();
        resetAuto();
    });
}

// ═══════════════════════════════════════
// KEYBOARD — Escape closes modals
// ═══════════════════════════════════════
function initKeyboardNav() {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            // Close any open modal
            document.querySelectorAll('.modal.open, .product-modal.open, [data-modal].open').forEach(function (m) {
                m.classList.remove('open');
            });
            document.body.style.overflow = '';
        }
    });
}

// ═══════════════════════════════════════
// URL STATE — filter/sort for collection page
// ═══════════════════════════════════════
function getUrlParams() {
    var params = new URLSearchParams(window.location.search);
    return {
        filter: params.get('filter') || 'all',
        sort: params.get('sort') || '',
        id: params.get('id') || ''
    };
}

function setUrlParams(obj) {
    var params = new URLSearchParams(window.location.search);
    Object.keys(obj).forEach(function (k) {
        if (obj[k] && obj[k] !== 'all' && obj[k] !== '') {
            params.set(k, obj[k]);
        } else {
            params.delete(k);
        }
    });
    var newUrl = window.location.pathname;
    var qs = params.toString();
    if (qs) newUrl += '?' + qs;
    history.replaceState(null, '', newUrl);
}

window.getUrlParams = getUrlParams;
window.setUrlParams = setUrlParams;

// ═══════════════════════════════════════
// PREFETCHING — on link hover
// ═══════════════════════════════════════
function initPrefetch() {
    var prefetched = new Set();

    function prefetchUrl(url) {
        if (prefetched.has(url)) return;
        if (url.startsWith('#') || url.startsWith('http') || url.startsWith('mailto')) return;
        prefetched.add(url);
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    }

    document.addEventListener('pointerenter', function (e) {
        if (!e.target || !e.target.closest) return;
        var a = e.target.closest('a[href]');
        if (a) prefetchUrl(a.getAttribute('href'));
    }, true);
}

// ═══════════════════════════════════════
// NUMBER COUNTER ANIMATION
// ═══════════════════════════════════════
function initCounters() {
    document.querySelectorAll('.num,.stat-number').forEach(function (el) {
        new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (en) {
                if (en.isIntersecting && !en.target._counted) {
                    en.target._counted = true;
                    var txt = el.textContent;
                    if (txt === '\u221e' || txt === '0') return;
                    var n = parseInt(txt);
                    if (isNaN(n)) return;
                    var suffix = txt.replace(/[0-9]/g, '');
                    var c = 0;
                    var step = Math.ceil(n / 40);
                    var timer = setInterval(function () {
                        c += step;
                        if (c >= n) { c = n; clearInterval(timer); }
                        el.textContent = c + suffix;
                    }, 30);
                    obs.unobserve(en.target);
                }
            });
        }, { threshold: 0.5 }).observe(el);
    });
}

// ═══════════════════════════════════════
// PRODUCT MODAL (home/collection quick view)
// ═══════════════════════════════════════
function initProductModal() {
    var pModal = document.getElementById('productModal');
    if (!pModal) return;

    var pcImg = document.getElementById('pcImg');
    var pcTitle = document.getElementById('pcTitle');
    var pcPrice = document.getElementById('pcPrice');
    var pcDesc = document.getElementById('pcDesc');
    var pcSpecs = document.getElementById('pcSpecs');
    var pcInsta = document.getElementById('pcInsta');
    var pcClose = document.getElementById('pcClose');
    var pcCta = document.getElementById('pcCta');

    function openProductModal(productId) {
        if (typeof PRODUCTS === 'undefined') return;
        var p = PRODUCTS.find(function (pr) { return pr.id === productId; });
        if (!p) return;
        pcImg.src = p.images[0];
        pcTitle.textContent = p.name;
        pcPrice.textContent = p.price;
        var descLang = p.desc[lang] || p.desc.en || p.desc.fr;
        pcDesc.textContent = descLang;
        pcSpecs.innerHTML = p.specs.map(function (s) {
            return '<li><span>' + s.key + '</span><span>' + s.val + '</span></li>';
        }).join('');
        pcInsta.href = p.insta;
        pcCta.href = 'https://ig.me/m/arom_lumen';
        pModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        pModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (pcClose) pcClose.addEventListener('click', closeProductModal);
    pModal.addEventListener('click', function (e) { if (e.target === pModal) closeProductModal(); });

    window.openProductModal = openProductModal;
}

// ═══════════════════════════════════════
// CURSOR GLOW
// ═══════════════════════════════════════
function initCursorGlow() {
    var glow = document.getElementById('cursorGlow');
    if (!glow || !window.matchMedia('(pointer:fine)').matches) return;

    var mx = 0, my = 0;
    document.addEventListener('mousemove', function (e) {
        mx = e.clientX;
        my = e.clientY;
    }, { passive: true });

    // Use rAF for smooth cursor tracking
    (function loop() {
        glow.style.left = mx + 'px';
        glow.style.top = my + 'px';
        requestAnimationFrame(loop);
    })();
}

// ═══════════════════════════════════════
// NAVBAR — rAF scroll handler
// ═══════════════════════════════════════
function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    var onScroll = raf(function () {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    // Apply immediately
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}

// ═══════════════════════════════════════
// HAMBURGER MENU
// ═══════════════════════════════════════
function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () { navLinks.classList.toggle('open'); });
    navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
}

// ═══════════════════════════════════════
// SMOOTH SCROLL — anchor links
// ═══════════════════════════════════════
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ═══════════════════════════════════════
// LOADER
// ═══════════════════════════════════════
function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;
    window.addEventListener('load', function () {
        setTimeout(function () { loader.classList.add('hidden'); }, 1800);
    });
}

// ═══════════════════════════════════════
// RESIZE — debounced handler
// ═══════════════════════════════════════
function initResize() {
    var onResize = debounce(function () {
        // Dispatch custom event for any module that needs it
        document.dispatchEvent(new CustomEvent('arom:resize'));
    }, 200);
    window.addEventListener('resize', onResize, { passive: true });
}

// ═══════════════════════════════════════
// MAIN INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', function () {
    // Language
    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
    setLang(lang);

    // Core systems
    initLoader();
    initCursorGlow();
    initNavbar();
    initHamburger();
    initRevealObserver();
    initLazyImages();
    initCounters();
    initSmoothScroll();
    initTestimonialCarousel();
    initProductModal();
    initKeyboardNav();
    initGallery();
    initPageTransitions();
    initPrefetch();
    initResize();

    // Page enter animation
    document.body.classList.add('page-enter');
});

})();
