// ============================================
// CONFIGURATION
// ============================================

// Replace with your Amazon Associates tag (India: usually ends with -21)
const AFFILIATE_TAG = "yourtaghere-21";

// ⭐ EASY PRODUCT MANAGEMENT - NON-CODER FRIENDLY
// Just copy & paste the template below. Each line = 1 product
// ALL FIELDS ARE REQUIRED

const PRODUCTS = [
  {
    id: "prod_001",
    title: "Jar Opener Bottle Opener and Can Opener for Weak hands",
    image: "https://m.media-amazon.com/images/I/618cdu3k1HL._SX679_.jpg",
    productLink: "https://amzn.to/3Zcb8xI",
    mrp: 6799,
    price: 1271,
    rating: 4.3,
    reviews: 13833,
    category: "Home",
    badges: ["Best seller", "Fast delivery"],
  },
  {
    id: "prod_002",
    title: "Shoe Bags for Travel, Drawstring Packing Bags",
    image: "https://m.media-amazon.com/images/I/616K24V+mkL._SX679_.jpg",
    productLink: "https://amzn.to/4pBDMD8",
    mrp: 499,
    price: 149,
    rating: 4.4,
    reviews: 4662,
    category: "Home",
    badges: ["Hot deal","Use full"],
  },
  {
    id: "prod_003",
    title: "MAYCREATE® 3pcs Silicone Cream Jars for Travel 20ml Cream Dispenser Refill Travel Bottles",
    image: "https://m.media-amazon.com/images/I/51PRJk4iLhL._SX679_.jpg",
    productLink: "https://amzn.to/4pB71WM",
    mrp: 749,
    price: 460,
    rating: 4.1,
    reviews: 5218,
    category: "Home",
    badges: ["Girls", "Quality"],
  },
  {
    id: "prod_004",
    title: "Zollyss 2Pc Capsule Shape Travel Toothbrush Toothpaste Case Holder Portable Toothbrush Storage Plastic",
    image: "https://m.media-amazon.com/images/I/6179vAUX3XL._SX679_.jpg",
    productLink: "https://amzn.to/3Nj4raI",
    mrp: 899,
    price: 299,
    rating: 4.0,
    reviews: 1580,
    category: "Home",
    badges: ["Daily use","Health","Quality"],
  },
  {
    id: "prod_005",
    title: "6 fridge storage boxes multipurpose containers for storage Space-saving Refrigerator Side Door Organizer for fridge kitchen Fruits, Vegetables Storage",
    image: "https://m.media-amazon.com/images/I/71KVlyVtG3L._SX679_.jpg",
    productLink: "https://amzn.to/49vCgfW",
    mrp: 499,
    price: 183,
    rating: 4.3,
    reviews: 2055,
    category: "Home",
    badges: ["Kitchen","Daily useful"],
  },
  {
    id: "prod_006",
    title: "Transparent Glass Jar and Container Air Tight Black Lid for Kitchen 400 ml Mataki Glass Jar with Airtight Metal Lid Pack of (6)",
    image: "https://m.media-amazon.com/images/I/81aVWqEmrML._SX679_.jpg",
    productLink: "https://amzn.to/49BH7w6",
    mrp: 899,
    price: 296,
    rating: 4.3,
    reviews: 8446,
    category: "Home",
    badges: ["Kitchen", "Mothers","Daily Useful"],
  },
  {
    id: "prod_007",
    title: "Rico 350W Electric Juicer made with Japanese Technology | ISI Marked & Fully Automatic | Portable, Compact Design, Slow Juicing Process to Extract Maximum pulpy Juice from Fruits & Vegetables",
    image: "https://m.media-amazon.com/images/I/61LCD-5Z04L._SX679_.jpg",
    productLink: "https://amzn.to/49Tie0c",
    mrp: 3500,
    price: 3099,
    rating: 3.9,
    reviews: 1372,
    category: "Home",
    badges: ["Home", "juice maker"],
  }
];

// Extract unique categories
const CATEGORIES = [...new Set(PRODUCTS.map((p) => p.category))].sort();

// ============================================
// HOW TO ADD A NEW PRODUCT (For Non-Coders)
// ============================================
/*
STEP 1: Open this file in a text editor (Notepad++, VSCode, etc)

STEP 2: Find the PRODUCTS list above (starts with "const PRODUCTS = [")

STEP 3: Copy this template and add it before the closing bracket "]"

STEP 3: Replace the values with your product details:

{
  id: "prod_007",                                    // Unique ID (use prod_001, prod_002, etc)
  title: "Your Product Name Here",                  // Full product title
  image: "https://paste-image-url-here.jpg",        // Direct image URL (right-click image → Copy image link)
  productLink: "https://www.amazon.in/dp/XXXXXX",  // Full Amazon product link (copy from address bar)
  mrp: 5000,                                         // Original price (don't use ₹ symbol, just number)
  price: 2999,                                       // Current price (don't use ₹ symbol, just number)
  rating: 4.5,                                       // Product rating (0-5, use decimal like 4.3)
  reviews: 1234,                                     // Number of reviews (just the number)
  category: "Audio",                                 // Category: Audio, Wearables, Accessories, etc
  badges: ["Best seller", "Fast delivery"],         // Tags for the product (any text you want)
},

STEP 4: Save the file and refresh your website!

EXAMPLE - Adding Apple AirPods:
{
  id: "prod_007",
  title: "Apple AirPods Pro with MagSafe Charging Case",
  image: "https://m.media-amazon.com/images/I/61R03exh5GL._AC_SL1500_.jpg",
  productLink: "https://www.amazon.in/Apple-AirPods-MagSafe-Charging-Case/dp/B0BDHWDR12",
  mrp: 29990,
  price: 24990,
  rating: 4.8,
  reviews: 5432,
  category: "Audio",
  badges: ["Premium", "Best seller"],
},

HOW TO GET IMAGE URL:
1. Find product on Amazon
2. Right-click on product image
3. Click "Copy image link"
4. Paste it in the "image" field

HOW TO GET PRODUCT LINK:
1. Copy the URL from your browser's address bar
2. Paste it in the "productLink" field
*/

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
  search: "",
  category: null,
  minPrice: null,
  maxPrice: null,
  minRating: 0,
  sort: "relevance",
  wishlist: new Set(),
};

// ============================================
// DOM ELEMENTS
// ============================================

const cardsEl = document.getElementById("cards");
const resultsCountEl = document.getElementById("resultsCount");
const categoriesEl = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const minPriceEl = document.getElementById("minPrice");
const maxPriceEl = document.getElementById("maxPrice");
const ratingFilterEl = document.getElementById("ratingFilter");
const clearFiltersBtn = document.getElementById("clearFilters");
const toggleDarkBtn = document.getElementById("toggleDark");

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency to INR
function formatINR(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

// Generate star rating display
function getStarDisplay(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return "★".repeat(fullStars) + "☆".repeat(emptyStars);
}

// Show skeleton loaders
function showSkeletons(count = 6) {
  cardsEl.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement("div");
    skeleton.className = "skeleton card";
    cardsEl.appendChild(skeleton);
  }
}

// Add affiliate tag to any URL
function addAffiliateTag(url) {
  if (!url) return "";
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tag=${AFFILIATE_TAG}`;
}

// ============================================
// FILTER & SORT LOGIC
// ============================================

// Apply all active filters
function applyFilters(items) {
  let filtered = [...items];

  // Search filter
  if (state.search) {
    const query = state.search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
  }

  // Category filter
  if (state.category) {
    filtered = filtered.filter((p) => p.category === state.category);
  }

  // Price range filter
  if (state.minPrice !== null) {
    filtered = filtered.filter((p) => p.price >= state.minPrice);
  }
  if (state.maxPrice !== null) {
    filtered = filtered.filter((p) => p.price <= state.maxPrice);
  }

  // Rating filter
  if (state.minRating > 0) {
    filtered = filtered.filter((p) => p.rating >= state.minRating);
  }

  // Sort
  switch (state.sort) {
    case "priceAsc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "ratingDesc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Relevance: weighted by rating & reviews
      filtered.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
  }

  return filtered;
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

// Render category filter chips
function renderCategories() {
  categoriesEl.innerHTML = "";

  // "All" chip
  const allChip = document.createElement("button");
  allChip.className = "chip" + (!state.category ? " active" : "");
  allChip.textContent = "All";
  allChip.onclick = () => {
    state.category = null;
    renderCategories();
    renderProducts();
  };
  categoriesEl.appendChild(allChip);

  // Category chips
  CATEGORIES.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (state.category === cat ? " active" : "");
    chip.textContent = cat;
    chip.onclick = () => {
      state.category = cat;
      renderCategories();
      renderProducts();
    };
    categoriesEl.appendChild(chip);
  });
}

// Render product cards
function renderProducts() {
  const items = applyFilters(PRODUCTS);
  resultsCountEl.textContent = `${items.length} product${items.length !== 1 ? "s" : ""}`;

  cardsEl.innerHTML = "";

  if (items.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.style.cssText =
      "grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--muted);";
    emptyState.innerHTML =
      "<p style='font-size: 18px; margin: 0;'>No products found</p><p style='font-size: 14px; margin: 8px 0 0;'>Try adjusting your filters or search terms</p>";
    cardsEl.appendChild(emptyState);
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    // Thumb/Image section
    const thumb = document.createElement("div");
    thumb.className = "thumb";
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = product.title;
    img.src = product.image;
    thumb.appendChild(img);

    // Content section
    const content = document.createElement("div");
    content.className = "content";

    // Title
    const title = document.createElement("h4");
    title.className = "title";
    title.textContent = product.title;

    // Meta (rating & reviews)
    const meta = document.createElement("div");
    meta.className = "meta";
    const starSpan = document.createElement("span");
    starSpan.className = "stars";
    starSpan.textContent = getStarDisplay(product.rating);
    const metaText = document.createElement("span");
    metaText.textContent = `${product.rating.toFixed(1)} • ${product.reviews.toLocaleString(
      "en-IN"
    )} reviews`;
    meta.appendChild(starSpan);
    meta.appendChild(metaText);

    // Badges
    const badgesContainer = document.createElement("div");
    badgesContainer.className = "badges";
    product.badges.forEach((badgeText) => {
      const badge = document.createElement("span");
      badge.className = "badge";
      if (badgeText.toLowerCase().includes("hot") || badgeText.toLowerCase().includes("limited")) {
        badge.classList.add("hot");
      }
      if (
        badgeText.toLowerCase().includes("seller") ||
        badgeText.toLowerCase().includes("top") ||
        badgeText.toLowerCase().includes("essential")
      ) {
        badge.classList.add("success");
      }
      badge.textContent = badgeText;
      badgesContainer.appendChild(badge);
    });

    // Price section
    const priceRow = document.createElement("div");
    priceRow.className = "price-row";
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatINR(product.price);
    const mrp = document.createElement("span");
    mrp.className = "mrp";
    mrp.textContent = formatINR(product.mrp);
    priceRow.appendChild(price);
    priceRow.appendChild(mrp);

    // CTA Row (Buy button + Wishlist)
    const ctaRow = document.createElement("div");
    ctaRow.className = "cta-row";

    const buyBtn = document.createElement("a");
    buyBtn.className = "buy-btn";
    // Use the productLink directly with affiliate tag
    buyBtn.href = addAffiliateTag(product.productLink);
    buyBtn.target = "_blank";
    buyBtn.rel = "nofollow noopener sponsored";
    buyBtn.textContent = "Buy on Amazon";

    const wishBtn = document.createElement("button");
    wishBtn.className = "wish-btn" + (state.wishlist.has(product.id) ? " active" : "");
    wishBtn.innerHTML = state.wishlist.has(product.id) ? "❤️" : "🤍";
    wishBtn.onclick = (e) => {
      e.preventDefault();
      if (state.wishlist.has(product.id)) {
        state.wishlist.delete(product.id);
      } else {
        state.wishlist.add(product.id);
      }
      renderProducts();
    };

    ctaRow.appendChild(buyBtn);
    ctaRow.appendChild(wishBtn);

    // Assemble content
    content.appendChild(title);
    content.appendChild(meta);
    content.appendChild(badgesContainer);
    content.appendChild(priceRow);
    content.appendChild(ctaRow);

    // Assemble card
    card.appendChild(thumb);
    card.appendChild(content);

    cardsEl.appendChild(card);
  });
}

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
  // Search input
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    renderProducts();
  });

  // Sort select
  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  // Price filters
  minPriceEl.addEventListener("input", (e) => {
    state.minPrice = e.target.value ? parseInt(e.target.value, 10) : null;
    renderProducts();
  });

  maxPriceEl.addEventListener("input", (e) => {
    state.maxPrice = e.target.value ? parseInt(e.target.value, 10) : null;
    renderProducts();
  });

  // Rating filter buttons
  ratingFilterEl.querySelectorAll(".rating-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      ratingFilterEl.querySelectorAll(".rating-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.minRating = parseInt(btn.dataset.rating, 10);
      renderProducts();
    });
  });

  // Clear filters
  clearFiltersBtn.addEventListener("click", () => {
    state.search = "";
    state.category = null;
    state.minPrice = null;
    state.maxPrice = null;
    state.minRating = 0;
    state.sort = "relevance";

    searchInput.value = "";
    sortSelect.value = "relevance";
    minPriceEl.value = "";
    maxPriceEl.value = "";

    ratingFilterEl.querySelectorAll(".rating-btn").forEach((b, idx) => {
      b.classList.toggle("active", idx === 0);
    });

    renderCategories();
    renderProducts();
  });

  // Dark mode toggle
  toggleDarkBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
    updateThemeIcon();
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}

// Update theme icon based on current theme
function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggleDarkBtn.textContent = isDark ? "☀️" : "🌙";
}

// ============================================
// INITIALIZATION
// ============================================

function initializeApp() {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();

  // Render UI
  renderCategories();
  renderProducts();

  // Attach event listeners
  initializeEventListeners();
}

// Boot app with skeleton loading
showSkeletons(6);
setTimeout(() => {
  initializeApp();
}, 300);
