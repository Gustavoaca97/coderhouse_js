// LOGIC
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");
const proceedPaymentBtn = document.getElementById("proceed-payment");

// Guardar carrito en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Renderizar carrito
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<li>0 products selected</li>";
  }

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("cart-item");

    li.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <div class="quantity-controls">
        <button class="decrease">-</button>
        <span>${item.quantity}</span>
        <button class="increase">+</button>
      </div>
      <button class="remove">❌</button>
    `;

    // aumentar cantidad
    li.querySelector(".increase").addEventListener("click", () => {
      if (item.quantity < item.stock) {
        item.quantity++;
        saveCart();
        renderCart();
      } else {
        Swal.fire({
          icon: "warning",
          title: "No more available stock",
          confirmButtonText: "Ok"
        });
      }
    });

    // disminuir cantidad
    li.querySelector(".decrease").addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart.splice(index, 1);
      }
      saveCart();
      renderCart();
    });

    // eliminar producto
    li.querySelector(".remove").addEventListener("click", () => {
      cart.splice(index, 1);
      saveCart();
      renderCart();
    });

    cartList.appendChild(li);

    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: $${total}`;
}

// Vaciar carrito
clearCartBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Your cart is already empty 🛒",
      confirmButtonText: "Ok"
    });
    return;
  }

  Swal.fire({
    title: "Are you sure?",
    text: "This will empty your shopping cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, empty it",
    cancelButtonText: "Cancel"
  }).then((result) => {
    if (result.isConfirmed) {
      cart = [];
      saveCart();
      renderCart();
      Swal.fire({
        icon: "success",
        title: "Cart emptied",
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
});

// Proceder al pago (compra simulada)
proceedPaymentBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Your cart is empty 🛒",
      confirmButtonText: "Ok"
    });
    return;
  }

  Swal.fire({
    title: "Confirm Purchase",
    text: "Do you want to complete your order?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, buy now",
    cancelButtonText: "Cancel"
  }).then((result) => {
    if (result.isConfirmed) {
      cart = [];
      saveCart();
      renderCart();
      Swal.fire({
        icon: "success",
        title: "✅ Purchase completed successfully!",
        text: "Thanks for your order.",
        confirmButtonText: "Ok"
      });
    }
  });
});

// INIT
renderCart();
