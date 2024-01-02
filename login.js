const startLog = document.getElementById("startLog");
const wrapper = document.getElementById("wrapper");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const box = document.getElementById("box");
const Contact = document.getElementById("Contact");
const Services = document.getElementById("Services");
const About = document.getElementById("About");
const Home = document.getElementById("Home");

startLog.addEventListener("click", () => {
  wrapper.classList.add("visibility");
  // box.innerHTML = `  <div id="box" class="form-box login">
  //           <form action="">
  //               <div class="input-box">
  //                   <i class="fa-solid fa-envelope"></i>
  //                   <span class="icon"></span>
  //                   <input id="email" type="email" placeholder="Email" required>

  //               </div>
  //               <div class="input-box">
  //                   <i class="fa-solid fa-lock"></i>
  //                   <span class="icon"></span>
  //                   <input id="password" type="password" placeholder="Password" required>
  //               </div>
  //               <button id="loginBtn" class="btn-login">Login</button>
  //           </form>
  //       </div>`;
});

const checkData = (e) => {
  e.preventDefault();
  if (
    inputEmail.value === "saidalkilic@gmail.com" &&
    inputPassword.value === "12345678"
  ) {
    box.innerHTML =
      'Welcome back Master <a class="next" href="index.html">Watch something</a>';
  } else {
    box.innerHTML =
      'Email or Password is Wrong <br><a class="next" href="login.html">Try Again</a> ';
  }
};
loginBtn.addEventListener("click", checkData);

Home.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.add("visibility");
  box.innerHTML = "Netflex Clone Click Login to Start";
});

About.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.add("visibility");
  box.innerHTML = "SAID ALI DALKILIC <br> DCI fbw wd23_d07 ";
});
