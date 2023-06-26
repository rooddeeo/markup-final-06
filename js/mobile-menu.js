(() => {
  const refs = {
    openmobMenuBtn: document.querySelector("[data-mobMenu-open]"),
    closemobMenuBtn: document.querySelector("[data-mobMenu-close]"),
    mobMenu: document.querySelector("[data-mobMenu]"),
  };

  refs.openmobMenuBtn.addEventListener("click", togglemobMenu);
  refs.closemobMenuBtn.addEventListener("click", togglemobMenu);

  function togglemobMenu() {
    refs.mobMenu.classList.toggle("is-hidden");
  }
})();