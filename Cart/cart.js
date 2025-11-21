  function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("show");
    }
    

  // Select all cart items
  const cartItems = document.querySelectorAll(".cart-item");
  const subtotalElem = document.querySelector(".summary-row .summary-value");
  const orderTotalElem = document.querySelectorAll(".summary-row .summary-value")[2]; 

  cartItems.forEach((item) => {
    const qtySpan = item.querySelector(".item-qty span:nth-child(2)");
    const minusBtn = item.querySelector(".qty-btn:first-child");
    const plusBtn = item.querySelector(".qty-btn:last-child");
    const removeLink = item.querySelector(".remove-link");
    const priceElem = item.querySelector(".item-price");
    const totalElem = item.querySelector(".item-total");

    const getPrice = () => Number(priceElem.textContent.replace("₱", ""));

    //item total
    const updateItemTotal = () => {
      const qty = Number(qtySpan.textContent);
      const total = getPrice() * qty;
      totalElem.textContent = `₱${total}`;
      updateSubtotal();
    };

    // Quantity buttons
    minusBtn.addEventListener("click", () => {
      let qty = Number(qtySpan.textContent);
      if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
        updateItemTotal();
      }
    });

    plusBtn.addEventListener("click", () => {
      let qty = Number(qtySpan.textContent);
      qty++;
      qtySpan.textContent = qty;
      updateItemTotal();
    });

    // Remove item
    removeLink.addEventListener("click", () => {
      item.remove();
      updateSubtotal();
    });
  });

  // order total
  function updateSubtotal() {
    const items = document.querySelectorAll(".cart-item");
    let subtotal = 0;
    items.forEach((item) => {
      const total = Number(item.querySelector(".item-total").textContent.replace("₱", ""));
      subtotal += total;
    });
    subtotalElem.textContent = `₱${subtotal}`;
    orderTotalElem.textContent = `₱${subtotal}`; 
  }
  function confirmLogout() {
    const result = confirm("Are you sure you want to log out?");
    if (result) {

        window.location.href = "../login/login.html";
    }
  }
