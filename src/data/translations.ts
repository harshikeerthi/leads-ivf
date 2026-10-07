export type Language = 'te' | 'en';

export interface Translation {
  nav: {
    brandName: string;
    tagline: string;
    freeCampBadge: string;
    phone: string;
    bookAppointment: string;
    emergencyCall: string;
    topBannerText: string;
    limitedSlots: string;
    bookNow: string;
    topBannerBadge: string;
    topBannerTitle: string;
    topBannerSubtitle: string;
    topBannerButton: string;
    campFormTitle: string;
    campFormSubtitle: string;
    campLocation: string;
  };
  hero: {
    badge: string;
    brandTag?: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    tagline?: string;
    subtext: string;
    locationBadge: string;
    offerBadge: string;
    offerText: string;
    offerOriginalPrice: string;
    offerSaveTag: string;
    offerNote: string;
    srikakulamOffer: string;
    keyPoints: string[];
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    ageLabel: string;
    agePlaceholder: string;
    mobileLabel: string;
    mobilePlaceholder: string;
    dateLabel: string;
    slotLabel: string;
    slotOptions: string[];
    submitButton: string;
    submitting: string;
    privacyNote: string;
  };
  stats: {
    cases: string;
    casesLabel: string;
    startingPrice: string;
    startingPriceLabel: string;
    successRate: string;
    successRateLabel: string;
  };
  inclusions: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
    pricingTitle: string;
    pricingSubtitle: string;
    packages: {
      name: string;
      price: string;
      subnote: string;
      highlights: string[];
      featured: boolean;
    }[];
    disclaimer: string;
  };
  doctors: {
    badge: string;
    title: string;
    subtitle: string;
    list: {
      id: string;
      name: string;
      title: string;
      qualifications: string;
      expBadge: string;
      photo: string;
      bio: string;
      achievementBadge: string;
    }[];
  };
  whyChoose: {
    title: string;
    items: {
      number: string;
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    button: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    addressTitle: string;
    addressValue: string;
    phoneTitle: string;
    phoneValue: string;
    hoursTitle: string;
    hoursValue: string;
    copyright: string;
  };
  modal: {
    title: string;
    subtitle: string;
    tokenLabel: string;
    nameLabel: string;
    phoneLabel: string;
    slotLabel: string;
    dateLabel: string;
    whatsappButton: string;
    closeButton: string;
    note: string;
  };
}

export const translations: Record<Language, Translation> = {
  te: {
    nav: {
      brandName: "మెడ్సీ IVF",
      tagline: "MIRACLES MADE HERE",
      freeCampBadge: "ఉచిత మెడికల్ క్యాంప్",
      phone: "+91 95025 34222",
      bookAppointment: "అపాయింట్మెంట్ బుక్ చేయండి",
      emergencyCall: "నేరుగా కాల్ చేయండి",
      topBannerText: "ప్రతి నెల ప్రతి శనివారం నిర్వహించబడే ఉచిత మెడికల్ క్యాంప్",
      limitedSlots: "పరిమిత స్లాట్‌లు మాత్రమే",
      bookNow: "ఇప్పుడే బుక్ చేయండి",
      topBannerBadge: "ఉచిత సంప్రదింపులు • పరిమిత స్లాట్‌లు",
      topBannerTitle: "ప్రతి నెల ప్రతి శనివారం నిర్వహించబడే ఉచిత మెడికల్ క్యాంప్",
      topBannerSubtitle: "ఈ రోజే మీ ఉచిత స్లాట్‌ను బుక్ చేసుకోండి మరియు వైజాగ్ టాప్ ఫెర్టిలిటీ నిపుణులను సంప్రదించండి.",
      topBannerButton: "మీ ఉచిత స్లాట్‌ను బుక్ చేసుకోండి",
      campFormTitle: "ఉచిత మెడికల్ క్యాంప్ రిజిస్ట్రేషన్",
      campFormSubtitle: "ఉచిత నిపుణుల సంప్రదింపుల కోసం మీ ఉచిత స్లాట్‌ను ఇప్పుడే బుక్ చేసుకోండి",
      campLocation: "మెడ్సీ IVF, చిన్నగదిలి ప్లాట్ 9A, హెల్త్ సిటీ, విశాఖపట్నం, అడవివరం, ఆంధ్రప్రదేశ్ 530040"
    },
    hero: {
      badge: "",
      brandTag: "MEDCY IVF",
      headlinePart1: "8,000+ కుటుంబాలు మాతో ఎదిగాయి.",
      headlineHighlight: "మీ కుటుంబం కూడా!",
      headlinePart2: "",
      tagline: "అత్యుత్తమ ఫెర్టిలిటీ సంరక్షణ. తల్లిదండ్రులు కావాలనే మీ ప్రయాణం ఇక్కడే మొదలవుతుంది.",
      subtext: "రుజువైన విజయవంతమైన రేట్లు, అగ్రశ్రేణి సంతానలేమి నిపుణులు మరియు అందుబాటు ధరల సంపూర్ణ చికిత్సా ప్రణాళికల కోసం మెడ్సీని ఎంచుకోండి. ఎటువంటి దాగి ఉన్న రుసుములు లేదా రిజిస్ట్రేషన్ ఛార్జీలు లేవు — మీరు తల్లిదండ్రులు కావడానికి తోడ్పడే నిజమైన నిపుణుల సంరక్షణ మాత్రమే.",
      locationBadge: "అరిలోవ హెల్త్ సిటీ, విశాఖపట్నం",
      offerBadge: "SPECIAL DISCOUNT PACKAGE OFFER",
      offerText: "IVF చికిత్స కేవలం ₹1.8 లక్షలకే!",
      offerOriginalPrice: "సాధారణ మార్కెట్ ధర: ₹1.9 లక్షలు",
      offerSaveTag: "రూ. 10,000 వర్సెస్ ₹1.9L తక్షణ ఆదా!",
      offerNote: "గమనిక: బయట క్లినిక్‌లలో రూ. 1.9L ఉండే ప్యాకేజీని మెడ్సీ IVF ప్రత్యేక డిస్కౌంట్ ఆఫర్‌తో రూ. 1.8L కే అందిస్తోంది.",
      srikakulamOffer: "శ్రీకాకుళం బ్రాంచ్‌లో సంపూర్ణ IVF చికిత్స కేవలం ₹1.5 లక్షలకే!",
      keyPoints: [
        "ఉచిత నిపుణుల సంప్రదింపులు",
        "ఉచిత కౌన్సెలింగ్",
        "ఎటువంటి రిజిస్ట్రేషన్ ఫీజు లేదు"
      ],
      formTitle: "కన్సల్టేషన్ రిజిస్ట్రేషన్ ఫారమ్",
      formSubtitle: "మీ కన్సల్టేషన్ స్లాట్‌ను ఇప్పుడే రిజర్వ్ చేసుకోండి",
      fullNameLabel: "పూర్తి పేరు *",
      fullNamePlaceholder: "మీ పూర్తి పేరును నమోదు చేయండి",
      ageLabel: "వయస్సు (ఐచ్ఛికం)",
      agePlaceholder: "ఉదా: 28",
      mobileLabel: "మొబైల్ ఫోన్ నంబర్ *",
      mobilePlaceholder: "+91 9XXXX XXXXX",
      dateLabel: "కన్సల్టేషన్ తేదీ ఎంచుకోండి *",
      slotLabel: "కన్సల్టేషన్ సమయం *",
      slotOptions: ["10:00 AM - 07:00 PM", "10:00 AM - 01:00 PM", "01:00 PM - 04:00 PM", "04:00 PM - 07:00 PM"],
      submitButton: "కన్ఫర్మ్ బుకింగ్",
      submitting: "నమోదు అవుతోంది...",
      privacyNote: "మీ వ్యక్తిగత సమాచారం సంపూర్ణంగా రహస్యంగా ఉంచబడుతుంది."
    },
    stats: {
      cases: "8,000+",
      casesLabel: "విజయవంతమైన కేసులు",
      startingPrice: "₹1.8L",
      startingPriceLabel: "IVF ప్యాకేజ్ ప్రారంభం",
      successRate: "ఉచితం",
      successRateLabel: "సంప్రదింపులు & కౌన్సెలింగ్"
    },
    inclusions: {
      badge: "INCLUSIONS",
      title: "1.8 Lakh Package Inclusions",
      subtitle: "",
      items: [
        {
          title: "IVF profiling tests & Scans",
          desc: "",
          icon: "Activity"
        },
        {
          title: "Semen Backup",
          desc: "",
          icon: "Database"
        },
        {
          title: "Stimulation Injections",
          desc: "",
          icon: "Syringe"
        },
        {
          title: "IVF/ICSI Procedure charges",
          desc: "",
          icon: "ShieldCheck"
        },
        {
          title: "Trigger Shot",
          desc: "",
          icon: "Target"
        },
        {
          title: "OT charges",
          desc: "",
          icon: "Building2"
        },
        {
          title: "Embryo Transfer",
          desc: "",
          icon: "HeartHandshake"
        },
        {
          title: "Embryo Freezing (6 months)",
          desc: "",
          icon: "Snowflake"
        }
      ],
      pricingTitle: "సులభమైన చికిత్స ప్యాకేజీల వివరాలు",
      pricingSubtitle: "ప్రతి దంపతుల అవసరాలకు అనుగుణంగా అనుకూలమైన ధరలలో అందుబాటులో ఉన్నాయి.",
      packages: [
        {
          name: "IVF / ICSI సంపూర్ణ ప్యాకేజ్",
          price: "₹1.8 లక్షలు",
          subnote: "అన్ని రకాల పరీక్షలు, OT, ఇంజెక్షన్లు & 6 నెలల ఫ్రీజింగ్‌తో",
          highlights: ["IVF ప్రొఫైలింగ్ & స్కాన్లు", "స్టిమ్యులేషన్ & ట్రిగ్గర్ షాట్", "Embryo ట్రాన్స్‌ఫర్ & ఫ్రీజింగ్", "Semen Backup చేర్చబడింది"],
          featured: true
        },
        {
          name: "IUI చికిత్స (Per Cycle)",
          price: "₹7,500",
          subnote: "ప్రారంభ దశ సంతాన సమస్యలకు సులువైన మార్గం",
          highlights: ["అల్ట్రాసౌండ్ మానిటరింగ్", "స్పెర్మ్ ప్రిపరేషన్", "IUI ప్రక్రియ ఛార్జీలు"],
          featured: false
        },
        {
          name: "Donor Insemination (DI)",
          price: "₹15,000",
          subnote: "ప్రత్యేక అవసరాలు కలిగిన దంపతులకు",
          highlights: ["డోనర్ సాంపుల్ ప్రిపరేషన్", "శాస్త్రీయ ప్రాసెస్", "కౌన్సెలింగ్ చేర్చబడింది"],
          featured: false
        }
      ],
      disclaimer: "గమనిక: రోగి ఆరోగ్య స్థితి మరియు వైద్యుల నివేదికల ఆధారంగా ఛార్జీలలో స్వల్ప మార్పులు ఉండవచ్చు."
    },
    doctors: {
      badge: "మా స్పెషలిస్ట్ డాక్టర్స్",
      title: "మా ఫెర్టిలిటీ నిపుణులు",
      subtitle: "దశాబ్దాల అనుభవం కలిగిన ప్రముఖ సంతానలేమి వైద్యుల బృందం మీ కలల కుటుంబాన్ని साकारం చేయడానికి నిరంతరం కృషి చేస్తోంది.",
      list: [
        {
          id: "dr-sireesha",
          name: "డా. సిరీష రాణి",
          title: "Founder & MD | Senior Infertility Specialist",
          qualifications: "MBBS, DNB (Ob & Gyn), DRM (Kiel Germany)",
          expBadge: "20+ YEARS EXP",
          photo: "/dr-sireesha-rani.png",
          bio: "జర్మన్ కీల్ IVF ప్రోటోకాల్స్, రీకరెంట్ వైఫల్యాలు మరియు హై-రిస్క్ ప్రెగ్నెన్సీ సంరక్షణలో ప్రత్యేక నైపుణ్యం కలిగిన ప్రముఖ సంతానలేమి నిపుణులు.",
          achievementBadge: "8,000+ Success Stories"
        },
        {
          id: "dr-sudeshna",
          name: "డా. సుధేష్ణాదేవి",
          title: "Fertility & Surgery Expert",
          qualifications: "MBBS, DNB (Ob & Gyn), FRM, FMAS, Dip.Cos.Gynecology",
          expBadge: "12+ YEARS EXP",
          photo: "/dr-sudeshna-devi.png",
          bio: "లాపరోస్కోపిక్ సర్జరీ, హిస్టెరోస్కోపీ, రిప్రొడక్టివ్ మెడిసిన్ మరియు వ్యక్తిగతీకరించిన అండాశయ ప్రేరణ విధానాలలో ప్రముఖ వైద్య నిపుణులు.",
          achievementBadge: "Laparoscopic Specialist"
        }
      ]
    },
    whyChoose: {
      title: "మా ప్రత్యేకతలు",
      items: [
        {
          number: "1",
          title: "8,000+ విజయవంతమైన కేసులు",
          desc: "విశాఖపట్నం మరియు పరిసర ప్రాంతాలలో అత్యధిక సంతానలేమి విజయాలు.",
          icon: "Trophy"
        },
        {
          number: "2",
          title: "జర్మన్ కీల్ ప్రొటోకాల్స్",
          desc: "ప్రపంచ ప్రఖ్యాతి గాంచిన అంతర్జాతీయ ఎంబ్రియోలాజీ ల్యాబ్ ప్రమాణాలు.",
          icon: "Gem"
        },
        {
          number: "3",
          title: "అనుభవజ్ఞులైన నిపుణులు",
          desc: "20+ సంవత్సరాల అనుభవం కలిగిన సీనియర్ వైద్యుల సంరక్షణ.",
          icon: "Stethoscope"
        },
        {
          number: "4",
          title: "వ్యక్తిగతీకరించిన సంరక్షణ",
          desc: "ప్రతి జంటకు అనుకూలమైన చికిత్సా విధానాలు మరియు కౌన్సెలింగ్.",
          icon: "HeartHandshake"
        },
        {
          number: "5",
          title: "అధునాతన సాంకేతికత",
          desc: "లేటెస్ట్ లేజర్ హాచింగ్ మరియు మైక్రో-మనిప్యులేషన్ సాంకేతికత.",
          icon: "Microscope"
        }
      ]
    },
    ctaBanner: {
      title: "తల్లిదండ్రులు కావాలనే మీ కల కేవలం ఒక్క క్లిక్ దూరంలో ఉంది",
      subtitle: "ఈరోజే మీ ఉచిత స్లాట్‌ను బుక్ చేసుకోండి మరియు నిపుణుల సలహాలు పొందండి.",
      button: "ఉచిత స్లాట్ బుక్ చేసుకోండి"
    },
    faq: {
      badge: "తరచుగా అడిగే ప్రశ్నలు",
      title: "మీ అనుమానాలకు సందేహ నివృత్తి",
      subtitle: "క్యాంప్ మరియు IVF ప్యాకేజీలకు సంబంధించి సాధారణ ప్రశ్నలు.",
      items: [
        {
          q: "ఉచిత మెడికల్ క్యాంప్‌లో ఏమేమి సేవలు లభిస్తాయి?",
          a: "ఉచిత ఫెర్టిలిటీ కన్సల్టేషన్, ఉచిత కౌన్సెలింగ్ మరియు శ్రీకాకుళం బ్రాంచ్‌లో ₹1.5 లక్షలకే IVF ఆఫర్ లభిస్తాయి."
        },
        {
          q: "IVF ₹1.8 లక్షల ప్యాకేజీలో ఏమేమి చేర్చబడ్డాయి?",
          a: "IVF ప్రొఫైలింగ్ పరీక్షలు, స్కాన్లు, స్టిమ్యులేషన్ ఇంజెక్షన్లు, IVF/ICSI ప్రక్రియ, OT ఛార్జీలు, Embryo ట్రాన్స్‌ఫర్, Semen backup మరియు 6 నెలల Embryo ఫ్రీజింగ్ చేర్చబడ్డాయి."
        },
        {
          q: "అపాయింట్మెంట్ కోసం ఏమేమి తెచ్చుకోవాలి?",
          a: "మీ వద్ద ఉన్న పాత మెడికల్ రిపోర్టులు, బ్లడ్ టెస్ట్ లేదా స్కానింగ్ కాపీలు ఏవైనా ఉంటే వెంట తెచ్చుకోవడం మంచిది."
        }
      ]
    },
    footer: {
      aboutTitle: "మెడ్సీ IVF & హాస్పిటల్స్",
      aboutText: "విశాఖపట్నంలో 8,000 పైగా విజయవంతమైన IVF కేసులతో అత్యుత్తమ సంతానలేమి చికిత్స నందిస్తున్న విశ్వసనీయ ఫెర్టిలిటీ సెంటర్.",
      addressTitle: "ఆసుపత్రి చిరునామా",
      addressValue: "ప్లాట్ నెం. 9A, హెల్త్ సిటీ, అరిలోవ, విశాఖపట్నం – 530040",
      phoneTitle: "హెల్ప్‌లైన్ & అపాయింట్మెంట్స్",
      phoneValue: "+91 95025 34222",
      hoursTitle: "పని చేయు సమయాలు",
      hoursValue: "సోమవారం - ఆదివారం: ఉదయం 9:00 - సాయంత్రం 6:00",
      copyright: "© 2026 MEDCY IVF & Hospitals. సర్వ హక్కులూ ప్రత్యేకించబడ్డాయి."
    },
    modal: {
      title: "అపాయింట్మెంట్ నమోదైంది! 🎉",
      subtitle: "మెడ్సీ IVF ఉచిత మెడికల్ క్యాంప్ రిజిస్ట్రేషన్ విజయవంతమైంది.",
      tokenLabel: "బుకింగ్ టోకెన్ నంబర్",
      nameLabel: "పేరు",
      phoneLabel: "ఫోన్",
      slotLabel: "సమయ స్లాట్",
      dateLabel: "తేదీ",
      whatsappButton: "WhatsApp లో కన్ఫర్మేషన్ పొందండి",
      closeButton: "సరే, ముగించు",
      note: "మా సంరక్షణ బృందం త్వరలోనే మీకు ఫోన్ చేసి సమయాన్ని స్థిరీకరిస్తారు."
    }
  },
  en: {
    nav: {
      brandName: "MEDCY IVF",
      tagline: "MIRACLES MADE HERE",
      freeCampBadge: "FREE MEDICAL CAMP",
      phone: "+91 95025 34222",
      bookAppointment: "Book Appointment",
      emergencyCall: "Call Now Direct",
      topBannerText: "Free Medical Camp Conducted Every Saturday of the Month",
      limitedSlots: "Limited Slots",
      bookNow: "Book Now",
      topBannerBadge: "FREE CONSULTATION • LIMITED SLOTS",
      topBannerTitle: "Free Medical Camp Conducted Every Saturday of the Month",
      topBannerSubtitle: "Book Your Free Slot Today and consult with Vizag's top fertility specialists.",
      topBannerButton: "Book Your Free Slot Today",
      campFormTitle: "Free Medical Camp Registration",
      campFormSubtitle: "Book your complimentary slot for a free expert fertility consultation",
      campLocation: "Medcy IVF, Chinnagadili Plot 9A, Health City, Visakhapatnam, Adavivaram, Andhra Pradesh 530040"
    },
    hero: {
      badge: "",
      brandTag: "MEDCY IVF",
      headlinePart1: "8,000+ Families Grew With Us.",
      headlineHighlight: "Yours Can Too.",
      headlinePart2: "",
      tagline: "Expert fertility care. Your journey to parenthood starts here.",
      subtext: "Choose Medcy for proven success rates, top-tier fertility specialists, and highly affordable, all-inclusive treatment plans. No hidden fees, no registration charges—just genuine, expert care to help you become parents.",
      locationBadge: "Arilova Health City, Visakhapatnam",
      offerBadge: "SPECIAL DISCOUNT PACKAGE OFFER",
      offerText: "IVF TREATMENT AT ₹1.8 LAKHS ONLY",
      offerOriginalPrice: "Standard Market Price: ₹1.9 Lakhs",
      offerSaveTag: "SAVE ₹10,000 VS REGULAR ₹1.9L!",
      offerNote: "Note: Standard market clinics charge ₹1.9 Lakhs — Medcy IVF provides complete treatment package at ₹1.8 Lakhs.",
      srikakulamOffer: "In Srikakulam Branch, Complete IVF Treatment at ₹1.5 Lakhs Only",
      keyPoints: [
        "Free Expert Consultation",
        "Free Counselling",
        "No Registration"
      ],
      formTitle: "Consultation Registration Form",
      formSubtitle: "Reserve your consultation spot today",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      ageLabel: "Age (Optional)",
      agePlaceholder: "e.g. 28",
      mobileLabel: "Mobile Phone Number *",
      mobilePlaceholder: "+91 9XXXX XXXXX",
      dateLabel: "Select Consultation Date *",
      slotLabel: "Consultation Time *",
      slotOptions: ["10:00 AM - 07:00 PM", "10:00 AM - 01:00 PM", "01:00 PM - 04:00 PM", "04:00 PM - 07:00 PM"],
      submitButton: "Confirm Booking",
      submitting: "Submitting...",
      privacyNote: "Your personal information is strictly confidential."
    },
    stats: {
      cases: "8,000+",
      casesLabel: "Successful Cases",
      startingPrice: "₹1.8L",
      startingPriceLabel: "Starting IVF Package",
      successRate: "FREE",
      successRateLabel: "Consultation & Counselling"
    },
    inclusions: {
      badge: "INCLUSIONS",
      title: "1.8 Lakh Package Inclusions",
      subtitle: "",
      items: [
        {
          title: "IVF profiling tests & Scans",
          desc: "",
          icon: "Activity"
        },
        {
          title: "Semen Backup",
          desc: "",
          icon: "Database"
        },
        {
          title: "Stimulation Injections",
          desc: "",
          icon: "Syringe"
        },
        {
          title: "IVF/ICSI Procedure charges",
          desc: "",
          icon: "ShieldCheck"
        },
        {
          title: "Trigger Shot",
          desc: "",
          icon: "Target"
        },
        {
          title: "OT charges",
          desc: "",
          icon: "Building2"
        },
        {
          title: "Embryo Transfer",
          desc: "",
          icon: "HeartHandshake"
        },
        {
          title: "Embryo Freezing (6 months)",
          desc: "",
          icon: "Snowflake"
        }
      ],
      pricingTitle: "Transparent Treatment Pricing",
      pricingSubtitle: "Customized treatment plans tailored to your specific medical profile.",
      packages: [
        {
          name: "All-Inclusive IVF / ICSI Package",
          price: "₹1.8 Lakhs",
          subnote: "Includes tests, scans, injections, OT, ET & 6 months freezing",
          highlights: ["Profiling Tests & Scans", "Stimulation & Trigger Shot", "Embryo Transfer & Freezing", "Semen Backup Included"],
          featured: true
        },
        {
          name: "IUI Treatment Package",
          price: "₹7,500",
          subnote: "Per cycle solution for early-stage fertility support",
          highlights: ["Ultrasound Monitoring", "Sperm Wash & Preparation", "IUI Procedure Fee"],
          featured: false
        },
        {
          name: "Donor Insemination (DI)",
          price: "₹15,000",
          subnote: "Per cycle procedure for specialized requirements",
          highlights: ["Donor Sample Preparation", "Clinical Lab Processing", "Counselling Included"],
          featured: false
        }
      ],
      disclaimer: "Note: Treatment fees may vary slightly depending on individualized clinical evaluation."
    },
    doctors: {
      badge: "MEET THE EXPERTS",
      title: "Meet the Experts",
      subtitle: "Trusted medical leadership with decades of proven experience in complex infertility & gynecological procedures.",
      list: [
        {
          id: "dr-sireesha",
          name: "Dr. Sireesha Rani",
          title: "Founder & MD | Senior Infertility Specialist",
          qualifications: "MBBS, DNB (Ob & Gyn), DRM (Kiel Germany)",
          expBadge: "20+ YEARS EXP",
          photo: "/dr-sireesha-rani.png",
          bio: "Pioneer in reproductive medicine with advanced specialization in German Kiel IVF protocols, recurrent failures, and high-risk pregnancy care.",
          achievementBadge: "8,000+ Success Stories"
        },
        {
          id: "dr-sudeshna",
          name: "Dr. Sudheshna Devi",
          title: "Fertility & Surgery Expert",
          qualifications: "MBBS, DNB (Ob & Gyn), FRM, FMAS, Dip.Cos.Gynecology",
          expBadge: "12+ YEARS EXP",
          photo: "/dr-sudeshna-devi.png",
          bio: "Expert in laparoscopic surgery, hysteroscopy, reproductive medicine, and personalized ovulation induction protocols.",
          achievementBadge: "Laparoscopic Specialist"
        }
      ]
    },
    whyChoose: {
      title: "Why Choose Medcy",
      items: [
        {
          number: "1",
          title: "8,000+ Success Stories",
          desc: "Leading fertility institute with proven success rates across centres.",
          icon: "Trophy"
        },
        {
          number: "2",
          title: "German Kiel Protocols",
          desc: "State-of-the-art embryology lab bench-marked to global benchmarks.",
          icon: "Gem"
        },
        {
          number: "3",
          title: "Senior Specialists",
          desc: "Decades of dedicated clinical expertise in complex infertility.",
          icon: "Stethoscope"
        },
        {
          number: "4",
          title: "Personalized Care",
          desc: "Customized protocols tailored to your unique diagnostic profile.",
          icon: "HeartHandshake"
        },
        {
          number: "5",
          title: "Cutting-Edge Tech",
          desc: "Advanced laser hatching and high-precision micromanipulation.",
          icon: "Microscope"
        }
      ]
    },
    ctaBanner: {
      title: "Your Dream of Parenthood is Just One Click Away",
      subtitle: "Book Your Free Slot Today and consult with Vizag's top fertility specialists.",
      button: "Book Your Free Slot Today"
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Answers to Your Questions",
      subtitle: "Clear answers regarding our free camp, consultation, and IVF treatments.",
      items: [
        {
          q: "What is included in the Free Medical Camp?",
          a: "The camp includes free initial fertility consultation, complimentary expert counselling, report evaluation, and special Srikakulam branch IVF rates from ₹1.5 Lakhs."
        },
        {
          q: "What is included in the ₹1.8 Lakh IVF Package?",
          a: "It includes profiling tests, scans, semen backup, stimulation injections, IVF/ICSI procedure, OT charges, embryo transfer, and 6 months embryo freezing."
        },
        {
          q: "What documents should I bring to the camp?",
          a: "Please bring any previous medical records, blood test reports, ultrasound scans, or prescriptions if available."
        }
      ]
    },
    footer: {
      aboutTitle: "MEDCY IVF & Hospitals",
      aboutText: "Visakhapatnam's premier fertility & reproductive medicine institute with 8,000+ successful IVF cases.",
      addressTitle: "Hospital Address",
      addressValue: "Plot No. 9A, Health City, Arilova, Visakhapatnam – 530040",
      phoneTitle: "Helpline & Appointments",
      phoneValue: "+91 95025 34222",
      hoursTitle: "Working Hours",
      hoursValue: "Mon - Sun: 9:00 AM - 6:00 PM",
      copyright: "© 2026 MEDCY IVF & Hospitals. All rights reserved."
    },
    modal: {
      title: "Appointment Reserved! 🎉",
      subtitle: "Your registration for Medcy IVF Free Medical Camp is confirmed.",
      tokenLabel: "Booking Token No.",
      nameLabel: "Name",
      phoneLabel: "Phone",
      slotLabel: "Time Slot",
      dateLabel: "Date",
      whatsappButton: "Receive Confirmation on WhatsApp",
      closeButton: "Close Confirmation",
      note: "Our patient care team will call you shortly to confirm your exact appointment slot."
    }
  }
};
