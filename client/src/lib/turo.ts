/*
 * Turo listing links — single source of truth.
 * Canonical listing URLs only (no date/search params — those go stale).
 * Sienna + Ascent are intentionally absent: removed from the public site.
 */
export const TURO_LINKS = {
  durango: "https://turo.com/us/en/suv-rental/united-states/kissimmee-fl/dodge/durango/3678449",
  challenger: "https://turo.com/us/en/car-rental/united-states/kissimmee-fl/dodge/challenger/3722119",
  challengerB5: "https://turo.com/us/en/car-rental/united-states/kissimmee-fl/dodge/challenger/3812360",
  charger: "https://turo.com/us/en/car-rental/united-states/kissimmee-fl/dodge/charger/3747771",
  bronco: "https://turo.com/us/en/suv-rental/united-states/windermere-fl/ford/bronco/3725443",
  legacy: "https://turo.com/us/en/car-rental/united-states/kissimmee-fl/subaru/legacy/3806216",
  hrv: "https://turo.com/us/en/suv-rental/united-states/kissimmee-fl/honda/hr-v/3804407",
} as const;

export type TuroVehicle = keyof typeof TURO_LINKS;
