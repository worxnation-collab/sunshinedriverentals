/*
 * StructuredData — SunshineDrive Rentals
 * JSON-LD structured data for SEO
 * Includes: LocalBusiness, AutoRental, and Product schemas
 */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRental"],
  "name": "SunshineDrive Rentals",
  "description": "Premium car rentals delivered to MCO Airport, your hotel, or vacation rental in Orlando, Florida. Performance SUVs, muscle cars, and family-ready vehicles — no airport counters, no surprise fees.",
  "url": "https://sunshinedriverentals.com",
  "telephone": "+1-904-314-7650",
  "email": "matthew@sunshinedriverentals.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kissimmee",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.3042,
    "longitude": -81.4164
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Orlando",
      "sameAs": "https://en.wikipedia.org/wiki/Orlando,_Florida"
    },
    {
      "@type": "City",
      "name": "Kissimmee"
    },
    {
      "@type": "Place",
      "name": "Central Florida"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "15",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ocean" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Perfect! Car was incredible, very clean and like new, easy to pick up and drop off. The host is very kind and communicative. I recommend!",
      "datePublished": "2026-06-04"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jose" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "10/10 experience! Daysi and her husband were extremely kind and helpful throughout our whole trip. I would recommend a rental with them to anyone and would be delighted to rent with them again.",
      "datePublished": "2026-06-03"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jorge" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Great communication from start to finish! The van was super clean, drove great, and made our trip smooth and stress-free. Definitely recommend renting from them and would rent again!",
      "datePublished": "2026-05-25"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sony" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "The car was perfect and everything I dreamed of and my host was phenomenal I will definitely be renting again",
      "datePublished": "2026-05-24"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Priscilla" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Everything was perfect!",
      "datePublished": "2026-05-24"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "James" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Great Host Easy pick and drop off will be renting again !",
      "datePublished": "2026-05-11"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Katrina" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Daysi was exceptional!!! Very responsive and reliable. Communication was the best I have ever experience all t’s crossed and i’s dotted! I will be renting again!",
      "datePublished": "2026-05-04"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "06:00",
    "closes": "22:00"
  },
  "sameAs": [
    "https://g.page/r/sunshinedriverentals"
  ],
  "founder": {
    "@type": "Person",
    "name": "Matthew"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Vehicle Fleet",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Car",
          "name": "2021 Dodge Durango SRT Hellcat",
          "brand": { "@type": "Brand", "name": "Dodge" },
          "model": "Durango SRT Hellcat",
          "vehicleModelDate": "2021",
          "color": "F8 Green",
          "numberOfDoors": 4,
          "seatingCapacity": 7,
          "driveWheelConfiguration": "AllWheelDriveConfiguration",
          "vehicleEngine": {
            "@type": "EngineSpecification",
            "enginePower": { "@type": "QuantitativeValue", "value": "710", "unitCode": "BHP" }
          }
        },
        "price": "199.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "199.00",
          "priceCurrency": "USD",
          "unitText": "DAY"
        },
        "url": "https://sunshinedriverentals.com/orlando-hellcat-rental/"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Car",
          "name": "2018 Dodge Challenger R/T",
          "brand": { "@type": "Brand", "name": "Dodge" },
          "model": "Challenger R/T",
          "vehicleModelDate": "2018",
          "color": "F8 Green",
          "numberOfDoors": 2,
          "seatingCapacity": 4,
          "driveWheelConfiguration": "RearWheelDriveConfiguration"
        },
        "price": "89.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "89.00",
          "priceCurrency": "USD",
          "unitText": "DAY"
        },
        "url": "https://sunshinedriverentals.com/challenger-rt-rental/"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Car",
          "name": "2026 Ford Bronco Badlands",
          "brand": { "@type": "Brand", "name": "Ford" },
          "model": "Bronco Badlands",
          "vehicleModelDate": "2026",
          "color": "Rapid Red",
          "numberOfDoors": 4,
          "seatingCapacity": 5,
          "driveWheelConfiguration": "FourWheelDriveConfiguration"
        },
        "price": "99.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "99.00",
          "priceCurrency": "USD",
          "unitText": "DAY"
        },
        "url": "https://sunshinedriverentals.com/orlando-bronco-rental/"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Car",
          "name": "2023 Toyota Sienna Woodland",
          "brand": { "@type": "Brand", "name": "Toyota" },
          "model": "Sienna Woodland",
          "vehicleModelDate": "2023",
          "numberOfDoors": 4,
          "seatingCapacity": 8,
          "driveWheelConfiguration": "AllWheelDriveConfiguration",
          "fuelType": "Hybrid"
        },
        "price": "79.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "79.00",
          "priceCurrency": "USD",
          "unitText": "DAY"
        },
        "url": "https://sunshinedriverentals.com/sienna-woodland-rental/"
      }
    ]
  }
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
