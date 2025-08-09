const products = [
  // Strength & Resistance Training - Free Weights
  { id: 1, name: "Hex Dumbbell 5kg", price: 25, category: "Dumbbells", stock: 12 },
  { id: 2, name: "Adjustable Dumbbell Set 20kg", price: 120, category: "Dumbbells", stock: 8 },
  { id: 3, name: "Olympic Barbell 20kg", price: 180, category: "Barbells", stock: 5 },
  { id: 4, name: "EZ Curl Bar", price: 75, category: "Barbells", stock: 6 },
  { id: 5, name: "Bumper Plate 10kg", price: 45, category: "Weight Plates", stock: 20 },
  { id: 6, name: "Cast Iron Plate 5kg", price: 18, category: "Weight Plates", stock: 30 },
  { id: 7, name: "Competition Kettlebell 16kg", price: 60, category: "Kettlebells", stock: 7 },
  { id: 8, name: "Adjustable Kettlebell 4-18kg", price: 95, category: "Kettlebells", stock: 4 },

  // Benches & Racks
  { id: 9, name: "Adjustable Weight Bench", price: 210, category: "Benches", stock: 3 },
  { id: 10, name: "Flat Bench", price: 130, category: "Benches", stock: 5 },
  { id: 11, name: "Power Rack with Pull-Up Bar", price: 650, category: "Racks", stock: 2 },
  { id: 12, name: "Squat Stand", price: 280, category: "Racks", stock: 4 },

  // Resistance Equipment
  { id: 13, name: "Loop Resistance Band Set", price: 25, category: "Resistance Bands", stock: 15 },
  { id: 14, name: "TRX Suspension Trainer", price: 150, category: "Suspension Trainers", stock: 3 },
  { id: 15, name: "Cable Attachment Lat Bar", price: 40, category: "Cable Attachments", stock: 10 },
  { id: 16, name: "Rope Attachment", price: 30, category: "Cable Attachments", stock: 12 },

  // Specialty Strength Equipment
  { id: 17, name: "Weighted Vest 10kg", price: 70, category: "Weighted Vests", stock: 6 },
  { id: 18, name: "Strongman Yoke", price: 520, category: "Strongman", stock: 1 },
  { id: 19, name: "Training Sandbag 25kg", price: 55, category: "Sandbags", stock: 5 },
  { id: 20, name: "Push Sled", price: 350, category: "Sleds", stock: 2 },

  // Cardio Machines
  { id: 21, name: "Motorized Treadmill", price: 1200, category: "Treadmills", stock: 2 },
  { id: 22, name: "Curved Manual Treadmill", price: 1800, category: "Treadmills", stock: 1 },
  { id: 23, name: "Air Bike", price: 750, category: "Exercise Bikes", stock: 3 },
  { id: 24, name: "Rowing Machine - Water Resistance", price: 950, category: "Rowing Machines", stock: 2 },
  { id: 25, name: "Elliptical Trainer", price: 850, category: "Ellipticals", stock: 2 },
  { id: 26, name: "Stair Climber", price: 1600, category: "Climbers", stock: 1 },

  // Small Cardio Gear
  { id: 27, name: "Speed Jump Rope", price: 15, category: "Jump Ropes", stock: 20 },
  { id: 28, name: "Weighted Jump Rope", price: 25, category: "Jump Ropes", stock: 10 },
  { id: 29, name: "Agility Ladder 8m", price: 20, category: "Agility", stock: 12 },
  { id: 30, name: "Plyometric Box 50cm", price: 95, category: "Plyo Boxes", stock: 6 },
  { id: 31, name: "Battle Rope 15m", price: 85, category: "Battle Ropes", stock: 4 },

  // Functional Fitness & CrossFit
  { id: 32, name: "Slam Ball 10kg", price: 40, category: "Medicine Balls", stock: 8 },
  { id: 33, name: "Wall Ball 9kg", price: 50, category: "Medicine Balls", stock: 5 },
  { id: 34, name: "Wooden Gymnastic Rings", price: 35, category: "Rings", stock: 6 },
  { id: 35, name: "Climbing Rope 5m", price: 60, category: "Climbing Ropes", stock: 3 },
  { id: 36, name: "Glute Ham Developer (GHD)", price: 420, category: "GHD Machines", stock: 1 },

  // Recovery & Rehab
  { id: 37, name: "Foam Roller 45cm", price: 20, category: "Foam Rollers", stock: 15 },
  { id: 38, name: "Massage Gun Pro", price: 180, category: "Massage Tools", stock: 4 },
  { id: 39, name: "Ankle Weight Set 5kg", price: 25, category: "Ankle Weights", stock: 6 },
  { id: 40, name: "Knee Compression Sleeve", price: 18, category: "Compression Gear", stock: 12 },
  { id: 41, name: "Elbow Brace", price: 15, category: "Braces", stock: 10 },

  // Flooring
  { id: 42, name: "Rubber Floor Tile 1m²", price: 25, category: "Flooring", stock: 50 },
  { id: 43, name: "Artificial Turf Strip 10m", price: 300, category: "Flooring", stock: 2 },

  // Gym Apparel
  { id: 44, name: "Men's Training Shorts", price: 35, category: "Men's Clothing", stock: 8 },
  { id: 45, name: "Men's Compression Top", price: 40, category: "Men's Clothing", stock: 6 },
  { id: 46, name: "Women's Sports Bra", price: 30, category: "Women's Clothing", stock: 10 },
  { id: 47, name: "Women's High-Waist Leggings", price: 45, category: "Women's Clothing", stock: 7 },
  { id: 48, name: "Weightlifting Shoes", price: 120, category: "Footwear", stock: 5 },
  { id: 49, name: "Cross-Training Shoes", price: 100, category: "Footwear", stock: 6 },
  { id: 50, name: "Lifting Belt Leather", price: 55, category: "Accessories", stock: 8 },
  { id: 51, name: "Wrist Wraps", price: 15, category: "Accessories", stock: 12 },

  // Nutrition & Supplements
  { id: 52, name: "Whey Protein 2kg", price: 65, category: "Supplements", stock: 15 },
  { id: 53, name: "Plant Protein 1kg", price: 50, category: "Supplements", stock: 12 },
  { id: 54, name: "Pre-Workout Formula", price: 40, category: "Supplements", stock: 10 },
  { id: 55, name: "Creatine Monohydrate 500g", price: 25, category: "Supplements", stock: 18 },
  { id: 56, name: "BCAA Powder 400g", price: 30, category: "Supplements", stock: 15 },
  { id: 57, name: "Shaker Bottle 700ml", price: 12, category: "Accessories", stock: 20 },

  // Yoga & Pilates
  { id: 58, name: "Yoga Mat 6mm", price: 25, category: "Yoga", stock: 14 },
  { id: 59, name: "Yoga Block", price: 12, category: "Yoga", stock: 20 },
  { id: 60, name: "Pilates Ring", price: 20, category: "Pilates", stock: 8 },
  { id: 61, name: "Stability Ball 65cm", price: 22, category: "Balance Training", stock: 10 },

  // Boxing & Combat
  { id: 62, name: "Boxing Gloves 12oz", price: 55, category: "Boxing", stock: 8 },
  { id: 63, name: "Hand Wraps", price: 10, category: "Boxing", stock: 15 },
  { id: 64, name: "Heavy Punching Bag 100lb", price: 140, category: "Boxing", stock: 3 },
  { id: 65, name: "Focus Mitts", price: 35, category: "Boxing", stock: 6 },

  // Studio & Group
  { id: 66, name: "Aerobic Step Platform", price: 45, category: "Studio Gear", stock: 6 },
  { id: 67, name: "Body Pump Barbell Set", price: 120, category: "Studio Gear", stock: 4 },

  // Technology
  { id: 68, name: "Fitness Tracker Watch", price: 90, category: "Tech", stock: 7 },
  { id: 69, name: "Smart Scale Bluetooth", price: 60, category: "Tech", stock: 5 },
  { id: 70, name: "Wall-Mount Gym Timer", price: 150, category: "Tech", stock: 3 },

  // Bags & Lifestyle
  { id: 71, name: "Gym Duffel Bag", price: 40, category: "Bags", stock: 10 },
  { id: 72, name: "Stainless Steel Water Bottle 1L", price: 20, category: "Lifestyle", stock: 12 },
  { id: 73, name: "Microfiber Gym Towel", price: 10, category: "Lifestyle", stock: 20 }
];

/*
  map subcategory to main category names taken from the section comments above
  this avoids changing the product objects
*/
const mainCategoryMap = {
  // Strength & Resistance Training - Free Weights
  "Dumbbells": "Strength & Resistance Training - Free Weights",
  "Barbells": "Strength & Resistance Training - Free Weights",
  "Weight Plates": "Strength & Resistance Training - Free Weights",
  "Kettlebells": "Strength & Resistance Training - Free Weights",

  // Benches & Racks
  "Benches": "Benches & Racks",
  "Racks": "Benches & Racks",

  // Resistance Equipment
  "Resistance Bands": "Resistance Equipment",
  "Suspension Trainers": "Resistance Equipment",
  "Cable Attachments": "Resistance Equipment",

  // Specialty Strength Equipment
  "Weighted Vests": "Specialty Strength Equipment",
  "Strongman": "Specialty Strength Equipment",
  "Sandbags": "Specialty Strength Equipment",
  "Sleds": "Specialty Strength Equipment",

  // Cardio Machines
  "Treadmills": "Cardio Machines",
  "Exercise Bikes": "Cardio Machines",
  "Rowing Machines": "Cardio Machines",
  "Ellipticals": "Cardio Machines",
  "Climbers": "Cardio Machines",

  // Small Cardio Gear
  "Jump Ropes": "Small Cardio Gear",
  "Agility": "Small Cardio Gear",
  "Plyo Boxes": "Small Cardio Gear",
  "Battle Ropes": "Small Cardio Gear",

  // Functional Fitness & CrossFit
  "Medicine Balls": "Functional Fitness & CrossFit",
  "Rings": "Functional Fitness & CrossFit",
  "Climbing Ropes": "Functional Fitness & CrossFit",
  "GHD Machines": "Functional Fitness & CrossFit",

  // Recovery & Rehab
  "Foam Rollers": "Recovery & Rehab",
  "Massage Tools": "Recovery & Rehab",
  "Ankle Weights": "Recovery & Rehab",
  "Compression Gear": "Recovery & Rehab",
  "Braces": "Recovery & Rehab",

  // Flooring
  "Flooring": "Flooring",

  // Gym Apparel
  "Men's Clothing": "Gym Apparel",
  "Women's Clothing": "Gym Apparel",
  "Footwear": "Gym Apparel",
  "Accessories": "Gym Apparel",

  // Nutrition & Supplements
  "Supplements": "Nutrition & Supplements",

  // Yoga & Pilates
  "Yoga": "Yoga & Pilates",
  "Pilates": "Yoga & Pilates",
  "Balance Training": "Yoga & Pilates",

  // Boxing & Combat
  "Boxing": "Boxing & Combat",

  // Studio & Group
  "Studio Gear": "Studio & Group",

  // Technology
  "Tech": "Technology",

  // Bags & Lifestyle
  "Bags": "Bags & Lifestyle",
  "Lifestyle": "Bags & Lifestyle"
};

// helpers
function getMainCategories() {
  return [...new Set(products.map(p => mainCategoryMap[p.category]))];
}

function getSubcategories(mainCat) {
  return [...new Set(products
    .filter(p => mainCategoryMap[p.category] === mainCat)
    .map(p => p.category))];
}

function showProductsBySubcategory(subcat) {
  const list = products.filter(p => p.category === subcat);
  let msg = `Subcategory: ${subcat}\n\n`;
  list.forEach(p => {
    msg += `${p.id}. ${p.name} - $${p.price} (Stock: ${p.stock})\n`;
  });
  return msg;
}

// keeps your original grouped list if you ever want to print everything
function showProducts() {
  let message = "Available Products:\n";
  const mains = getMainCategories();

  mains.forEach(main => {
    message += `\n${main.toUpperCase()}:\n`;
    const subs = getSubcategories(main);
    subs.forEach(sub => {
      message += `  ${sub}:\n`;
      products.filter(p => p.category === sub).forEach(p => {
        message += `    ${p.id}. ${p.name} - $${p.price} (Stock: ${p.stock})\n`;
      });
    });
  });
  return message;
}

// select with three steps  main, sub, product
function selectProducts(cart) {
  let keepShopping = true;

  while (keepShopping) {
    // step 1  main category
    const mains = getMainCategories();
    let mainMsg = "Choose a main category by number\n\n";
    mains.forEach((m, i) => { mainMsg += `${i + 1}. ${m}\n`; });
    mainMsg += "\nType a number or cancel";
    const mainInput = prompt(mainMsg);
    if (mainInput === null) break;

    const mainIdx = parseInt(mainInput, 10) - 1;
    if (Number.isNaN(mainIdx) || mainIdx < 0 || mainIdx >= mains.length) {
      alert("Invalid category.");
      continue;
    }
    const mainCat = mains[mainIdx];

    // step 2  subcategory
    const subs = getSubcategories(mainCat);
    let subMsg = `Main: ${mainCat}\n\nChoose a subcategory\n\n`;
    subs.forEach((s, i) => { subMsg += `${i + 1}. ${s}\n`; });
    const subInput = prompt(subMsg);
    if (subInput === null) continue;

    const subIdx = parseInt(subInput, 10) - 1;
    if (Number.isNaN(subIdx) || subIdx < 0 || subIdx >= subs.length) {
      alert("Invalid subcategory.");
      continue;
    }
    const subcat = subs[subIdx];

    // step 3  product
    const prodInput = prompt(showProductsBySubcategory(subcat) + "\nEnter the product number you want to buy:");
    if (prodInput === null) continue;

    const productId = parseInt(prodInput, 10);
    const product = products.find(p => p.id === productId && p.category === subcat);

    if (!product) {
      alert("Invalid product.");
      continue;
    }
    if (product.stock === 0) {
      alert("Sorry, this product is out of stock.");
      continue;
    }

    // quantity
    const qtyInput = prompt(`How many "${product.name}" do you want? (Available stock: ${product.stock})`);
    if (qtyInput === null) continue;

    const quantity = parseInt(qtyInput, 10);
    if (Number.isNaN(quantity) || quantity <= 0) {
      alert("Invalid quantity.");
      continue;
    }
    if (quantity > product.stock) {
      alert("Not enough stock available.");
      continue;
    }

    // add to cart
    product.stock -= quantity;
    cart.push({ ...product, quantity });
    alert(`${quantity} unit(s) of ${product.name} added to your cart.`);
    localStorage.setItem("cart", JSON.stringify(cart));

    const cont = prompt("Do you want to keep shopping? (yes/no)");
    if (!cont || cont.toLowerCase() !== "yes") keepShopping = false;
  }

  return cart;
}

// total
function calculateTotal(cart) {
  let total = 0;
  cart.forEach(item => { total += item.price * item.quantity; });
  return total;
}

// summary
function showSummary(cart, total) {
  console.log("Purchase Summary:");
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}`);
  });
  console.log("Total to pay: $" + total);
}

// main flow
function storeSimulator() {
  let savedCart = localStorage.getItem("cart");
  let cart = [];

  if (savedCart) {
    let answer = prompt("You have a saved cart. Do you want to continue with it? (yes/no)");
    if (answer && answer.toLowerCase() === "yes") {
      cart = JSON.parse(savedCart);
      alert("Cart loaded successfully.");
    } else {
      localStorage.removeItem("cart");
      alert("Previous cart cleared.");
    }
  }

  cart = selectProducts(cart);
  const total = calculateTotal(cart);
  showSummary(cart, total);
  localStorage.removeItem("cart");
}

storeSimulator();
