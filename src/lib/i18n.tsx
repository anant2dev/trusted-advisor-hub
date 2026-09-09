import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const STORAGE_KEY = "bima-lang";

type Dict = Record<string, { en: string; hi: string }>;

/** Shared UI copy. Keys are grouped by page prefix. */
export const STRINGS: Dict = {
  "nav.consult": { en: "Consult Now", hi: "अभी सलाह लें" },
  "nav.language": { en: "Language", hi: "भाषा" },
  "common.book": { en: "Book Free Consultation", hi: "निःशुल्क परामर्श बुक करें" },
  "common.inquire": { en: "Check Eligibility / Inquire", hi: "पात्रता जाँचें / पूछताछ करें" },
  "common.whatsapp": { en: "Chat on WhatsApp", hi: "व्हाट्सएप पर बात करें" },
  "common.call": { en: "Call Now", hi: "अभी कॉल करें" },
  "common.viewPlans": { en: "View All Plans", hi: "सभी पॉलिसी देखें" },
  "common.takeQuiz": { en: "Take the 60-second quiz", hi: "60 सेकंड की क्विज़ लें" },
  "common.planNo": { en: "Plan No.", hi: "प्लान नं." },

  "plans.badge": { en: "LIC of India · Complete Catalogue", hi: "भारतीय जीवन बीमा निगम · पूरी सूची" },
  "plans.h1a": { en: "Every LIC Plan, Explained in", hi: "हर एलआईसी योजना, सरल भाषा में" },
  "plans.h1b": { en: "Plain Language.", hi: "समझाई गई।" },
  "plans.intro": {
    en: "From a daughter's first dream to a retiree's peaceful evenings — browse the full LIC catalogue with eligibility, examples and honest caveats for each plan.",
    hi: "बेटी के पहले सपने से लेकर सेवानिवृत्ति की शांत शामों तक — हर योजना की पात्रता, उदाहरण और ईमानदार सीमाओं के साथ पूरी सूची देखें।",
  },
  "plans.quizTitle": { en: "Not sure which one? Take the 60-second quiz.", hi: "तय नहीं कर पा रहे? 60 सेकंड की क्विज़ लें।" },
  "plans.quizSub": { en: "Six questions — we score every plan and show your top two matches.", hi: "छह प्रश्न — हम हर योजना को परखकर आपके लिए दो सर्वोत्तम विकल्प बताते हैं।" },
  "plans.disclaimer": {
    en: "* Plan details are indicative. Final terms, eligibility and bonuses follow the official LIC of India policy documents.",
    hi: "* विवरण संकेतात्मक हैं। अंतिम शर्तें, पात्रता और बोनस एलआईसी के आधिकारिक पॉलिसी दस्तावेज़ों के अनुसार होंगे।",
  },

  "details.show": { en: "See full details", hi: "पूरा विवरण देखें" },
  "details.hide": { en: "Hide full details", hi: "विवरण छिपाएँ" },
  "details.category": { en: "Category", hi: "श्रेणी" },
  "details.entryAge": { en: "Entry age", hi: "प्रवेश आयु" },
  "details.policyTerm": { en: "Policy term", hi: "पॉलिसी अवधि" },
  "details.premiumTerm": { en: "You pay for", hi: "भुगतान अवधि" },
  "details.minCover": { en: "Minimum", hi: "न्यूनतम" },
  "details.payout": { en: "Payout", hi: "भुगतान" },
  "details.bestFor": { en: "Best for", hi: "किनके लिए उपयुक्त" },
  "details.example": { en: "Example:", hi: "उदाहरण:" },
  "details.notIdeal": { en: "Not ideal for:", hi: "किनके लिए उपयुक्त नहीं:" },

  /* ---------------- Home ---------------- */
  "home.badge": { en: "Authorized LIC of India Advisor", hi: "अधिकृत एलआईसी सलाहकार" },
  "home.heroLead": { en: "Know Exactly Which LIC", hi: "जानिए कौन-सी एलआईसी योजना" },
  "home.heroHighlight": { en: "Plan Fits Your Family", hi: "आपके परिवार के लिए सही है" },
  "home.heroTail": { en: "— in under a minute.", hi: "— एक मिनट से भी कम में।" },
  "home.heroSub": {
    en: "Answer six honest questions and see the two plans that actually match your goal, age and budget. No sign-up, no sales call, nothing stored.",
    hi: "छह सरल प्रश्नों के उत्तर दीजिए और देखिए वे दो योजनाएँ जो आपके लक्ष्य, आयु और बजट से मेल खाती हैं। न रजिस्ट्रेशन, न सेल्स कॉल, कुछ भी सेव नहीं होता।",
  },
  "home.primaryCta": { en: "Find my plan", hi: "मेरी योजना खोजें" },
  "home.talk": { en: "Talk to the advisor", hi: "सलाहकार से बात करें" },
  "home.compliant": { en: "IRDAI-compliant · Strictly confidential consultations", hi: "IRDAI अनुरूप · पूर्णतः गोपनीय परामर्श" },
  "home.dmClub": { en: "Distinguished DM Club Member", hi: "डिस्टिंग्विश्ड डीएम क्लब सदस्य" },
  "home.dmClubSub": { en: "A rare recognition of trust & excellence", hi: "विश्वास और उत्कृष्टता की दुर्लभ पहचान" },
  "home.statYears": { en: "Years of Experience", hi: "वर्षों का अनुभव" },
  "home.statFamilies": { en: "Families Protected", hi: "परिवार सुरक्षित" },
  "home.statClub": { en: "Club Member · LIC", hi: "क्लब सदस्य · एलआईसी" },
  "home.recognition": { en: "Recognition", hi: "सम्मान" },
  "home.awards": { en: "Awards & Achievements", hi: "पुरस्कार एवं उपलब्धियाँ" },
  "home.awardsIntro": {
    en: "Over two decades there have been many — we have kept things minimal here to let the work speak. A small selection is shown below; the rest sit quietly on the shelf.",
    hi: "दो दशकों में कई सम्मान मिले हैं — यहाँ हमने कुछ ही रखे हैं ताकि काम स्वयं बोले। नीचे एक छोटा चयन है; बाकी शांति से अलमारी में हैं।",
  },
  "home.quizBadge": { en: "New · 60-second quiz", hi: "नया · 60 सेकंड की क्विज़" },
  "home.quizTitle": { en: "Not sure which LIC plan fits you?", hi: "तय नहीं कर पा रहे कौन-सी योजना सही है?" },
  "home.quizSub": {
    en: "Answer six honest questions — goal, age, horizon, budget, priorities and dependents. We score every plan and show your top two matches, then carry your choice straight into the booking form.",
    hi: "छह प्रश्न — लक्ष्य, आयु, अवधि, बजट, प्राथमिकताएँ और आश्रित। हम हर योजना को परखकर आपके दो सर्वोत्तम विकल्प दिखाते हैं और वही चयन बुकिंग फॉर्म में भर देते हैं।",
  },
  "home.featured": { en: "Featured Plans", hi: "चुनिंदा योजनाएँ" },
  "home.featuredTitle": { en: "Built for every milestone of life.", hi: "जीवन के हर पड़ाव के लिए।" },
  "home.privacyPledge": { en: "The Privacy Pledge", hi: "गोपनीयता का वचन" },
  "home.privacyTitleA": { en: "Why You Won't Find", hi: "यहाँ आपको ग्राहकों की" },
  "home.privacyTitleB": { en: "Client Reviews", hi: "समीक्षाएँ" },
  "home.privacyTitleC": { en: "Here.", hi: "क्यों नहीं मिलेंगी।" },
  "home.privacyBody": {
    en: "Financial planning is deeply personal. I respect my clients' privacy too much to turn their life savings, family structures, or private assets into a public marketing gimmick. My 20+ years of unblemished service, DM Club recognition, and the absolute silence of 1000+ peacefully sleeping families are the only proofs I need. Your financial data stays secure with me — permanently.",
    hi: "वित्तीय योजना अत्यंत निजी विषय है। मैं अपने ग्राहकों की जीवनभर की बचत, परिवार या संपत्ति को विज्ञापन का साधन नहीं बनाता। 20+ वर्षों की निष्कलंक सेवा, डीएम क्लब सम्मान और 1000+ निश्चिंत परिवारों की शांति ही मेरा प्रमाण है। आपकी वित्तीय जानकारी सदैव सुरक्षित रहती है।",
  },
  "home.bookPrivate": { en: "Book a Private Consultation", hi: "निजी परामर्श बुक करें" },
  "home.aboutPractice": { en: "About My Practice", hi: "मेरे बारे में" },
  "home.whyChoose": { en: "Why Families Choose Us", hi: "परिवार हमें क्यों चुनते हैं" },
  "home.whyTitle": { en: "A practice built on quiet competence.", hi: "शांत विशेषज्ञता पर बनी सेवा।" },

  /* ---------------- About ---------------- */
  "about.badge": { en: "About the Advisor", hi: "सलाहकार के बारे में" },
  "about.h1a": { en: "Two decades of quiet, consistent service —", hi: "दो दशकों की शांत, निरंतर सेवा —" },
  "about.h1b": { en: "one family at a time.", hi: "एक-एक परिवार के साथ।" },
  "about.p1": {
    en: "For over 20 years, my practice has been built on a single principle: a life insurance policy is a promise to a family that must outlive the policyholder. That promise demands honesty before commission, clarity before complexity, and discretion above all else.",
    hi: "20+ वर्षों से मेरी सेवा एक सिद्धांत पर टिकी है: बीमा पॉलिसी परिवार से किया वह वादा है जो पॉलिसीधारक के बाद भी निभना चाहिए। इसके लिए कमीशन से पहले ईमानदारी, जटिलता से पहले स्पष्टता और सबसे बढ़कर गोपनीयता ज़रूरी है।",
  },
  "about.p2": {
    en: "I serve over a thousand Indian families — across hometowns, metros, and the diaspora — with custom-fit LIC of India plans. No cold calls, no pressure, no pushy upselling. Just careful listening, transparent paperwork, and lifelong after-sales service.",
    hi: "मैं एक हज़ार से अधिक भारतीय परिवारों की सेवा करता हूँ — छोटे शहरों, महानगरों और विदेश में — उनके अनुरूप एलआईसी योजनाओं के साथ। न कोल्ड कॉल, न दबाव, न ज़बरदस्ती। केवल ध्यान से सुनना, पारदर्शी कागज़ात और आजीवन सेवा।",
  },
  "about.journey": { en: "Club Membership Journey", hi: "क्लब सदस्यता यात्रा" },
  "about.journeyTitle": { en: "A career measured in milestones.", hi: "उपलब्धियों से मापा गया करियर।" },
  "about.recognitions": { en: "Recognitions", hi: "सम्मान" },
  "about.trophyWall": { en: "Trophies & Medals Wall", hi: "ट्रॉफी एवं पदक दीवार" },
  "about.trophyIntro": {
    en: "Holding 20–30 trophies and 10–12 medals across two decades of LIC excellence — quietly earned, never advertised.",
    hi: "दो दशकों में 20–30 ट्रॉफियाँ और 10–12 पदक — चुपचाप अर्जित, कभी प्रचारित नहीं।",
  },
  "about.moreCabinet": { en: "…and many more in the cabinet.", hi: "…और भी बहुत सारे अलमारी में हैं।" },
  "about.moreCabinetSub": {
    en: "Photographing every trophy from 20+ years takes time — so only a handful are shown here. We prefer quiet service over loud display.",
    hi: "20+ वर्षों की हर ट्रॉफी की तस्वीर लेने में समय लगता है — इसलिए यहाँ कुछ ही दिखाई गई हैं। हम दिखावे से अधिक शांत सेवा पसंद करते हैं।",
  },
  "about.ctaTitle": { en: "Ready for a quiet, expert conversation?", hi: "एक शांत, विशेषज्ञ बातचीत के लिए तैयार हैं?" },
  "about.ctaSub": { en: "No sales pitch. Just clarity for your family's future.", hi: "कोई सेल्स पिच नहीं। सिर्फ़ आपके परिवार के भविष्य की स्पष्टता।" },
  "about.bookAppt": { en: "Book Appointment", hi: "अपॉइंटमेंट बुक करें" },
  "about.promise": { en: "The Promise", hi: "वादा" },
  "about.promiseTitle": {
    en: "What you actually get — not what brochures promise.",
    hi: "आपको वास्तव में क्या मिलता है — ब्रोशर के वादे नहीं।",
  },
  "about.promiseSub": {
    en: "Six things every family I serve receives, written down so we both stay honest.",
    hi: "छह बातें जो मेरे हर ग्राहक परिवार को मिलती हैं — लिखित रूप में, ताकि हम दोनों ईमानदार रहें।",
  },

  /* ---------------- Booking ---------------- */
  "book.kicker": { en: "Book Appointment", hi: "अपॉइंटमेंट बुक करें" },
  "book.h1": { en: "Why book a consultation?", hi: "परामर्श क्यों बुक करें?" },
  "book.sub": {
    en: "One unhurried call. Honest answers. A plan that fits your family — not a script.",
    hi: "एक इत्मीनान भरी बातचीत। ईमानदार उत्तर। आपके परिवार के अनुरूप योजना — कोई रटी-रटाई स्क्रिप्ट नहीं।",
  },
  "book.direct": { en: "Direct Contact", hi: "सीधा संपर्क" },
  "book.name": { en: "Full Name *", hi: "पूरा नाम *" },
  "book.email": { en: "Email Address", hi: "ईमेल पता" },
  "book.emailHint": { en: "Optional — only if you prefer email over WhatsApp.", hi: "वैकल्पिक — यदि आप व्हाट्सएप के बजाय ईमेल पसंद करते हैं।" },
  "book.phone": { en: "Phone / WhatsApp *", hi: "फ़ोन / व्हाट्सएप *" },
  "book.who": { en: "Who is this for?", hi: "यह किसके लिए है?" },
  "book.ageGroup": { en: "Age Group of Insured", hi: "बीमित व्यक्ति की आयु" },
  "book.plan": { en: "Interested Policy", hi: "पसंदीदा पॉलिसी" },
  "book.autoSelected": { en: "Auto-selected from your previous page", hi: "पिछले पेज से स्वतः चुनी गई" },
  "book.note": { en: "Additional Note", hi: "अतिरिक्त संदेश" },
  "book.notePlaceholder": { en: "Anything specific you'd like to discuss?", hi: "कुछ विशेष जिस पर बात करनी हो?" },
  "book.ready": { en: "Ready to send", hi: "भेजने के लिए तैयार" },
  "book.left": { en: "2 quick fields left", hi: "2 जानकारी शेष" },
  "book.sendWa": { en: "Send on WhatsApp — instant reply", hi: "व्हाट्सएप पर भेजें — तुरंत उत्तर" },
  "book.waHint": {
    en: "Opens WhatsApp with your details pre-filled. You send it — nothing is submitted here.",
    hi: "व्हाट्सएप आपकी जानकारी के साथ खुलेगा। भेजना आपके हाथ में है — यहाँ कुछ भी सबमिट नहीं होता।",
  },
  "book.or": { en: "or", hi: "अथवा" },
  "book.sendEmail": { en: "Send by email instead", hi: "इसके बजाय ईमेल भेजें" },
  "book.privacy": {
    en: "Your data is processed directly on your device and sent via secure messaging. We do not store your details on any external database.",
    hi: "आपकी जानकारी आपके ही डिवाइस पर संसाधित होकर सुरक्षित संदेश द्वारा भेजी जाती है। हम इसे किसी बाहरी डेटाबेस में संग्रहीत नहीं करते।",
  },

  /* ---------------- Plans hero ---------------- */
  "plans.heroBadge": { en: "LIC of India · Curated Selection", hi: "भारतीय जीवन बीमा निगम · चयनित सूची" },
  "plans.heroH1a": { en: "Curated LIC Plans for", hi: "जीवन के हर पड़ाव के लिए" },
  "plans.heroH1b": { en: "Every Stage of Life.", hi: "चुनी हुई एलआईसी योजनाएँ।" },
  "plans.heroIntro": {
    en: "From a daughter's first dream to a retiree's peaceful evenings — each plan below is hand-picked, time-tested, and personally recommended after 20+ years of advisory practice.",
    hi: "बेटी के पहले सपने से लेकर सेवानिवृत्ति की शांत शामों तक — नीचे दी हर योजना 20+ वर्षों के अनुभव के बाद स्वयं चुनी और परखी गई है।",
  },
  "plans.count": { en: "plans", hi: "योजनाएँ" },
  "common.emailButton": { en: "Email", hi: "ईमेल" },
  "common.faq": { en: "Frequently asked questions", hi: "अक्सर पूछे जाने वाले प्रश्न" },
  "common.faqIntro": { en: "Honest answers to what most families ask before our first call.", hi: "पहली बातचीत से पहले परिवारों द्वारा पूछे जाने वाले प्रश्नों के स्पष्ट उत्तर।" },
  "home.trusted": { en: "Trusted Advisory", hi: "विश्वसनीय सलाह" },
  "home.trustedTitle": { en: "Protection built on two decades of trust.", hi: "दो दशकों के विश्वास पर बनी सुरक्षा।" },
  "home.trustedBody": { en: "Every policy is a promise. Ram Singh Rathore examines yours from every angle and builds it to last a lifetime.", hi: "हर पॉलिसी एक वादा है। राम सिंह राठौर आपकी योजना को हर पहलू से समझकर आजीवन साथ देने योग्य बनाते हैं।" },
  "home.explore": { en: "Explore Plans", hi: "पॉलिसी देखें" },
  "about.current": { en: "Current", hi: "वर्तमान" },
  "about.progress": { en: "In Progress", hi: "प्रगति पर" },
  "about.future": { en: "Future Vision", hi: "भविष्य का लक्ष्य" },
  "book.nameError": { en: "Please enter your full name.", hi: "कृपया अपना पूरा नाम लिखें।" },
  "book.phoneError": { en: "Please enter a phone number we can reach you on.", hi: "कृपया संपर्क के लिए फ़ोन नंबर लिखें।" },
  "book.phoneInvalid": { en: "That doesn't look like a valid phone number.", hi: "यह फ़ोन नंबर सही नहीं लग रहा।" },
  "book.namePlaceholder": { en: "e.g. Rajesh Kumar", hi: "जैसे राजेश कुमार" },
  "plans.why": { en: "Why these plans", hi: "इन योजनाओं को क्यों चुनें" },
  "plans.whyTitle": { en: "A complete catalogue, explained honestly.", hi: "पूरी सूची, सरल और ईमानदार जानकारी के साथ।" },
  "plans.coverage": { en: "Pan-India · NRI Coverage", hi: "पूरे भारत · प्रवासी भारतीय सेवा" },
  "plans.coverageTitle": { en: "From Agra to your time-zone — one advisor, lifelong.", hi: "आगरा से आपके समय-क्षेत्र तक — एक सलाहकार, आजीवन।" },
  "plans.coverageBody": { en: "Wherever you live, the same advisor stays with your policy. Digital KYC, medicals and signatures are handled in your time-zone.", hi: "आप कहीं भी रहें, वही सलाहकार आपकी पॉलिसी के साथ रहता है। डिजिटल KYC, मेडिकल और हस्ताक्षर आपके समय के अनुसार पूरे किए जाते हैं।" },
  "footer.about": { en: "Two decades of honest, transparent financial protection for Indian families — at home and abroad.", hi: "भारत और विदेश में भारतीय परिवारों के लिए दो दशकों की ईमानदार और पारदर्शी वित्तीय सुरक्षा।" },
  "footer.links": { en: "Quick Links", hi: "मुख्य लिंक" },
  "footer.hours": { en: "Office Hours", hi: "कार्यालय समय" },
  "footer.contact": { en: "Contact", hi: "संपर्क" },
  "footer.weekdays": { en: "Mon – Sat · 10:00 – 19:00", hi: "सोम – शनि · 10:00 – 19:00" },
  "footer.sunday": { en: "Sun · By appointment", hi: "रविवार · अपॉइंटमेंट द्वारा" },
  "footer.disclaimer": { en: "Insurance is the subject matter of solicitation. Information is indicative — please verify policy T&C.", hi: "बीमा आग्रह की विषयवस्तु है। जानकारी संकेतात्मक है — पॉलिसी की शर्तें अवश्य जाँचें।" },
  "footer.copyright": { en: "Authorized Life Insurance Corporation of India Agent.", hi: "भारतीय जीवन बीमा निगम के अधिकृत एजेंट।" },
  "quiz.finder": { en: "Plan Finder", hi: "योजना खोजक" },
  "quiz.back": { en: "Back", hi: "वापस" },
  "quiz.best": { en: "Best match", hi: "सबसे सही विकल्प" },
  "quiz.alternative": { en: "Strong alternative", hi: "दूसरा अच्छा विकल्प" },
  "quiz.matches": { en: "Your top matches", hi: "आपके सर्वोत्तम विकल्प" },
  "quiz.retake": { en: "Retake the quiz", hi: "क्विज़ फिर से लें" },
  "quiz.book": { en: "Book with this plan preselected", hi: "इस योजना के साथ अपॉइंटमेंट बुक करें" },
  "quiz.free": { en: "Free · No sign-up", hi: "निःशुल्क · रजिस्ट्रेशन नहीं" },
  "quiz.title": { en: "Which LIC plan actually fits your family?", hi: "आपके परिवार के लिए कौन-सी एलआईसी योजना सही है?" },
  "quiz.intro": { en: "Six honest questions about your goal, age, horizon and budget. We compare the catalogue and show your top two matches.", hi: "आपके लक्ष्य, आयु, अवधि और बजट पर छह सरल प्रश्न। हम पूरी सूची से आपके दो सर्वोत्तम विकल्प दिखाते हैं।" },
  "process.kicker": { en: "How it actually works", hi: "प्रक्रिया कैसे काम करती है" },
  "process.title": { en: "Five steps. No pressure at any of them.", hi: "पाँच आसान चरण। किसी भी चरण में कोई दबाव नहीं।" },
  "process.intro": { en: "You can stop after step two with a written comparison in hand and never receive a sales call.", hi: "दूसरे चरण के बाद लिखित तुलना लेकर रुक सकते हैं — कोई सेल्स कॉल नहीं आएगी।" },
  "glossary.kicker": { en: "Jargon decoder", hi: "बीमा शब्दावली" },
  "glossary.title": { en: "Every insurance word, in plain language.", hi: "बीमा के हर शब्द का सरल अर्थ।" },
  "glossary.intro": { en: "Read this once and understand any LIC brochure more easily.", hi: "इसे एक बार पढ़ें और किसी भी एलआईसी ब्रोशर को आसानी से समझें।" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string; pick: (en: string, hi: string) => string };

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => STRINGS[k]?.en ?? k,
  pick: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Lang | null) : null;
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: (key) => {
        const entry = STRINGS[key];
        if (!entry) return key;
        return lang === "hi" ? entry.hi : entry.en;
      },
      pick: (en, hi) => (lang === "hi" ? hi : en),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
