const message = {
  success: {
    html: '<i class="fa-solid fa-circle-check"></i> Successfully submited',
    customClass: "success",
  },
  error: {
    html: '<i class="fa-solid fa-circle-xmark"></i> Please fix the error',
    customClass: "error",
  },
  invalid: {
    html: '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!',
    customClass: "invalid",
  },
  info: {
    html: `<i class="fa-solid fa-circle-info"></i> Please wait, we're fetching info `,
    customClass: "info",
  },
};

let toastDiv = document.querySelector(".toastDiv");
let successBtn = document.querySelector(".successBtn");
let errorBtn = document.querySelector(".errorBtn");
let invalidBtn = document.querySelector(".invalidBtn");
let infoBtn = document.querySelector(".infoBtn");

function createToast(type) {
  const { html, customClass } = message[type];
  let toast = document.createElement("div");
  toast.classList.add("toast", customClass);
  toast.innerHTML = html;
  toastDiv.append(toast);

  setTimeout(() => {
    toast.classList.add("remove");
  }, 5000);

  setTimeout(() => {
    toast.remove();
  }, 6000);
}

successBtn.addEventListener("click", () => createToast("success"));
errorBtn.addEventListener("click", () => createToast("error"));
invalidBtn.addEventListener("click", () => createToast("invalid"));
infoBtn.addEventListener("click", () => createToast("info"));
