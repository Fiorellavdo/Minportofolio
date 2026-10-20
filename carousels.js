/* =====================================================================
   KATEGORIER FÖR SHOWROOM
   ---------------------------------------------------------------------
   Bestämmer vilken ordning kategorierna visas i och vilken rubrik/
   etikett varje kategori får. Nyckeln måste matcha "src" nedan.
   ===================================================================== */
window.CATEGORIES = [
  { key: "vai", label: "VAI · kunder", desc: "Annonser och inlägg jag har tagit fram för byråns kunder, från idé och text till färdig design." },
  { key: "vaiegna", label: "VAI · egna kanaler", desc: "Innehåll för byråns egna kanaler, främst LinkedIn: karuseller, video och grafik." },
  { key: "evity", label: "Evity", desc: "LinkedIn-inlägg för ett B2B-företag, som en del av marknadsarbetet jag byggde upp." },
  { key: "silva", label: "Primus-Silva", desc: "Kampanjbilder och video för e-handel under min praktik." },
  { key: "utbildning", label: "Utbildning", desc: "Projekt från mina utbildningar inom marknadsföring och innehållsproduktion." },
  { key: "fritid", label: "Fritid", desc: "Egna projekt utanför jobb och skola." }
];

/* =====================================================================
   DINA KARUSELLER / SHOWROOM-CONTENT
   ---------------------------------------------------------------------
   Varje objekt:
     src       – sammanhang: "vai", "vaiegna", "evity", "silva",
                 "utbildning" eller "fritid"
     platform  – "meta" eller "linkedin" (versaler spelar ingen roll)
     client    – liten etikett ovanfor kortet
     label     – text under kortet
     images    – lista med filer (.png/.jpg = bild, .mp4 = video) i Media/

   VIKTIGT: satt aldrig ett komma efter sista bilden i en lista.
   ===================================================================== */

window.CAROUSELS = [

  // ===== VAI – EGNA KANALER =====
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Tjänstepaket",
    images: [
      "Media/Vai/En lösning som passar dig - 1.jpg",
      "Media/Vai/En lösning som passar dig - 2.jpg",
      "Media/Vai/En lösning som passar dig - 3.jpg",
      "Media/Vai/En lösning som passar dig - 4.jpg",
      "Media/Vai/En lösning som passar dig - 5.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Digital tillväxt",
    images: [
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 1.jpg",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 2.jpg",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 3.jpg",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 4.jpg",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 5.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Quiz",
    images: [
      "Media/Vai/Gör vår quiz - 1.jpg",
      "Media/Vai/Gör vår quiz - 2.jpg",
      "Media/Vai/Gör vår quiz - 3.jpg",
      "Media/Vai/Gör vår quiz - 4.jpg",
      "Media/Vai/Gör vår quiz - 5.jpg",
      "Media/Vai/Gör vår quiz - 6.jpg",
      "Media/Vai/Gör vår quiz - 7.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Hur funkar det",
    images: [
      "Media/Vai/Hur funkar det anlita oss (vai) - 6.jpg",
      "Media/Vai/Hur funkar det anlita oss (vai) - 7.jpg",
      "Media/Vai/Hur funkar det anlita oss (vai) - 8.jpg",
      "Media/Vai/Hur funkar det anlita oss (vai) - 9.jpg",
      "Media/Vai/Hur funkar det anlita oss (vai) - 10.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Insikter",
    images: [
      "Media/Vai/Insikter vanliga misstag - 1.jpg",
      "Media/Vai/Insikter vanliga misstag - 2.jpg",
      "Media/Vai/Insikter vanliga misstag - 3.jpg",
      "Media/Vai/Insikter vanliga misstag - 4.jpg",
      "Media/Vai/Insikter vanliga misstag - 5.jpg",
      "Media/Vai/Insikter vanliga misstag - 6.jpg",
      "Media/Vai/Insikter vanliga misstag - 7.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Banners",
    images: [
      "Media/Vai/Linkedin banner - 1.jpg",
      "Media/Vai/Linkedin banner - 2.jpg",
      "Media/Vai/Linkedin banner - 3.jpg",
      "Media/Vai/Linkedin banner - 4.jpg",
      "Media/Vai/Linkedin banner - 5.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Visitkort",
    images: [
      "Media/Vai/visitkort - 1.jpg",
      "Media/Vai/visitkort - 2.jpg",
      "Media/Vai/visitkort - 3.jpg",
      "Media/Vai/visitkort - 4.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Team",
    images: [
      "Media/Vai/Team bilder - 1.jpg",
      "Media/Vai/Team bilder - 2.jpg",
      "Media/Vai/Team bilder - 3.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Team",
    images: [
      "Media/Vai/Team bilder - 5.jpg"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Så jobbar vi",
    images: [
      "Media/Vai/Så jobbar vi - 1.jpg",
      "Media/Vai/Så jobbar vi - 2.jpg"
    ]
  },
  
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Team",
    images: [
      "Media/Vai/team.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Merry Christmas",
    images: [
      "Media/Vai/Merry Christmas!.mp4"
    ]
  },
  {
    src: "vaiegna",
    platform: "meta",
    client: "VAI · egna kanaler",
    label: "Quiz Reel",
    images: [
      "Media/Vai/Quiz - Reel.mp4"
    ]
  },
  {
    src: "vaiegna",
    platform: "meta",
    client: "VAI · egna kanaler",
    label: "We're back",
    images: [
      "Media/Vai/Were-back.mp4"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Hemsidan inlägg",
    images: [
      "Media/Vai/hemsidan inlägg (linkedin).mp4"
    ]
  },

  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Bakom kulisserna",
    images: [
     "Media/Vai/Bakomkulisserna.MOV"
    ]
  },

{
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Midsommar",
    images: [
     "Media/Vai/Midsommar (videoannons).mp4"
    ]
  },

  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Midsommar",
    images: [
     "Media/Vai/Midsommar.jpg"
    ]
  },

  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Midsommar",
    images: [
     "Media/Vai/1.jpg",
      "Media/Vai/2.jpg",
      "Media/Vai/3.jpg",
      "Media/Vai/4.jpg",
      "Media/Vai/5.jpg"
    ]
  },

  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "AI i svenskarnas vardag",
    images: [
      "Media/Vai/1.karusell internet.png",
      "Media/Vai/2.karusell internet.png",
      "Media/Vai/3.karusell internet.png",
      "Media/Vai/4.karusell internet.png",
      "Media/Vai/5.karusell internet.png",
      "Media/Vai/6.karusell internet.png",
      "Media/Vai/7.karusell internet.png",
      "Media/Vai/8.karusell internet.png"
    ]
  },

  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Kurs i Umeå",
    images: [
      "Media/Vai/Vi ses umeå.jpg"
    ]
  },


  // ===== VAI – KUNDER =====
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Carlssons Mattservice",
    images: [
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 1.jpg",
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 2.jpg",
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 3.jpg",
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 4.jpg"
    ]
  },

   {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Carlssons Mattservice",
    images: [
      "Media/Vai kunder/Juni - Kampanjen.jpg",
      "Media/Vai kunder/2.jpg"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Carlssons Mattservice · Badrum",
    images: [
      "Media/Vai kunder/Ditt drömbadrum.jpg",
      "Media/Vai kunder/du behöver inte kunna allt om badrum.jpg",
      "Media/Vai kunder/Godkänd.jpg",
      "Media/Vai kunder/känn dig trygg.jpg"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Fönsterputs",
    images: [
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 2.jpg",
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 4.jpg"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Fönsterputs",
    images: [
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 1.jpg",
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 3.jpg"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Hotel 1861 · B2B",
    images: [
      "Media/Vai kunder/Företag (hotel1861) - 1.jpg",
      "Media/Vai kunder/Företag (hotel1861) - 2.jpg"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Carlssons Mattservice · Gratis samtal",
    images: [
      "Media/Vai kunder/Gratis samtal (meta kampanj) - Carlssons Mattservice - 4.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Carlssons Mattservice · Gratis samtal",
    images: [
      "Media/Vai kunder/Gratis samtal (meta kampanj) - Carlssons Mattservice - 2.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Hotel 1861 · RALLY VM",
    images: [
      "Media/Vai kunder/Hotel 1861 (RALLY VM) (Instagram-inlägg (45)) - 1.jpg",
      "Media/Vai kunder/Hotel 1861 (RALLY VM) (Instagram-inlägg (45)) - 2.jpg"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Hotel 1861 · Sportlov",
    images: [
      "Media/Vai kunder/Sportlov (hotel1861) (1080 x 1350 px) - 1.jpg",
      "Media/Vai kunder/Sportlov (hotel1861) (1080 x 1350 px) - 2.jpg"
    ]
  },

    {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Träbyggarna",
    images: [
      "Media/Vai kunder/Träbyggarna 1.jpg",
      "Media/Vai kunder/Träbyggarna 2.jpg",
      "Media/Vai kunder/Träbyggarna 3.jpg"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Träbyggarna",
    images: [
      "Media/Vai kunder/Höstkmpanj2.jpg",
      "Media/Vai kunder/Höstkmpanj.jpg"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Hotel 1861",
    images: [
      "Media/Vai kunder/Annons 1 — Akut bostadsnöd.jpg"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Hotel 1861 · Hyr hela hotellet",
    images: [
      "Media/Vai kunder/Hyr hela hotell.jpg",
      "Media/Vai kunder/lås in er för en kväll.jpg"
    ]
  },



  // ===== EVITY =====
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/1.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/2.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/3.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/4.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/5 (1).jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/6.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/16.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/17.jpg"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "Evity · LinkedIn",
    images: [
      "Media/Evity/18.jpg"
    ]
  },

  // ===== PRIMUS-SILVA =====
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-6.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-5.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-1.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-2.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-3.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-4.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "40% kommer snart",
    images: [
      "Media/Primus-Silva/kommer-snart-1.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "40% kommer snart",
    images: [
      "Media/Primus-Silva/kommer-snart-2.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "40% kommer snart",
    images: [
      "Media/Primus-Silva/kommer-snart-3.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/10.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/20.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/30.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/40.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/50.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/60.jpg"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/Copy1.mp4"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/Copy 2.mp4"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/Copy 3.mp4"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Silva",
    images: [
      "Media/Primus-Silva/Helga & Fio Kampanjen.mp4"
    ]
  },

  // ===== FRITID =====
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Ny utbildning",
    images: [
      "Media/Fritid/Jobba med det som betyder något.jpg"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Ny utbildning",
    images: [
      "Media/Fritid/Lägg till lite brödtext.jpg"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Ny utbildning",
    images: [
      "Media/Fritid/Säkraettframtid.jpg"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Wilmas Cookies",
    images: [
      "Media/Fritid/Wilmas Cookies.jpg"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "En plats där unga hittar hem",
    images: [
      "Media/Fritid/En plats där unga människor hittar hem.mp4"
    ]
  },

  {
    src: "fritid",
    client: "Fritid",
    label: "Fritid",
    images: [
      "Media/Fritid/format.jpg",
      "Media/Fritid/exempel.png",
      "Media/Fritid/exempel 2.jpg"
    ]
  },

  // ===== UTBILDNING =====
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Målgrupp & koncept",
    images: [
      "Media/Utbilning/Målgrupp, Utveckla tonalitetbranding Content Calendar Content - bild Content - rörligt Copy Koncept för e-mail marketing.mp4"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Träningsresa",
    images: [
      "Media/Utbilning/Öka företagets hälsa med en träningsresa till den Franska kusten.mp4"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Björkstadens djurklinik",
    images: [
      "Media/Utbilning/Björkstadens djurklinik.jpg"
    ]
  },
  {
    src: "utbildning",
    platform: "linkedin",
    client: "Utbildning",
    label: "LinkedIn · Marknadsplan",
    images: [
      "Media/Utbilning/Marknadsplan - US (2).jpg"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Klädinsamling",
    images: [
      "Media/Utbilning/Klädinsamling.png"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Något meningsfullt",
    images: [
      "Media/Utbilning/genågotmeningsfullt.mp4"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Mood Board",
    images: [
      "Media/Utbilning/Mood-board.jpg"
    ]
  },
  {
    src: "utbildning",
    platform: "linkedin",
    client: "Utbildning",
    label: "LinkedIn",
    images: [
      "Media/Utbilning/1.jpg",
      "Media/Utbilning/2.jpg",
      "Media/Utbilning/3.jpg",
      "Media/Utbilning/4.jpg",
      "Media/Utbilning/5.jpg"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Meta",
    images: [
      "Media/Utbilning/4x5 boka hos oss.jpg",
      "Media/Utbilning/4x5 skapa minnen.jpg"
    ]
  },
  {
    src: "utbildning",
    platform: "linkedin",
    client: "Utbildning",
    label: "LinkedIn · Recension",
    images: [
      "Media/Utbilning/Linkedin recension.jpg"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Meta",
    images: [
      "Media/Utbilning/9x16 boka hos oss.jpg",
      "Media/Utbilning/9x16 skapa minnen.jpg",
      "Media/Utbilning/Favoritbild - byte av font och copy.jpg"
    ]
  }

];