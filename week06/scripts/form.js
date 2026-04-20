export function initForms() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const forgotForm = document.getElementById("forgotForm");


  if (!loginForm || !signupForm || !forgotForm) return;
  
  document.getElementById("showSignup").onclick = () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  };

  document.getElementById("showForgot").onclick = () => {
    loginForm.classList.add("hidden");
    forgotForm.classList.remove("hidden");
  };

  document.getElementById("backToLogin").onclick = () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  };

  document.querySelectorAll(".backLogin").forEach(link => {
    link.onclick = () => {
      forgotForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    };
  });
}