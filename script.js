const levelUp = document.getElementById("levelup");

window.addEventListener("load", () => {
  document.body.classList.add("is-playing");

  window.setTimeout(() => {
    levelUp.classList.add("is-visible");
  }, 1700);
});
