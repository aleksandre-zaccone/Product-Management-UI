//is not used, just keepint for future

import { useState, useEffect } from "react";

export const useFetchData = <T,>(fetchFunction: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(
          `Error fetching data: ${err instanceof Error ? err.message : err}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
};

// JSON server data
// JSON server Start
// json-server --watch db.json --routes routes.json
// {
//   "products": [
//     {
//       "productCode": "S10_1678",
//       "productName": "1969 Harley Davidson Ultimate Chopper",
//       "productLine": "Motorcycles",
//       "productScale": "1:10",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "This replica features working kickstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.",
//       "quantityInStock": 7933,
//       "buyPrice": 48.81,
//       "MSRP": 95.7
//     },
//     {
//       "productCode": "S10_1949",
//       "productName": "1952 Alpine Renault 1300",
//       "productLine": "Classic Cars",
//       "productScale": "1:10",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 7305,
//       "buyPrice": 98.58,
//       "MSRP": 214.3
//     },
//     {
//       "productCode": "S10_2016",
//       "productName": "1996 Moto Guzzi 1100i",
//       "productLine": "Motorcycles",
//       "productScale": "1:10",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "Official Moto Guzzi logos and insignias, saddle bags located on side of motorcycle, detailed engine, working steering, working suspension, two leather seats, luggage rack, dual exhaust pipes, small saddle bag located on handle bars, two-tone paint with chrome accents, superior die-cast detail , rotating wheels , working kick stand, diecast metal with plastic parts and baked enamel finish.",
//       "quantityInStock": 6625,
//       "buyPrice": 68.99,
//       "MSRP": 118.94
//     },
//     {
//       "productCode": "S10_4698",
//       "productName": "2003 Harley-Davidson Eagle Drag Bike",
//       "productLine": "Motorcycles",
//       "productScale": "1:10",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "Model features, official Harley Davidson logos and insignias, detachable rear wheelie bar, heavy diecast metal with resin parts, authentic multi-color tampo-printed graphics, separate engine drive belts, free-turning front fork, rotating tires and rear racing slick, certificate of authenticity, detailed engine, display stand\r\n, precision diecast replica, baked enamel finish, 1:10 scale model, removable fender, seat and tank cover piece for displaying the superior detail of the v-twin engine",
//       "quantityInStock": 5582,
//       "buyPrice": 91.02,
//       "MSRP": 193.66
//     },
//     {
//       "productCode": "S10_4757",
//       "productName": "1972 Alfa Romeo GTA",
//       "productLine": "Classic Cars",
//       "productScale": "1:10",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "Features include: Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 3252,
//       "buyPrice": 85.68,
//       "MSRP": 136.0
//     },
//     {
//       "productCode": "S10_4962",
//       "productName": "1962 LanciaA Delta 16V",
//       "productLine": "Classic Cars",
//       "productScale": "1:10",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "Features include: Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 6791,
//       "buyPrice": 103.42,
//       "MSRP": 147.74
//     },
//     {
//       "productCode": "S12_1099",
//       "productName": "1968 Ford Mustang",
//       "productLine": "Classic Cars",
//       "productScale": "1:12",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "Hood, doors and trunk all open to reveal highly detailed interior features. Steering wheel actually turns the front wheels. Color dark green.",
//       "quantityInStock": 68,
//       "buyPrice": 95.34,
//       "MSRP": 194.57
//     },
//     {
//       "productCode": "S12_1108",
//       "productName": "2001 Ferrari Enzo",
//       "productLine": "Classic Cars",
//       "productScale": "1:12",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 3619,
//       "buyPrice": 95.59,
//       "MSRP": 207.8
//     },
//     {
//       "productCode": "S12_1666",
//       "productName": "1958 Setra Bus",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:12",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "Model features 30 windows, skylights & glare resistant glass, working steering system, original logos",
//       "quantityInStock": 1579,
//       "buyPrice": 77.9,
//       "MSRP": 136.67
//     },
//     {
//       "productCode": "S12_2823",
//       "productName": "2002 Suzuki XREO",
//       "productLine": "Motorcycles",
//       "productScale": "1:12",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "Official logos and insignias, saddle bags located on side of motorcycle, detailed engine, working steering, working suspension, two leather seats, luggage rack, dual exhaust pipes, small saddle bag located on handle bars, two-tone paint with chrome accents, superior die-cast detail , rotating wheels , working kick stand, diecast metal with plastic parts and baked enamel finish.",
//       "quantityInStock": 9997,
//       "buyPrice": 66.27,
//       "MSRP": 150.62
//     },
//     {
//       "productCode": "S12_3148",
//       "productName": "1969 Corvair Monza",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "1:18 scale die-cast about 10\" long doors open, hood opens, trunk opens and wheels roll",
//       "quantityInStock": 6906,
//       "buyPrice": 89.14,
//       "MSRP": 151.08
//     },
//     {
//       "productCode": "S12_3380",
//       "productName": "1968 Dodge Charger",
//       "productLine": "Classic Cars",
//       "productScale": "1:12",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "1:12 scale model of a 1968 Dodge Charger. Hood, doors and trunk all open to reveal highly detailed interior features. Steering wheel actually turns the front wheels. Color black",
//       "quantityInStock": 9123,
//       "buyPrice": 75.16,
//       "MSRP": 117.44
//     },
//     {
//       "productCode": "S12_3891",
//       "productName": "1969 Ford Falcon",
//       "productLine": "Classic Cars",
//       "productScale": "1:12",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 1049,
//       "buyPrice": 83.05,
//       "MSRP": 173.02
//     },
//     {
//       "productCode": "S12_3990",
//       "productName": "1970 Plymouth Hemi Cuda",
//       "productLine": "Classic Cars",
//       "productScale": "1:12",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "Very detailed 1970 Plymouth Cuda model in 1:12 scale. The Cuda is generally accepted as one of the fastest original muscle cars from the 1970s. This model is a reproduction of one of the orginal 652 cars built in 1970. Red color.",
//       "quantityInStock": 5663,
//       "buyPrice": 31.92,
//       "MSRP": 79.8
//     },
//     {
//       "productCode": "S12_4473",
//       "productName": "1957 Chevy Pickup",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:12",
//       "productVendor": "Exoto Designs",
//       "productDescription": "1:12 scale die-cast about 20\" long Hood opens, Rubber wheels",
//       "quantityInStock": 6125,
//       "buyPrice": 55.7,
//       "MSRP": 118.5
//     },
//     {
//       "productCode": "S12_4675",
//       "productName": "1969 Dodge Charger",
//       "productLine": "Classic Cars",
//       "productScale": "1:12",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "Detailed model of the 1969 Dodge Charger. This model includes finely detailed interior and exterior features. Painted in red and white.",
//       "quantityInStock": 7323,
//       "buyPrice": 58.73,
//       "MSRP": 115.16
//     },
//     {
//       "productCode": "S18_1097",
//       "productName": "1940 Ford Pickup Truck",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:18",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "This model features soft rubber tires, working steering, rubber mud guards, authentic Ford logos, detailed undercarriage, opening doors and hood,  removable split rear gate, full size spare mounted in bed, detailed interior with opening glove box",
//       "quantityInStock": 2613,
//       "buyPrice": 58.33,
//       "MSRP": 116.67
//     },
//     {
//       "productCode": "S18_1129",
//       "productName": "1993 Mazda RX-7",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "This model features, opening hood, opening doors, detailed engine, rear spoiler, opening trunk, working steering, tinted windows, baked enamel finish. Color red.",
//       "quantityInStock": 3975,
//       "buyPrice": 83.51,
//       "MSRP": 141.54
//     },
//     {
//       "productCode": "S18_1342",
//       "productName": "1937 Lincoln Berline",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "Features opening engine cover, doors, trunk, and fuel filler cap. Color black",
//       "quantityInStock": 8693,
//       "buyPrice": 60.62,
//       "MSRP": 102.74
//     },
//     {
//       "productCode": "S18_1367",
//       "productName": "1936 Mercedes-Benz 500K Special Roadster",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "This 1:18 scale replica is constructed of heavy die-cast metal and has all the features of the original: working doors and rumble seat, independent spring suspension, detailed interior, working steering system, and a bifold hood that reveals an engine so accurate that it even includes the wiring. All this is topped off with a baked enamel finish. Color white.",
//       "quantityInStock": 8635,
//       "buyPrice": 24.26,
//       "MSRP": 53.91
//     },
//     {
//       "productCode": "S18_1589",
//       "productName": "1965 Aston Martin DB5",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "Die-cast model of the silver 1965 Aston Martin DB5 in silver. This model includes full wire wheels and doors that open with fully detailed passenger compartment. In 1:18 scale, this model measures approximately 10 inches/20 cm long.",
//       "quantityInStock": 9042,
//       "buyPrice": 65.96,
//       "MSRP": 124.44
//     },
//     {
//       "productCode": "S18_1662",
//       "productName": "1980s Black Hawk Helicopter",
//       "productLine": "Planes",
//       "productScale": "1:18",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "1:18 scale replica of actual Army's UH-60L BLACK HAWK Helicopter. 100% hand-assembled. Features rotating rotor blades, propeller blades and rubber wheels.",
//       "quantityInStock": 5330,
//       "buyPrice": 77.27,
//       "MSRP": 157.69
//     },
//     {
//       "productCode": "S18_1749",
//       "productName": "1917 Grand Touring Sedan",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "This 1:18 scale replica of the 1917 Grand Touring car has all the features you would expect from museum quality reproductions: all four doors and bi-fold hood opening, detailed engine and instrument panel, chrome-look trim, and tufted upholstery, all topped off with a factory baked-enamel finish.",
//       "quantityInStock": 2724,
//       "buyPrice": 86.7,
//       "MSRP": 170.0
//     },
//     {
//       "productCode": "S18_1889",
//       "productName": "1948 Porsche 356-A Roadster",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "This precision die-cast replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 8826,
//       "buyPrice": 53.9,
//       "MSRP": 77.0
//     },
//     {
//       "productCode": "S18_1984",
//       "productName": "1995 Honda Civic",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "This model features, opening hood, opening doors, detailed engine, rear spoiler, opening trunk, working steering, tinted windows, baked enamel finish. Color yellow.",
//       "quantityInStock": 9772,
//       "buyPrice": 93.89,
//       "MSRP": 142.25
//     },
//     {
//       "productCode": "S18_2238",
//       "productName": "1998 Chrysler Plymouth Prowler",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 4724,
//       "buyPrice": 101.51,
//       "MSRP": 163.73
//     },
//     {
//       "productCode": "S18_2248",
//       "productName": "1911 Ford Town Car",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "Features opening hood, opening doors, opening trunk, wide white wall tires, front door arm rests, working steering system.",
//       "quantityInStock": 540,
//       "buyPrice": 33.3,
//       "MSRP": 60.54
//     },
//     {
//       "productCode": "S18_2319",
//       "productName": "1964 Mercedes Tour Bus",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:18",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "Exact replica. 100+ parts. working steering system, original logos",
//       "quantityInStock": 8258,
//       "buyPrice": 74.86,
//       "MSRP": 122.73
//     },
//     {
//       "productCode": "S18_2325",
//       "productName": "1932 Model A Ford J-Coupe",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "This model features grille-mounted chrome horn, lift-up louvered hood, fold-down rumble seat, working steering system, chrome-covered spare, opening doors, detailed and wired engine",
//       "quantityInStock": 9354,
//       "buyPrice": 58.48,
//       "MSRP": 127.13
//     },
//     {
//       "productCode": "S18_2432",
//       "productName": "1926 Ford Fire Engine",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:18",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "Gleaming red handsome appearance. Everything is here the fire hoses, ladder, axes, bells, lanterns, ready to fight any inferno.",
//       "quantityInStock": 2018,
//       "buyPrice": 24.92,
//       "MSRP": 60.77
//     },
//     {
//       "productCode": "S18_2581",
//       "productName": "P-51-D Mustang",
//       "productLine": "Planes",
//       "productScale": "1:72",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "Has retractable wheels and comes with a stand",
//       "quantityInStock": 992,
//       "buyPrice": 49.0,
//       "MSRP": 84.48
//     },
//     {
//       "productCode": "S18_2625",
//       "productName": "1936 Harley Davidson El Knucklehead",
//       "productLine": "Motorcycles",
//       "productScale": "1:18",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "Intricately detailed with chrome accents and trim, official die-struck logos and baked enamel finish.",
//       "quantityInStock": 4357,
//       "buyPrice": 24.23,
//       "MSRP": 60.57
//     },
//     {
//       "productCode": "S18_2795",
//       "productName": "1928 Mercedes-Benz SSK",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "This 1:18 replica features grille-mounted chrome horn, lift-up louvered hood, fold-down rumble seat, working steering system, chrome-covered spare, opening doors, detailed and wired engine. Color black.",
//       "quantityInStock": 548,
//       "buyPrice": 72.56,
//       "MSRP": 168.75
//     },
//     {
//       "productCode": "S18_2870",
//       "productName": "1999 Indy 500 Monte Carlo SS",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "Features include opening and closing doors. Color: Red",
//       "quantityInStock": 8164,
//       "buyPrice": 56.76,
//       "MSRP": 132.0
//     },
//     {
//       "productCode": "S18_2949",
//       "productName": "1913 Ford Model T Speedster",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "This 250 part reproduction includes moving handbrakes, clutch, throttle and foot pedals, squeezable horn, detailed wired engine, removable water, gas, and oil cans, pivoting monocle windshield, all topped with a baked enamel red finish. Each replica comes with an Owners Title and Certificate of Authenticity. Color red.",
//       "quantityInStock": 4189,
//       "buyPrice": 60.78,
//       "MSRP": 101.31
//     },
//     {
//       "productCode": "S18_2957",
//       "productName": "1934 Ford V8 Coupe",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "Chrome Trim, Chrome Grille, Opening Hood, Opening Doors, Opening Trunk, Detailed Engine, Working Steering System",
//       "quantityInStock": 5649,
//       "buyPrice": 34.35,
//       "MSRP": 62.46
//     },
//     {
//       "productCode": "S18_3029",
//       "productName": "1999 Yamaha Speed Boat",
//       "productLine": "Ships",
//       "productScale": "1:18",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "Exact replica. Wood and Metal. Many extras including rigging, long boats, pilot house, anchors, etc. Comes with three masts, all square-rigged.",
//       "quantityInStock": 4259,
//       "buyPrice": 51.61,
//       "MSRP": 86.02
//     },
//     {
//       "productCode": "S18_3136",
//       "productName": "18th Century Vintage Horse Carriage",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "Hand crafted diecast-like metal horse carriage is re-created in about 1:18 scale of antique horse carriage. This antique style metal Stagecoach is all hand-assembled with many different parts.\r\n\r\nThis collectible metal horse carriage is painted in classic Red, and features turning steering wheel and is entirely hand-finished.",
//       "quantityInStock": 5992,
//       "buyPrice": 60.74,
//       "MSRP": 104.72
//     },
//     {
//       "productCode": "S18_3140",
//       "productName": "1903 Ford Model A",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "Features opening trunk,  working steering system",
//       "quantityInStock": 3913,
//       "buyPrice": 68.3,
//       "MSRP": 136.59
//     },
//     {
//       "productCode": "S18_3232",
//       "productName": "1992 Ferrari 360 Spider red",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "his replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 8347,
//       "buyPrice": 77.9,
//       "MSRP": 169.34
//     },
//     {
//       "productCode": "S18_3233",
//       "productName": "1985 Toyota Supra",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "This model features soft rubber tires, working steering, rubber mud guards, authentic Ford logos, detailed undercarriage, opening doors and hood, removable split rear gate, full size spare mounted in bed, detailed interior with opening glove box",
//       "quantityInStock": 7733,
//       "buyPrice": 57.01,
//       "MSRP": 107.57
//     },
//     {
//       "productCode": "S18_3259",
//       "productName": "Collectable Wooden Train",
//       "productLine": "Trains",
//       "productScale": "1:18",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "Hand crafted wooden toy train set is in about 1:18 scale, 25 inches in total length including 2 additional carts, of actual vintage train. This antique style wooden toy train model set is all hand-assembled with 100% wood.",
//       "quantityInStock": 6450,
//       "buyPrice": 67.56,
//       "MSRP": 100.84
//     },
//     {
//       "productCode": "S18_3278",
//       "productName": "1969 Dodge Super Bee",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 1917,
//       "buyPrice": 49.05,
//       "MSRP": 80.41
//     },
//     {
//       "productCode": "S18_3320",
//       "productName": "1917 Maxwell Touring Car",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Exoto Designs",
//       "productDescription": "Features Gold Trim, Full Size Spare Tire, Chrome Trim, Chrome Grille, Opening Hood, Opening Doors, Opening Trunk, Detailed Engine, Working Steering System",
//       "quantityInStock": 7913,
//       "buyPrice": 57.54,
//       "MSRP": 99.21
//     },
//     {
//       "productCode": "S18_3482",
//       "productName": "1976 Ford Gran Torino",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "Highly detailed 1976 Ford Gran Torino \"Starsky and Hutch\" diecast model. Very well constructed and painted in red and white patterns.",
//       "quantityInStock": 9127,
//       "buyPrice": 73.49,
//       "MSRP": 146.99
//     },
//     {
//       "productCode": "S18_3685",
//       "productName": "1948 Porsche Type 356 Roadster",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "This model features working front and rear suspension on accurately replicated and actuating shock absorbers as well as opening engine cover, rear stabilizer flap,  and 4 opening doors.",
//       "quantityInStock": 8990,
//       "buyPrice": 62.16,
//       "MSRP": 141.28
//     },
//     {
//       "productCode": "S18_3782",
//       "productName": "1957 Vespa GS150",
//       "productLine": "Motorcycles",
//       "productScale": "1:18",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "Features rotating wheels , working kick stand. Comes with stand.",
//       "quantityInStock": 7689,
//       "buyPrice": 32.95,
//       "MSRP": 62.17
//     },
//     {
//       "productCode": "S18_3856",
//       "productName": "1941 Chevrolet Special Deluxe Cabriolet",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Exoto Designs",
//       "productDescription": "Features opening hood, opening doors, opening trunk, wide white wall tires, front door arm rests, working steering system, leather upholstery. Color black.",
//       "quantityInStock": 2378,
//       "buyPrice": 64.58,
//       "MSRP": 105.87
//     },
//     {
//       "productCode": "S18_4027",
//       "productName": "1970 Triumph Spitfire",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "Features include opening and closing doors. Color: White.",
//       "quantityInStock": 5545,
//       "buyPrice": 91.92,
//       "MSRP": 143.62
//     },
//     {
//       "productCode": "S18_4409",
//       "productName": "1932 Alfa Romeo 8C2300 Spider Sport",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Exoto Designs",
//       "productDescription": "This 1:18 scale precision die cast replica features the 6 front headlights of the original, plus a detailed version of the 142 horsepower straight 8 engine, dual spares and their famous comprehensive dashboard. Color black.",
//       "quantityInStock": 6553,
//       "buyPrice": 43.26,
//       "MSRP": 92.03
//     },
//     {
//       "productCode": "S18_4522",
//       "productName": "1904 Buick Runabout",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Exoto Designs",
//       "productDescription": "Features opening trunk,  working steering system",
//       "quantityInStock": 8290,
//       "buyPrice": 52.66,
//       "MSRP": 87.77
//     },
//     {
//       "productCode": "S18_4600",
//       "productName": "1940s Ford truck",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:18",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "This 1940s Ford Pick-Up truck is re-created in 1:18 scale of original 1940s Ford truck. This antique style metal 1940s Ford Flatbed truck is all hand-assembled. This collectible 1940's Pick-Up truck is painted in classic dark green color, and features rotating wheels.",
//       "quantityInStock": 3128,
//       "buyPrice": 84.76,
//       "MSRP": 121.08
//     },
//     {
//       "productCode": "S18_4668",
//       "productName": "1939 Cadillac Limousine",
//       "productLine": "Vintage Cars",
//       "productScale": "1:18",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "Features completely detailed interior including Velvet flocked drapes,deluxe wood grain floor, and a wood grain casket with seperate chrome handles",
//       "quantityInStock": 6645,
//       "buyPrice": 23.14,
//       "MSRP": 50.31
//     },
//     {
//       "productCode": "S18_4721",
//       "productName": "1957 Corvette Convertible",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "1957 die cast Corvette Convertible in Roman Red with white sides and whitewall tires. 1:18 scale quality die-cast with detailed engine and underbvody. Now you can own The Classic Corvette.",
//       "quantityInStock": 1249,
//       "buyPrice": 69.93,
//       "MSRP": 148.8
//     },
//     {
//       "productCode": "S18_4933",
//       "productName": "1957 Ford Thunderbird",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "This 1:18 scale precision die-cast replica, with its optional porthole hardtop and factory baked-enamel Thunderbird Bronze finish, is a 100% accurate rendition of this American classic.",
//       "quantityInStock": 3209,
//       "buyPrice": 34.21,
//       "MSRP": 71.27
//     },
//     {
//       "productCode": "S24_1046",
//       "productName": "1970 Chevy Chevelle SS 454",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "This model features rotating wheels, working streering system and opening doors. All parts are particularly delicate due to their precise scale and require special care and attention. It should not be picked up by the doors, roof, hood or trunk.",
//       "quantityInStock": 1005,
//       "buyPrice": 49.24,
//       "MSRP": 73.49
//     },
//     {
//       "productCode": "S24_1444",
//       "productName": "1970 Dodge Coronet",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "1:24 scale die-cast about 18\" long doors open, hood opens and rubber wheels",
//       "quantityInStock": 4074,
//       "buyPrice": 32.37,
//       "MSRP": 57.8
//     },
//     {
//       "productCode": "S24_1578",
//       "productName": "1997 BMW R 1100 S",
//       "productLine": "Motorcycles",
//       "productScale": "1:24",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "Detailed scale replica with working suspension and constructed from over 70 parts",
//       "quantityInStock": 7003,
//       "buyPrice": 60.86,
//       "MSRP": 112.7
//     },
//     {
//       "productCode": "S24_1628",
//       "productName": "1966 Shelby Cobra 427 S/C",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "This diecast model of the 1966 Shelby Cobra 427 S/C includes many authentic details and operating parts. The 1:24 scale model of this iconic lighweight sports car from the 1960s comes in silver and it's own display case.",
//       "quantityInStock": 8197,
//       "buyPrice": 29.18,
//       "MSRP": 50.31
//     },
//     {
//       "productCode": "S24_1785",
//       "productName": "1928 British Royal Navy Airplane",
//       "productLine": "Planes",
//       "productScale": "1:24",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "Official logos and insignias",
//       "quantityInStock": 3627,
//       "buyPrice": 66.74,
//       "MSRP": 109.42
//     },
//     {
//       "productCode": "S24_1937",
//       "productName": "1939 Chevrolet Deluxe Coupe",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "This 1:24 scale die-cast replica of the 1939 Chevrolet Deluxe Coupe has the same classy look as the original. Features opening trunk, hood and doors and a showroom quality baked enamel finish.",
//       "quantityInStock": 7332,
//       "buyPrice": 22.57,
//       "MSRP": 33.19
//     },
//     {
//       "productCode": "S24_2000",
//       "productName": "1960 BSA Gold Star DBD34",
//       "productLine": "Motorcycles",
//       "productScale": "1:24",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "Detailed scale replica with working suspension and constructed from over 70 parts",
//       "quantityInStock": 15,
//       "buyPrice": 37.32,
//       "MSRP": 76.17
//     },
//     {
//       "productCode": "S24_2011",
//       "productName": "18th century schooner",
//       "productLine": "Ships",
//       "productScale": "1:24",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "All wood with canvas sails. Many extras including rigging, long boats, pilot house, anchors, etc. Comes with 4 masts, all square-rigged.",
//       "quantityInStock": 1898,
//       "buyPrice": 82.34,
//       "MSRP": 122.89
//     },
//     {
//       "productCode": "S24_2022",
//       "productName": "1938 Cadillac V-16 Presidential Limousine",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "This 1:24 scale precision die cast replica of the 1938 Cadillac V-16 Presidential Limousine has all the details of the original, from the flags on the front to an opening back seat compartment complete with telephone and rifle. Features factory baked-enamel black finish, hood goddess ornament, working jump seats.",
//       "quantityInStock": 2847,
//       "buyPrice": 20.61,
//       "MSRP": 44.8
//     },
//     {
//       "productCode": "S24_2300",
//       "productName": "1962 Volkswagen Microbus",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:24",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "This 1:18 scale die cast replica of the 1962 Microbus is loaded with features: A working steering system, opening front doors and tailgate, and famous two-tone factory baked enamel finish, are all topped of by the sliding, real fabric, sunroof.",
//       "quantityInStock": 2327,
//       "buyPrice": 61.34,
//       "MSRP": 127.79
//     },
//     {
//       "productCode": "S24_2360",
//       "productName": "1982 Ducati 900 Monster",
//       "productLine": "Motorcycles",
//       "productScale": "1:24",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "Features two-tone paint with chrome accents, superior die-cast detail , rotating wheels , working kick stand",
//       "quantityInStock": 6840,
//       "buyPrice": 47.1,
//       "MSRP": 69.26
//     },
//     {
//       "productCode": "S24_2766",
//       "productName": "1949 Jaguar XK 120",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "Precision-engineered from original Jaguar specification in perfect scale ratio. Features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 2350,
//       "buyPrice": 47.25,
//       "MSRP": 90.87
//     },
//     {
//       "productCode": "S24_2840",
//       "productName": "1958 Chevy Corvette Limited Edition",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "The operating parts of this 1958 Chevy Corvette Limited Edition are particularly delicate due to their precise scale and require special care and attention. Features rotating wheels, working streering, opening doors and trunk. Color dark green.",
//       "quantityInStock": 2542,
//       "buyPrice": 15.91,
//       "MSRP": 35.36
//     },
//     {
//       "productCode": "S24_2841",
//       "productName": "1900s Vintage Bi-Plane",
//       "productLine": "Planes",
//       "productScale": "1:24",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "Hand crafted diecast-like metal bi-plane is re-created in about 1:24 scale of antique pioneer airplane. All hand-assembled with many different parts. Hand-painted in classic yellow and features correct markings of original airplane.",
//       "quantityInStock": 5942,
//       "buyPrice": 34.25,
//       "MSRP": 68.51
//     },
//     {
//       "productCode": "S24_2887",
//       "productName": "1952 Citroen-15CV",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Exoto Designs",
//       "productDescription": "Precision crafted hand-assembled 1:18 scale reproduction of the 1952 15CV, with its independent spring suspension, working steering system, opening doors and hood, detailed engine and instrument panel, all topped of with a factory fresh baked enamel finish.",
//       "quantityInStock": 1452,
//       "buyPrice": 72.82,
//       "MSRP": 117.44
//     },
//     {
//       "productCode": "S24_2972",
//       "productName": "1982 Lamborghini Diablo",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 7723,
//       "buyPrice": 16.24,
//       "MSRP": 37.76
//     },
//     {
//       "productCode": "S24_3151",
//       "productName": "1912 Ford Model T Delivery Wagon",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "This model features chrome trim and grille, opening hood, opening doors, opening trunk, detailed engine, working steering system. Color white.",
//       "quantityInStock": 9173,
//       "buyPrice": 46.91,
//       "MSRP": 88.51
//     },
//     {
//       "productCode": "S24_3191",
//       "productName": "1969 Chevrolet Camaro Z28",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Exoto Designs",
//       "productDescription": "1969 Z/28 Chevy Camaro 1:24 scale replica. The operating parts of this limited edition 1:24 scale diecast model car 1969 Chevy Camaro Z28- hood, trunk, wheels, streering, suspension and doors- are particularly delicate due to their precise scale and require special care and attention.",
//       "quantityInStock": 4695,
//       "buyPrice": 50.51,
//       "MSRP": 85.61
//     },
//     {
//       "productCode": "S24_3371",
//       "productName": "1971 Alpine Renault 1600s",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "This 1971 Alpine Renault 1600s replica Features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 7995,
//       "buyPrice": 38.58,
//       "MSRP": 61.23
//     },
//     {
//       "productCode": "S24_3420",
//       "productName": "1937 Horch 930V Limousine",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "Features opening hood, opening doors, opening trunk, wide white wall tires, front door arm rests, working steering system",
//       "quantityInStock": 2902,
//       "buyPrice": 26.3,
//       "MSRP": 65.75
//     },
//     {
//       "productCode": "S24_3432",
//       "productName": "2002 Chevy Corvette",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "The operating parts of this limited edition Diecast 2002 Chevy Corvette 50th Anniversary Pace car Limited Edition are particularly delicate due to their precise scale and require special care and attention. Features rotating wheels, poseable streering, opening doors and trunk.",
//       "quantityInStock": 9446,
//       "buyPrice": 62.11,
//       "MSRP": 107.08
//     },
//     {
//       "productCode": "S24_3816",
//       "productName": "1940 Ford Delivery Sedan",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "Chrome Trim, Chrome Grille, Opening Hood, Opening Doors, Opening Trunk, Detailed Engine, Working Steering System. Color black.",
//       "quantityInStock": 6621,
//       "buyPrice": 48.64,
//       "MSRP": 83.86
//     },
//     {
//       "productCode": "S24_3856",
//       "productName": "1956 Porsche 356A Coupe",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "Features include: Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.",
//       "quantityInStock": 6600,
//       "buyPrice": 98.3,
//       "MSRP": 140.43
//     },
//     {
//       "productCode": "S24_3949",
//       "productName": "Corsair F4U ( Bird Cage)",
//       "productLine": "Planes",
//       "productScale": "1:24",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "Has retractable wheels and comes with a stand. Official logos and insignias.",
//       "quantityInStock": 6812,
//       "buyPrice": 29.34,
//       "MSRP": 68.24
//     },
//     {
//       "productCode": "S24_3969",
//       "productName": "1936 Mercedes Benz 500k Roadster",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "This model features grille-mounted chrome horn, lift-up louvered hood, fold-down rumble seat, working steering system and rubber wheels. Color black.",
//       "quantityInStock": 2081,
//       "buyPrice": 21.75,
//       "MSRP": 41.03
//     },
//     {
//       "productCode": "S24_4048",
//       "productName": "1992 Porsche Cayenne Turbo Silver",
//       "productLine": "Classic Cars",
//       "productScale": "1:24",
//       "productVendor": "Exoto Designs",
//       "productDescription": "This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.",
//       "quantityInStock": 6582,
//       "buyPrice": 69.78,
//       "MSRP": 118.28
//     },
//     {
//       "productCode": "S24_4258",
//       "productName": "1936 Chrysler Airflow",
//       "productLine": "Vintage Cars",
//       "productScale": "1:24",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "Features opening trunk,  working steering system. Color dark green.",
//       "quantityInStock": 4710,
//       "buyPrice": 57.46,
//       "MSRP": 97.39
//     },
//     {
//       "productCode": "S24_4278",
//       "productName": "1900s Vintage Tri-Plane",
//       "productLine": "Planes",
//       "productScale": "1:24",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "Hand crafted diecast-like metal Triplane is Re-created in about 1:24 scale of antique pioneer airplane. This antique style metal triplane is all hand-assembled with many different parts.",
//       "quantityInStock": 2756,
//       "buyPrice": 36.23,
//       "MSRP": 72.45
//     },
//     {
//       "productCode": "S24_4620",
//       "productName": "1961 Chevrolet Impala",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "This 1:18 scale precision die-cast reproduction of the 1961 Chevrolet Impala has all the features-doors, hood and trunk that open; detailed 409 cubic-inch engine; chrome dashboard and stick shift, two-tone interior; working steering system; all topped of with a factory baked-enamel finish.",
//       "quantityInStock": 7869,
//       "buyPrice": 32.33,
//       "MSRP": 80.84
//     },
//     {
//       "productCode": "S32_1268",
//       "productName": "1980’s GM Manhattan Express",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:32",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "This 1980’s era new look Manhattan express is still active, running from the Bronx to mid-town Manhattan. Has 35 opeining windows and working lights. Needs a battery.",
//       "quantityInStock": 5099,
//       "buyPrice": 53.93,
//       "MSRP": 96.31
//     },
//     {
//       "productCode": "S32_1374",
//       "productName": "1997 BMW F650 ST",
//       "productLine": "Motorcycles",
//       "productScale": "1:32",
//       "productVendor": "Exoto Designs",
//       "productDescription": "Features official die-struck logos and baked enamel finish. Comes with stand.",
//       "quantityInStock": 178,
//       "buyPrice": 66.92,
//       "MSRP": 99.89
//     },
//     {
//       "productCode": "S32_2206",
//       "productName": "1982 Ducati 996 R",
//       "productLine": "Motorcycles",
//       "productScale": "1:32",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "Features rotating wheels , working kick stand. Comes with stand.",
//       "quantityInStock": 9241,
//       "buyPrice": 24.14,
//       "MSRP": 40.23
//     },
//     {
//       "productCode": "S32_2509",
//       "productName": "1954 Greyhound Scenicruiser",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:32",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "Model features bi-level seating, 50 windows, skylights & glare resistant glass, working steering system, original logos",
//       "quantityInStock": 2874,
//       "buyPrice": 25.98,
//       "MSRP": 54.11
//     },
//     {
//       "productCode": "S32_3207",
//       "productName": "1950's Chicago Surface Lines Streetcar",
//       "productLine": "Trains",
//       "productScale": "1:32",
//       "productVendor": "Gearbox Collectibles",
//       "productDescription": "This streetcar is a joy to see. It has 80 separate windows, electric wire guides, detailed interiors with seats, poles and drivers controls, rolling and turning wheel assemblies, plus authentic factory baked-enamel finishes (Green Hornet for Chicago and Cream and Crimson for Boston).",
//       "quantityInStock": 8601,
//       "buyPrice": 26.72,
//       "MSRP": 62.14
//     },
//     {
//       "productCode": "S32_3522",
//       "productName": "1996 Peterbilt 379 Stake Bed with Outrigger",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:32",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "This model features, opening doors, detailed engine, working steering, tinted windows, detailed interior, die-struck logos, removable stakes operating outriggers, detachable second trailer, functioning 360-degree self loader, precision molded resin trailer and trim, baked enamel finish on cab",
//       "quantityInStock": 814,
//       "buyPrice": 33.61,
//       "MSRP": 64.64
//     },
//     {
//       "productCode": "S32_4289",
//       "productName": "1928 Ford Phaeton Deluxe",
//       "productLine": "Vintage Cars",
//       "productScale": "1:32",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "This model features grille-mounted chrome horn, lift-up louvered hood, fold-down rumble seat, working steering system",
//       "quantityInStock": 136,
//       "buyPrice": 33.02,
//       "MSRP": 68.79
//     },
//     {
//       "productCode": "S32_4485",
//       "productName": "1974 Ducati 350 Mk3 Desmo",
//       "productLine": "Motorcycles",
//       "productScale": "1:32",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "This model features two-tone paint with chrome accents, superior die-cast detail , rotating wheels , working kick stand",
//       "quantityInStock": 3341,
//       "buyPrice": 56.13,
//       "MSRP": 102.05
//     },
//     {
//       "productCode": "S50_1341",
//       "productName": "1930 Buick Marquette Phaeton",
//       "productLine": "Vintage Cars",
//       "productScale": "1:50",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "Features opening trunk,  working steering system",
//       "quantityInStock": 7062,
//       "buyPrice": 27.06,
//       "MSRP": 43.64
//     },
//     {
//       "productCode": "S50_1392",
//       "productName": "Diamond T620 Semi-Skirted Tanker",
//       "productLine": "Trucks and Buses",
//       "productScale": "1:50",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "This limited edition model is licensed and perfectly scaled for Lionel Trains. The Diamond T620 has been produced in solid precision diecast and painted with a fire baked enamel finish. It comes with a removable tanker and is a perfect model to add authenticity to your static train or car layout or to just have on display.",
//       "quantityInStock": 1016,
//       "buyPrice": 68.29,
//       "MSRP": 115.75
//     },
//     {
//       "productCode": "S50_1514",
//       "productName": "1962 City of Detroit Streetcar",
//       "productLine": "Trains",
//       "productScale": "1:50",
//       "productVendor": "Classic Metal Creations",
//       "productDescription": "This streetcar is a joy to see. It has 99 separate windows, electric wire guides, detailed interiors with seats, poles and drivers controls, rolling and turning wheel assemblies, plus authentic factory baked-enamel finishes (Green Hornet for Chicago and Cream and Crimson for Boston).",
//       "quantityInStock": 1645,
//       "buyPrice": 37.49,
//       "MSRP": 58.58
//     },
//     {
//       "productCode": "S50_4713",
//       "productName": "2002 Yamaha YZR M1",
//       "productLine": "Motorcycles",
//       "productScale": "1:50",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "Features rotating wheels , working kick stand. Comes with stand.",
//       "quantityInStock": 600,
//       "buyPrice": 34.17,
//       "MSRP": 81.36
//     },
//     {
//       "productCode": "S700_1138",
//       "productName": "The Schooner Bluenose",
//       "productLine": "Ships",
//       "productScale": "1:700",
//       "productVendor": "Autoart Studio Design",
//       "productDescription": "All wood with canvas sails. Measures 31 1/2 inches in Length, 22 inches High and 4 3/4 inches Wide. Many extras.\r\nThe schooner Bluenose was built in Nova Scotia in 1921 to fish the rough waters off the coast of Newfoundland. Because of the Bluenose racing prowess she became the pride of all Canadians. Still featured on stamps and the Canadian dime, the Bluenose was lost off Haiti in 1946.",
//       "quantityInStock": 1897,
//       "buyPrice": 34.0,
//       "MSRP": 66.67
//     },
//     {
//       "productCode": "S700_1691",
//       "productName": "American Airlines: B767-300",
//       "productLine": "Planes",
//       "productScale": "1:700",
//       "productVendor": "Min Lin Diecast",
//       "productDescription": "Exact replia with official logos and insignias and retractable wheels",
//       "quantityInStock": 5841,
//       "buyPrice": 51.15,
//       "MSRP": 91.34
//     },
//     {
//       "productCode": "S700_1938",
//       "productName": "The Mayflower",
//       "productLine": "Ships",
//       "productScale": "1:700",
//       "productVendor": "Studio M Art Models",
//       "productDescription": "Measures 31 1/2 inches Long x 25 1/2 inches High x 10 5/8 inches Wide\r\nAll wood with canvas sail. Extras include long boats, rigging, ladders, railing, anchors, side cannons, hand painted, etc.",
//       "quantityInStock": 737,
//       "buyPrice": 43.3,
//       "MSRP": 86.61
//     },
//     {
//       "productCode": "S700_2047",
//       "productName": "HMS Bounty",
//       "productLine": "Ships",
//       "productScale": "1:700",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "Measures 30 inches Long x 27 1/2 inches High x 4 3/4 inches Wide. \r\nMany extras including rigging, long boats, pilot house, anchors, etc. Comes with three masts, all square-rigged.",
//       "quantityInStock": 3501,
//       "buyPrice": 39.83,
//       "MSRP": 90.52
//     },
//     {
//       "productCode": "S700_2466",
//       "productName": "America West Airlines B757-200",
//       "productLine": "Planes",
//       "productScale": "1:700",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "Official logos and insignias. Working steering system. Rotating jet engines",
//       "quantityInStock": 9653,
//       "buyPrice": 68.8,
//       "MSRP": 99.72
//     },
//     {
//       "productCode": "S700_2610",
//       "productName": "The USS Constitution Ship",
//       "productLine": "Ships",
//       "productScale": "1:700",
//       "productVendor": "Red Start Diecast",
//       "productDescription": "All wood with canvas sails. Measures 31 1/2\" Length x 22 3/8\" High x 8 1/4\" Width. Extras include 4 boats on deck, sea sprite on bow, anchors, copper railing, pilot houses, etc.",
//       "quantityInStock": 7083,
//       "buyPrice": 33.97,
//       "MSRP": 72.28
//     },
//     {
//       "productCode": "S700_2824",
//       "productName": "1982 Camaro Z28",
//       "productLine": "Classic Cars",
//       "productScale": "1:18",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "Features include opening and closing doors. Color: White. \r\nMeasures approximately 9 1/2\" Long.",
//       "quantityInStock": 6934,
//       "buyPrice": 46.53,
//       "MSRP": 101.15
//     },
//     {
//       "productCode": "S700_2834",
//       "productName": "ATA: B757-300",
//       "productLine": "Planes",
//       "productScale": "1:700",
//       "productVendor": "Highway 66 Mini Classics",
//       "productDescription": "Exact replia with official logos and insignias and retractable wheels",
//       "quantityInStock": 7106,
//       "buyPrice": 59.33,
//       "MSRP": 118.65
//     },
//     {
//       "productCode": "S700_3167",
//       "productName": "F/A 18 Hornet 1/72",
//       "productLine": "Planes",
//       "productScale": "1:72",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "10\" Wingspan with retractable landing gears.Comes with pilot",
//       "quantityInStock": 551,
//       "buyPrice": 54.4,
//       "MSRP": 80.0
//     },
//     {
//       "productCode": "S700_3505",
//       "productName": "The Titanic",
//       "productLine": "Ships",
//       "productScale": "1:700",
//       "productVendor": "Carousel DieCast Legends",
//       "productDescription": "Completed model measures 19 1/2 inches long, 9 inches high, 3inches wide and is in barn red/black. All wood and metal.",
//       "quantityInStock": 1956,
//       "buyPrice": 51.09,
//       "MSRP": 100.17
//     },
//     {
//       "productCode": "S700_3962",
//       "productName": "The Queen Mary",
//       "productLine": "Ships",
//       "productScale": "1:700",
//       "productVendor": "Welly Diecast Productions",
//       "productDescription": "Exact replica. Wood and Metal. Many extras including rigging, long boats, pilot house, anchors, etc. Comes with three masts, all square-rigged.",
//       "quantityInStock": 5088,
//       "buyPrice": 53.63,
//       "MSRP": 99.31
//     },
//     {
//       "productCode": "S700_4002",
//       "productName": "American Airlines: MD-11S",
//       "productLine": "Planes",
//       "productScale": "1:700",
//       "productVendor": "Second Gear Diecast",
//       "productDescription": "Polished finish. Exact replia with official logos and insignias and retractable wheels",
//       "quantityInStock": 8820,
//       "buyPrice": 36.27,
//       "MSRP": 74.03
//     },
//     {
//       "productCode": "S72_1253",
//       "productName": "Boeing X-32A JSF",
//       "productLine": "Planes",
//       "productScale": "1:72",
//       "productVendor": "Motor City Art Classics",
//       "productDescription": "10\" Wingspan with retractable landing gears.Comes with pilot",
//       "quantityInStock": 4857,
//       "buyPrice": 32.77,
//       "MSRP": 49.66
//     },
//     {
//       "productCode": "S72_3212",
//       "productName": "Pont Yacht",
//       "productLine": "Ships",
//       "productScale": "1:72",
//       "productVendor": "Unimax Art Galleries",
//       "productDescription": "Measures 38 inches Long x 33 3/4 inches High. Includes a stand.\r\nMany extras including rigging, long boats, pilot house, anchors, etc. Comes with 2 masts, all square-rigged",
//       "quantityInStock": 414,
//       "buyPrice": 33.3,
//       "MSRP": 54.6
//     }
//   ],

//   "posts": [
//     {
//       "id": "1",
//       "title": "a title",
//       "views": 100,
//       "active": true,
//       "date": "11/23/2022"
//     },
//     {
//       "id": "2",
//       "title": "another title",
//       "views": 200,
//       "active": true,
//       "date": "12/02/2021"
//     },
//     {
//       "id": "3",
//       "title": "another title",
//       "views": 400,
//       "active": false,
//       "date": "11/23/2022"
//     },
//     {
//       "id": "4",
//       "title": "another title",
//       "views": 700,
//       "active": true,
//       "date": "05/15/2023"
//     },
//     {
//       "id": "5",
//       "title": "another title",
//       "views": 300,
//       "active": true,
//       "date": "03/10/2023"
//     },
//     {
//       "id": "6",
//       "title": "another title",
//       "views": 800,
//       "active": true,
//       "date": "02/12/2023"
//     },
//     {
//       "id": "7",
//       "title": "another title",
//       "views": 700,
//       "active": false,
//       "date": "03/11/2023"
//     },
//     {
//       "id": "8",
//       "title": "another title",
//       "views": 500,
//       "active": true,
//       "date": "02/08/2023"
//     },
//     {
//       "id": "9",
//       "title": "another title",
//       "views": 150,
//       "active": true,
//       "date": "02/06/2023"
//     },
//     {
//       "id": "10",
//       "title": "another title",
//       "views": 250,
//       "active": true,
//       "date": "02/08/2024"
//     },
//     {
//       "id": "11",
//       "title": "another title",
//       "views": 750,
//       "active": true,
//       "date": "03/09/2024"
//     },
//     {
//       "id": "12",
//       "title": "another title",
//       "views": 900,
//       "active": true,
//       "date": "01/05/2024"
//     },
//     {
//       "id": "13",
//       "title": "another title",
//       "views": 1200,
//       "active": true,
//       "date": "03/09/2024"
//     },
//     {
//       "id": "14",
//       "title": "another title",
//       "views": 500,
//       "active": false,
//       "date": "09/22/2024"
//     },
//     {
//       "id": "15",
//       "title": "another title",
//       "views": 300,
//       "active": true,
//       "date": "06/12/2024"
//     },
//     {
//       "id": "16",
//       "title": "another title",
//       "views": 100,
//       "active": false,
//       "date": "04/08/2024"
//     },
//     {
//       "id": "17",
//       "title": "another title",
//       "views": 245,
//       "active": true,
//       "date": "08/07/2024"
//     },
//     {
//       "id": "18",
//       "title": "another title",
//       "views": 670,
//       "active": false,
//       "date": "11/08/2024"
//     },
//     {
//       "id": "19",
//       "title": "another title",
//       "views": 20,
//       "active": true,
//       "date": "05/09/2024"
//     },
//     {
//       "id": "20",
//       "title": "another title",
//       "views": 40,
//       "active": false,
//       "date": "01/19/2024"
//     }
//   ],
//   "comments": [
//     { "id": "1", "text": "a comment about post 1", "postId": "1" },
//     { "id": "2", "text": "another comment about post 1", "postId": "1" }
//   ],
//   "profile": {
//     "name": "typicode"
//   }
// }
