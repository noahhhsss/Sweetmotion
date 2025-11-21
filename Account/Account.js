 function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("show");
    }

  function confirmLogout() {
    const result = confirm("Are you sure you want to log out?");
    if (result) {

        window.location.href = "../login/login.html";
    }
  }

