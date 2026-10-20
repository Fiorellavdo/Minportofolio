/* =====================================================================
   DINA GRAFISKA PROFILER
   ---------------------------------------------------------------------
   Lägg till ett företag genom att kopiera ett block och ändra:
     name, tagline
     logo   – { type:"img", src:"media/logga.png" } ELLER { type:"text", text:"VAI" }
     bg     – bakgrundsfärg bakom loggan
     colors – lista med { hex, name }
     fonts  – lista med { name, role, sample }
   Spara – fliken byggs automatiskt.
   ===================================================================== */

window.PROFILES = [

  {
    name: "VAI Marketing",
    tagline: "Mediebyrå · digital marknadsföring och content. Exklusiv, mörk och elegant identitet.",
    logo: { type: "img", src: "Media/Vai/Vai logo.png" },
    bg: "#000000",
    colors: [
      { hex: "#000000", name: "Black" },
      { hex: "#2C1338", name: "Deep Plum" },
      { hex: "#5B1F2B", name: "Wine" },
      { hex: "#C28840", name: "Antique Gold" },
      { hex: "#E1D4E6", name: "Lavender Mist" },
      { hex: "#F6F2EE", name: "Cream" },
      { hex: "#FFFFFF", name: "White" }
    ],
    fonts: [
      { name: "Ethnocentric", role: "Logotyp & display", sample: "ETHNOCENTRIC AABBCC", css:"'Oswald',sans-serif" },
      { name: "Exo 2", role: "Rubriker · italic", sample: "Exo 2 AaBbCc", css:"'Exo 2',sans-serif", italic:true },
      { name: "Montserrat", role: "Brödtext", sample: "Montserrat AaBbCc", css:"'Montserrat',sans-serif" }
    ]
  },

  {
    name: "Evity",
    tagline: "Digital plattform · fräsch, tillgänglig och energisk profil med tydliga CTA:er.",
    logo: { type: "img", src: "Media/Evity/evity.png" },
    bg: "#F4FFDA",
    colors: [
      { hex: "#005431", name: "Deep Green" },
      { hex: "#0F486B", name: "Ocean Blue" },
      { hex: "#F28C56", name: "Coral" },
      { hex: "#FFB478", name: "Apricot" },
      { hex: "#E8F7C8", name: "Lime Mist" },
      { hex: "#F4FFDA", name: "Pale Lime" },
      { hex: "#DCEDF9", name: "Sky" },
      { hex: "#FFF6EB", name: "Warm White" }
    ],
    fonts: [
      { name: "Inter Bold", role: "Rubriker", sample: "Inter 12345 AaBbCcDd", css:"'Inter',sans-serif", weight:700 },
      { name: "Inter Regular", role: "Brödtext", sample: "Inter Regular AaBbCcDd", css:"'Inter',sans-serif" },
      { name: "Inter Medium", role: "Knappar · Boka demo", sample: "Boka demo →", css:"'Inter',sans-serif", weight:500 }
    ]
  },

  {
    name: "Umeå Stadsmission",
    tagline: "Ideell förening som verkar för alla människors rätt till bostad, sysselsättning och social trygghet. Uppdraget: utveckla tonaliteten i deras sociala kanaler.",
    logo: { type: "img", src: "Media/US/us-logo.png" },
    bg: "#F6F5F0",
    tone: {
      intro: "Vi tog fram detta som ett exempel på hur Umeå Stadsmission hade kunnat arbeta med sin tonalitet. Utöver den nuvarande tonaliteten som Umeå Stadsmission har ville vi att de skulle förmedla mer glädje, hopp och en positiv känsla i sina kanaler.",
      lead: "Det kunde de göra genom att:",
      points: [
        "Arbeta mer med färgglada och grafiskt intressanta bilder.",
        "Använda bilder med människor i fokus.",
        "Använda bilder i större format och bildspel vid inlägg med mycket information.",
        "Blanda videos, bilder och storys."
      ]
    },
    palettes: [
      {
        title: "Färgpalett · viktig information",
        text: "Denna färgpalett har en tydlig koppling till US tonalitet. Färgerna används för att belysa viktig information, till exempel akutbehov och fattigdomsrapporten.",
        colors: [
          { hex: "#E31E24", name: "Röd" },
          { hex: "#E85A3C", name: "Tomat" },
          { hex: "#F0862F", name: "Orange" },
          { hex: "#3D3D3D", name: "Grafit" },
          { hex: "#1A1A1A", name: "Svart" }
        ]
      },
      {
        title: "Färgpalett · glädje",
        text: "En ljusare färgpalett används vid mer lättsamma och glada inlägg. Gul är den primära kulören som starkt kopplas till glädje.",
        colors: [
          { hex: "#FFC93C", name: "Gul · primär" },
          { hex: "#FFBA55", name: "Solgul" },
          { hex: "#FFC468", name: "Ljus aprikos" },
          { hex: "#FFA86B", name: "Persika" },
          { hex: "#FF8F5E", name: "Korall" }
        ]
      }
    ],
    fonts: [
      { name: "Montserrat Black", role: "Rubriker", sample: "TONALITET", css:"'Montserrat',sans-serif", weight:900 },
      { name: "Montserrat Light", role: "Brödtext", sample: "Glädje, hopp och en positiv känsla", css:"'Montserrat',sans-serif", weight:300 }
    ],
    image: {
      title: "Före & efter",
      src: "Media/Utbilning/Marknadsplan - US.jpg",
      alt: "Umeå Stadsmissions Instagramflöde före och efter den nya tonaliteten",
      caption: "Instagramflödet idag jämfört med förslaget: färgglada, grafiska inlägg med människor i fokus, där paletterna skiljer viktig information från glada inlägg."
    }
  }

];
