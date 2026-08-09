import type { PlanImageKey } from "./plan-images";

export const WHATSAPP_NUMBER = "919837016351";
export const PHONE_DISPLAY = "+91 98370 16351";
export const EMAIL = "ramsinghrathore250@gmail.com";
export const ADVISOR_NAME = "Ram Singh Rathore";
export const ADDRESS = "Jawahar Nagar, Khandari Road, Agra, Uttar Pradesh";

export const NAV_LINKS = [
  { to: "/", label: "Home", labelHi: "होम" },
  { to: "/about", label: "About", labelHi: "परिचय" },
  { to: "/plans", label: "Plans", labelHi: "पॉलिसी" },
  { to: "/plan-finder", label: "Plan Finder", labelHi: "प्लान फाइंडर" },
  { to: "/book-appointment", label: "Book Appointment", labelHi: "अपॉइंटमेंट" },
] as const;

export type PlanGroup =
  | "Endowment"
  | "Whole Life"
  | "Money Back"
  | "Children"
  | "Pension"
  | "Term"
  | "Micro & Mahila"
  | "Market Linked";

export const PLAN_GROUP_HI: Record<PlanGroup, string> = {
  Endowment: "एंडोमेंट प्लान",
  "Whole Life": "संपूर्ण जीवन प्लान",
  "Money Back": "मनी बैक प्लान",
  Children: "बाल योजनाएँ",
  Pension: "पेंशन प्लान",
  Term: "टर्म प्लान",
  "Micro & Mahila": "माइक्रो एवं महिला प्लान",
  "Market Linked": "मार्केट लिंक्ड (ULIP)",
};

export type PlanEntry = {
  slug: string;
  planNo: string;
  name: string;
  nameHi: string;
  tag: string;
  tagHi: string;
  tagline: string;
  taglineHi: string;
  benefits: readonly string[];
  benefitsHi: readonly string[];
  group: PlanGroup;
  img: PlanImageKey;
};

export const ALL_PLANS: readonly PlanEntry[] = [
  {
    slug: "kanyadan", planNo: "733", name: "LIC Kanyadan Plan", nameHi: "एलआईसी कन्यादान पॉलिसी",
    tag: "Most Recommended", tagHi: "सर्वाधिक अनुशंसित",
    tagline: "Child Education & Marriage Security", taglineHi: "बेटी की शिक्षा एवं विवाह की सुरक्षा",
    benefits: ["Designed for a daughter's secure future", "Premium waiver on unfortunate events", "Maturity aligned to marriage milestones"],
    benefitsHi: ["बेटी के सुरक्षित भविष्य के लिए बनाई गई", "दुर्घटना की स्थिति में प्रीमियम माफ", "विवाह के समय मैच्योरिटी राशि"],
    group: "Children", img: "child",
  },
  {
    slug: "jeevan-lakshya", planNo: "733", name: "LIC Jeevan Lakshya", nameHi: "एलआईसी जीवन लक्ष्य",
    tag: "Family Income", tagHi: "पारिवारिक आय",
    tagline: "Annual Income for the Family if You Are Gone", taglineHi: "आपके बाद परिवार को वार्षिक आय",
    benefits: ["10% annual income to family till maturity", "Full sum assured still paid at maturity", "Premiums stop after the claim"],
    benefitsHi: ["मैच्योरिटी तक परिवार को 10% वार्षिक आय", "मैच्योरिटी पर पूरी बीमा राशि भी", "क्लेम के बाद प्रीमियम बंद"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "jeevan-anand", planNo: "715", name: "LIC New Jeevan Anand", nameHi: "एलआईसी न्यू जीवन आनंद",
    tag: "Dual Benefit", tagHi: "दोहरा लाभ",
    tagline: "Lifetime Cover + Endowment", taglineHi: "आजीवन कवर + बचत",
    benefits: ["Endowment payout at policy term end", "Whole-life risk cover continues", "Loan facility & bonus participation"],
    benefitsHi: ["पॉलिसी अवधि पूरी होने पर भुगतान", "जीवन भर जोखिम कवर जारी", "लोन सुविधा एवं बोनस"],
    group: "Endowment", img: "wholelife",
  },
  {
    slug: "jeevan-umang", planNo: "745", name: "LIC Jeevan Umang", nameHi: "एलआईसी जीवन उमंग",
    tag: "Regular Income", tagHi: "नियमित आय",
    tagline: "Guaranteed Whole-Life Income", taglineHi: "गारंटीड आजीवन आय",
    benefits: ["8% guaranteed annual survival benefit", "Cover till age 100", "Lump sum on maturity to the family"],
    benefitsHi: ["8% गारंटीड वार्षिक उत्तरजीविता लाभ", "100 वर्ष की आयु तक कवर", "मैच्योरिटी पर एकमुश्त राशि"],
    group: "Whole Life", img: "wholelife",
  },
  {
    slug: "jeevan-utsav", planNo: "771", name: "LIC Jeevan Utsav", nameHi: "एलआईसी जीवन उत्सव",
    tag: "Lifelong Income", tagHi: "आजीवन आय",
    tagline: "Guaranteed 10% Income for Life", taglineHi: "जीवन भर गारंटीड 10% आय",
    benefits: ["₹10 per ₹100 sum assured every year, for life", "Flexible or regular income option", "Guaranteed additions during premium term"],
    benefitsHi: ["हर वर्ष प्रति ₹100 बीमा राशि पर ₹10 आय", "नियमित या फ्लेक्सी आय विकल्प", "प्रीमियम अवधि में गारंटीड एडिशन"],
    group: "Whole Life", img: "wholelife",
  },
  {
    slug: "jeevan-utsav-sp", planNo: "883", name: "LIC Jeevan Utsav (Single Premium)", nameHi: "एलआईसी जीवन उत्सव (सिंगल प्रीमियम)",
    tag: "One-Time Pay", tagHi: "एकमुश्त भुगतान",
    tagline: "Pay Once, Earn Income for Life", taglineHi: "एक बार भुगतान, जीवन भर आय",
    benefits: ["Single premium, lifelong income", "Guaranteed additions accumulate", "Ideal for lump sum retirement corpus"],
    benefitsHi: ["एक बार प्रीमियम, आजीवन आय", "गारंटीड एडिशन जुड़ते हैं", "एकमुश्त राशि निवेश के लिए उपयुक्त"],
    group: "Whole Life", img: "wholelife",
  },
  {
    slug: "jeevan-labh", planNo: "736", name: "LIC Jeevan Labh", nameHi: "एलआईसी जीवन लाभ",
    tag: "High Returns", tagHi: "बेहतर रिटर्न",
    tagline: "Limited Premium, Higher Maturity", taglineHi: "कम वर्ष प्रीमियम, अधिक मैच्योरिटी",
    benefits: ["Pay for fewer years, cover for longer", "Strong bonus accumulation", "Ideal for goal-based planning"],
    benefitsHi: ["कम वर्षों तक प्रीमियम, लंबा कवर", "मजबूत बोनस संचय", "लक्ष्य आधारित योजना के लिए उत्तम"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "new-endowment", planNo: "714", name: "LIC New Endowment Plan", nameHi: "एलआईसी न्यू एंडोमेंट प्लान",
    tag: "Classic", tagHi: "पारंपरिक",
    tagline: "Time-Tested Savings + Protection", taglineHi: "भरोसेमंद बचत + सुरक्षा",
    benefits: ["Bonus participation", "Loan & surrender facility", "Family protection + maturity lump sum"],
    benefitsHi: ["बोनस में भागीदारी", "लोन एवं सरेंडर सुविधा", "परिवार सुरक्षा + मैच्योरिटी राशि"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "single-premium-endowment", planNo: "717", name: "LIC Single Premium Endowment", nameHi: "एलआईसी सिंगल प्रीमियम एंडोमेंट",
    tag: "One-Time Pay", tagHi: "एकमुश्त भुगतान",
    tagline: "Invest Once, Insured for Years", taglineHi: "एक बार निवेश, वर्षों तक बीमा",
    benefits: ["Single payment, no renewals to remember", "Guaranteed maturity with bonuses", "Loan available after one year"],
    benefitsHi: ["एक बार भुगतान, रिन्यूअल की चिंता नहीं", "बोनस सहित गारंटीड मैच्योरिटी", "एक वर्ष बाद लोन सुविधा"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "nav-jeevan-shree", planNo: "912", name: "LIC Nav Jeevan Shree", nameHi: "एलआईसी नव जीवन श्री",
    tag: "New Launch", tagHi: "नई योजना",
    tagline: "Guaranteed Additions Endowment", taglineHi: "गारंटीड एडिशन वाली बचत योजना",
    benefits: ["Guaranteed additions every policy year", "Limited premium paying options", "High sum assured rebates"],
    benefitsHi: ["हर पॉलिसी वर्ष गारंटीड एडिशन", "सीमित अवधि प्रीमियम विकल्प", "बड़ी बीमा राशि पर छूट"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "new-jeevan-sathi", planNo: "888 / 889", name: "LIC New Jeevan Sathi", nameHi: "एलआईसी न्यू जीवन साथी",
    tag: "Joint Life", tagHi: "संयुक्त जीवन",
    tagline: "One Policy for Husband & Wife", taglineHi: "पति-पत्नी के लिए एक ही पॉलिसी",
    benefits: ["Both spouses covered in one policy", "Surviving spouse pays no further premium", "Death benefit paid on each life"],
    benefitsHi: ["एक पॉलिसी में दोनों जीवनसाथी कवर", "जीवित साथी को प्रीमियम नहीं देना", "दोनों जीवन पर मृत्यु लाभ"],
    group: "Endowment", img: "wholelife",
  },
  {
    slug: "bima-jyoti", planNo: "760", name: "LIC Bima Jyoti", nameHi: "एलआईसी बीमा ज्योति",
    tag: "Guaranteed", tagHi: "गारंटीड",
    tagline: "Guaranteed Additions Endowment", taglineHi: "गारंटीड एडिशन वाली एंडोमेंट",
    benefits: ["₹50 per ₹1000 GA each year", "Limited premium paying term", "Goal-based wealth creation"],
    benefitsHi: ["हर वर्ष प्रति ₹1000 पर ₹50 गारंटीड एडिशन", "सीमित प्रीमियम अवधि", "लक्ष्य आधारित धन निर्माण"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "jeevan-azad", planNo: "868", name: "LIC Jeevan Azad", nameHi: "एलआईसी जीवन आजाद",
    tag: "Limited Premium", tagHi: "सीमित प्रीमियम",
    tagline: "Short-Pay Endowment", taglineHi: "कम अवधि भुगतान वाली बचत",
    benefits: ["Pay 8 years less than term", "Guaranteed maturity", "Family income on absence"],
    benefitsHi: ["अवधि से 8 वर्ष कम भुगतान", "गारंटीड मैच्योरिटी", "अनुपस्थिति में परिवार को आय"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "dhan-sanchay", planNo: "865", name: "LIC Dhan Sanchay", nameHi: "एलआईसी धन संचय",
    tag: "Wealth", tagHi: "संपत्ति निर्माण",
    tagline: "Savings + Insurance Combo", taglineHi: "बचत + बीमा का संगम",
    benefits: ["Income benefits + lump sum", "4 plan options to choose from", "Long-term wealth creation"],
    benefitsHi: ["आय लाभ + एकमुश्त राशि", "चार विकल्पों में से चुनें", "दीर्घकालिक धन निर्माण"],
    group: "Endowment", img: "savings",
  },
  {
    slug: "bima-ratna", planNo: "764", name: "LIC Bima Ratna", nameHi: "एलआईसी बीमा रत्न",
    tag: "Money Back", tagHi: "मनी बैक",
    tagline: "Guaranteed Money-Back Plan", taglineHi: "गारंटीड मनी बैक योजना",
    benefits: ["Periodic survival benefits", "Guaranteed additions throughout", "Strong family protection"],
    benefitsHi: ["समय-समय पर उत्तरजीविता लाभ", "पूरी अवधि गारंटीड एडिशन", "मजबूत पारिवारिक सुरक्षा"],
    group: "Money Back", img: "moneyback",
  },
  {
    slug: "new-money-back-20", planNo: "720", name: "LIC New Money Back 20 Years", nameHi: "एलआईसी न्यू मनी बैक (20 वर्ष)",
    tag: "Money Back", tagHi: "मनी बैक",
    tagline: "20-Year Periodic Returns", taglineHi: "20 वर्ष में समय-समय पर भुगतान",
    benefits: ["20% sum assured every 5 years", "Maturity + accrued bonuses", "Risk cover throughout term"],
    benefitsHi: ["हर 5 वर्ष में 20% बीमा राशि", "मैच्योरिटी + संचित बोनस", "पूरी अवधि जोखिम कवर"],
    group: "Money Back", img: "moneyback",
  },
  {
    slug: "new-money-back-25", planNo: "721", name: "LIC New Money Back 25 Years", nameHi: "एलआईसी न्यू मनी बैक (25 वर्ष)",
    tag: "Money Back", tagHi: "मनी बैक",
    tagline: "Longer Term, Bigger Milestones", taglineHi: "लंबी अवधि, बड़े पड़ाव",
    benefits: ["15% sum assured every 5 years", "Longer bonus accumulation", "Balance + bonuses at year 25"],
    benefitsHi: ["हर 5 वर्ष में 15% बीमा राशि", "लंबे समय तक बोनस संचय", "25वें वर्ष शेष राशि + बोनस"],
    group: "Money Back", img: "moneyback",
  },
  {
    slug: "bima-shree", planNo: "748", name: "LIC Bima Shree", nameHi: "एलआईसी बीमा श्री",
    tag: "High Value", tagHi: "उच्च मूल्य",
    tagline: "Money Back for High Net-Worth Families", taglineHi: "उच्च आय वर्ग हेतु मनी बैक",
    benefits: ["Minimum ₹10 lakh sum assured", "Guaranteed additions + survival benefits", "Limited premium paying term"],
    benefitsHi: ["न्यूनतम ₹10 लाख बीमा राशि", "गारंटीड एडिशन + उत्तरजीविता लाभ", "सीमित प्रीमियम अवधि"],
    group: "Money Back", img: "moneyback",
  },
  {
    slug: "new-children-money-back", planNo: "732", name: "LIC New Children's Money Back", nameHi: "एलआईसी न्यू चिल्ड्रन मनी बैक",
    tag: "Child Plan", tagHi: "बाल योजना",
    tagline: "Education Milestone Payouts", taglineHi: "शिक्षा के हर पड़ाव पर भुगतान",
    benefits: ["Survival benefits at age 18, 20, 22", "Maturity at age 25", "Optional premium waiver rider"],
    benefitsHi: ["18, 20, 22 वर्ष पर लाभ", "25 वर्ष की आयु पर मैच्योरिटी", "प्रीमियम वेवर राइडर विकल्प"],
    group: "Children", img: "child",
  },
  {
    slug: "jeevan-tarun", planNo: "734", name: "LIC Jeevan Tarun", nameHi: "एलआईसी जीवन तरुण",
    tag: "Child Plan", tagHi: "बाल योजना",
    tagline: "Higher Education Planning", taglineHi: "उच्च शिक्षा की योजना",
    benefits: ["Flexible payout from age 20", "Strong bonus addition", "Premium for limited term"],
    benefitsHi: ["20 वर्ष से लचीला भुगतान", "मजबूत बोनस", "सीमित अवधि प्रीमियम"],
    group: "Children", img: "child",
  },
  {
    slug: "amrit-baal", planNo: "774", name: "LIC Amrit Baal", nameHi: "एलआईसी अमृत बाल",
    tag: "New Child Plan", tagHi: "नई बाल योजना",
    tagline: "Guaranteed Additions for Your Child", taglineHi: "बच्चे के लिए गारंटीड एडिशन",
    benefits: ["₹80 per ₹1000 guaranteed addition yearly", "Regular or single premium option", "Payout timed to college years"],
    benefitsHi: ["प्रति ₹1000 पर ₹80 वार्षिक गारंटीड एडिशन", "नियमित या एकमुश्त प्रीमियम", "कॉलेज के वर्षों में भुगतान"],
    group: "Children", img: "child",
  },
  {
    slug: "new-jeevan-shanti", planNo: "758", name: "LIC New Jeevan Shanti", nameHi: "एलआईसी न्यू जीवन शांति",
    tag: "Retirement", tagHi: "सेवानिवृत्ति",
    tagline: "Deferred Annuity Pension", taglineHi: "विलंबित एन्युटी पेंशन",
    benefits: ["Guaranteed lifelong annuity", "Single premium pension plan", "Joint-life option for couples"],
    benefitsHi: ["गारंटीड आजीवन पेंशन", "सिंगल प्रीमियम पेंशन योजना", "दंपत्ति हेतु जॉइंट लाइफ विकल्प"],
    group: "Pension", img: "pension",
  },
  {
    slug: "saral-pension", planNo: "862", name: "LIC Saral Pension", nameHi: "एलआईसी सरल पेंशन",
    tag: "Immediate Income", tagHi: "तत्काल आय",
    tagline: "Immediate Annuity from Day One", taglineHi: "पहले दिन से पेंशन",
    benefits: ["Pension starts immediately", "100% return of purchase price option", "Standardised IRDAI product"],
    benefitsHi: ["पेंशन तुरंत शुरू", "100% खरीद मूल्य वापसी विकल्प", "IRDAI मानकीकृत उत्पाद"],
    group: "Pension", img: "pension",
  },
  {
    slug: "jeevan-akshay", planNo: "857", name: "LIC Jeevan Akshay VII", nameHi: "एलआईसी जीवन अक्षय VII",
    tag: "Annuity", tagHi: "एन्युटी",
    tagline: "Flexible Immediate Annuity", taglineHi: "लचीली तत्काल एन्युटी",
    benefits: ["10 annuity options to choose", "Single-life or joint-life", "Loan facility after 3 months"],
    benefitsHi: ["10 एन्युटी विकल्प", "एकल या संयुक्त जीवन", "3 माह बाद लोन सुविधा"],
    group: "Pension", img: "pension",
  },
  {
    slug: "smart-pension", planNo: "879", name: "LIC Smart Pension", nameHi: "एलआईसी स्मार्ट पेंशन",
    tag: "New Pension", tagHi: "नई पेंशन योजना",
    tagline: "Modern Annuity with Liquidity", taglineHi: "तरलता के साथ आधुनिक पेंशन",
    benefits: ["Immediate annuity, many options", "Partial withdrawal allowed", "Higher rates for existing policyholders"],
    benefitsHi: ["तत्काल पेंशन, कई विकल्प", "आंशिक निकासी की अनुमति", "मौजूदा पॉलिसीधारकों को बेहतर दर"],
    group: "Pension", img: "pension",
  },
  {
    slug: "new-tech-term", planNo: "954", name: "LIC New Tech-Term", nameHi: "एलआईसी न्यू टेक-टर्म",
    tag: "Pure Term", tagHi: "शुद्ध टर्म",
    tagline: "Online Pure Risk Cover", taglineHi: "ऑनलाइन शुद्ध जोखिम कवर",
    benefits: ["High sum assured at low premium", "Level / increasing options", "Online application, paperless"],
    benefitsHi: ["कम प्रीमियम में बड़ा कवर", "लेवल / बढ़ता हुआ विकल्प", "ऑनलाइन, पेपरलेस आवेदन"],
    group: "Term", img: "term",
  },
  {
    slug: "new-jeevan-amar", planNo: "955", name: "LIC New Jeevan Amar", nameHi: "एलआईसी न्यू जीवन अमर",
    tag: "Pure Term", tagHi: "शुद्ध टर्म",
    tagline: "Offline Pure Term Cover", taglineHi: "ऑफलाइन शुद्ध टर्म कवर",
    benefits: ["Two benefit options", "Single / regular / limited premium", "Special female-life rates"],
    benefitsHi: ["दो लाभ विकल्प", "एकमुश्त / नियमित / सीमित प्रीमियम", "महिलाओं के लिए विशेष दर"],
    group: "Term", img: "term",
  },
  {
    slug: "yuva-term", planNo: "875", name: "LIC Yuva Term", nameHi: "एलआईसी युवा टर्म",
    tag: "For Young Earners", tagHi: "युवाओं के लिए",
    tagline: "Low-Cost Term Cover for Ages 18–45", taglineHi: "18–45 वर्ष हेतु सस्ता टर्म कवर",
    benefits: ["Minimum ₹50 lakh sum assured", "Attractive premiums for young, healthy lives", "Level or increasing cover"],
    benefitsHi: ["न्यूनतम ₹50 लाख बीमा राशि", "युवा एवं स्वस्थ के लिए आकर्षक प्रीमियम", "लेवल या बढ़ता हुआ कवर"],
    group: "Term", img: "term",
  },
  {
    slug: "bima-kavach", planNo: "887", name: "LIC Bima Kavach", nameHi: "एलआईसी बीमा कवच",
    tag: "Term + Refund", tagHi: "टर्म + वापसी",
    tagline: "Term Cover with Premium Return", taglineHi: "प्रीमियम वापसी वाला टर्म कवर",
    benefits: ["Premiums returned if you survive the term", "Pure protection with no loss feeling", "Flexible policy terms"],
    benefitsHi: ["अवधि पूरी होने पर प्रीमियम वापस", "सुरक्षा भी, पैसा भी वापस", "लचीली पॉलिसी अवधि"],
    group: "Term", img: "term",
  },
  {
    slug: "saral-jeevan-bima", planNo: "859", name: "LIC Saral Jeevan Bima", nameHi: "एलआईसी सरल जीवन बीमा",
    tag: "Standard Term", tagHi: "मानक टर्म",
    tagline: "Standardised Term Plan", taglineHi: "मानकीकृत टर्म योजना",
    benefits: ["IRDAI-mandated simple term", "Sum assured up to ₹25 lakh", "No exclusions except suicide (1 yr)"],
    benefitsHi: ["IRDAI द्वारा निर्धारित सरल टर्म", "₹25 लाख तक बीमा राशि", "आत्महत्या (1 वर्ष) को छोड़ कोई अपवाद नहीं"],
    group: "Term", img: "term",
  },
  {
    slug: "bima-lakshmi", planNo: "881", name: "LIC Bima Lakshmi", nameHi: "एलआईसी बीमा लक्ष्मी",
    tag: "For Women", tagHi: "महिलाओं हेतु",
    tagline: "Mahila Plan with Guaranteed Additions", taglineHi: "गारंटीड एडिशन वाली महिला योजना",
    benefits: ["Designed exclusively for women", "Guaranteed additions each year", "Survival benefits during the term"],
    benefitsHi: ["विशेष रूप से महिलाओं के लिए", "हर वर्ष गारंटीड एडिशन", "अवधि के दौरान उत्तरजीविता लाभ"],
    group: "Micro & Mahila", img: "micro",
  },
  {
    slug: "micro-bachat", planNo: "751", name: "LIC Micro Bachat", nameHi: "एलआईसी माइक्रो बचत",
    tag: "Small Savings", tagHi: "छोटी बचत",
    tagline: "Insurance for Modest Incomes", taglineHi: "साधारण आय के लिए बीमा",
    benefits: ["No medical examination required", "Sum assured ₹50,000 to ₹2 lakh", "Loyalty addition on maturity"],
    benefitsHi: ["कोई मेडिकल जांच नहीं", "₹50,000 से ₹2 लाख तक बीमा राशि", "मैच्योरिटी पर लॉयल्टी एडिशन"],
    group: "Micro & Mahila", img: "micro",
  },
  {
    slug: "jan-suraksha", planNo: "880", name: "LIC Jan Suraksha", nameHi: "एलआईसी जन सुरक्षा",
    tag: "Micro Plan", tagHi: "माइक्रो योजना",
    tagline: "Affordable Cover for Every Household", taglineHi: "हर परिवार के लिए किफायती कवर",
    benefits: ["Very low yearly premium", "Simple, quick issuance", "Built for rural and daily-wage families"],
    benefitsHi: ["बहुत कम वार्षिक प्रीमियम", "सरल एवं शीघ्र पॉलिसी जारी", "ग्रामीण एवं श्रमिक परिवारों हेतु"],
    group: "Micro & Mahila", img: "micro",
  },
  {
    slug: "index-plus", planNo: "873", name: "LIC Index Plus", nameHi: "एलआईसी इंडेक्स प्लस",
    tag: "Market Linked", tagHi: "मार्केट लिंक्ड",
    tagline: "ULIP Linked to Nifty Indices", taglineHi: "निफ्टी सूचकांक से जुड़ा यूलिप",
    benefits: ["Growth linked to index funds", "Guaranteed additions to the fund", "Partial withdrawal after 5 years"],
    benefitsHi: ["इंडेक्स फंड से जुड़ी वृद्धि", "फंड में गारंटीड एडिशन", "5 वर्ष बाद आंशिक निकासी"],
    group: "Market Linked", img: "ulip",
  },
  {
    slug: "protection-plus", planNo: "886", name: "LIC Protection Plus", nameHi: "एलआईसी प्रोटेक्शन प्लस",
    tag: "ULIP + Cover", tagHi: "यूलिप + कवर",
    tagline: "High Cover with Market Growth", taglineHi: "बाजार वृद्धि के साथ बड़ा कवर",
    benefits: ["Higher life cover than typical ULIPs", "Choice of investment funds", "Switch funds free of cost"],
    benefitsHi: ["सामान्य यूलिप से अधिक कवर", "निवेश फंड का विकल्प", "निःशुल्क फंड स्विच"],
    group: "Market Linked", img: "ulip",
  },
  {
    slug: "siip", planNo: "752", name: "LIC SIIP", nameHi: "एलआईसी एसआईआईपी",
    tag: "Regular ULIP", tagHi: "नियमित यूलिप",
    tagline: "Systematic Investment + Insurance", taglineHi: "व्यवस्थित निवेश + बीमा",
    benefits: ["Regular premium unit-linked plan", "Guaranteed additions from year 6", "Four fund options"],
    benefitsHi: ["नियमित प्रीमियम यूलिप", "छठे वर्ष से गारंटीड एडिशन", "चार फंड विकल्प"],
    group: "Market Linked", img: "ulip",
  },
  {
    slug: "nivesh-plus", planNo: "749", name: "LIC Nivesh Plus", nameHi: "एलआईसी निवेश प्लस",
    tag: "Single Premium ULIP", tagHi: "सिंगल प्रीमियम यूलिप",
    tagline: "One-Time Investment, Market Growth", taglineHi: "एकमुश्त निवेश, बाजार वृद्धि",
    benefits: ["Single premium unit-linked plan", "Guaranteed additions on the fund", "Free switches between funds"],
    benefitsHi: ["सिंगल प्रीमियम यूलिप", "फंड पर गारंटीड एडिशन", "फंड के बीच निःशुल्क स्विच"],
    group: "Market Linked", img: "ulip",
  },
] as const;

export const PLANS = ALL_PLANS.filter((p) =>
  ["kanyadan", "jeevan-anand", "jeevan-umang", "jeevan-labh"].includes(p.slug),
);

export const PLAN_GROUPS: PlanGroup[] = [
  "Endowment",
  "Whole Life",
  "Money Back",
  "Children",
  "Pension",
  "Term",
  "Micro & Mahila",
  "Market Linked",
];

export type Trophy = {
  src: string;
  title: string;
  year?: string;
  caption: string;
};
