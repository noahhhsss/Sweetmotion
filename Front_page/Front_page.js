 /*nav*/
 function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("show");
    }
  
 function openProduct(name, price, image, description) {
      const url = `../product/Product.html?name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`;
      window.location.href = url;
  }

 function confirmLogout() {
    const result = confirm("Are you sure you want to log out?");
    if (result) {

        window.location.href = "../login/login.html";
    }

}




