 function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("show");
    }
    const add = document.getElementById('add');
    const minus = document.getElementById('minus');
    const addBtn = document.querySelector(".add-btn");


    let quantity = 1; 

    add.addEventListener('click', () => {
      quantity++; 
      num.textContent = quantity;
    });

    minus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        num.textContent = quantity;
      }
    });




function loadProduct() {
    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const price = params.get("price");
    const image = params.get("image");
    const description = params.get("description");

    if (name) document.querySelector(".title").textContent = name;
    if (price) document.querySelector(".price").textContent = "₱" + price;
    if (image) document.querySelector(".image-box img").src = image;
    if (description) document.querySelector(".description").textContent = description;
}

loadProduct();

addBtn.addEventListener("click", () => {
  const product = {
    name: document.querySelector(".title").textContent,
    price: Number(document.querySelector(".price").textContent.replace("₱", "")),
    qty: Number(num.textContent),
    image: document.querySelector(".image-box img").src,
    description: document.querySelector(".description").textContent
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingIndex = cart.findIndex(item => item.name === product.name);
  if (existingIndex > -1) {
    cart[existingIndex].qty += product.qty;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} has been added to your cart!`);

});

  function confirmLogout() {
    const result = confirm("Are you sure you want to log out?");
    if (result) {

        window.location.href = "../login/login.html";
    }
  }








