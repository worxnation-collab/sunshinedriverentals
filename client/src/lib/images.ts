/*
 * Fleet image URLs — served as local static assets from client/public/fleet/
 * (Previously pointed at Manus dev-only /manus-storage/ which 404s in production.)
 */

export const FLEET_IMAGES = {
  // Durango SRT Hellcat
  hellcatHero: "/fleet/durango-hellcat-hero.jpg",
  hellcatFront: "/fleet/durango-hellcat-front.jpg",
  hellcat3q: "/fleet/durango-hellcat-3q.jpg",

  // Challenger R/T
  challengerHero: "/fleet/challenger-rt-hero.jpg",
  challengerFront: "/fleet/challenger-rt-front.jpg",
  challengerGrass: "/fleet/challenger-rt-grass.jpg",

  // Charger Scat Pack (392)
  chargerHero: "/fleet/charger-hero.jpg",
  chargerFront: "/fleet/charger-front.jpg",
  chargerRear: "/fleet/charger-rear.jpg",
  chargerDaytona: "/fleet/charger-daytona.jpg",

  // Ford Bronco
  broncoHero: "/fleet/bronco-hero.jpg",


  // Toyota Sienna Woodland
  siennaFront: "/fleet/sienna-woodland-front.jpg",
  siennaDoor: "/fleet/sienna-woodland-door.jpg",
  siennaHero: "/fleet/sienna-woodland-hero.jpg",
} as const;
