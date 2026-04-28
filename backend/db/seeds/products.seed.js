require('dotenv').config();
const fs = require('fs/promises');
const path = require('path');
const { TABLE_NAMES, DEFAULTS } = require('../../config/constants');
const supabase = require('../../config/supabase');
const { uploadProductImageBuffer } = require('../../services/storageService');

const seedProducts = [
  {
    title: 'SO 04 101 | Pillar Cock with Base',
    short_title: 'Pillar Cock with Base',
    code: 'SO 04-101',
    price: 1930,
    area: 'Bathroom',
    finish: 'Chrome',
    category: 'Cock',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'A compact wall-mounted pillar cock with a polished chrome silhouette, precise water flow control, and a premium brass body engineered for everyday durability.',
    features: [
      'Solid brass body with durable chrome finish',
      'Quarter-turn operation for smooth control',
      'Easy wall-mount installation',
      'Corrosion-resistant internal cartridge',
      'Designed for premium contemporary bathrooms',
    ],
    imageFile: 'product-2.png',
  },
  {
    title: 'SO 04 102 | Angular Stop Cock',
    short_title: 'Angular Stop Cock',
    code: 'SO 04-102',
    price: 1930,
    area: 'Bathroom',
    finish: 'Chrome',
    category: 'Cock',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'A structured angular stop cock crafted for precision shut-off, offering strong geometry, smooth lever action, and a refined mirror-polished finish.',
    features: [
      'Tested brass construction',
      'Sharp architectural profile',
      'Long-lasting cartridge performance',
      'Leak-resistant threaded connection',
      'Suitable for modular and minimal bathrooms',
    ],
    imageFile: 'product-3.png',
  },
  {
    title: 'SO 04 103 | Concealed Bib Cock',
    short_title: 'Concealed Bib Cock',
    code: 'SO 04-103',
    price: 1930,
    area: 'Bathroom',
    finish: 'Chrome',
    category: 'Concealed Stop Cock',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'A concealed bib cock with a lean projecting spout and geometric plate, made for clean wall lines and premium performance in luxury bath spaces.',
    features: [
      'Premium concealed fitting profile',
      'Minimal escutcheon plate with crisp edges',
      'Stable pressure handling',
      'Electroplated for long-term shine',
      'Works well with modern wash areas',
    ],
    imageFile: 'product-4.png',
  },
  {
    title: 'SO 04 104 | Pillar Cock Mini',
    short_title: 'Pillar Cock Mini',
    code: 'SO 04-104',
    price: 1860,
    area: 'Wash Area',
    finish: 'Matte Black',
    category: 'Cock',
    shape: 'Round',
    theme: 'Themes',
    rating: 5,
    description:
      'A smaller-format pillar cock tailored for compact counters, balancing a dense brass body with clean matte detailing for modern spaces.',
    features: [
      'Compact footprint for tighter spaces',
      'Smooth quarter-turn operation',
      'Premium matte black coating',
      'Low-maintenance brass body',
      'Made for residential and hospitality use',
    ],
    imageFile: 'product-1.png',
  },
  {
    title: 'SO 04 105 | Stop Cock Pro',
    short_title: 'Stop Cock Pro',
    code: 'SO 04-105',
    price: 2050,
    area: 'Bathroom',
    finish: 'Chrome',
    category: 'Single Lever',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'A premium stop cock with sculpted metal surfaces, stable shutoff control, and a polished face designed to sit comfortably in high-end bathroom systems.',
    features: [
      'Engineered for reliable shutoff',
      'Built from full-brass ingots',
      'High-gloss reflective finish',
      'Pressure tested before dispatch',
      'Pairs with premium concealed systems',
    ],
    imageFile: 'product-2.png',
  },
  {
    title: 'SO 04 106 | Concealed Spout Mixer',
    short_title: 'Concealed Spout Mixer',
    code: 'SO 04-106',
    price: 2190,
    area: 'Bathroom',
    finish: 'Chrome',
    category: 'Mixture',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'A concealed spout mixer featuring a crisp lever and broad faceplate, giving a streamlined installation with elegant water delivery.',
    features: [
      'Balanced hot and cold water mixing',
      'Thick brass faceplate',
      'Smooth-turn cartridge response',
      'Optimized for concealed plumbing',
      'Built for premium residential use',
    ],
    imageFile: 'product-3.png',
  },
  {
    title: 'SO 04 107 | Pillar Cock Edge',
    short_title: 'Pillar Cock Edge',
    code: 'SO 04-107',
    price: 1980,
    area: 'Wash Area',
    finish: 'Chrome',
    category: 'Cock',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'An angular pillar cock with a broad stance and sharp contours, designed to create a premium visual anchor on vanity countertops.',
    features: [
      'Architectural vanity-friendly profile',
      'Thick brass casting',
      'Anti-tarnish finish protection',
      'Easy-turn control with precise feel',
      'Suitable for designer sink areas',
    ],
    imageFile: 'product-4.png',
  },
  {
    title: 'SO 04 108 | Wall Spout Mixer',
    short_title: 'Wall Spout Mixer',
    code: 'SO 04-108',
    price: 2240,
    area: 'Bathroom',
    finish: 'Matte Black',
    category: 'Mixture',
    shape: 'Square',
    theme: 'Themes',
    rating: 5,
    description:
      'A wall spout mixer with a bold, premium profile that blends rich matte finishing with dependable brass engineering for contemporary interiors.',
    features: [
      'Statement matte black finish',
      'Premium brass internal body',
      'Built for concealed wall installation',
      'Smooth lever action with steady flow',
      'Complements high-contrast bathroom palettes',
    ],
    imageFile: 'product-1.png',
  },
];

const homeAssetsDir = path.resolve(__dirname, '../../../frontend/src/assets/home');

const upsertProduct = async (product) => {
  const { data, error } = await supabase
    .from(TABLE_NAMES.PRODUCTS)
    .upsert(product, { onConflict: 'code' })
    .select('*')
    .single();

  if (error) {
    throw new Error(`Failed to upsert product ${product.code}: ${error.message}`);
  }

  return data;
};

const seed = async () => {
  const imageBufferByFile = new Map();

  for (const product of seedProducts) {
    if (!imageBufferByFile.has(product.imageFile)) {
      const filePath = path.join(homeAssetsDir, product.imageFile);
      const buffer = await fs.readFile(filePath);
      imageBufferByFile.set(product.imageFile, buffer);
    }

    const publicImageUrl = await uploadProductImageBuffer({
      buffer: imageBufferByFile.get(product.imageFile),
      productCode: product.code,
      originalName: product.imageFile,
      mimeType: 'image/png',
      upsert: true,
    });

    const { imageFile, ...productData } = product;

    await upsertProduct({
      ...productData,
      image: publicImageUrl,
      theme: productData.theme || DEFAULTS.PRODUCT_THEME,
      rating: productData.rating || DEFAULTS.PRODUCT_RATING,
    });

    console.log(`Seeded product: ${product.code}`);
  }

  console.log('Product seeding completed successfully.');
};

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
