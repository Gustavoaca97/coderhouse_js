let products = [];

const mainCategoryMap = {
  "Dumbbells": "Strength & Resistance Training - Free Weights",
  "Barbells": "Strength & Resistance Training - Free Weights",
  "Weight Plates": "Strength & Resistance Training - Free Weights",
  "Kettlebells": "Strength & Resistance Training - Free Weights",
  "Benches": "Benches & Racks",
  "Racks": "Benches & Racks",
  "Resistance Bands": "Resistance Equipment",
  "Suspension Trainers": "Resistance Equipment",
  "Cable Attachments": "Resistance Equipment",
  "Weighted Vests": "Specialty Strength Equipment",
  "Strongman": "Specialty Strength Equipment",
  "Sandbags": "Specialty Strength Equipment",
  "Sleds": "Specialty Strength Equipment",
  "Treadmills": "Cardio Machines",
  "Exercise Bikes": "Cardio Machines",
  "Rowing Machines": "Cardio Machines",
  "Ellipticals": "Cardio Machines",
  "Climbers": "Cardio Machines",
  "Jump Ropes": "Small Cardio Gear",
  "Agility": "Small Cardio Gear",
  "Plyo Boxes": "Small Cardio Gear",
  "Battle Ropes": "Small Cardio Gear",
  "Medicine Balls": "Functional Fitness & CrossFit",
  "Rings": "Functional Fitness & CrossFit",
  "Climbing Ropes": "Functional Fitness & CrossFit",
  "GHD Machines": "Functional Fitness & CrossFit",
  "Foam Rollers": "Recovery & Rehab",
  "Massage Tools": "Recovery & Rehab",
  "Ankle Weights": "Recovery & Rehab",
  "Compression Gear": "Recovery & Rehab",
  "Braces": "Recovery & Rehab",
  "Flooring": "Flooring",
  "Men's Clothing": "Gym Apparel",
  "Women's Clothing": "Gym Apparel",
  "Footwear": "Gym Apparel",
  "Accessories": "Gym Apparel",
  "Supplements": "Nutrition & Supplements",
  "Yoga": "Yoga & Pilates",
  "Pilates": "Yoga & Pilates",
  "Balance Training": "Yoga & Pilates",
  "Boxing": "Boxing & Combat",
  "Studio Gear": "Studio & Group",
  "Tech": "Technology",
  "Bags": "Bags & Lifestyle",
  "Lifestyle": "Bags & Lifestyle"
};

// DOM ELEMENTS
const mainCatSelect = document.getElementById("main-category");
const subcatSelect = document.getElementById("subcategory");
const productGrid = document.getElementById("product-grid");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// HELPERS
function getMainCategories() {
  return [...new Set(Object.values(mainCategoryMap))];
}

function getSubcategories(mainCat) {
  return [...new Set(Object.keys(mainCategoryMap)
    .filter(sub => mainCategoryMap[sub] === mainCat))];
}

function getProducts(subcat) {
  return products.filter(p => p.category === subcat);
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// UPDATE CART COUNT
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = `(${count})`;
  }
}

// RENDER PRODUCTS
function renderProducts(subcat) {
  productGrid.innerHTML = "";

  const prods = getProducts(subcat);
  if (prods.length === 0) {
    productGrid.innerHTML = "<p>No products available.</p>";
    return;
  }

  prods.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <p class="stock">Stock: ${p.stock}</p>
      <button>Add to cart</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      if (p.stock > 0) {
        // check if item already in cart
        let existing = cart.find(item => item.id === p.id);
        if (existing) {
          existing.quantity++;
        } else {
          cart.push({ ...p, quantity: 1 });
        }

        p.stock--;
        saveCart();
        updateCartCount(); // update counter
        renderProducts(subcat);

        // show popup
        showPopup(`${p.name} added to your cart 🛒`);
      } else {
        showPopup("❌ Out of stock");
      }
    });

    productGrid.appendChild(card);
  });
}

function showPopup(message) {
  const popup = document.getElementById("cart-popup");
  popup.textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

// EVENTS
function loadMainCategories() {
  const mains = getMainCategories();
  mains.forEach(m => {
    const option = document.createElement("option");
    option.value = m;
    option.textContent = m;
    mainCatSelect.appendChild(option);
  });
}

mainCatSelect.addEventListener("change", () => {
  subcatSelect.innerHTML = `<option value="">-- Select Subcategory --</option>`;
  productGrid.innerHTML = "";
  subcatSelect.disabled = true;

  if (mainCatSelect.value) {
    const subs = getSubcategories(mainCatSelect.value);
    subs.forEach(s => {
      const option = document.createElement("option");
      option.value = s;
      option.textContent = s;
      subcatSelect.appendChild(option);
    });
    subcatSelect.disabled = false;
  }
});

subcatSelect.addEventListener("change", () => {
  productGrid.innerHTML = "";
  if (subcatSelect.value) {
    renderProducts(subcatSelect.value);
  }
});

// LOAD PRODUCTS FROM JSON
async function loadProducts() {
  try {
    const res = await fetch("data/products.json");
    if (!res.ok) {
      throw new Error("Failed to load products");
    }
    products = await res.json();
    loadMainCategories();
    updateCartCount(); // 👈 initialize counter
  } catch (error) {
    showPopup("❌ Error loading products. Please try again.");
    console.error("Error loading products:", error);
  }
}

// INIT
loadProducts();
