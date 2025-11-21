 function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("show");
    }

function openCancelPopup() {
    document.getElementById("cancelPopup").style.display = "flex";
}

function closeCancelPopup() {
    document.getElementById("cancelPopup").style.display = "none";
}

function confirmCancel() {
    closeCancelPopup();
}
 function confirmLogout() {
    const result = confirm("Are you sure you want to log out?");
    if (result) {

        window.location.href = "../login/login.html";
    }

}
