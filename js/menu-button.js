(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    closeModalLink: document.querySelector('[burger-menu-close]'),
    closeModalSecondLink: document.querySelector('[mobile-menu-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLink.addEventListener('click', toggleModal);
  refs.closeModalSecondLink.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
  }
})();
