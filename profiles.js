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
  }

];
