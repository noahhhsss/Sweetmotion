 /*nav*/
 function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("show");
    }
  
  function openProduct(name, price, image, description) {
      const url = `../product/Product.html?name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`;
      window.location.href = url;
  }


  // Open popup when Login button is clicked
  document.querySelector('.Login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('popupContainer').style.display = 'flex';
  });

  // Close popup
  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
  }

  // Switch to signup form
  function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
  }

  // Going back to login form
  function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }

  // Close popup
  window.onclick = function(event) {
    const popup = document.getElementById('popupContainer');
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  }
  function openPopup() {
      const popup = document.getElementById('popupContainer');
      popup.style.display = 'flex';
      showLogin();
  }




