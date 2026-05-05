/*
  JS: Product Popup Logic
  - Fetch product data
  - Render popup
  - Add to cart
  - Handle special condition
*/

document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("product-popup");
  const popupBody = document.getElementById("popup-body");

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", async () => {

      const handle = card.dataset.handle;

      const res = await fetch(`/products/${handle}.js`);
      const product = await res.json();

      renderPopup(product);
    });
  });

function renderPopup(product) {
  const options = product.options;
  const variants = product.variants;

  // Detect options
const colorIndex = options.findIndex(o => 
  (o.name || o).toLowerCase().includes("color")
);

const sizeIndex = options.findIndex(o => 
  (o.name || o).toLowerCase().includes("size")
);

  // Get unique values
  const colors = [...new Set(variants.map(v => v.options[colorIndex]))];
  const sizes = [...new Set(variants.map(v => v.options[sizeIndex]))];

popupBody.innerHTML = `
  <div class="sr-popup-wrapper">

    <!-- TOP -->
    <div class="sr-popup-top">

     <div 
  class="sr-popup-image"
  style="background-image: url('${product.images[0]}')"
>&nbsp</div>

      <div class="sr-popup-info">
        <h2 class="sr-popup-title">${product.title}</h2>
        <p class="sr-popup-price">₹${product.variants[0].price / 100}</p>

        <div class="sr-popup-desc">
          ${product.description}
        </div>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="sr-popup-bottom">

      ${colorIndex !== -1 ? `
        <div class="sr-popup-field">
          <label>Color</label>
          <div class="sr-color-options">
            ${colors.map((c, i) => `
              <button class="sr-color-btn ${i === 0 ? 'active' : ''}" data-value="${c}">
                ${c}
              </button>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${sizeIndex !== -1 ? `
        <div class="sr-popup-field">
          <label>Size</label>
          <div class="sr-select-wrapper">
            <select id="sizeSelect" class="sr-popup-select">
              <option disabled selected>Choose your size</option>
              ${sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
            </select>
          </div>
        </div>
      ` : ""}

      <button id="addToCartBtn" class="sr-popup-btn">
        ADD TO CART
      </button>

    </div>

  </div>
`;

setTimeout(() => {
  document.querySelectorAll(".sr-color-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sr-color-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}, 0);
  popup.classList.remove("hidden");

  document.getElementById("addToCartBtn").onclick = () => {
    addToCart(product);
  };
}

// document.querySelectorAll(".sr-color-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     document.querySelectorAll(".sr-color-btn").forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");
//   });
// });

async function addToCart(product) {
  const size = document.getElementById("sizeSelect")?.value;
  const color = document.querySelector(".sr-color-btn.active")?.dataset.value;

  const variant = product.variants.find(v =>
    (!size || v.title.includes(size)) &&
    (!color || v.title.includes(color))
  );

  if (!variant) {
    showToast("Please select size & color");;
    return;
  }

  await fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: variant.id, quantity: 1 })
  });

  updateFloatingCart();

  showToast("Added to cart!");
  popup.classList.add("hidden");
}

  // Close popup
  document.querySelector(".close-popup").addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.add("hidden");
  });

  function showToast(message) {
  const toast = document.getElementById("sr-toast");
  const msg = toast.querySelector(".sr-toast-msg");

  msg.textContent = message;

  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
}

async function updateFloatingCart() {
  try {
    const res = await fetch('/cart.js');
    const cart = await res.json();

    const floatingCart = document.getElementById("sr-floating-cart");
    const countEl = document.getElementById("sr-cart-count");

    if (cart.item_count > 0) {
      floatingCart.classList.remove("hidden");
      countEl.textContent = cart.item_count;
    } else {
      floatingCart.classList.add("hidden");
    }

  } catch (err) {
    console.error("Cart fetch error", err);
  }
}

updateFloatingCart();

});