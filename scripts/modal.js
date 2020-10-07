const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');

const baseVideoURL = 'https://www.youtube.com/embed';

export function activateModal(videoId) {
  modal.querySelector('iframe').src = `${baseVideoURL}/${videoId}`;

  modal.classList.add('active');
  modalOverlay.classList.add('active');
  modalOverlay.style.visibility = 'visible';

  document.querySelector('body').style.overflow = 'hidden';
}

export function deactivateModal() {
  modal.querySelector('iframe').src = '';

  modal.classList.remove('active');
  modalOverlay.classList.remove('active');

  modalOverlay.addEventListener('transitionend', handleTransitionEnd);

  function handleTransitionEnd() {
    setModalOverlayHidden();
    modalOverlay.removeEventListener('transitionend', handleTransitionEnd);
  }

  function setModalOverlayHidden() {
    modalOverlay.style.visibility = 'hidden';
  }

  document.querySelector('body').style.overflow = 'initial';
}
