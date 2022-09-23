// (() => {
//   const openMenuBtnRef = document.querySelector("[data-menu-open]");
//   const closeMenuBtnRef = document.querySelector("[data-menu-close]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const backdropRef = document.querySelector('[data-backdrop]');
//   const closeModalLink = document.querySelector('[burger-menu-close]');

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//     backdropRef.classList.toggle('is-hidden')
//     closeModalLink.classList.toggle("is-open");
//   });
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
     closeModalLink: document.querySelector('[burger-menu-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLink.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
  }
})();
