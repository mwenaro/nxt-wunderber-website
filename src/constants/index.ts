export const navLinks = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/services" },
  { label: "Booking", link: "/booking" },
  { label: "About", link: "/about" },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact", link: "/contact" },
];
export const position1 = {
  lat: -4.2968,
  lng: 39.5825,
};

export const position = {
  lat: -4.2968,
  lng: 39.5825,
};

export const GA_TRACKING_ID: string =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export const SU = process.env.NEXT_PUBLIC_SU;
export const EX_API = process.env.NEXT_PUBLIC_EXT_API

export const ourServices = [
  "Services",
  "Hotel bookings ",
  "Flight booking",
  "Transfers",
  "Air Safaris",
  "Road Safaris",
  "Game safaris",
  "City Tours",
  "Marine Tours",
];

export const contactAddress = "Diani";
export const contactEmail = "info@wunderber.com";
export const contactPhone = "254745-712-268";
export const whatsAppNumber = "254795-650-770";

export interface IAttractionSite {
  name: string;
  description: string;
  location: string;
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
}

export const API: string | undefined =
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_PROD_API
    : process.env.NEXT_PUBLIC_DEV_API;
// export const API=process.env.NODE_ENV =='production'?process.env.NEXT_PUBLIC_PROD_API:process.env.NEXT_PUBLIC_DEV_API;
// console.log(API)

export const touristAttractionSites: IAttractionSite[] = [
  {
    name: "Maasai Mara National Reserve",
    description:
      "A wildlife reserve known for its large population of lions, elephants, and wildebeest migration",
    location: "Maasai Mara",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Amboseli National Park",
    description:
      "A park known for its large elephant population and views of Mount Kilimanjaro",
    location: "Kajiado County",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Nairobi National Park",
    description:
      "A national park located near the city of Nairobi, known for its diverse wildlife",
    location: "Nairobi",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Lake Nakuru National Park",
    description:
      "A park known for its large population of pink flamingos and other water birds",
    location: "Nakuru County",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Mount Kenya",
    description:
      "The highest mountain in Kenya, popular for hiking and climbing",
    location: "Central Kenya",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Samburu National Reserve",
    description:
      "A wildlife reserve known for its unique species of animals such as the Grevy's zebra and the beisa oryx",
    location: "Samburu County",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Tsavo National Park",
    description:
      "One of the largest national parks in Kenya, known for its large elephant population and red volcanic landscape",
    location: "Taita-Taveta County and Kwale County",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "The Kenyan Coast",
    description:
      "A popular beach destination known for its white sandy beaches, clear waters, and marine life",
    location: "Coastal Kenya",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "The Great Rift Valley",
    description:
      "A geological formation known for its dramatic landscapes and rich wildlife",
    location: "Kenya",
    coordinates: { latitude: null, longitude: null },
  },
  {
    name: "Hell's Gate National Park",
    description:
      "A national park known for its geothermal activity, including geysers and hot springs, as well as its hiking and rock climbing opportunities",
    location: "Nakuru County",
    coordinates: { latitude: null, longitude: null },
  },
];
