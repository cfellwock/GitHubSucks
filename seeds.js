const db = require('./connection');
// const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Electronics' },
    { name: 'Furniture' },
    { name: 'Music' },
    { name: 'Clothing' },
    { name: 'Sports' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // ELECTRONICS CATEGORY
    {
      name: 'VIZIO - 70" Class MQ6 Series 4K QLED HDR Smart TV',
      category: categories[0]._id,
      description:
        'Welcome to the world of Color. Celebrate VIZIO’s 20th Anniversary with the NEW VIZIO M-Series Quantum Color Smart TV. Stream and game true-to-life details in 1 billion+ colors of picture perfection, all wrapped in VIZIO’s ThinFrame Design. America’s Smart TV gives you millions of movies, shows, sports, news, free channels, and more in seconds.',
      image: '../assets/Product Pictures/Electronics/70inchtv.jpg',
      price: 100,
      quantity: 114
    },
    {
      name: 'LG - 77" Class B2 Series OLED 4K UHD Smart webOS TV',
      category: categories[0]._id,
      description:
        'The lightning-fast refresh rate, gaming features and 4K resolution you want with the LG OLED picture quality you love. Self-lit OLED pixels bring to life infinite contrast, perfect black and over a billion colors that add depth and bring out the bold, brazen and beautiful. Experience a lifelike picture with more depth and rich colors thanks to our advanced α7 Gen5 AI Processor 4K that adjusts picture and sound qualities to give you a fabulous experience no matter what you’re watching. And on game day, you can get in the game with a 120Hz refresh rate that can keep up with the action on the court, field or ice for a sharp, colorful picture from start to finish. And you’ll always be at the top of your game with NVIDIA G-SYNC, FreeSync Premium and VRR to experience real-time action — plus, the LG Game Optimizer and 2 HDMI 2.1 ports to get you (and keep you) in the action. When you want to take a break from gaming, enjoy built-in access to your favorite streaming apps, including Netflix, Hulu, HBO Max and Disney+¹ and more for the whole family. And no matter what you’re watching or playing, every moment will be enhanced with Dolby Vision IQ that automatically changes display settings based on lighting in the room and Dolby Atmos sound technology delivers the most immersive sound experience. It’s not just OLED. It’s LG OLED. The gold standard in OLED TV from the creators of OLED.',
      image: '../assets/Product Pictures/Electronics/77inchtv.jpg',
      price: 1999.99,
      quantity: 322
    },
    {
      name: 'PlayStation 5',
      category: categories[0]._id,
      description:
        'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio*, and an all-new generation of incredible PlayStation games. *3D audio via built-in TV speakers or analog/USB stereo headphones. Set up and latest system software update required.',
      image: '../assets/Product Pictures/Electronics/ps5.jpg',
      price: 499.99,
      quantity: 243
    },
    {
      name: 'Xbox Series X',
      category: categories[0]._id,
      description:
        'Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. And when you add Xbox Game Pass Ultimate (membership sold separately or included when you choose Xbox All Access), you get an instant library of 100+ high-quality games, including day one releases from Xbox Game Studios like Halo Infinite, Forza Horizon 5, and Microsoft Flight Simulator.',
      image: '../assets/Product Pictures/Electronics/xboxseriesx.jpg'
      price: 499.99,
      quantity: 106
    },
    {
      name: 'Nintendo Switch OLED',
      category: categories[0]._id,
      description:
        'Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch – OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch – OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the system’s speakers.',
      image: '../assets/Product Pictures/Electronics/switcholed.jpg',
      price: 349.99,
      quantity: 247
    },
    {
      name: 'Xbox Elite Wireless Controller',
      category: categories[0]._id,
      description:
        'Experience the Xbox Elite Wireless Controller Series 2 featuring adjustable-tension thumbsticks, wrap-around rubberized grip, and shorter hair trigger locks. Experience limitless customization with interchangeable components and exclusive button mapping options in the Xbox Accessories app. Save up to 3 custom profiles on the controller and switch between them on the fly. Swap thumbstick toppers, D-pads, and paddles to tailor your controller to your preferred gaming style. Stay in the game with up to 40 hours of rechargeable battery life and refined components that are built to last. Use Xbox Wireless, Bluetooth, or the included USB-C cable to play across Xbox Series X|S, Xbox One, and Windows. Designed to meet the needs of today’s competitive gamers, the Xbox Elite Wireless Controller Series 2 puts exceptional performance, customization, and durability where it matters most—in your hands.',
      image: '../assets/Product Pictures/Electronics/xboxelitecontroller.jpg',
      price: 179.99,
      quantity: 91
    },
    {
      name: 'Razer Naga Trinity',
      category: categories[0]._id,
      description:
        'Experience complete customization and control with this Razer mouse. The 16,000 dpi optical sensor and up to 19 independently programmable buttons keep you ahead of the competition, and three interchangeable side plates ensure comfort as you play. The ergonomic design of this Razer mouse keeps you playing for hours without woe.',
      image: '../assets/Product Pictures/Electronics/razernaga.jpg',
      price: 59.99,
      quantity: 203
    },
    {
      name: 'SteelSeries Apex Pro TKL Keyboard',
      category: categories[0]._id,
      description:
        'Deliver winning strokes with this SteelSeries Apex Pro TKL mechanical gaming keyboard. The compact size helps save space on your desktop, while onboard memory stores frequently used macros and RGB lighting settings. This SteelSeries Apex Pro TKL mechanical gaming keyboard features a detachable wrist rest and adjustable switches for added comfort during marathon sessions.'
      image: '../assets/Product Pictures/Electronics/steelserieskeyboard.jpg',
      price: 150,
      quantity: 187
    },
    {
      name: 'Amazon Echo Dot',
      category: categories[0]._id,
      description: 
        'Smart speaker features a sleek design and improved audio for vibrant sound anywhere in your home. With Echo Dot, you can stay on track with help from Alexa, control compatible smart home devices and start routines with your motion.',
      image: '../assets/Product Pictures/Electronics/amazonechodot.jpg',
      price: 25,
      quantity: 118
    },
    {
      name: 'Samsung Bespoke Smart Refrigerator',
      category: categories[0]._id,
      description:
        'Extra-large capacity 3-Door French Door Refrigerator with customizable and changeable door panels available in a variety of colors and finishes. A revolution in convenience and design, the concealed Beverage Center features both a water dispenser and AutoFill Water Pitcher. Plus a Dual Ice Maker with cubed ice and Ice Bites.',
      image: '../assets/Product Pictures/Electronics/samsungsmartfridge.jpg',
      price: 2100,
      quantity: 162
    },
    // FURNITURE CATEGORY
    {
      name: 'Sectional Couch',
      category: categories[1]._id,
      description:
        'When it comes to versatility this piece meets the demands of the most stylish and sophisticated shoppers. It is designed for the utmost flexibility; it can be placed seamlessly into a casual or a refined setting.',
      image: '../assets/Product Pictures/Furniture/sectionalcouch.jpg',
      price: 190,
      quantity: 89
    },
    {
      name: 'Napa Dusky Cedar Kitchen Table',
      category: categories[1]._id,
      description:
        'A grandly scaled dining table with modern farmhouse styling, the Napa dining table offers ample room for all visitors. This plank-effect table comes with two 18-inch leaves that expand the table to seat up to 10 people. The twin pedestal table features details like exposed tenons to give a rustic feel that works well with casual environments.',
      image: '../assets/Product Pictures/Furniture/kitchentable.jpg',
      price: 690,
      quantity: 1
    },
    {
      name: 'Black Wooden Bookshelf',
      category: categories[1]._id,
      description:
        'This elegant piece of furniture comes with 5 shelves to offer more storage options. Three shelves in this bookcase are adjustable to provide a versatile storage space to accommodate books/items of different sizes or heights. The Sauder 414235 5 Shelf Bookcase features innovative slide-on moldings for easy assembly. Comes in estate black finish, this bookcase gives a rich look to your interior.',
      image: '../assets/Product Pictures/Furniture/bookshelf.jpg',
      price: 120,
      quantity: 110
    },
    {
      name: 'Signature Design Wooden Entertainment Center',
      category: categories[1]._id,
      description:
        "Entertain the possibilities with this extra large TV stand. Proving that furniture can be an art form, this sleek, chic cabinet stand which accommodates up to 75 inch TVs stands out from the crowd with a geometric overlay design that incorporates so much dimension. Adjustable shelving and cutouts for wire management make it highly accommodating. This TV stand works equally well as a dining room server or entryway console. How's that for staying power?",
      image: '../assets/Product Pictures/Furniture/entertainmentcenter.jpg',
      price: 600,
      quantity: 1
    },
    {
      name: 'Signature Design Coffee Talbe',
      category: categories[1]._id,
      description:
        'Oversized yet far from overdone, the Cariton coffee table masters the art of simplicity. Bold, blocky profile is enriched with plank-effect styling and a textured grayish brown finish for a look thats cool and contemporary and a vibe thats warm and inviting. Its generous scale makes it a natural complement for spacious sectionals.',
      image: '../assets/Product Pictures/Furniture/coffeetable.jpg',
      price: 120,
      quantity: 1
    },
    {
      name: 'Elephance Large L-Shaped Corner Desk',
      category: categories[1]._id,
      description:
        'This large L shaped computer desk features two 2-tier open shelves for storage, providing plenty of surface space for your monitors, laptops or maybe other office supplies and organization. If you need the space for a large computer chassis, feel free to remove the middle shelf for some extra room.'
      image: '../assets/Product Pictures/Furniture/desk.jpg',
      price: 110,
      quantity: 1
    },
    {
      name: 'Arozzi Milano Ergonomic Computer Gaming/Office Chair',
      category: categories[1]._id,
      description:
        "Meet the Milano: One of Arozzi's fundamental chairs, the Milano incorporates all the essentials of an office chair so that you can work or play and relax for long hours! The featured supportive pillow and additional padding in the armrests help ensure maximum comfort. The automobile grade PU leather covering is easy to clean and built to last! Combine all of this with a rocking function and pliant foam, and you have the perfect entry level gaming or office chair!",
      image: '../assets/Product Pictures/Furniture/deskchair.jpg',
      price: 180,
      quantity: 1
    },
    {
      name: 'Pacific Landing Rocking Chair',
      category: categories[1]._id,
      description:
        'Place this timeless rocking chair in a reading nook or on a covered porch to relax after a long day. A slatted style backrest and seat offer a minimal Mission style design that works with numerous decor. Perfect for a traditional style home, it lends itself nicely rustic farmhouse cottages and mountain retreats. Smooth, straight arms cradle you inside and bring comfort and two long rockers offer a calming motion as you read a book or rock a child to sleep. Crafted of solid acacia wood, this rocking chair is built to last for many years in a home.',
      image: '../assets/Product Pictures/Furniture/rockingchair.jpg'
      price: 90,
      quantity: 1
    },
    {
      name: 'Sectional Patio Furniture with Table',
      category: categories[1]._id,
      description:
        "Enjoy the outdoors and introduce this sectional to the patio for something new. You'll be sure to enjoy every minute spent in this comfortable sectional set.",
      image: '../assets/Product Pictures/Furniture/patioset.jpg',
      price: 2000,
      quantity: 2
    },
    {
      name: 'Dresser',
      category: categories[1]._id,
      description:
        "Beachy style and lots of storage go hand in hand with the Baystorm dresser. Its driftwood and surfer-inspired smokey finish creates a rustic look that's perfect for setting the scene of an island getaway. Six roomy drawers give you the space needed for stowing away clothes and more. Clean lines and modern handles provide an authentic look to be admired for years to come.",
      image: '../assets/Product Pictures/Furniture/dresser.jpg',
      price: 300,
      quantity: 1
    },
    // MUSIC CATEGORY
    {
      name: 'Where Owls Know My Name - Rivers of Nihil',
      category: categories[2]._id,
      description:
        'Propgressive death metal released in 2018, incorporating the use of saxophone on top of death metal, this album won multiple album of the year titles.',
      image: '../assets/Product Pictures/Music/whereowlsknowmyname.jpg',
      price: 15,
      quantity: 100
    },
    {
      name: 'Nocturnal - The Black Dahlia Murder',
      category: categories[2]._id,
      description:
        "The crown jewel of melodic death metal. the Detroit-based act's third full-length album release in 2007.",
      image: '../assets/Product Pictures/Music/nocturnal.jpg',
      price: 15,
      quantity: 10
    },
    {
      name: 'Dark Side of the Moon - Pink Floyd',
      category: categories[2]._id,
      description:
        'The timeless classic from Pink Floyd.',
      image: '../assets/Product Pictures/Music/darksideofthemoon.jpg',
      price: 60,
      quantity: 210
    },
    {
      name: 'Camp - Childish Gambino',
      category: categories[2]._id,
      description:
        "In case you didn't know, Donald Glover raps too. He's really good at it.",
      image: '../assets/Product Pictures/Music/camp.jpg',
      price: 60,
      quantity: 231
    },
    {
      name: 'Adrenaline - Deftones',
      category: categories[2]._id,
      description:
        'The debut studio album from Deftones release back in 1995.',
      image: '../assets/Product Pictures/Music/adrenaline.jpg',
      price: 65,
      quantity: 144
    },
    {
      name: '[A--> B] Life - mewithoutyou',
      category: categories[2]._id,
      description:
        '[A→B] Life is the debut album by American rock band mewithoutYou. It was released on Tooth & Nail Records on June 18, 2002.',
      image: '../assets/Product Pictures/Music/atoblife.jpg',
      price: 65,
      quantity: 178
    },
    {
      name: '"Now That\'s What I Call Music 69 - Various Artists',
      category: categories[2]._id,
      description:
        "They are on 113 now, but this iteration is by far the funniest.",
      image: '../assets/Product Pictures/Music/now69.jpg',
      price: 15,
      quantity: 10
    },
    {
      name: 'Jock Jams, Volume 1 - Various Artists',
      category: categories[2]._id,
      description:
        "The staple classic of the 90s for when your workout just isn't Michael Jordan enough for the gains that you want.",
      image: '../assets/Product Pictures/Music/jockjams.jpg',
      price: 10,
      quantity: 140
    },
    {
      name: 'From Mars to Sirius - Gojira',
      category: categories[2]._id,
      description:
        'The third studio album by French metal band Gojira, featuring some of their most popular songs such as "Flying Whales" and "Ocean Planet".',
      image: '../assets/Product Pictures/Music/frommarstosirius.jpg',
      price: 10,
      quantity: 5
    },
    {
      name: 'Butchered at Birth - Cannibal Corpse',
      category: categories[2]._id,
      description:
        'The second album from American death metal pioneers Cannibal Corpse featuring their original (and now widely mocked and disliked) vocalist Chris Barnes. Buthertd at Birth features such classics as "Meat Hook Sodomy" and "Rancid Amputation".',
      image: '../assets/Product Pictures/Music/butcheredatbirth.jpg',
      price: 10,
      quantity: 2
    },
    // CLOTHING CATEGORY
    {
      name: 'Camo Cargo Shorts',
      category: categories[3]._id,
      description:
        "They'll never see you or the insane amount of stuff you can fit in your pockets coming.",
      image: '../assets/Product Pictures/Clothing/camocargoshorts.jpg',
      price: 17,
      quantity: 10
    },
    {
      name: "Nike Air Max Excee Men's Shoes"
      category: categories[3]._id,
      description:
        "Get a retro look with these men's Nike Max Excee shoes. Inspired by the Nike Air Max 90, these Nike Air Max Excee shoes are a celebration of a classic through a new lens. Elongated lines and distorted proportions on the upper of these men's Nike shoes bring an icon into a new, modern space.",
      image: '../assets/Product Pictures/Clothing/nikeshoes.jpg',
      price: 63,
      quantity: 50
    },
    {
      name: 'Grey T-shirt',
      category: categories[3]._id,
      description:
        "You won't stand out with this regular grey shirt, but you at least won't be violating and public indecency laws and will be let into restaurants.",
      image: '../assets/Product Pictures/Clothing/greyshirt.jpg',
      price: 7,
      quantity: 100
    },
    {
      name: 'Band T-Shirt',
      category: categories[3]._id,
      description:
        'The Black Dahlia Murder Skaver band shirt in size XL.',
      image: '../assets/Product Pictures/Clothing/bandshirt.jpg',
      price: 20,
      quantity: 15
    },
    {
      name: "Men's Levi's 505 Regular Jeans",
      category: categories[3]._id,
      description:
        "These men's Levi's Red Tab 505 jeans feature denim construction and straight-leg styling.",
      image: '../assets/Product Pictures/Clothing/mensjeans.jpg',
      price: 42,
      quantity: 1
    },
    {
      name: "Women's Sonoma Goods For Life Jeans",
      category: categories[3]._id,
      description:
        "Enjoy a trendy casual look when you wear these women's skinny jeans from Sonoma Goods For Life.",
      image: '../assets/Product Pictures/Clothing/womensjeans.jpg',
      price: 45,
      quantity: 113
    },
    {
      name: 'Women\'s Shirt',
      category: categories[3]._id,
      description:
        "You won't stand out with this regular green shirt, but you at least won't be violating and public indecency laws and will be let into restaurants.",
      image: '../assets/Product Pictures/Clothing/womensshirt.jpg',
      price: 10,
      quantity: 15
    },
    {
      name: 'Vans Doheny Men\'s Shoes',
      category: categories[3]._id,
      description:
        "These men's Vans Doheny shoes epitomize laid-back style and also Midwestern emo.",
      image: '../assets/Product Pictures/Clothing/vans.jpg',
      price: 40,
      quantity: 106
    },
    {
      name: 'Fleece-Lined Leggings',
      category: categories[3]._id,
      description:
        "Love the all-day comfort and style of these fleece leggings and thank NASA that the fabric to make these exists.",
      image: '../assets/Product Pictures/Clothing/leggings.jpg',
      price: 100,
      quantity: 89
    },
    {
      name: 'Doc Marten\'s Boots',
      category: categories[3]._id,
      description:
        "The classic punk boot worn by pretty much anyone anywhere. Just don't wear them in the snow.",
      image: '../assets/Product Pictures/Clothing/docmartens.jpg',
      price: 90,
      quantity: 14
    },
    // SPORTS CATEGORY
    {
      name: 'Royals 9FIFTY Snapback Hat',
      category: categories[4]._id,
      description:
        "Blue Kansas City Royal's snapback ha size 7 1/4.",
      image: '../assets/Product Pictures/Sports/royalshat.jpg',
      price: 35,
      quantity: 1
    },
    {
      name: 'Chiefs Patrick Mahomes Jersey',
      category: categories[4]._id,
      description:
        "Wear #15 just like Chiefs quarterbackPatrick Mahomes does on game day.",
      image:'../assets/Product Pictures/Sports/patrickmahomesjersey.jpg',
      price: 100,
      quantity: 2
    },
    {
      name: 'Royals Salvador Perez Jersey',
      category: categories[4]._id,
      description:
        "Wear #13 just like Royals catcher Salvador Perez does on game day.",
      image: '../assets/Product Pictures/Sports/salvadorperezjersey.jpg',
      price: 90,
      quantity: 1
    },
    {
      name: 'Autographed LeBron James Basketball',
      category: categories[4]._id,
      description:
        "Basketball autographed by the greatest basketball player of a generation.",
      image: '../assets/Product Pictures/Sports/lebronjamesbasketball.jpg',
      price: 2500,
      quantity: 
    },
    {
      name: 'Authentic Aaron Judge Record-Breaking 62nd Home Run Ball',
      category: categories[4]._id,
      description:
        "The baseball that broke Roger Maris' longstanding 61 homerun record. Authenticated for real. Trust us.",
      image: '../assets/Product Pictures/Sports/aaronjudgebaseball.jpg',
      price: 3000000,
      quantity: 1
    },
    {
      name: 'Tom Brady Game-Worn Cleats',
      category: categories[4]._id,
      description:
        "Tom Brady's game-worn cleats from a game played while he was still with the NEw England Patriots.",
      image: '../assets/Product Pictures/Sports/tombradycleats.jpg',
      price: 30050,
      quantity: 1
    },
    {
      name: 'Lionel Messi Authentic Boots',
      category: categories[4]._id,
      description:
        "Lionel Messi Signed Football Boot - La Liga Winner 2019 ",
      image: '../assets/Product Pictures/Sports/lionelmessieauthenticboots.jpg',
      price: 1500,
      quantity: 1
    },
    {
      name: 'Wayne Gretzky Authographed Hockey Stick',
      category: categories[4]._id,
      description:
        "Authographed hickey stick from the greatest hockey player of all time.",
      image: '../assets/Product Pictures/Sports/waynegretzkystick.jpg',
      price: 3778,
      quantity: 1
    },
    {
      name: 'Replica Lombardi Trophy',
      category: categories[4]._id,
      description:
       "Puit it on your desk or put it anywhere. Tell your friends you're the world champion. Do whatever you want with it! Even throw it like Tom Brady did on his boat. You're the fake greatest and you've earned it."
      image: '../assets/Product Pictures/Sports/replicalombardi.jpg',
      price: 40,
      quantity: 5 
    },
    {
      name: 'Chiefs Travis Kelce Away Jersey',
      category: categories[4]._id,
      description:
        "Wear #87 just like Chiefs tight end Travis Kelce does on game day.",
      image: '../assets/Product Pictures/Sports/kelceawayjersey.jpg',
      price: 90,
      quantity: 12
    },

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});