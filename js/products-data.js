// ==========================================
// PRODUCTS DATA
// Easily customize products by editing this file
// ==========================================

const PRODUCTS = [
    {
        id: 1,
        name: 'Smart Coffee Machine',
        category: 'kitchen',
        price: 179.99,
        description: 'Brews espresso, cappuccino, and latte with a built-in grinder and touchscreen controls.',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 312
    },
    {
        id: 2,
        name: 'Multi-Cooker & Air Fryer',
        category: 'kitchen',
        price: 149.99,
        description: '10-in-1 multi-cooker with pressure cook, slow cook, air fry, steam, and yogurt functions.',
        image: 'https://images.unsplash.com/photo-1604754742625-30a2cd9bfc59?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 225
    },
    {
        id: 3,
        name: 'Stainless Steel Cookware Set',
        category: 'kitchen',
        price: 229.99,
        description: '10-piece cookware set with non-stick interior, tempered glass lids, and induction-ready bases.',
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 198
    },
    {
        id: 4,
        name: 'Glass Electric Kettle',
        category: 'kitchen',
        price: 49.99,
        description: 'Rapid-boil kettle with LED lighting, automatic shut-off, and soft-touch handle.',
        image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 142
    },
    {
        id: 5,
        name: 'Ceramic Nonstick Fry Pan',
        category: 'kitchen',
        price: 39.99,
        description: 'Durable 12-inch fry pan with scratch-resistant ceramic coating and ergonomic handle.',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 185
    },
    {
        id: 6,
        name: '8-Piece Dinnerware Set',
        category: 'decor',
        price: 69.99,
        description: 'Modern dinnerware collection with stoneware plates, bowls, and mugs in matte finish.',
        image: 'https://images.unsplash.com/photo-1522895892794-2b99d75ed959?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 134
    },
    {
        id: 7,
        name: 'Luxury Sheet Set',
        category: 'bedding',
        price: 49.99,
        description: 'Soft, breathable microfiber sheet set with deep pockets and wrinkle-resistant finish.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 163
    },
    {
        id: 8,
        name: 'Decorative Throw Pillow Set',
        category: 'decor',
        price: 34.99,
        description: 'Set of two plush throw pillows with textured cover and hidden zipper.',
        image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 112
    },
    {
        id: 9,
        name: 'Smart Home LED Desk Lamp',
        category: 'home-improvement',
        price: 59.99,
        description: 'Adjustable desk lamp with touch controls, dimming modes, and USB charging port.',
        image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=500&h=500&fit=crop',
        rating: 4.3,
        reviews: 91
    },
    {
        id: 10,
        name: 'Premium Chef Knife',
        category: 'kitchen',
        price: 89.99,
        description: 'High-carbon stainless steel chef knife with ergonomic grip and superior edge retention.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop',
        rating: 4.9,
        reviews: 207
    },
    {
        id: 11,
        name: 'Bamboo Cutting Board Set',
        category: 'kitchen',
        price: 29.99,
        description: 'Three-piece bamboo cutting board set with juice groove and non-slip feet.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 158
    },
    {
        id: 12,
        name: 'Espresso Cup Set',
        category: 'kitchen',
        price: 24.99,
        description: 'Modern porcelain espresso cup set with saucers, perfect for coffee lovers.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 94
    }
,
    {
        id: 13,
        name: 'Wireless Noise-Cancelling Headphones',
        category: 'electronics',
        price: 199.99,
        description: 'Over-ear Bluetooth headphones with active noise cancellation and 30h battery life.',
        image: 'https://images.unsplash.com/photo-1518444020459-9f86bdc8b5c4?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 421
    },
    {
        id: 14,
        name: 'Everyday Running Shoes',
        category: 'fashion',
        price: 89.99,
        description: 'Lightweight, breathable sneakers for running and daily wear with cushioned sole.',
        image: 'https://images.unsplash.com/photo-1528701800488-1c0a5f5f4d4b?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 278
    },
    {
        id: 15,
        name: 'Yoga Mat Pro',
        category: 'sports',
        price: 39.99,
        description: 'Eco-friendly non-slip yoga mat with extra cushioning and alignment lines.',
        image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b3d?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 149
    },
    {
        id: 16,
        name: 'Educational Wooden Blocks',
        category: 'toys',
        price: 29.99,
        description: 'Colorful wood block set for imaginative play and early learning.',
        image: 'https://images.unsplash.com/photo-1581861800972-3f8b8b3e8a5c?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 86
    },
    {
        id: 17,
        name: 'Nourishing Face Cream',
        category: 'beauty',
        price: 34.99,
        description: 'Daily moisturizing cream with hyaluronic acid for radiant, hydrated skin.',
        image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 204
    },
    {
        id: 18,
        name: 'Organic Pantry Essentials Box',
        category: 'groceries',
        price: 49.99,
        description: 'Curated box of organic staples: olive oil, grains, spices, and teas.',
        image: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 62
    },
    {
        id: 19,
        name: 'Modern Accent Chair',
        category: 'furniture',
        price: 249.99,
        description: 'Comfortable accent chair with wooden legs and contemporary fabric upholstery.',
        image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=500&h=500&fit=crop',
        rating: 4.3,
        reviews: 51
    },
    {
        id: 20,
        name: 'Camping Hammock',
        category: 'outdoors',
        price: 59.99,
        description: 'Lightweight, packable hammock made from ripstop nylon for camping and backyard use.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 74
    }
,
    {
        id: 21,
        name: 'Sony WH-CH520 Wireless Headphones',
        category: 'electronics',
        price: 31.35,
        description: 'Bluetooth on-ear headset with microphone, up to 50 hours battery life and quick charging.',
        image: 'https://images.unsplash.com/photo-1518444020459-9f86bdc8b5c4?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 33000
    },
    {
        id: 22,
        name: 'Meta Ray-Ban (Gen 2) Wayfarer Smart Glasses',
        category: 'electronics',
        price: 409.00,
        description: 'Smart AI glasses with 2x battery life, 3K Ultra HD, 12MP camera and audio/video recording.',
        image: 'https://images.unsplash.com/photo-1526178611996-7f3b3a2b7f8b?w=500&h=500&fit=crop',
        rating: 4.2,
        reviews: 2400
    },
    {
        id: 23,
        name: 'WOLFBOX MegaFlow 50 Compressed Air Duster',
        category: 'electronics',
        price: 32.29,
        description: 'Rechargeable electric air duster with 3-speed adjustable blower for cleaning electronics and keyboards.',
        image: 'https://images.unsplash.com/photo-1581090468320-3b4b8f3d3b9a?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 12600
    },
    {
        id: 24,
        name: 'Apple iPhone 16 Pro Max (Renewed) - 256GB',
        category: 'electronics',
        price: 1484.99,
        description: 'Renewed iPhone 16 Pro Max with large display, AI photo edits, and long battery life.',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        rating: 4.3,
        reviews: 3300
    },
    {
        id: 25,
        name: 'ANDERY Car Phone Holder for MagSafe',
        category: 'electronics',
        price: 24.30,
        description: 'Strong magnetic car mount with 360° adjustment and high suction, compatible with MagSafe phones.',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 22000
    },
    {
        id: 26,
        name: 'QINLIANF 5 Outlet Extender with 4 USB Ports',
        category: 'electronics',
        price: 9.99,
        description: 'Surge protector power strip with multiple USB charging ports, ideal for travel and home offices.',
        image: 'https://images.unsplash.com/photo-1583225151119-0b6a07a3a5f6?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 114700
    },
    {
        id: 27,
        name: 'Energizer Alkaline Power AAA Batteries (32 Count)',
        category: 'electronics',
        price: 19.99,
        description: 'Long-lasting AAA batteries for everyday electronics and emergency gear.',
        image: 'https://images.unsplash.com/photo-1580910051070-0b8b1b8e2b5d?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 56200
    },
    {
        id: 28,
        name: 'FYY Travel Cable Organizer Pouch',
        category: 'electronics',
        price: 9.95,
        description: 'Waterproof double-layer organizer pouch for cables, chargers, and small electronics.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 38400
    },
    {
        id: 29,
        name: 'Samsung Galaxy Z Fold7 - 256GB',
        category: 'electronics',
        price: 1484.99,
        description: 'Foldable AI smartphone with large multitasking display, advanced camera, and long battery life.',
        image: 'https://images.unsplash.com/photo-1523475496153-3d6cc40f3b9b?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 707
    },
    {
        id: 30,
        name: 'Kasa Smart Plug HS103P4 (4-Pack)',
        category: 'electronics',
        price: 35.99,
        description: 'Smart Wi-Fi outlet works with Alexa and Google Home — no hub required.',
        image: 'https://images.unsplash.com/photo-1603398938378-2b2b3f9f6f3a?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 150300
    },
    {
        id: 31,
        name: 'WOLFBOX MF100 Electric Air Duster',
        category: 'electronics',
        price: 59.83,
        description: 'High-power cordless air duster with adjustable gears for cleaning electronics and outdoor gear.',
        image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 7100
    },
    {
        id: 32,
        name: 'Garmin fēnix 8 – 51 mm Multisport GPS Smartwatch',
        category: 'electronics',
        price: 949.99,
        description: 'Premium multisport GPS watch with AMOLED display, long battery life, and advanced sensors.',
        image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 387
    },
    {
        id: 33,
        name: 'Samsung Galaxy Buds 3 Pro',
        category: 'electronics',
        price: 239.99,
        description: 'True wireless earbuds with noise cancelling, sound optimization, and redesigned comfort fit.',
        image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=500&h=500&fit=crop',
        rating: 4.2,
        reviews: 6300
    }
];
