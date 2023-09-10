'use script'
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = menuButton.querySelector(".hambur");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });

  // toggle between sign in and login page
  const signIn = document.getElementById("signin");
  const signUp = document.getElementById("signup");
  const signInLink = document.getElementById("signInLink");
  const signUpLink = document.getElementById("signUpLink");

  signUpLink.addEventListener("click", () => {
    signIn.classList.add("hidden");
    signUp.classList.remove("hidden");
  });
  
  signInLink.addEventListener("click", (e) => {
    e.preventDefault()
    signUp.classList.add("hidden");
    signIn.classList.remove("hidden");

  });


});
