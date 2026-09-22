// =========================================================================
// 🌙 WEDDING DATA CONFIGURATION
// Edit this file to update names, dates, venues, Quran verses, and settings!
// =========================================================================

export const weddingData = {
  // Couple Details
  groom: {
    name: "Wasim",
    fullName: "Wasim Akhtar Khan",
    fatherName: "Mr. Ali Akhtar Khan",
    motherName: "Mrs. Ahmadi Begum",
    title: "Groom"
  },
  bride: {
    name: "Warzina",
    fullName: "Warzina Khatoon",
    fatherName: "Late. Sheikh Samiuddin",
    motherName: "Mrs. Shabnam Khatoon",
    title: "Bride"
  },

  // Families
  families: {
    groomFamily: "Khan's Family",
    brideFamily: "Sheikh's Family",
    invitationHeader: "TOGETHER WITH OUR FAMILIES",
    invitationSubtext: "We request the honour of your presence at the blessed occasion of the Nikkah ceremony of our beloved children"
  },

  // Quran Verse / Blessing
  blessing: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation: "“And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts).”",
    reference: "— Surah Ar-Rum (30:21)"
  },

  // Event List
  events: [
    {
      id: "mehfil-e-zikr",
      title: "Mehfil-e-Zikr",
      arabicTitle: "مَحْفِلِ ذِكْر",
      date: "Friday, 23 October 2026",
      isoDate: "2026-10-23T19:00:00",
      time: "07:00 PM IST",
      venue: "Khan Manzil",
      location: "Inayatpur",
      googleMapsUrl: "https://maps.app.goo.gl/ba52W7RwZRojE3Wh7",
      dressCode: "Traditional",
      description: "An intimate gathering of family and close ones as revered scholars and Ulema lead us in Zikr — the remembrance of Allah and Naat in praise of the Holy Prophet ﷺ.",
      accentColor: "#1B5E6B"
    },
    {
      id: "departurebarat",
      title: "Departure Of Barat",
      arabicTitle: "رِحْلَةُ الْبَارَات",
      date: "Saturday, 24 October 2026",
      isoDate: "2026-10-24T18:00:00",
      time: "06:00 PM IST",
      venue: "Khan Manzil",
      location: "Inayatpur",
      googleMapsUrl: "https://maps.app.goo.gl/ba52W7RwZRojE3Wh7",
      dressCode: "Traditional / Formal Attire",
      description: "The groom's procession departs from Khan Manzil, Inayatpur, journeying towards the bride's venue with joy, prayers, and the blessings of family and friends.",
      accentColor: "#1B5E6B"
    },
    {
      id: "nikkah",
      title: "Nikkah Ceremony",
      arabicTitle: "حفل النكاح",
      date: "Saturday, 24 October 2026",
      isoDate: "2026-10-24T15:00:00",
      time: "08:00 PM IST",
      venue: "Hotel Limra",
      location: "M.M. Colony, Siwan",
      googleMapsUrl: "https://maps.app.goo.gl/HQgYZiujtmobixAX6",
      dressCode: "Traditional / Formal Attire",
      description: "The sacred Nikkah ceremony uniting Wasim and Warzina in the holy bond of matrimony. Witnessed by family, elders, and loved ones under the blessings of Allah.",
      accentColor: "#1B5E6B"
    },
    {
      id: "returnbarat",
      title: "Return Of Barat",
      arabicTitle: "عَوْدَةُ الْبَارَات",
      date: "Sunday, 25 October 2026",
      isoDate: "2026-10-25T06:00:00",
      time: "06:00 AM IST",
      venue: "Khan Manzil",
      location: "Inayatpur",
      googleMapsUrl: "https://maps.app.goo.gl/ba52W7RwZRojE3Wh7",
      dressCode: "Traditional / Formal Attire",
      description: "The groom's procession returns to Khan Manzil, Inayatpur, as the bride is welcomed into her new home with heartfelt prayers, joy, and the warmth of both families.",
      accentColor: "#1B5E6B"
    },
    {
      id: "walima",
      title: "Walima Reception",
      arabicTitle: "حفل الوليمة",
      date: "Monday, 26 October 2026",
      isoDate: "2026-10-26T19:00:00",
      time: "07:00 PM IST",
      venue: "Khan Manzil",
      location: "Inayatpur",
      googleMapsUrl: "https://maps.app.goo.gl/ba52W7RwZRojE3Wh7",
      dressCode: "Royal Evening / Formal",
      description: "A celebratory feast to commemorate the union with family, friends & loved ones.",
      accentColor: "#9E2A2B"
    }
  ],

  // Background Music Settings
  music: {
    title: "Wedding Nasheed",
    src: "/background-audio.mpeg",
    autoplayPrompt: "Background music on 🎵"
  },

  // RSVP / Contact Info
  rsvp: {
    enabled: true,
    whatsappNumber: "+919521421841",
    deadline: "Oct 26, 2026",
    contactPersons: [
      { name: "Mr. Ali Akhtar Khan", phone: "+918677000299", relation: "Groom's Father" },
      { name: "Mr. Nasim Akhtar Khan", phone: "+919521421841", relation: "Groom's Brother" }
    ]
  }
};
