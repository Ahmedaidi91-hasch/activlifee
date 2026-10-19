/* ==========================================================
   Activ Life Labs — catalogue produits
   Pour utiliser une vraie photo produit, renseigner `image`
   (ex. image: "assets/img/actifine.png") : elle remplacera
   l'illustration SVG générée automatiquement.
   ========================================================== */

const CATEGORIES = {
  complement: "Complément alimentaire",
  dermo: "Dermo-cosmétique",
  aroma: "Aromathérapie"
};

const NEEDS = [
  { id: "articulations", label: "Articulations & muscles", desc: "Arthrose, douleurs musculaires et articulaires", icon: "M7 4a3 3 0 0 1 4 4l6 6a3 3 0 1 1-4 4L7 12a3 3 0 0 1-3-4" },
  { id: "stress", label: "Stress, migraines & sommeil", desc: "Maux de tête, stress, fatigue et sommeil", icon: "M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3zM9 22h6" },
  { id: "memoire", label: "Mémoire & concentration", desc: "Examens, clarté mentale, calme", icon: "M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" },
  { id: "metabolisme", label: "Glycémie & métabolisme", desc: "Absorption des sucres, sensibilité à l’insuline", icon: "M4 19V5M4 19h16M7 15l4-4 3 3 5-6" },
  { id: "digestion", label: "Digestion & transit", desc: "Constipation, confort intestinal", icon: "M8 3v5a4 4 0 0 0 8 0V3M12 12v3a3 3 0 0 0 3 3h1a2 2 0 0 1 0 4" },
  { id: "respiration", label: "Respiration", desc: "Voies respiratoires encombrées, toux, refroidissements", icon: "M12 4v8M12 12c-3 0-6 2-7 8 3 0 6-1 7-4M12 12c3 0 6 2 7 8-3 0-6-1-7-4" },
  { id: "peau", label: "Peaux sensibles & irritées", desc: "Rougeurs, démangeaisons, tiraillements et inconfort", icon: "M12 3c5 6 7 9.5 7 12.5a7 7 0 0 1-14 0C5 12.5 7 9 12 3z" },
  { id: "eclat", label: "Éclat & soin des aisselles", desc: "Taches, hydratation et protection anti-frottements", icon: "M12 3c5 6 7 9.5 7 12.5a7 7 0 0 1-14 0C5 12.5 7 9 12 3z" }
];

const PRODUCTS = [
  {
    id: "artigo",
    name: "ARTI-GO",
    image: "assets/images/produits/artigo/arti-go-60-activlife.jpg",
    short: "ARTI-GO",
    sub: "PEA + CURCUMA",
    cat: "complement",
    category: "Complément alimentaire",
    needs: ["articulations"],
    needLabel: "Douleurs articulaires, arthrose, inflammation, mobilité, confort musculaire",
    badge: "Soulagement Durable - Mobilité Retrouvée | PEA + Curcuma + Harpagophytum + Boswellia+ partenelle | 60 gélules/30 gélules",
    type: "Gélules",
    description: "ARTI-GO est un complément alimentaire puissant qui aide à soulager les douleurs articulaires, réduire l'inflammation, améliorer la mobilité, protéger le cartilage et favoriser le confort musculaire grâce à une synergie naturelle de PEA, Curcuma, Boswellia, Harpagophytum, Partenelle et Poivre noir.",
    benefits: ["Antalgique et anti-inflammatoire puissant (réduit les douleurs chroniques et nerveuses).", "Protège le cartilage et diminue la raideur articulaire.", "Réduit les gonflements et soulage l'arthrose, les douleurs musculaires et lombaires.", "Le poivre noir augmente fortement l'absorption des actifs."],
    composition: "palmitoyléthanolamide (PEA) (70 mg), Curcuma à 95% de curcumines (85 mg), ES boswellia (17,5 mg, Équivalent plante sec 87.5 mg), ES partenelle 10:1 (15 mg, Équivalent Plante sec 150 mg), poivre noir (0,55 mg), ES harpagophytum (40 mg, Équivalent Plante sec 100 mg) (ES: extrait sec)",
    formats: ["30 gélules", "60 gélules"],
    usage: ["Voie orale."],
    dosage: ["2 à 4 gélules par jour."],
    precautions: ["Déconseillé chez la femme enceinte et allaitante."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "jar", body: "#2C5DA8", cap: "#1F4682", label: "#F07C1B", text: "#fff", count: "60" },
    tint: "#FDEBDC"
  },
  {
    id: "gofort",
    name: "ACTIVGO-FORT",
    image: "assets/images/produits/activ-go-fort/activ-go-fort.jpg",
    short: "GO-FORT",
    sub: "GEL ANTI-DOULEURS",
    cat: "dermo",
    category: "Gel dermo-apaisant anti-douleur / Soin externe",
    needs: ["articulations"],
    needLabel: "Arthrose, douleurs musculaires, douleurs articulaires, tensions",
    badge: "Gel Anti-Douleurs | Huiles Essentielles - Efficacité Prouvée | 50 g",
    type: "Gel",
    description: "ACTIVGO-FORT est un gel anti-douleurs innovant, formulé avec des huiles essentielles reconnues pour leur efficacité. Il agit rapidement pour apaiser les tensions, soulager les douleurs musculaires et articulaires et favoriser une sensation de confort durable. Sa texture légère et pénétrante offre une application agréable.",
    benefits: ["Agit rapidement pour apaiser les tensions et soulager les douleurs musculaires et articulaires.", "Favorise une sensation de confort durable.", "Texture légère et pénétrante pour une application agréable."],
    composition: "WATER, ALCOHOL, POLYSORBATE 20, MENTHOL, CAMPHOR, CARBOMER, TRIETHANOLAMINE, PHENOXYETHANOL, PRUNUS AMYGDALUS DULCIS OIL, GAULTHERIA PROCUMBENS LEAF OIL, MENTHA PIPERITA OIL, ETHYLHEXYLGLYCERIN",
    formats: ["Gel — 50 g"],
    usage: [
      "Voie cutanée.",
      "Appliquer en massage doux sur les zones concernées."
    ],
    dosage: ["Conseillé pour l'adulte et l'enfant de plus de 7 ans. Appliquer au moins deux fois par jour. Le traitement ne doit pas être prolongé sans avis médical."],
    precautions: ["Éviter le contact avec les yeux."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "tube", body: "#F7931E", cap: "#D9531E", label: "#FFFFFF", text: "#D9531E" },
    tint: "#FEEAD2"
  },
  {
    id: "dolactiv",
    name: "DOL ACTIV",
    image: "assets/images/produits/dol-activ/dol-activ.jpeg",
    short: "DOL ACTIV",
    sub: "MIGRAINE",
    cat: "complement",
    category: "Complément alimentaire",
    needs: ["stress"],
    needLabel: "Migraines, maux de tête, stress émotionnel, gueule de bois",
    badge: "Soulagement rapide des Maux de Tête | 10 gélules",
    type: "Gélules",
    description: "DOL ACTIV est un complément alimentaire végétal haute performance conçu pour soulager rapidement les maux de tête et céphalées, tout en accompagnant l'organisme face au stress émotionnel et aux désagréments liés aux lendemains de soirée (gueule de bois).",
    benefits: ["Inhibe les médiateurs inflammatoires des céphalées, réduit la fréquence et l'intensité des migraines.", "Action antispasmodique et anti-nauséeuse.", "Adaptogène : diminue le stress émotionnel, la fatigue mentale et le surmenage.", "Sédatif nerveux doux : réduit l'anxiété et améliore le sommeil.", "Stimule la microcirculation cérébrale et l'oxygénation du cerveau."],
    composition: "ES grande camomille (100 mg, Équivalent plante sec 1000 mg), ES Orpin rose (rhodiola) (100 mg, Équivalent plante sec 400 mg), ES mélisse (50 mg, Équivalent plante sec 500 mg), ES ginkgo (20 mg, Équivalent plante sec 80 mg) (ES: Extrait Sec)",
    formats: ["10 gélules"],
    usage: ["Voie orale."],
    dosage: ["Stress: 1 gélule par prise/ jour .", "Migraine: 2 gélules par prise/jour.", "gueule de bois: 2 gélules par prise avant de boire de l'alcool."],
    precautions: ["Réservé à l'adulte.", "Déconseillé aux femmes enceintes/allaitantes et personnes allergiques aux astéracées."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "jar", body: "#FFFFFF", cap: "#2F5FA7", label: "#2F5FA7", text: "#fff", accent: "#D62F3C" },
    tint: "#E3ECF8"
  },
  {
    id: "mag8b",
    name: "MAG 8B",
    image: "assets/images/produits/mag-8b/mag-b8-60-activlife.jpg",
    short: "MAG 8B",
    sub: "MAGNÉSIUM 870 mg",
    cat: "complement",
    category: "Complément alimentaire",
    needs: ["stress"],
    needLabel: "Fatigue, stress, anxiété, sommeil, douleurs/crampes musculaires, énergie vitale",
    badge: "870 mg | Complexe de vitamines B (B1+B2+ B3+ B5+ B6+ B8+ B9+ B12) | 60 gélules/15 gélules",
    type: "Gélules",
    description: "MAG 8B associe deux formes de magnésium (bisglycinate hautement absorbable et oxyde) à un complexe complet de 8 vitamines B. Il aide à soutenir l'énergie vitale, réduire la fatigue, apaiser le stress, améliorer le sommeil, renforcer les muscles, stabiliser le système nerveux et optimiser la récupération de l'organisme face aux efforts physiques et mentaux.",
    benefits: ["Soutient l'énergie vitale et réduit la fatigue.", "Apaise le stress et améliore le sommeil profond.", "Renforce les muscles et stabilise le système nerveux.", "Haute tolérance gastro-intestinale et excellente biodisponibilité grâce au bisglycinate."],
    composition: "par 2 gélules/Magnesium bisglycinate (770 mg), Magnesium oxide (100 mg), Total magnesium élément (250 mg), Vitamine B1 (Thiamine) (0.37 mg), Vitamine B2 (Riboflavine) (0.5 mg), Vitamine B3 (Niacine (PP)) (5.4 mg), Vitamine B5 (Acide pantothénique) (2 mg), Vitamine B6 (Pyridoxine) (1.4 mg), Vitamine B8 (Biotine (H)) (17 µg), Vitamine B9 (Acide folique) (200 µg), Vitamine B12 (Cobalamine) (0.84 µg)",
    formats: ["15 gélules", "60 gélules"],
    usage: ["Voie orale au moment du repas."],
    dosage: ["2 gélules le soir après le repas."],
    precautions: ["À partir de 12 ans."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "jar", body: "#2C6CC0", cap: "#1D4F96", label: "#FFFFFF", text: "#1D4F96", accent: "#F39A1E", count: "60" },
    tint: "#E1EBF8"
  },
  {
    id: "mind7",
    name: "Mind7",
    image: "assets/images/produits/mind7/mind7-activlife.jpg",
    short: "MIND7",
    sub: "EXAMEN",
    cat: "complement",
    category: "Complément alimentaire",
    needs: ["memoire"],
    needLabel: "Concentration, mémoire, clarté mentale, résistance au stress, examens/efforts intellectuels",
    badge: "Examen - Concentration, Mémoire, Calme et Clarté | 60 gélules",
    type: "Gélules",
    description: "Mind7 est un complément alimentaire spécialement formulé pour les périodes d'efforts intellectuels intenses (examens, travail soutenu). Il aide à renforcer la concentration, améliorer la mémoire, soutenir la clarté mentale, augmenter la résistance au stress et favoriser un équilibre cognitif durable grâce à une synergie complète d'extraits de plantes, vitamines B et minéraux.",
    benefits: ["Améliore la mémoire, la concentration et protège les neurones du stress oxydatif.", "Stimule la circulation et l'oxygénation cérébrale.", "Soutient l'énergie mentale, la transmission nerveuse et la synthèse des neurotransmetteurs.", "Adaptogène : augmente la résistance au stress et la performance mentale.", "Réduit l'anxiété et favorise la détente nerveuse."],
    composition: "Bacopa (160 mg), Ginkgo biloba (20 mg), Manganese (0,6 mg), Vitamine B1 (Thiamine) (1 mg), Vitamine B3 (Niacine (PP)) (16 mg), Vitamine B5 (Acide pantothénique) (6 mg), Vitamine B6 (Pyridoxine) (1.4 mg), Eleutherocoque (250 mg), Eschscholzia (10 mg), Ginseng (20 mg), Sauge (60 mg)",
    formats: ["60 gélules"],
    usage: ["Voie orale le matin."],
    dosage: ["2 à 4 gélules par jour le matin (espacé de quatre heures)."],
    precautions: ["Convient à l'enfant à partir de 10 ans.", "Déconseillé chez la femme enceinte et allaitante."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "jar", body: "#FFFFFF", cap: "#1F4F8A", label: "#1F4F8A", text: "#fff", accent: "#D9302F", count: "60" },
    tint: "#E2EAF4"
  },
  {
    id: "isoline",
    name: "Isoline",
    image: "assets/images/produits/isoline/isoline.jpeg",
    short: "ISOLINE",
    sub: "GYMNEMA + CHROME",
    cat: "complement",
    category: "Complément alimentaire",
    needs: ["metabolisme"],
    needLabel: "Régulation de la glycémie, contrôle du poids, fringales sucrées, équilibre métabolique",
    badge: "Formule Exclusive | Qualité Supérieure | 60 gélules",
    type: "Gélules",
    description: "ISOLINE est une formule naturelle innovante conçue pour soutenir la régulation de la glycémie et l'équilibre métabolique. Développée pour les personnes ayant une alimentation déséquilibrée ou une tendance aux fringales sucrées, elle associe des actifs puissants comme le Gymnema sylvestre et le Chrome Picolinate pour agir en synergie sur le glucose et l'insuline.",
    benefits: ["Réduit l'absorption intestinale du sucre et soutient les cellules du pancréas.", "Améliore la sensibilité à l'insuline et le métabolisme des glucides.", "Maintient un taux de sucre sanguin stable en évitant les pics hyperglycémiques et chutes brutales.", "Réduit naturellement les envies de sucre et fringales."],
    composition: "Extrait de Gymnema sylvestre (250 mg, Equivalent plante sec 2500 mg), chrome (picolinate) (100 µg - 250% AR) (AR: apports de référence)",
    formats: ["60 gélules"],
    usage: ["Voie orale, réservé aux adultes."],
    dosage: ["2 gélules / jour au moment de l'un des principaux repas."],
    precautions: ["Déconseillé aux femmes enceintes / allaitantes et personnes sous traitement hypoglycémiant."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "jar", body: "#FFFFFF", cap: "#FFFFFF", label: "#25A29A", text: "#fff", count: "90" },
    tint: "#DDF2EF"
  },
  {
    id: "laxactiv",
    name: "Lax-ACTIV",
    image: "assets/images/produits/lax-activ/lax-actif-activlife.jpg",
    short: "LAX-ACTIV",
    sub: "HUILE DE PARAFFINE",
    cat: "complement",
    category: "Complément alimentaire / Laxatif",
    needs: ["digestion"],
    needLabel: "Constipation occasionnelle, transit ralenti",
    badge: "NEW FLAVOR MENTHE | Solution buvable | 100 ml",
    isNew: true,
    type: "Solution buvable",
    description: "Lax-ACTIV est une solution buvable à l'huile de paraffine épaisse aromatisée à la menthe. C'est un laxatif à action mécanique agissant en lubrifiant le contenu colique et en ramollissant les selles, spécialement indiqué pour le soulagement et le traitement à court terme des épisodes occasionnels de constipation.",
    benefits: ["Laxatif mécanique agissant en lubrifiant le contenu colique/intestinal.", "Ramollit/assouplit les selles.", "N'apporte pas de calories (non métabolisée).", "Indiqué pour le traitement à court terme de la constipation."],
    composition: "Huile de paraffine USP - Arôme menthe",
    formats: ["Solution buvable · 100 ml"],
    usage: ["Voie orale, le matin à jeun ou de préférence à distance des repas."],
    dosage: ["Adulte : 15 à 45 ml (1 à 3 cuillères à soupe) par jour.", "Enfant de plus de 6 ans : 5 à 15 ml (1 à 3 cuillères à café) par jour."],
    precautions: [],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "bottle", body: "#5A2A10", cap: "#2E7D32", label: "#3E9B3F", text: "#fff" },
    tint: "#E3F1DF"
  },
  {
    id: "oilactiv",
    name: "OIL ACTIV",
    image: "assets/images/produits/oil-activ/oil-activ-activlife.jpg",
    short: "OIL ACTIV",
    sub: "INHALANT",
    cat: "aroma",
    category: "Inhalant décongestionnant / Aromathérapie",
    needs: ["respiration"],
    needLabel: "Voies respiratoires encombrées, toux, états grippaux, refroidissements, immunité locale",
    badge: "Concentré d'huiles essentielles naturelles | 28 ml",
    type: "Solution / Solution pour inhalation (Huiles essentielles)",
    description: "OIL ACTIV est un concentré d'huiles essentielles naturelles qui aide à libérer les voies respiratoires, calmer la toux et réduire l'inflammation bronchique. Sa synergie d'huiles essentielles assainissantes décongestionne rapidement, améliore la sensation de respiration libre, soutient l'immunité locale et apporte un confort respiratoire durable au quotidien, en période hivernale, lors des états grippaux et des refroidissements.",
    benefits: ["Libère les voies respiratoires et réduit l'encombrement bronchique.", "Calme la toux et réduit l'inflammation bronchique et thoracique.", "Effet froid immédiat ouvrant les voies respiratoires.", "Action mucolytique, expectorante, antiseptique, antibactérienne et antivirale.", "Soutient l'immunité locale et apporte un confort respiratoire durable."],
    composition: "HE cajuput - HE eucalyptus - Menthol - HE clou de girofle - HE genièvre - HE gaulthérie couché - HE menthe poivré",
    formats: ["Flacon compte-gouttes · 28 ml"],
    usage: ["Déposer sur un mouchoir laissé à proximité."],
    dosage: ["Adultes : 4 gouttes sur un mouchoir et laisser à proximité.", "Enfant : 2 gouttes sur un mouchoir et laisser à proximité."],
    precautions: ["Ne pas utiliser chez la femme enceinte ni chez les bébés de moins 1 an."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "dropper", body: "#6B3A12", cap: "#1B1B1B", label: "#0E6E68", text: "#fff" },
    tint: "#DCEFEC"
  },
  {
    id: "actifine",
    name: "ACTIFINE",
    image: "assets/images/produits/actifine/actifine-activlife.jpg",
    short: "ACTIFINE",
    sub: "ÉMULSION 4-EN-1",
    cat: "dermo",
    category: "Dermo-cosmétique / Soin apaisant et réparateur",
    needs: ["peau"],
    needLabel: "Peaux sensibles, irritées, agressées, rougeurs, démangeaisons, tiraillements, échauffements",
    badge: "Action 4-en-1",
    type: "Émulsion dermo-apaisante",
    description: "ACTIFINE est une émulsion dermo-apaisante conçue pour calmer et restaurer les peaux irritées, sensibilisées ou agressées. Grâce à sa formule enrichie en agents neuro-apaisants, en huiles végétales nobles (amande douce, avocat) et en vitamine E, elle soulage efficacement les rougeurs, les démangeaisons, les tiraillements et les échauffements cutanés.",
    benefits: [
      "Apaise instantanément les sensations d'inconfort.",
      "Répare et nourrit la barrière cutanée.",
      "Réhydrate et adoucit la peau.",
      "Convient à toute la famille, y compris les nourrissons et femmes enceintes.",
      "Idéal après piqûres d'insectes, coups de soleil, épilation, traitements dermatologiques/esthétiques, agressions climatiques (froid, vent) ou frottements."
    ],
    composition: "Water - Xanthan Gum - Prunus Amygdalus Dulcis Oil - Isopropyl Myristate - C12-15 Alkyl Benzoate - PERSEA GRATISSIMA OIL - Cetearyl Alcohol - Potassium Cetyl Phosphate - Triethanolamine - BENZYL ALCOHOL - GLYCERYL CAPRYLATE - GLYCERYL UNDECYLENATE - Tocopherol",
    formats: ["Émulsion"],
    usage: [
      "Appliquer délicatement une couche fine sur la peau propre et sèche, aussi souvent que nécessaire.",
      "Convient pour un usage quotidien sur le visage et le corps."
    ],
    dosage: ["Aussi souvent que nécessaire."],
    precautions: ["Éviter le contact direct avec les yeux."],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "tube", body: "#FFFFFF", cap: "#1F8A5B", label: "#1F8A5B", text: "#fff" },
    tint: "#E1F2E7"
  },
  {
    id: "mkm",
    name: "MKM Roll-on Brightening X4",
    image: "assets/images/produits/mkm-brightening-x4/mkm.jpeg",
    short: "MKM",
    sub: "BRIGHTENING X4",
    cat: "dermo",
    category: "Dermo-cosmétique / Soin des aisselles",
    needs: ["eclat"],
    needLabel: "Éclat du teint, anti-taches, hydratation, réparation de la barrière cutanée, protection anti-frottements",
    badge: "0% Alcool, Parabènes, Silicones | 5% UREA | 72H | TOUS TYPES DE PEAU",
    type: "Roll-on / Soin expert 4 en 1",
    description: "MKM Roll-on Brightening X4 est un soin expert 4 en 1 conçu spécialement pour les aisselles. Enrichi en Vitamine C stabilisée, Aloe Vera, Acide Hyaluronique, Niacinamide, Diacétyl Boldine, Panthénol et Urée 5%, il hydrate intensément, révèle l'éclat naturel de la peau, unifie le teint et répare la barrière cutanée tout en assurant une protection de 72H contre les frottements du quotidien.",
    benefits: ["Exfolie en douceur les cellules mortes et assouplit les zones rugueuses.", "Bloque la surproduction de mélanine à la source pour réduire les taches.", "Empêche le transfert de mélanine pour limiter l'apparition et la persistance des marques pigmentaires.", "Neutralise les radicaux libres et ravive la luminosité de la peau.", "Offre une libération progressive des actifs (goutte à goutte) pour une hydratation 72H et un effet éclaircissant prolongé."],
    composition: "Aqua, Aluminum Chlorohydrate, Ascorbyl Tetraisopalmitate, Sodium Steareth-2, Urea, PPG-15 Stearyl Ether, Niacinamide, Diacetyl Boldine, Glyceryl Stearate, Monopropylene Glycol, Steareth-21, Phenoxyethanol, Ethylhexylglycerin, Panthenol, Allantoin, Aloe Barbadensis Leaf Extract, Hypoallergenic Fragrance, Tocopherol Acetate",
    formats: ["Roll-on"],
    usage: [
      "Appliquer une à deux fois par jour sur des aisselles propres et sèches.",
      "Laisser sécher quelques secondes avant de s’habiller.",
      "Usage quotidien recommandé pour un résultat optimal."
    ],
    dosage: ["1 à 2 applications par jour."],
    precautions: [],
    adverseEffects: "Non mentionné dans la documentation.",
    pack: { type: "rollon", body: "#FFFFFF", cap: "#EEF1F4", label: "#2A2F3A", text: "#fff", accent: "#2DB0C4" },
    tint: "#E6EEF2"
  }
];

/* ---------- Illustrations SVG des conditionnements ---------- */
function packSVG(p, uid) {
  const k = p.pack;
  const id = `${p.id}-${uid || "x"}`;
  const fit = (str, w, max) => Math.min(max, w / (str.length * 0.64));
  const dark = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 < 150;
  };
  const stroke = dark(k.body) ? "none" : "#DCE2D2";

  const defs = `
    <defs>
      <linearGradient id="sh-${id}" x1="0" x2="1">
        <stop offset="0" stop-color="#000" stop-opacity=".10"/>
        <stop offset=".18" stop-color="#fff" stop-opacity=".55"/>
        <stop offset=".34" stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8" stop-color="#000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity=".18"/>
      </linearGradient>
    </defs>`;
  const shadow = `<ellipse cx="100" cy="228" rx="64" ry="7" fill="#1d2a12" opacity=".14"/>`;
  const title = (x, y, w, max, color) =>
    `<text x="${x}" y="${y}" text-anchor="middle" font-family="Outfit, sans-serif" font-weight="700" font-size="${fit(p.short, w, max).toFixed(1)}" fill="${color}" letter-spacing=".5">${p.short}</text>`;
  const subtitle = (x, y, color, size = 7.5) =>
    `<text x="${x}" y="${y}" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="${size}" fill="${color}" opacity=".9" letter-spacing=".6">${p.sub}</text>`;

  let g = "";
  switch (k.type) {
    case "jar":
      g = `
        <rect x="58" y="22" width="84" height="36" rx="7" fill="${k.cap}" stroke="${stroke}"/>
        ${[68, 80, 92, 104, 116, 128].map(x => `<rect x="${x}" y="26" width="3" height="28" rx="1.5" fill="#000" opacity=".07"/>`).join("")}
        <rect x="58" y="22" width="84" height="36" rx="7" fill="url(#sh-${id})"/>
        <rect x="64" y="56" width="72" height="10" fill="${k.body}" stroke="${stroke}"/>
        <rect x="46" y="62" width="108" height="162" rx="20" fill="${k.body}" stroke="${stroke}"/>
        <rect x="46" y="96" width="108" height="98" fill="${k.label}"/>
        ${k.accent ? `<rect x="46" y="184" width="108" height="10" fill="${k.accent}"/>` : ""}
        ${title(100, 138, 92, 24, k.text)}
        ${subtitle(100, 158, k.text)}
        <rect x="70" y="166" width="60" height="1.4" fill="${k.text}" opacity=".5"/>
        <rect x="46" y="62" width="108" height="162" rx="20" fill="url(#sh-${id})"/>
        ${k.count ? `<circle cx="134" cy="209" r="13" fill="#1d2a12"/><text x="134" y="208" text-anchor="middle" font-family="Outfit" font-weight="700" font-size="9" fill="#fff">${k.count}</text><text x="134" y="216" text-anchor="middle" font-family="Inter" font-size="4.6" fill="#fff">GÉLULES</text>` : ""}`;
      break;

    case "tube":
      g = `
        <rect x="52" y="18" width="96" height="14" rx="2" fill="${k.body}" stroke="${stroke}"/>
        ${[60, 70, 80, 90, 100, 110, 120, 130, 140].map(x => `<rect x="${x}" y="20" width="1.5" height="10" fill="#000" opacity=".08"/>`).join("")}
        <path d="M54 32 H146 L130 194 H70 Z" fill="${k.body}" stroke="${stroke}"/>
        <path d="M58.5 72 H141.5 L134.6 146 H65.4 Z" fill="${k.label}"/>
        ${title(100, 106, 68, 21, k.text)}
        ${subtitle(100, 124, k.text, 6.6)}
        <path d="M54 32 H146 L130 194 H70 Z" fill="url(#sh-${id})"/>
        <rect x="72" y="192" width="56" height="34" rx="6" fill="${k.cap}"/>
        <rect x="72" y="192" width="56" height="34" rx="6" fill="url(#sh-${id})"/>`;
      break;

    case "dropper":
      g = `
        <rect x="84" y="12" width="32" height="44" rx="16" fill="${k.cap}"/>
        <rect x="76" y="50" width="48" height="32" rx="4" fill="${k.cap}"/>
        ${[82, 90, 98, 106, 114].map(x => `<rect x="${x}" y="54" width="2" height="24" fill="#fff" opacity=".08"/>`).join("")}
        <rect x="84" y="80" width="32" height="10" fill="${k.body}"/>
        <rect x="56" y="88" width="88" height="136" rx="16" fill="${k.body}"/>
        <rect x="56" y="116" width="88" height="84" fill="${k.label}"/>
        ${title(100, 156, 76, 18, k.text)}
        ${subtitle(100, 174, k.text, 7)}
        <rect x="56" y="88" width="88" height="136" rx="16" fill="url(#sh-${id})"/>
        <rect x="76" y="50" width="48" height="32" rx="4" fill="url(#sh-${id})"/>`;
      break;

    case "bottle":
      g = `
        <rect x="78" y="14" width="44" height="28" rx="4" fill="${k.cap}"/>
        <rect x="78" y="14" width="44" height="28" rx="4" fill="url(#sh-${id})"/>
        <path d="M86 42 H114 V58 Q148 66 148 94 V214 Q148 224 138 224 H62 Q52 224 52 214 V94 Q52 66 86 58 Z" fill="${k.body}"/>
        <rect x="52" y="108" width="96" height="90" fill="${k.label}"/>
        <rect x="52" y="108" width="96" height="14" fill="#7B4FA0"/>
        <text x="100" y="118" text-anchor="middle" font-family="Inter" font-weight="700" font-size="7" fill="#fff" letter-spacing="1">FLAVOR MENTH</text>
        ${title(100, 156, 84, 18, k.text)}
        ${subtitle(100, 174, k.text, 6.4)}
        <path d="M86 42 H114 V58 Q148 66 148 94 V214 Q148 224 138 224 H62 Q52 224 52 214 V94 Q52 66 86 58 Z" fill="url(#sh-${id})"/>`;
      break;

    case "rollon":
      g = `
        <rect x="62" y="16" width="76" height="88" rx="32" fill="${k.cap}" stroke="#D6DCE2"/>
        <rect x="62" y="16" width="76" height="88" rx="32" fill="url(#sh-${id})"/>
        <rect x="60" y="98" width="80" height="126" rx="18" fill="${k.body}" stroke="#D6DCE2"/>
        <text x="100" y="128" text-anchor="middle" font-family="Outfit" font-weight="300" font-size="20" fill="${k.label}" letter-spacing="3">MKM</text>
        <rect x="60" y="140" width="80" height="44" fill="${k.label}"/>
        <text x="100" y="158" text-anchor="middle" font-family="Inter" font-weight="700" font-size="6.5" fill="${k.accent}" letter-spacing="1.5">ROLL-ON</text>
        <text x="100" y="173" text-anchor="middle" font-family="Outfit" font-weight="700" font-size="10" fill="#fff">BRIGHTENING X4</text>
        <text x="100" y="204" text-anchor="middle" font-family="Inter" font-size="6" fill="${k.label}" opacity=".7">5% UREA · 72H</text>
        <rect x="60" y="98" width="80" height="126" rx="18" fill="url(#sh-${id})"/>`;
      break;
  }

  return `<svg viewBox="0 0 200 240" role="img" aria-label="${p.name}">${defs}${shadow}${g}</svg>`;
}

function packVisual(p, uid) {
  return p.image
    ? `<img class="product-image product-image--${p.id}" src="${p.image}" alt="${p.name}" loading="lazy">`
    : packSVG(p, uid);
}
