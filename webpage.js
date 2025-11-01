function goTologin() {
  window.location.href = "signup.html";
}
function menuOnClick() {
  const menu = document.getElementById("menulist");
  menu.style.display = menu.style.display == "none" ? "flex" : "none";
}

// function openNav() {
//   menuOnClick();
// }

// function closeNav() {
//   menuOnClick();
// }

//first image
function dragFirstimg() {
  window.location.href = "first-image.html";
}
const closing = document.getElementById("closes");
function closePic() {
  closing.style.display = "none";
  window.location.href = "webpage.html";
}
//second image
function dragsecondimg() {
  window.location.href = "second-image.html";
}
const closingTwo = document.getElementById("closes");
function closePic() {
  closingTwo.style.display = "none";
  window.location.href = "webpage.html";
}
function signPage() {
  window.location.href = "signup.html";
}
// For Sign-in page

function submitHandling(event) {
  event.preventDefault();
  const userName = document.getElementById("username").value;
  const emailId = document.getElementById("emailid").value;
  const passWord = document.getElementById("password").value;
  console.log("UserName:", userName);
  console.log("EmailId:", emailId);
  console.log("Password:", passWord);

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", submitAll);

  function submitAll() {
    // alert("Submitted");
    window.location.href = "webpage.html";
  }
}
window.onclick = function (event) {};
// login page
function loginHandling(event) {
  event.preventDefault();
  const userNames = document.getElementById("userName").value;
  // const emailId = document.getElementById("emailid").value;
  const passWords = document.getElementById("passWord").value;
  console.log("UserName:", userNames);
  // console.log("EmailId:", emailId);
  console.log("Password:", passWords);

  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", nextPage);

  function nextPage() {
    alert("Submitted");
    window.location.href = "webpage.html";
  }
}
function goTosignPage() {
  window.location.href = "signin.html";
}
// play-demo video
function openVideo() {
  const openvideo = (document.getElementById("myVideo").style.display =
    "block");
  const videoopen = document.getElementById("playVideo").play();
}
function closeVideo() {
  const closevideo = document.getElementById("myVideo");
  const videoclose = document.getElementById("playVideo");
  closevideo.style.display = "none";
}
window.onclick = function (event) {
  const closevideo = document.getElementById("myVideo");
  if (event.target == closevideo) {
    closeVideo();
    closeStart();
  }
};
// Email to start
function clickStart() {
  const notificationCard = (document.getElementById("notify").style.display =
    "block");
}
function closeStart() {
  const cardNotification = document.getElementById("notify");
  cardNotification.style.display = "none";
  const cardNotifications = (document.getElementById("yourEmail").value = "");
  console.log("Your Email: ", cardNotifications);
}
// window.onclick = function (event) {
//   const cardNotifications = document.getElementById("notify");
//   if (event.target == cardNotifications) {
//     closeStart();
//   }
// };
//scrolling
function goToabout() {
  document.getElementById("all-two").scrollIntoView({ behavior: "smooth" });
}
function scrollTocontact() {
  document.getElementById("contactpage").scrollIntoView({ behavior: "smooth" });
}
function goTohome() {
  document.getElementById("all-one").scrollIntoView({ behavior: "smooth" });
}
function goToservice() {
  document.getElementById("all-three").scrollIntoView({ behavior: "smooth" });
}
function goTovrgames() {
  document.getElementById("all-four").scrollIntoView({ behavior: "smooth" });
}
