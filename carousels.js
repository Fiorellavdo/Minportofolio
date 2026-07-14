/* =====================================================================
   KATEGORIER FÖR SHOWROOM
   ---------------------------------------------------------------------
   Bestämmer vilken ordning kategorierna visas i och vilken rubrik/
   etikett varje kategori får. Nyckeln måste matcha "src" nedan.
   ===================================================================== */
window.CATEGORIES = [
  { key: "vai", label: "VAI · kunder" },
  { key: "vaiegna", label: "VAI · egna kanaler" },
  { key: "evity", label: "Evity" },
  { key: "silva", label: "Primus-Silva" },
  { key: "utbildning", label: "Utbildning" },
  { key: "fritid", label: "Fritid" }
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
      "Media/Vai/En lösning som passar dig - 1.png",
      "Media/Vai/En lösning som passar dig - 2.png",
      "Media/Vai/En lösning som passar dig - 3.png",
      "Media/Vai/En lösning som passar dig - 4.png",
      "Media/Vai/En lösning som passar dig - 5.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Digital tillväxt",
    images: [
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 1.png",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 2.png",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 3.png",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 4.png",
      "Media/Vai/Från lokalt hantverk till lönsam digital tillväxt - 5.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Quiz",
    images: [
      "Media/Vai/Gör vår quiz - 1.png",
      "Media/Vai/Gör vår quiz - 2.png",
      "Media/Vai/Gör vår quiz - 3.png",
      "Media/Vai/Gör vår quiz - 4.png",
      "Media/Vai/Gör vår quiz - 5.png",
      "Media/Vai/Gör vår quiz - 6.png",
      "Media/Vai/Gör vår quiz - 7.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Hur funkar det",
    images: [
      "Media/Vai/Hur funkar det anlita oss (vai) - 6.png",
      "Media/Vai/Hur funkar det anlita oss (vai) - 7.png",
      "Media/Vai/Hur funkar det anlita oss (vai) - 8.png",
      "Media/Vai/Hur funkar det anlita oss (vai) - 9.png",
      "Media/Vai/Hur funkar det anlita oss (vai) - 10.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Insikter",
    images: [
      "Media/Vai/Insikter vanliga misstag - 1.png",
      "Media/Vai/Insikter vanliga misstag - 2.png",
      "Media/Vai/Insikter vanliga misstag - 3.png",
      "Media/Vai/Insikter vanliga misstag - 4.png",
      "Media/Vai/Insikter vanliga misstag - 5.png",
      "Media/Vai/Insikter vanliga misstag - 6.png",
      "Media/Vai/Insikter vanliga misstag - 7.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Banners",
    images: [
      "Media/Vai/Linkedin banner - 1.png",
      "Media/Vai/Linkedin banner - 2.png",
      "Media/Vai/Linkedin banner - 3.png",
      "Media/Vai/Linkedin banner - 4.png",
      "Media/Vai/Linkedin banner - 5.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Visitkort",
    images: [
      "Media/Vai/visitkort - 1.png",
      "Media/Vai/visitkort - 2.png",
      "Media/Vai/visitkort - 3.png",
      "Media/Vai/visitkort - 4.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Team",
    images: [
      "Media/Vai/Team bilder - 1.png",
      "Media/Vai/Team bilder - 2.png",
      "Media/Vai/Team bilder - 3.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "generell",
    client: "VAI · egna kanaler",
    label: "Team",
    images: [
      "Media/Vai/Team bilder - 5.png"
    ]
  },
  {
    src: "vaiegna",
    platform: "linkedin",
    client: "VAI · egna kanaler",
    label: "Så jobbar vi",
    images: [
      "Media/Vai/Så jobbar vi - 1.png",
      "Media/Vai/Så jobbar vi - 2.png"
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

  // ===== VAI – KUNDER =====
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Trafik · Carlssons Mattservice",
    images: [
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 1.png",
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 2.png",
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 3.png",
      "Media/Vai kunder/(B2B) Första steg Carlssons Mattservice - 4.png"
    ]
  },

   {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Trafik · Carlssons Mattservice",
    images: [
      "media/Vai kunder/1.png",
      "media/Vai kunder/2.png",
      "media/Vai kunder/3.png"
    ]
  },

  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Försäljning · Fönsterputs",
    images: [
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 2.png",
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 4.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Försäljning · Fönsterputs",
    images: [
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 1.png",
      "Media/Vai kunder/Fönsterputs (meta kampanj)  - 3.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Trafik · B2B",
    images: [
      "Media/Vai kunder/Företag (hotel1861) - 1.png",
      "Media/Vai kunder/Företag (hotel1861) - 2.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Försäljning · Gratis samtal",
    images: [
      "Media/Vai kunder/Gratis samtal (meta kampanj) - Carlssons Mattservice - 4.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Försäljning · Gratis samtal",
    images: [
      "Media/Vai kunder/Gratis samtal (meta kampanj) - Carlssons Mattservice - 2.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Trafik · RALLY VM",
    images: [
      "Media/Vai kunder/Hotel 1861 (RALLY VM) (Instagram-inlägg (45)) - 1.png",
      "Media/Vai kunder/Hotel 1861 (RALLY VM) (Instagram-inlägg (45)) - 2.png"
    ]
  },
  {
    src: "vai",
    platform: "meta",
    client: "VAI · kunder",
    label: "Trafik · Sportlov",
    images: [
      "Media/Vai kunder/Sportlov (hotel1861) (1080 x 1350 px) - 1.png",
      "Media/Vai kunder/Sportlov (hotel1861) (1080 x 1350 px) - 2.png"
    ]
  },

  // ===== EVITY =====
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/1.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/2.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/3.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/4.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/5 (1).png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/6.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/16.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/17.png"
    ]
  },
  {
    src: "evity",
    platform: "linkedin",
    client: "Evity",
    label: "LinkedIn · ads",
    images: [
      "Media/Evity/18.png"
    ]
  },

  // ===== PRIMUS-SILVA =====
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-6.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-5.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-1.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-2.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-3.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "20% rabatt",
    images: [
      "Media/Primus-Silva/disconut-4.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "40% kommer snart",
    images: [
      "Media/Primus-Silva/kommer-snart-1.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "40% kommer snart",
    images: [
      "Media/Primus-Silva/kommer-snart-2.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "40% kommer snart",
    images: [
      "Media/Primus-Silva/kommer-snart-3.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/10.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/20.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/30.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/40.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/50.png"
    ]
  },
  {
    src: "silva",
    platform: "meta",
    client: "Primus-Silva",
    label: "Primus",
    images: [
      "Media/Primus-Silva/60.png"
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
      "Media/Fritid/Jobba med det som betyder något.png"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Ny utbildning",
    images: [
      "Media/Fritid/Lägg till lite brödtext.png"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Ny utbildning",
    images: [
      "Media/Fritid/Säkraettframtid.png"
    ]
  },
  {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Wilmas Cookies",
    images: [
      "Media/Fritid/Wilmas Cookies.png"
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
    platform: "meta",
    client: "Fritid",
    label: "IKEA POPUP",
    images: [
      "Media/Fritid/KOrv med bröd.png"
    ]
  },

   {
    src: "fritid",
    platform: "meta",
    client: "Fritid",
    label: "Arbetsprov",
    images: [
      "Media/Fritid/1.png",
      "Media/Fritid/2.png",
      "Media/Fritid/3.png",
      "Media/Fritid/4.png",
      "Media/Fritid/5.png"
    ]
  },

  // ===== UTBILDNING =====
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Instagram · Marknadsplan",
    images: [
      "Media/Utbilning/Marknadsplan - US.jpg"
    ]
  },
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
      "Media/Utbilning/Björkstadens djurklinik.png"
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
      "Media/Utbilning/Mood-board.png"
    ]
  },
  {
    src: "utbildning",
    platform: "linkedin",
    client: "Utbildning",
    label: "LinkedIn",
    images: [
      "Media/Utbilning/1.png",
      "Media/Utbilning/2.png",
      "Media/Utbilning/3.png",
      "Media/Utbilning/4.png",
      "Media/Utbilning/5.png"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Meta",
    images: [
      "Media/Utbilning/4x5 boka hos oss.png",
      "Media/Utbilning/4x5 skapa minnen.png"
    ]
  },
  {
    src: "utbildning",
    platform: "linkedin",
    client: "Utbildning",
    label: "LinkedIn · Recension",
    images: [
      "Media/Utbilning/Linkedin recension.png"
    ]
  },
  {
    src: "utbildning",
    platform: "meta",
    client: "Utbildning",
    label: "Meta",
    images: [
      "Media/Utbilning/9x16 boka hos oss.png",
      "Media/Utbilning/9x16 skapa minnen.png",
      "Media/Utbilning/Favoritbild - byte av font och copy.jpg"
    ]
  }

];