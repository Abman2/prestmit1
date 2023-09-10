"use script";
document.addEventListener("DOMContentLoaded", function () {
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
    e.preventDefault();
    signUp.classList.add("hidden");
    signIn.classList.remove("hidden");
  });

  //for validation
  //for signin
  let signInEmail = document.getElementById("sigin-email");
  const signInPassword = document.getElementById("sigin-password");
  const signInButton = document.getElementById("signInButton");
  signUpLink.addEventListener("DOMContentLoaded", () =>{
    
  })
  //   //for signup
const signUpUsername = document.getElementById("sigup-username");
const signUpEmail = document.getElementById("sigup-email");
const signUpPhone = document.getElementById("sigup-phoneNumber");
const signUpPassword = document.getElementById("sigup-password");
const signUpPassword2 = document.getElementById("sigup-password2");
const signUpButton = document.getElementById("signUpButton");

//sign in eventlistener
  signInButton.addEventListener("click", (e) => {
    e.preventDefault();

    const signInEmailValue = document.getElementById("sigin-email").value.trim();
    const signInPasswordValue = document.getElementById("sigin-password").value.trim();

    validateSignIn(signInEmailValue, signInEmail, "Email is required");
    validateSignIn(signInPasswordValue, signInPassword, "Password is required");
  });

  //sign up eventlistener
  signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpUsernameValue = signUpButton.value.trim();
    const signUpEmailValue = signUpEmail.value.trim();
    const signUpPhoneValue = signUpPhone.value.trim();
    const signUpPasswordValue = signUpPassword.value.trim();
    const signUpPassword2eValue = signUpPassword2.value.trim();
  
    if (signUpUsernameValue === "" || signUpUsernameValue < 5) {
      setError(signUpUsername, "Username must be greater than 5 characters");
    } else {
      setSucess(signUpUsername);
    }
    if (signUpEmailValue === "") {
      setError(signUpEmail, "Email cannot not be empty");}
    //  else if (signUpEmail != "") {
    //   console.log("later doings");
    // } 
    else {
      setSucess(signUpEmail);
    }
    if (signUpPhoneValue === "") {
      setError(signUpPhone, "Phone number cannot be empty");
    } else if (signUpPhoneValue != "") setError(signUpPhone, "Invalid phone number");
    else {
      setSucess(signUpPhone);
    }
    if (signUpPasswordValue === "") setError(signUpPassword, "Password cannot be empty");
    else if(signUpPasswordValue.length < 8) {
      setError(signUpPassword, "Password is less than 8 characters");
    } else {
      setSucess(signUpPassword);
      if (signUpPassword2eValue == "") {
        setError(signUpPassword2, "password cannot be empty");
      } else if(signUpPassword2eValue !== signUpPasswordValue) {
        setError(signUpPassword2, "password does not match");
        setError(signUpPassword, "password does not match");
      }else {
          setSucess(signUpPassword2);
        }
      
    }
    
  });
});




function validateSignIn(elementValue, element, message) {
  if (elementValue === "") {
    setError(element, message);
  } else {
    setSucess(element);
  }
}
function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("span");
  errorDisplay.innerText = message;
  element.style.border = "2px solid red";
}
function setSucess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("span");
  element.style.border = "1px solid green";
  errorDisplay.innerText = "";
}

