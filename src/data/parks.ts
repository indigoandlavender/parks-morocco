export interface Park {
  id: string;
  name: string;
  arabicName: string;
  region: string;
  established: number;
  size: string;
  description: string;
  longDescription: string;
  highlights: string[];
  wildlife: string[];
  activities: string[];
  bestTimeToVisit: string;
  nearestCity: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
}

export const regions = [
  "High Atlas",
  "Middle Atlas",
  "Rif Mountains",
  "Souss-Massa",
  "Mediterranean Coast",
  "Sahara",
  "Anti-Atlas",
] as const;

export type Region = (typeof regions)[number];

export const parks: Park[] = [
  {
    id: "toubkal",
    name: "Toubkal National Park",
    arabicName: "منتزه توبقال الوطني",
    region: "High Atlas",
    established: 1942,
    size: "380 km²",
    description:
      "Home to North Africa's highest peak, Jbel Toubkal (4,167m), this is Morocco's oldest and most visited national park.",
    longDescription:
      "Toubkal National Park, established in 1942, is Morocco's crown jewel of natural heritage. Located in the High Atlas Mountains just a short drive from Marrakech, the park encompasses the highest peak in North Africa - Jbel Toubkal at 4,167 meters. The dramatic mountain landscape features deep valleys, traditional Berber villages, and alpine meadows. The park offers world-class trekking opportunities, from day hikes to multi-day expeditions to the summit. The region is also culturally rich, with Amazigh (Berber) communities maintaining traditional ways of life in the high valleys.",
    highlights: [
      "Summit of Jbel Toubkal - North Africa's highest peak",
      "Traditional Berber villages like Imlil and Aroumd",
      "Lac d'Ifni - a stunning glacial lake",
      "Dramatic mountain passes and valleys",
    ],
    wildlife: [
      "Golden eagles",
      "Barbary macaques",
      "Mongooses",
      "Porcupines",
      "Atlas vipers",
      "Thorny-tailed geckos",
    ],
    activities: [
      "Mountain trekking",
      "Summit climbing",
      "Cultural village visits",
      "Photography",
      "Bird watching",
    ],
    bestTimeToVisit: "April to June and September to November",
    nearestCity: "Marrakech",
    coordinates: { lat: 31.0597, lng: -7.9158 },
    imageUrl: "/images/toubkal.jpg",
  },
  {
    id: "tazekka",
    name: "Tazekka National Park",
    arabicName: "منتزه تازكة الوطني",
    region: "Middle Atlas",
    established: 1950,
    size: "137 km²",
    description:
      "A pristine wilderness of cedar forests, caves, and canyons in the Middle Atlas Mountains.",
    longDescription:
      "Tazekka National Park was created in 1950 to protect a magnificent grove of cedars at the summit of Jbel Tazekka. Originally just 6.8 km², the park has been expanded several times to its current size of 137 km². The landscape features dramatic limestone formations, including the famous Friouato Caves - among the deepest in North Africa. Oak and cedar forests blanket the mountainsides, while deep canyons cut through the terrain. The park is a haven for wildlife, including the endangered Barbary stag.",
    highlights: [
      "Friouato Caves - one of Africa's deepest cave systems",
      "Ancient cedar and oak forests",
      "Jbel Tazekka summit views",
      "Dramatic limestone canyons",
    ],
    wildlife: [
      "Barbary stags",
      "North African wild boars",
      "Algerian wolves",
      "Peregrine falcons",
      "Golden eagles",
    ],
    activities: [
      "Cave exploration",
      "Hiking",
      "Wildlife observation",
      "Photography",
      "Forest walks",
    ],
    bestTimeToVisit: "March to May and September to November",
    nearestCity: "Taza",
    coordinates: { lat: 34.0667, lng: -4.2167 },
    imageUrl: "/images/tazekka.jpg",
  },
  {
    id: "souss-massa",
    name: "Souss-Massa National Park",
    arabicName: "منتزه سوس ماسة الوطني",
    region: "Souss-Massa",
    established: 1991,
    size: "338 km²",
    description:
      "A coastal paradise protecting endangered species including the Northern Bald Ibis.",
    longDescription:
      "Souss-Massa National Park stretches along Morocco's Atlantic coast just south of Agadir. This diverse park encompasses pristine beaches, towering sand dunes, dramatic cliffs, and rare Argan forests. It is most famous as the last stronghold of the critically endangered Northern Bald Ibis, with almost the entire world population found here. The park also runs successful captive breeding programs for other endangered species including the scimitar-horned oryx and dorcas gazelle. The Massa River estuary provides vital habitat for migratory birds.",
    highlights: [
      "Northern Bald Ibis colonies",
      "Pristine Atlantic beaches",
      "Argan tree forests",
      "Massa River estuary",
      "Wildlife breeding centers",
    ],
    wildlife: [
      "Northern Bald Ibis",
      "Dorcas gazelle",
      "Scimitar-horned oryx",
      "Flamingos",
      "Spoonbills",
      "Wild boars",
    ],
    activities: [
      "Bird watching",
      "Beach walks",
      "Wildlife safaris",
      "Photography",
      "Guided nature tours",
    ],
    bestTimeToVisit: "October to April",
    nearestCity: "Agadir",
    coordinates: { lat: 30.0833, lng: -9.65 },
    imageUrl: "/images/souss-massa.jpg",
  },
  {
    id: "ifrane",
    name: "Ifrane National Park",
    arabicName: "منتزه إفران الوطني",
    region: "Middle Atlas",
    established: 2004,
    size: "500 km²",
    description:
      "Home to the largest Atlas cedar forest and 25% of the world's Barbary macaque population.",
    longDescription:
      "Ifrane National Park protects the largest remaining Atlas cedar forest, a globally important ecosystem found only in Morocco and Algeria. The park is centered around the charming alpine-style town of Ifrane, known as 'Morocco's Switzerland.' The cedar forests here support approximately 25% of the world's remaining Barbary macaque population, making it a critical conservation site. The landscape includes pristine lakes, meadows that bloom with wildflowers in spring, and snow-capped peaks in winter.",
    highlights: [
      "Ancient Atlas cedar forests",
      "Barbary macaque troops",
      "Lake Dayet Aoua",
      "Alpine town of Ifrane",
      "Seasonal waterfalls",
    ],
    wildlife: [
      "Barbary macaques",
      "Wild boars",
      "Egyptian mongoose",
      "Eurasian otters",
      "Various raptor species",
    ],
    activities: [
      "Forest hiking",
      "Wildlife watching",
      "Photography",
      "Skiing (winter)",
      "Lake visits",
    ],
    bestTimeToVisit: "May to October for hiking, December to February for snow",
    nearestCity: "Fes",
    coordinates: { lat: 33.5333, lng: -5.1167 },
    imageUrl: "/images/ifrane.jpg",
  },
  {
    id: "talassemtane",
    name: "Talassemtane National Park",
    arabicName: "منتزه تلاسمطان الوطني",
    region: "Rif Mountains",
    established: 2004,
    size: "580 km²",
    description:
      "A breathtaking sanctuary protecting Morocco's last fir forests and the famous blue city of Chefchaouen.",
    longDescription:
      "Talassemtane National Park is a natural gem in the Rif Mountains of northern Morocco. Established in 2004, the park was created specifically to protect the last remaining Moroccan fir (Abies pinsapo) forests, a relict species from the last Ice Age. The park surrounds the famous blue-washed city of Chefchaouen, offering visitors easy access to both cultural and natural attractions. The rugged terrain includes deep gorges, cascading waterfalls, and traditional mountain villages where Riffian culture thrives.",
    highlights: [
      "Ancient Moroccan fir forests",
      "God's Bridge natural rock formation",
      "Akchour waterfalls",
      "Blue city of Chefchaouen",
      "Traditional Riffian villages",
    ],
    wildlife: [
      "Barbary macaques",
      "Golden eagles",
      "Egyptian vultures",
      "Wild boars",
      "Genets",
    ],
    activities: [
      "Hiking",
      "Waterfall visits",
      "Cultural tourism",
      "Bird watching",
      "Photography",
    ],
    bestTimeToVisit: "April to June and September to November",
    nearestCity: "Chefchaouen",
    coordinates: { lat: 35.1667, lng: -5.2667 },
    imageUrl: "/images/talassemtane.jpg",
  },
  {
    id: "al-hoceima",
    name: "Al Hoceima National Park",
    arabicName: "منتزه الحسيمة الوطني",
    region: "Mediterranean Coast",
    established: 2004,
    size: "485 km²",
    description:
      "A Mediterranean coastal park with pristine marine habitats and one of the last osprey colonies.",
    longDescription:
      "Al Hoceima National Park is unique in Morocco as it protects both terrestrial and marine ecosystems along the Mediterranean coast. The park features dramatic cliffs plunging into crystal-clear waters, hidden coves, and some of the most unspoiled coastal habitats in the Mediterranean. It harbors one of the few remaining osprey colonies in the Mediterranean basin. Traditional Berber fishing villages dot the coastline, maintaining centuries-old fishing practices. The marine portion of the park protects important habitats for dolphins, sea turtles, and diverse fish species.",
    highlights: [
      "Pristine Mediterranean beaches",
      "Osprey nesting colonies",
      "Traditional Berber fishing villages",
      "Dramatic coastal cliffs",
      "Crystal-clear waters for snorkeling",
    ],
    wildlife: [
      "Ospreys",
      "Bottlenose dolphins",
      "Loggerhead sea turtles",
      "Monk seals (rare)",
      "Diverse fish species",
    ],
    activities: [
      "Swimming",
      "Snorkeling",
      "Bird watching",
      "Coastal hiking",
      "Boat tours",
      "Village visits",
    ],
    bestTimeToVisit: "May to October",
    nearestCity: "Al Hoceima",
    coordinates: { lat: 35.0833, lng: -3.8333 },
    imageUrl: "/images/al-hoceima.jpg",
  },
  {
    id: "iriqui",
    name: "Iriqui National Park",
    arabicName: "منتزه إيريقي الوطني",
    region: "Sahara",
    established: 1994,
    size: "1,230 km²",
    description:
      "A desert wilderness featuring Lake Iriqui, sand dunes, and acacia-dotted savanna.",
    longDescription:
      "Iriqui National Park lies between the Anti-Atlas Mountains and the Draa River valley, encompassing a dramatic transition zone between mountain and desert ecosystems. The park is centered around Lake Iriqui, a seasonal lake that fills during wet years and attracts vast numbers of migratory birds including flamingos and other waterbirds. The landscape varies from rocky desert pavement to golden sand dunes and acacia-studded plains reminiscent of African savanna. The park protects important populations of desert-adapted wildlife and serves as a critical link in north-south wildlife corridors.",
    highlights: [
      "Lake Iriqui seasonal wetland",
      "Saharan sand dunes",
      "Acacia savanna landscapes",
      "Dramatic desert sunsets",
      "Traditional nomadic culture",
    ],
    wildlife: [
      "Dorcas gazelle",
      "Desert foxes",
      "Flamingos (seasonal)",
      "Sand cats",
      "Various desert reptiles",
    ],
    activities: [
      "Desert safaris",
      "Bird watching",
      "Photography",
      "Camel trekking",
      "Stargazing",
    ],
    bestTimeToVisit: "October to April",
    nearestCity: "Zagora",
    coordinates: { lat: 29.5333, lng: -6.35 },
    imageUrl: "/images/iriqui.jpg",
  },
  {
    id: "dakhla",
    name: "Dakhla National Park",
    arabicName: "منتزه الداخلة الوطني",
    region: "Sahara",
    established: 2006,
    size: "1,140 km²",
    description:
      "A remote coastal paradise where desert meets ocean, famous for its blue lagoon.",
    longDescription:
      "Dakhla National Park is located in Morocco's far south, where the Sahara Desert meets the Atlantic Ocean. The park protects a stunning blue lagoon created by a 40-kilometer peninsula that juts into the sea. This unique environment supports diverse marine life, including dolphins, porpoises, and the critically endangered Mediterranean monk seal. The stark beauty of golden dunes meeting turquoise waters creates some of Morocco's most dramatic landscapes. The area is also known for world-class kitesurfing and windsurfing conditions.",
    highlights: [
      "Blue lagoon",
      "Sahara-meets-ocean landscapes",
      "Flamingo colonies",
      "White sand beaches",
      "World-class wind sports",
    ],
    wildlife: [
      "Mediterranean monk seals",
      "Bottlenose dolphins",
      "Porpoises",
      "Flamingos",
      "Migratory shorebirds",
    ],
    activities: [
      "Kitesurfing",
      "Windsurfing",
      "Bird watching",
      "Photography",
      "Beach exploration",
      "Boat tours",
    ],
    bestTimeToVisit: "Year-round, best winds April to November",
    nearestCity: "Dakhla",
    coordinates: { lat: 23.7167, lng: -15.95 },
    imageUrl: "/images/dakhla.jpg",
  },
  {
    id: "haut-atlas-oriental",
    name: "Haut Atlas Oriental National Park",
    arabicName: "منتزه الأطلس الكبير الشرقي الوطني",
    region: "High Atlas",
    established: 2004,
    size: "490 km²",
    description:
      "Remote and rugged eastern High Atlas landscapes with traditional Berber communities.",
    longDescription:
      "Haut Atlas Oriental National Park protects a remote and spectacular section of the eastern High Atlas Mountains. Less visited than its western counterpart, this park offers authentic wilderness experiences and cultural immersion in traditional Berber villages. The landscape features dramatic gorges, high plateaus, and snow-capped peaks. The park serves as an important refuge for mountain wildlife and preserves traditional pastoral practices that have shaped these landscapes for millennia.",
    highlights: [
      "Remote mountain wilderness",
      "Traditional Berber villages",
      "Dramatic gorges",
      "High altitude plateaus",
      "Ancient transhumance routes",
    ],
    wildlife: [
      "Barbary sheep",
      "Golden eagles",
      "Egyptian vultures",
      "Wild boars",
      "Various mountain birds",
    ],
    activities: [
      "Trekking",
      "Cultural immersion",
      "Photography",
      "Wildlife watching",
      "Mountain exploration",
    ],
    bestTimeToVisit: "May to October",
    nearestCity: "Errachidia",
    coordinates: { lat: 32.15, lng: -4.85 },
    imageUrl: "/images/haut-atlas-oriental.jpg",
  },
  {
    id: "khenifiss",
    name: "Khenifiss National Park",
    arabicName: "منتزه خنيفيس الوطني",
    region: "Sahara",
    established: 2006,
    size: "1,850 km²",
    description:
      "Morocco's largest national park, featuring a vast coastal lagoon vital for migratory birds.",
    longDescription:
      "Khenifiss National Park is Morocco's largest protected area, encompassing a vast stretch of Atlantic coastline and the extensive Khenifiss Lagoon. This Ramsar wetland site is one of the most important stopover points for migratory birds along the East Atlantic Flyway. The lagoon supports hundreds of thousands of waterbirds during migration seasons, including flamingos, spoonbills, and numerous shorebird species. The surrounding desert landscape adds to the park's unique character, where ocean, lagoon, and Sahara meet.",
    highlights: [
      "Khenifiss Lagoon - Ramsar wetland",
      "Massive bird congregations",
      "Atlantic coastline",
      "Desert-ocean interface",
      "Flamingo colonies",
    ],
    wildlife: [
      "Flamingos",
      "Spoonbills",
      "Terns",
      "Shorebirds",
      "Desert foxes",
      "Various migratory species",
    ],
    activities: [
      "Bird watching",
      "Photography",
      "Coastal walks",
      "Wildlife observation",
      "Eco-tourism",
    ],
    bestTimeToVisit: "October to March for bird migration",
    nearestCity: "Tarfaya",
    coordinates: { lat: 28.05, lng: -12.2667 },
    imageUrl: "/images/khenifiss.jpg",
  },
  {
    id: "eastern-high-atlas",
    name: "Eastern High Atlas National Park",
    arabicName: "منتزه الأطلس الكبير الشرقي الوطني",
    region: "High Atlas",
    established: 2004,
    size: "550 km²",
    description:
      "Spectacular mountain scenery with deep gorges and diverse ecosystems.",
    longDescription:
      "The Eastern High Atlas National Park encompasses some of Morocco's most dramatic mountain scenery. The park protects a transition zone where Mediterranean, Saharan, and mountain ecosystems meet, creating exceptional biodiversity. Deep gorges carved by seasonal rivers cut through the landscape, while high peaks remain snow-covered for much of the year. The area is home to several endemic plant species and provides critical habitat for mountain wildlife. Traditional Amazigh communities continue their ancestral practices within the park boundaries.",
    highlights: [
      "Dramatic mountain gorges",
      "Diverse ecosystems",
      "Endemic plant species",
      "Traditional Amazigh villages",
      "Spectacular viewpoints",
    ],
    wildlife: [
      "Barbary macaques",
      "Barbary sheep",
      "Golden eagles",
      "Various reptiles",
      "Mountain butterflies",
    ],
    activities: [
      "Hiking",
      "Photography",
      "Cultural tourism",
      "Bird watching",
      "Botanical exploration",
    ],
    bestTimeToVisit: "April to October",
    nearestCity: "Midelt",
    coordinates: { lat: 32.4, lng: -4.7 },
    imageUrl: "/images/eastern-high-atlas.jpg",
  },
];

export function getParkById(id: string): Park | undefined {
  return parks.find((park) => park.id === id);
}

export function getParksByRegion(region: Region): Park[] {
  return parks.filter((park) => park.region === region);
}

export function searchParks(query: string): Park[] {
  const lowercaseQuery = query.toLowerCase();
  return parks.filter(
    (park) =>
      park.name.toLowerCase().includes(lowercaseQuery) ||
      park.region.toLowerCase().includes(lowercaseQuery) ||
      park.description.toLowerCase().includes(lowercaseQuery) ||
      park.nearestCity.toLowerCase().includes(lowercaseQuery)
  );
}
