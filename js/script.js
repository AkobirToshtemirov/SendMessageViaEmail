let fromName = document.getElementById("from_name");
let reciever = document.getElementById("reciever");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");
let allInputs = document.querySelectorAll(".allInputs");

function checkAndSend() {
  allInputs.forEach((item) => {
    if (item.value.length !== 0) {
      item.classList.add("removeRed");
    } else {
      item.classList.remove("removeRed");
    }
  });
  if (
    reciever.value.length !== 0 &&
    fromName.value.length !== 0 &&
    userEmail.value.length !== 0 &&
    userMessage.value.length !== 0
  ) {
    sendMail();
  } else {
    alert("Please fill all forms!");
    allInputs.forEach((item) => {
      if (!item.classList.contains("removeRed")) {
        item.classList.add("redColor");
      } else {
        item.classList.remove("redColor");
      }
    });
  }
}

function sendMail() {
  let tempParams = {
    from_name: fromName.value,
    to_name: reciever.value,
    email: userEmail.value,
    message: userMessage.value,
  };

  emailjs
    .send("service_2vq6l73", "template_p0zf6q9", tempParams)
    .then(function (res) {
      console.log("success", res.status);
      window.location.href = "./page/messageSent.html";
    });
}
