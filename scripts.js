let countdown = 443600;

const startCountdown = () => {
  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = Math.floor(countdown % 60);

  const dayItem = document.querySelector(".item.days span");
  dayItem.innerHTML = String(days).padStart(2, "0");

  const hourItem = document.querySelector(".item.hours span");
  hourItem.innerHTML = String(hours).padStart(2, "0");

  const minuteItem = document.querySelector(".item.minutes span");
  minuteItem.innerHTML = String(minutes).padStart(2, "0");

  const secondItem = document.querySelector(".item.seconds span");
  secondItem.innerHTML = String(seconds).padStart(2, "0");
};

const init = () => {
  if (countdown > 0) {
    countdown -= 1;
    setTimeout(() => {
      startCountdown();
      init();
    }, 1000);
  }
};
init();

const modalOverlay = document.querySelector(".modal-overlay");

const subscribeButton = document.querySelector(".subscribe button");

subscribeButton.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const nameError = document.querySelector(".nameError");
  const emailError = document.querySelector(".emailError");
  const emailInvalid = document.querySelector(".emailInvalid");

  if (inputName.value == "") {
    nameError.classList.add("active");

    return;
  }
  nameError.classList.remove("active");

  if (inputEmail.value == "") {
    emailError.classList.add("active");

    return;
  }
  emailError.classList.remove("active");

  if (!inputEmail.value.match(mailFormat)) {
    emailInvalid.classList.add("active");

    return;
  }
  emailInvalid.classList.remove("active");

  modalOverlay.classList.remove("active");

  inputName.value = "";
  inputEmail.value = "";
});
