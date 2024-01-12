"use strict";

const cardContainer = document.querySelector(".card-container");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnRead = document.querySelector(".read-button");

const openModal = function () {
  cardContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  cardContainer.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnRead.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
