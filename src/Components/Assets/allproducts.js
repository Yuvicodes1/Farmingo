    import p1_image from './images/Best Sellers/black pepper powder.jpeg'
    import p2_image from './images/products/hibiscus_tea.png'
    import p3_image from './images/products/brown_sugar.png'
    import p4_image from './images/products/brown_sugar.png'
    import p5_image from './images/products/bio-organic-oil.png'
    import p6_image from './images/products/organic_honey.png'
    import p7_image from './images/products/jaggery.png'
    import p8_image from './images/Popular Products/white_butter.jpg'
    import p9_image from '../Assets/images/Popular Products/fruit face pack.png'
    import p10_image from '../Assets/images/Popular Products/soyabean.jpg'
    import p11_image from './images/Popular Products/moringa_powder.jpg'
    import p12_image from './images/categories/meat and poultry.jpeg'
    import p13_image from './images/Best Sellers/cardamom.jpeg'
    import p14image from './images/Best Sellers/cinnamon.jpeg'
    import p15image from './images/Best Sellers/cloves.jpeg'
    import p16image from './images/Best Sellers/black pepper powder.jpeg'
    import p17image from './images/Best Sellers/red chilli powder.jpeg'
    import p18image from './images/Best Sellers/turmeric powder.jpeg'
    import p19image from './images/Best Sellers/ginger powder.jpeg'
    import p20image from './images/Best Sellers/frozen corn.jpeg'
    import p21image from './images/categories/skin_care.jpg'
    import p22image from './images/Popular Products/rice.jpg'
    import p23image from './images/Popular Products/pure ketchup.jpg'
    import p24image from './images/products/redchili.png'
    import p25image from './images/products/fruit_basket.jpeg'
    import p26image from './images/products/veggie_basket.jpg'
    import p27image from './images/products/eggs.jpeg'
    import p28image from './images/products/dairy_combo.jpeg'
    import p29image from './images/Popular Products/mango_pickle.jpg'
    import p30_image from './images/Popular Products/almond_butter.jpeg';
    import p31_image from './images/products/bio-organic-oil.png';
    import p32_image from './images/Popular Products/sunflower-oil.jpg';
    import p33_image from './images/Popular Products/walnuts.jpg';


    let all_products = [
        {
            id: 1,
            name: 'Black Pepper Powder',
            image: p1_image,
            new_price: 300,
            old_price: 320.00,
            category: "bests",
            ratings: 290,
            description: "Premium quality black pepper powder, freshly ground from organic peppercorns. Adds rich flavor and aroma to all your dishes."
        },
        {
            id: 2,
            name: 'Hibiscus Tea 25 Bags',
            image: p2_image,
            new_price: 200.00,
            old_price: 300.00,
            category: "deals_today",
            ratings: 29,
            description: "Natural hibiscus herbal tea bags with antioxidant properties. Caffeine-free and perfect for relaxation."
        },
        {
            id: 3,
            name: 'Brown Sugar Pack 500g',
            image: p3_image,
            new_price: 180.00,
            old_price: 200.99,
            category: "bests",
            ratings: 810,
            description: "Unrefined brown sugar with natural molasses flavor. Ideal for baking and sweetening beverages."
        },
        {
            id: 4,
            name: 'Brown Sugar 1kg',
            image: p4_image,
            new_price: 300.00,
            old_price: 310.00,
            category: "bests",
            ratings: 920,
            description: "Premium 1kg pack of organic brown sugar, minimally processed to retain natural nutrients and flavor."
        },
        {
            id: 5,
            name: 'Organic Cooking Oil 1kg',
            image: p5_image,
            new_price: 80.00,
            old_price: 110.00,
            category: "deals_today",
            ratings: 30,
            description: "Cold-pressed organic cooking oil, perfect for healthy frying and cooking. Rich in essential fatty acids."
        },
        {
            id: 6,
            name: 'Organic Honey 1kg',
            image: p6_image,
            new_price: 263.50,
            old_price: 290,
            category: "deals_today",
            ratings: 31,
            description: "Pure, raw organic honey collected from wildflowers. No additives or preservatives."
        },
        {
            id: 7,
            name: 'Jaggery 2kg',
            image: p7_image,
            new_price: 115.00,
            old_price: 138.50,
            category: "deals_today",
            ratings: 65,
            description: "Traditional unrefined sugarcane jaggery, rich in iron and minerals. Natural sweetener for desserts and teas."
        },
        {
            id: 8,
            name: 'White Butter by Arylis',
            image: p8_image,
            new_price: 55.00,
            old_price: 58.00,
            category: "deals_today",
            ratings: 82,
            description: "Creamy white butter made from fresh milk. Perfect for spreading and cooking."
        },
        {
            id: 9,
            name: 'Fruit Face Pack 200g',
            image: p9_image,
            new_price: 555.00,
            old_price: 590.00,
            category: "bests",
            ratings: 309,
            description: "Natural fruit extract face pack with vitamins and antioxidants for glowing skin."
        },
        {
            id: 10,
            name: 'Soyabean Oil 500gms',
            image: p10_image,
            new_price: 290.0,
            old_price: 360.00,
            category: "deals_today",
            ratings: 9,
            description: "Heart-healthy soybean oil with high smoke point, ideal for Indian cooking."
        },
        {
            id: 11,
            name: 'SaptamVeda Moringa Powder 150g',
            image: p11_image,
            new_price: 300.00,
            old_price: 310.00,
            category: "bests",
            ratings: 1200,
            description: "Nutrient-rich moringa leaf powder packed with vitamins, minerals and antioxidants."
        },
        {
            id: 12,
            name: 'Meat and Poultry Basket',
            image: p12_image,
            new_price: 900.00,
            old_price: 1055.00,
            category: "bests",
            ratings: 314,
            description: "Assorted selection of premium quality meats and poultry, freshly packed and delivered."
        },
        {
            id: 13,
            name: 'Cardamom 150g',
            image: p13_image,
            new_price: 155.00,
            old_price: 158.00,
            category: "bests",
            ratings: 122,
            description: "Aromatic green cardamom pods with intense flavor for teas, desserts and curries."
        },
        {
            id: 14,
            name: 'Cinnamon 200g',
            image: p14image,
            new_price: 90.00,
            old_price: 110.00,
            category: "bests",
            ratings: 111,
            description: "Pure Ceylon cinnamon sticks with sweet woody aroma. Great for baking and beverages."
        },
        {
            id: 15,
            name: 'Cloves 100g',
            image: p15image,
            new_price: 125.00,
            old_price: 128.00,
            category: "bests",
            ratings: 69,
            description: "Premium quality whole cloves with strong aromatic flavor for culinary and medicinal uses."
        },
        {
            id: 16,
            name: 'Black Pepper Powder 150g',
            image: p16image,
            new_price: 100,
            old_price: 110,
            category: "bests",
            ratings: 16,
            description: "Freshly ground black pepper powder with bold, pungent flavor for seasoning dishes."
        },
        {
            id: 17,
            name: 'Red Chilli Powder 100g',
            image: p17image,
            new_price: 75.00,
            old_price: 78.00,
            category: "bests",
            ratings: 511,
            description: "Spicy red chili powder made from premium quality dried chilies. Adds heat to any dish."
        },
        {
            id: 18,
            name: 'Turmeric powder 200g',
            image: p18image,
            new_price: 90,
            old_price: 99,
            category: "bests",
            ratings: 1105,
            description: "Organic turmeric powder with curcumin. Adds color and health benefits to food."
        },
        {
            id: 19,
            name: 'Ginger Powder 150g',
            image: p19image,
            new_price: 155.00,
            old_price: 158.00,
            category: "bests",
            ratings: 309,
            description: "Pure dried ginger powder with digestive benefits and warm, spicy flavor."
        },
        {
            id: 20,
            name: 'Frozen corn 500g',
            image: p20image,
            new_price: 250.00,
            old_price: 278.00,
            category: "deals_today",
            ratings: 6,
            description: "Sweet corn kernels flash frozen at peak freshness. Ready to cook and retains nutrients."
        },
        {
            id: 21,
            name: 'Skin Care Pack 12 items',
            image: p21image,
            new_price: 2450.00,
            old_price: 2600.00,
            category: "deals_today",
            ratings: 16,
            description: "Complete skincare set with cleanser, toner, moisturizer and masks for radiant skin."
        },
        {
            id: 22,
            name: 'Pulao Rice 5kgs',
            image: p22image,
            new_price: 660.00,
            old_price: 700.00,
            category: "deals_today",
            ratings: 304,
            description: "Premium quality long grain basmati rice perfect for biryanis and pulao dishes."
        },
        {
            id: 23,
            name: 'Pure Tomata Ketchup (Fresh Produce) 400g',
            image: p23image,
            new_price: 160,
            old_price: 185,
            category: "bests",
            ratings: 630,
            description: "100% natural tomato ketchup made from fresh tomatoes with no artificial preservatives."
        },
        {
            id: 24,
            name: 'Dry Red Chilli (MIRCHI) 100g',
            image: p24image,
            new_price: 55.00,
            old_price: 62.00,
            category: "deals_today",
            ratings: 63,
            description: "Sun-dried whole red chilies with intense heat and flavor for authentic Indian cooking."
        },
        {
            id: 25,
            name:'Veggie Basket Combo 5kgs',
            image:p25image,
            new_price: 350,
            old_price:400,
            category: "deals_today",
            ratings: 60,
            description: "Assortment of fresh vegetables (can be customized).",
        },
        {
            id: 26,
            name:'Seasonal Fruit Basket Fresh from Organo ',
            image:p26image,
            new_price: 750.00,
            old_price:999.99,
            category: "deals_today",
            ratings: 63,
            description: "Assortment of fresh fruits, 10kgs in total. (can be customized)."
        },
        {
            id: 27,
            name:'36 Eggs',
            image:p27image,
            new_price: 290.00,
            old_price:310.00,
            category: "bests",
            ratings: 88,
            description: "Crate of 36 white eggs. (3 crates of 12 egg each )"
        },
        {
            id: 28,
            name:'Dairy Product Combo',
            image:p28image,
            new_price: 650,
            old_price:700.00,
            category: "bests",
            ratings: 159,
            description: "Assortment of best dairy products from FARMINGO, includes Paneer, Tofu, Cheese, Milk etc. (can be customized)."
        },
        {
            id: 29,
            name: 'Sun-Dried Mango Pickle 500g',
            image: p29image,
            new_price: 75.00,
            old_price: 119.99,
            category: "bests",
            ratings: 156,
            description: "Our Sun-Dried Mango Pickle is a perfect blend of tangy, spicy, and aromatic flavors. Made from hand-picked raw mangoes, sun-dried to preserve their natural taste, and mixed with a rich blend of traditional Indian spices, this pickle adds a zesty kick to every meal."
        },
        {
            id: 30,
            name: "Justin's Almond Butter 500gms",
            image: p30_image,
            new_price: 255.75,
            old_price: 360.00,
            category: "bests",
            ratings: 205,
            description: "Delicious and creamy almond butter with no added sugar, perfect for spreading and smoothies."
        },
        {
            id: 31,
            name: "Pure Cold Pressed Olive Oil 1L",
            image: p31_image,
            new_price: 700,
            old_price: 919.00,
            category: "deals_today",
            ratings: 330,
            description: "High-quality extra virgin olive oil, cold-pressed for the best taste and nutrition."
        },
        {
            id: 32,
            name: "Sunflower Oil Cold Pressed 500ml",
            image: p32_image,
            new_price: 180.0,
            old_price: 200.0,
            category: "bests",
            ratings: 250,
            description: "Healthy and heart-friendly sunflower oil, extracted using the cold-pressed method."
        },
        {
            id: 33,
            name: "Kashmiri Walnut Kernel 500g",
            image: p33_image,
            new_price: 400,
            old_price: 520.00,
            category: "bests",
            ratings: 189,
            description: "Premium quality Kashmiri walnut kernels, rich in omega-3 and antioxidants."
        }
    ];

    export default all_products;