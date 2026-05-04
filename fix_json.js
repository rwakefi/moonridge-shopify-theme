const fs = require('fs');
const file = 'templates/index.json';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

// 1. Remove the old "Five Picture Grid" from its current section
const oldSection = data.sections['17631854945b793bb1'];
if (oldSection && oldSection.blocks['ai_gen_block_002b861_WnqG6D']) {
  delete oldSection.blocks['ai_gen_block_002b861_WnqG6D'];
  oldSection.block_order = oldSection.block_order.filter(id => id !== 'ai_gen_block_002b861_WnqG6D');
}

// 2. Create the new sleek trust badges section
data.sections['trust_badges'] = {
  type: '_blocks',
  blocks: {
    'trust_grid': {
      type: 'four_picutre_block',
      name: 'Legendary Brands Trust Bar',
      settings: {
        title: 'LEGENDARY BRANDS',
        title_size: 16,
        title_alignment: 'center',
        title_color: '#666666',
        title_spacing: 12,
        image_1: 'shopify://shop_images/Stetson_2.webp',
        link_1: 'shopify://pages/stetson',
        image_2: 'shopify://shop_images/Resistol_911a3678-5dee-4a84-a061-3ac6b8fff945.webp',
        link_2: 'shopify://pages/resistol',
        image_3: 'shopify://shop_images/Lucchese.webp',
        link_3: 'shopify://pages/copy-of-stetson',
        image_4: 'shopify://shop_images/Pendleton.webp',
        link_4: 'shopify://pages/pendleton',
        image_5: 'shopify://shop_images/Goorin_4_00ffe83a-cbf3-4f8e-ba6e-3ff598c39e7d.webp',
        link_5: 'shopify://pages/goorin-bros',
        spacing: 24,
        aspect_ratio: '1 / 1',
        border_radius: 0,
        border_thickness: 0,
        border_color: '#000000',
        border_opacity: 0,
        background_color: 'transparent',
        padding_top: 24,
        padding_bottom: 24,
        padding_horizontal: 24
      }
    }
  },
  block_order: ['trust_grid']
};

// 3. Insert it right after the Hero section in the order array
const order = data.order;
const index = order.indexOf('1762578087a1ac51c4');
if (index !== -1) {
  order.splice(index + 1, 0, 'trust_badges');
} else {
  order.unshift('trust_badges');
}

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Done!');
