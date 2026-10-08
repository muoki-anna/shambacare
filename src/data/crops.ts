export interface CropGuidance {
  slug: string;
  name: string;
  localName: string;
  category: "Cereal" | "Cash Crop" | "Legume" | "Tuber" | "Fruit" | "Vegetable";
  summary: string;
  regions: string[];
  altitude: string;
  rainfall: string;
  temperature: string;
  soil: string;
  landPrep: string[];
  planting: string[];
  fertilizer: string[];
  pests: { name: string; control: string }[];
  diseases: { name: string; control: string }[];
  harvesting: string[];
  yield: string;
  market: string;
  maturity: string;
}

export const crops: CropGuidance[] = [
  {
    slug: "maize",
    name: "Maize",
    localName: "Mahindi",
    category: "Cereal",
    summary:
      "Kenya's staple food crop, grown by over 90% of rural households. Thrives in the highlands and mid-altitude zones.",
    regions: ["Trans Nzoia", "Uasin Gishu", "Nakuru", "Bungoma", "Kakamega"],
    altitude: "1,200 – 2,500 m above sea level",
    rainfall: "600 – 1,200 mm, well distributed",
    temperature: "18 – 27 °C",
    soil: "Well-drained loamy soils, pH 5.5 – 7.0",
    landPrep: [
      "Plough early, at the onset of the dry season, to expose pests",
      "Harrow to a fine tilth before the rains",
      "Apply well-decomposed manure (8–10 tonnes/ha) during ploughing",
    ],
    planting: [
      "Plant at the onset of long rains",
      "Spacing: 75 cm × 25 cm (one seed per hole) or 75 cm × 50 cm (two seeds)",
      "Seed rate: 25 kg per hectare",
      "Recommended varieties: H6213, H629, DK8031, SC Duma 43 (drought tolerant)",
    ],
    fertilizer: [
      "At planting: DAP or NPK 23:23:0 at 125 kg/ha",
      "Top-dress with CAN at 125–250 kg/ha when crop is knee-high (3–4 weeks)",
      "Second top-dress before tasseling in high-rainfall areas",
    ],
    pests: [
      {
        name: "Fall armyworm",
        control: "Scout weekly; apply Bt-based biopesticides or approved insecticides early",
      },
      {
        name: "Maize stalk borer",
        control: "Early planting, destroy crop residues, apply granules in the funnel",
      },
      {
        name: "Striga weed",
        control: "Use striga-tolerant varieties, rotate with legumes, hand-weed before flowering",
      },
    ],
    diseases: [
      {
        name: "Maize lethal necrosis (MLN)",
        control: "Use certified seed, rotate crops, control insect vectors",
      },
      { name: "Grey leaf spot", control: "Plant tolerant varieties, rotate with non-cereals" },
    ],
    harvesting: [
      "Harvest when husks turn brown and grains are hard (moisture ~13%)",
      "Dry on raised racks, not on bare ground, to avoid aflatoxin",
      "Store in hermetic bags (PICS) with actellic dust",
    ],
    yield: "2 – 6 tonnes/ha (up to 40 bags per acre with good management)",
    market: "Sold to NCPB, millers, and local markets; prices peak 3–4 months after harvest",
    maturity: "3 – 6 months depending on variety and altitude",
  },
  {
    slug: "tea",
    name: "Tea",
    localName: "Chai",
    category: "Cash Crop",
    summary:
      "Kenya is the world's leading exporter of black tea. Grown mainly by smallholders under KTDA in the highlands.",
    regions: ["Kericho", "Nyeri", "Murang'a", "Meru", "Kisii", "Nandi"],
    altitude: "1,500 – 2,700 m above sea level",
    rainfall: "1,200 – 2,500 mm, evenly distributed",
    temperature: "14 – 27 °C",
    soil: "Deep, well-drained acidic volcanic soils, pH 4.5 – 5.5",
    landPrep: [
      "Clear land and dig holes 60 cm deep",
      "Terrace on slopes to control erosion",
      "Plant shade trees (Grevillea) and windbreaks",
    ],
    planting: [
      "Spacing: 1.2 m × 0.6 m (about 13,000 bushes/ha)",
      "Use clonal cuttings from licensed nurseries (e.g. TRFK clones 6/8, 31/8)",
      "Plant at the onset of rains; mulch young bushes",
    ],
    fertilizer: [
      "Apply NPKS 25:5:5:5 at 250–300 kg N/ha/year in splits",
      "Maintain soil acidity; avoid lime",
      "Foliar feeds during flush periods",
    ],
    pests: [
      {
        name: "Tea mosquito bug",
        control: "Regular plucking, targeted insecticide where thresholds are exceeded",
      },
      { name: "Red spider mite", control: "Encourage natural predators, sulphur-based acaricides" },
    ],
    diseases: [
      {
        name: "Root rot (Armillaria)",
        control: "Remove and burn infected stumps before replanting",
      },
      { name: "Blister blight", control: "Copper-based fungicides, resistant clones" },
    ],
    harvesting: [
      "Begin plucking 3–4 years after planting",
      "Pluck two leaves and a bud every 7–14 days",
      "Deliver green leaf to the factory the same day",
    ],
    yield: "2,000 – 4,000 kg made tea/ha/year for mature bushes",
    market: "Sold through KTDA factories and the Mombasa tea auction; bonus paid annually",
    maturity: "Plucking starts at 3 – 4 years; bushes remain productive for 50+ years",
  },
  {
    slug: "coffee",
    name: "Coffee",
    localName: "Kahawa",
    category: "Cash Crop",
    summary:
      "Kenyan Arabica is prized worldwide for its bright acidity. Grown by smallholder cooperatives and estates.",
    regions: ["Nyeri", "Kirinyaga", "Murang'a", "Embu", "Machakos", "Bungoma"],
    altitude: "1,400 – 2,200 m above sea level",
    rainfall: "1,000 – 1,500 mm with a dry spell for flowering",
    temperature: "15 – 25 °C",
    soil: "Deep, fertile, well-drained red volcanic soils, pH 5.0 – 6.0",
    landPrep: [
      "Dig holes 60 cm × 60 cm × 60 cm three months before planting",
      "Mix topsoil with 2 debe of well-rotted manure per hole",
      "Establish shade trees and contour bunds on slopes",
    ],
    planting: [
      "Spacing: 2.7 m × 2.7 m for Arabica (about 1,300 trees/ha)",
      "Varieties: SL28, SL34, Ruiru 11 (disease resistant), Batian",
      "Plant at onset of long rains; water young trees regularly",
    ],
    fertilizer: [
      "Apply NPK 17:17:17 or coffee-specific blends twice a year",
      "Foliar feeds with boron and zinc during flowering",
      "Mulch heavily to conserve moisture",
    ],
    pests: [
      { name: "Coffee berry borer", control: "Strip-pick after harvest, traps, spot spraying" },
      { name: "Antestia bug", control: "Prune and open canopy, spray approved pyrethroids" },
    ],
    diseases: [
      {
        name: "Coffee berry disease (CBD)",
        control: "Plant Ruiru 11/Batian, copper fungicide sprays",
      },
      { name: "Coffee leaf rust", control: "Resistant varieties, timely copper sprays" },
    ],
    harvesting: [
      "Pick only ripe red cherries by hand, every 2–3 weeks",
      "Deliver to the wet mill (factory) the same day",
      "Never pick green or overripe berries",
    ],
    yield: "5 – 15 kg cherry per tree with good husbandry",
    market: "Sold through cooperative societies, the Nairobi Coffee Exchange, or direct sales",
    maturity: "First crop at 2.5 – 3 years; full bearing from year 5",
  },
  {
    slug: "beans",
    name: "Common Beans",
    localName: "Maharagwe",
    category: "Legume",
    summary:
      "The most important pulse in Kenya, key source of protein, often intercropped with maize.",
    regions: ["Machakos", "Makueni", "Nyeri", "Kisii", "Bungoma", "Nakuru"],
    altitude: "1,000 – 2,100 m above sea level",
    rainfall: "500 – 900 mm during the season",
    temperature: "18 – 25 °C",
    soil: "Well-drained loams, pH 6.0 – 7.0; sensitive to waterlogging",
    landPrep: [
      "Prepare a fine seedbed; beans have small, delicate seedlings",
      "Avoid fields with a history of bacterial blight",
    ],
    planting: [
      "Spacing: 50 cm × 10 cm (pure stand)",
      "Seed rate: 40–60 kg/ha of certified seed",
      "Varieties: Rosecoco (GLP-2), Mwitemania, Wairimu (drought tolerant), Nyota",
    ],
    fertilizer: [
      "Apply DAP at 50–100 kg/ha at planting",
      "Beans fix nitrogen — avoid heavy top-dressing",
      "Foliar feed at flowering to boost pod set",
    ],
    pests: [
      { name: "Bean fly", control: "Early planting, seed dressing, hill up soil around stems" },
      {
        name: "Aphids",
        control: "Spray insecticidal soap or approved insecticides; encourage ladybirds",
      },
      { name: "Bean weevil (storage)", control: "Dry well, store in hermetic bags, use actellic" },
    ],
    diseases: [
      { name: "Angular leaf spot", control: "Certified seed, crop rotation, copper sprays" },
      { name: "Root rot", control: "Good drainage, rotation with cereals, seed dressing" },
      { name: "Rust", control: "Resistant varieties, sulphur-based fungicides" },
    ],
    harvesting: [
      "Harvest when pods turn yellow-brown and dry (60–90 days)",
      "Pull plants and dry on tarpaulins before threshing",
      "Store at below 13% moisture in airtight containers",
    ],
    yield: "600 – 1,500 kg/ha (4–8 bags per acre)",
    market: "High demand in urban markets and schools; rosecoco and wairimu fetch premium prices",
    maturity: "2 – 3 months",
  },
  {
    slug: "potatoes",
    name: "Irish Potatoes",
    localName: "Viazi",
    category: "Tuber",
    summary:
      "Kenya's second most important food crop after maize, grown in cool highland areas year-round.",
    regions: ["Nyandarua", "Nakuru", "Narok", "Elgeyo Marakwet", "Meru", "Nyeri"],
    altitude: "1,800 – 3,000 m above sea level",
    rainfall: "750 – 1,200 mm, evenly spread",
    temperature: "15 – 20 °C (cool nights essential)",
    soil: "Deep, loose, well-drained loams, pH 5.0 – 6.5",
    landPrep: [
      "Plough deep (30 cm) and harrow to a fine, loose tilth",
      "Make ridges 75 cm apart",
      "Use certified seed tubers — this is the single biggest yield factor",
    ],
    planting: [
      "Spacing: 75 cm × 30 cm; seed rate 1,500–2,000 kg/ha",
      "Plant whole tubers 25–50 g, 10 cm deep",
      "Varieties: Shangi (early, popular), Dutch Robjin, Kenya Mpya, Unica",
    ],
    fertilizer: [
      "Apply DAP or NPK 17:17:17 at 250–500 kg/ha at planting",
      "Top-dress with CAN at 125 kg/ha at first earthing-up",
      "Earth up twice: at 15 cm height and before flowering",
    ],
    pests: [
      { name: "Potato tuber moth", control: "Deep planting, earthing up, remove volunteer plants" },
      { name: "Aphids (virus vectors)", control: "Use certified seed, rogue infected plants" },
    ],
    diseases: [
      {
        name: "Late blight",
        control:
          "Most destructive — spray preventive fungicides (mancozeb) weekly in wet weather, plant tolerant varieties",
      },
      {
        name: "Bacterial wilt",
        control: "Strict 3-year rotation, certified seed, remove wilted plants with soil",
      },
    ],
    harvesting: [
      "Harvest 2–3 weeks after haulms dry (90–120 days for Shangi)",
      "Dig on a dry day; cure tubers in shade before storage",
      "Store in a cool, dark, ventilated diffused-light store",
    ],
    yield: "15 – 30 tonnes/ha with certified seed and blight control",
    market: "Strong year-round demand; prices peak in dry months; sell in 50 kg nets",
    maturity: "3 – 4 months (Shangi matures in ~90 days)",
  },
  {
    slug: "tomatoes",
    name: "Tomatoes",
    localName: "Nyanya",
    category: "Vegetable",
    summary: "A high-value horticultural crop grown in open fields and greenhouses across Kenya.",
    regions: ["Kajiado", "Kirinyaga", "Loitoktok", "Machakos", "Nakuru", "Taita Taveta"],
    altitude: "0 – 2,000 m above sea level",
    rainfall: "600 – 1,200 mm; irrigation recommended",
    temperature: "20 – 28 °C",
    soil: "Well-drained sandy loams rich in organic matter, pH 6.0 – 7.0",
    landPrep: [
      "Raise seedlings in a nursery for 4–6 weeks or buy certified seedlings",
      "Incorporate 20 tonnes/ha of well-rotted manure",
      "Solarize or drench soil where bacterial wilt is a problem",
    ],
    planting: [
      "Spacing: 60 cm × 45 cm (staked) or 90 cm × 50 cm (unstaked)",
      "Transplant in the evening; water immediately",
      "Varieties: Anna F1, Assila F1, Kilele F1 (disease tolerant), Rio Grande",
    ],
    fertilizer: [
      "Apply DAP at 200 kg/ha at transplanting",
      "Top-dress with CAN at 200 kg/ha in two splits",
      "Calcium sprays prevent blossom end rot",
    ],
    pests: [
      {
        name: "Tuta absoluta",
        control: "Pheromone traps, crop rotation, biological control, timely sprays",
      },
      { name: "Whiteflies", control: "Yellow sticky traps, reflective mulch, neem extracts" },
      { name: "Red spider mites", control: "Irrigate adequately, sulphur-based acaricides" },
    ],
    diseases: [
      {
        name: "Bacterial wilt",
        control: "Resistant rootstocks, 3-year rotation, avoid infected soils",
      },
      {
        name: "Early/late blight",
        control: "Stake and mulch plants, preventive copper/mancozeb sprays",
      },
      {
        name: "Tomato yellow leaf curl virus",
        control: "Resistant varieties, control whiteflies, use nettings",
      },
    ],
    harvesting: [
      "First harvest 70–85 days after transplanting",
      "Pick at breaker stage (turning colour) for distant markets",
      "Harvest every 3–4 days for 6–8 weeks",
    ],
    yield: "25 – 40 tonnes/ha open field; 60+ tonnes/ha in greenhouses",
    market: "Sold to brokers, open-air markets and supermarkets; prices swing widely with supply",
    maturity: "2.5 – 4 months",
  },
  {
    slug: "bananas",
    name: "Bananas",
    localName: "Ndizi",
    category: "Fruit",
    summary: "A year-round food and income crop, grown from the coast to the western highlands.",
    regions: ["Meru", "Kisii", "Nyamira", "Embu", "Murang'a", "Kilifi", "Busia"],
    altitude: "0 – 1,800 m above sea level",
    rainfall: "1,000 – 1,500 mm, evenly distributed",
    temperature: "20 – 30 °C",
    soil: "Deep, fertile, well-drained loams, pH 5.5 – 7.0",
    landPrep: [
      "Dig holes 60 cm × 60 cm × 60 cm, 3 m apart",
      "Mix topsoil with 2 debe of manure and 200 g DAP per hole",
      "Use tissue-culture plantlets or clean sword suckers",
    ],
    planting: [
      "Spacing: 3 m × 3 m (about 1,100 plants/ha)",
      "Varieties: Williams, Grand Nain (dessert), Uganda Green (cooking), Kisukari",
      "Plant at the onset of rains",
    ],
    fertilizer: [
      "Apply 200 g CAN per stool every 3 months",
      "Top up manure (10 kg/stool) twice a year",
      "Keep the plantation mulched and weed-free",
    ],
    pests: [
      {
        name: "Banana weevil",
        control: "Use clean planting material, chop and spread old corms, neem treatments",
      },
      { name: "Nematodes", control: "Tissue-culture plantlets, hot-water treat suckers" },
    ],
    diseases: [
      {
        name: "Banana bacterial wilt (BBX)",
        control: "Remove male buds with a forked stick, disinfect tools, uproot infected mats",
      },
      {
        name: "Fusarium wilt (Panama)",
        control: "Plant resistant/tissue-culture varieties, avoid moving soil",
      },
      {
        name: "Sigatoka leaf spot",
        control: "Deleaf regularly, improve spacing, fungicide where severe",
      },
    ],
    harvesting: [
      "Harvest 12–16 months after planting when fingers are full and rounded",
      "Cut the bunch with a sharp panga; handle gently to avoid bruising",
      "De-sucker each mat to 2–3 plants for continuous production",
    ],
    yield: "20 – 40 tonnes/ha/year under good management",
    market: "Strong demand in urban centres; ripened dessert bananas fetch the best prices",
    maturity: "12 – 18 months to first bunch; perennial thereafter",
  },
  {
    slug: "wheat",
    name: "Wheat",
    localName: "Ngano",
    category: "Cereal",
    summary:
      "Kenya's second cereal, grown on large and small farms in the cool highlands, largely rain-fed.",
    regions: ["Narok", "Nakuru", "Uasin Gishu", "Laikipia", "Trans Nzoia", "Timau"],
    altitude: "1,800 – 2,900 m above sea level",
    rainfall: "500 – 900 mm during the growing season",
    temperature: "15 – 24 °C",
    soil: "Well-drained loams and clays, pH 6.0 – 7.5",
    landPrep: [
      "Conserve moisture with early tillage after the previous crop",
      "A firm, fine seedbed gives even germination",
    ],
    planting: [
      "Plant at the onset of rains using a seed drill",
      "Seed rate: 100–125 kg/ha; row spacing 20–25 cm",
      "Varieties: Kenya Kwale, Njoro BW2, Eagle 10 (rust tolerant)",
    ],
    fertilizer: [
      "Apply DAP or NPK at 125–150 kg/ha at planting",
      "Top-dress with CAN or urea at tillering (3–4 weeks)",
    ],
    pests: [
      { name: "Russian wheat aphid", control: "Early planting, tolerant varieties, spot sprays" },
      { name: "Quelea birds", control: "Timely harvest, coordinated community scaring" },
    ],
    diseases: [
      {
        name: "Stem rust (incl. Ug99)",
        control: "Plant resistant varieties, early fungicide at flag leaf",
      },
      { name: "Yellow rust", control: "Resistant varieties, triazole fungicides" },
    ],
    harvesting: [
      "Harvest by combine when grain moisture is 12–14%",
      "Avoid delays — shattering and bird damage increase losses",
      "Store dry in well-ventilated stores",
    ],
    yield: "2 – 4 tonnes/ha rain-fed",
    market: "Sold to millers and NCPB; Kenya imports ~70% of its wheat, so demand is guaranteed",
    maturity: "4 – 5 months",
  },
];

export const getCrop = (slug: string) => crops.find((c) => c.slug === slug);
