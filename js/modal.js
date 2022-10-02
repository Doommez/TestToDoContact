import renderCard from './renderMainModulValue.js';

function modal(triggerSelector, modalSelector,backgroundSelector,renderSelectorAfterClose) {

  const modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      background=document.querySelector(backgroundSelector)

  modalTrigger.forEach(btn => {
      btn.addEventListener('click', () => openModal(modalSelector,backgroundSelector));
  });

  modal.addEventListener('click', (e) => { 
    
      if (e.currentTarget!==modal||e.target.getAttribute('data-targetButton') == "closeButton") {
       
         closeModal(modalSelector,backgroundSelector,renderSelectorAfterClose);
      }
  });
  background.addEventListener('click', (e) => {
    if (e.target.getAttribute('class') == "modal__background show") {
     
       closeModal(modalSelector,backgroundSelector,renderSelectorAfterClose);
    }
});

  document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" ) { 
          closeModal(modalSelector,backgroundSelector,renderSelectorAfterClose);
      }
  }); 
}

function openModal(modalSelector,backgroundSelector){
  const modal = document.querySelector(modalSelector),
  background=document.querySelector(backgroundSelector)
  modal.classList.add('active');
  modal.classList.remove('hidden');
  background.classList.add("show");
}

function closeModal(modalSelector,backgroundSelector,renderSelectorAfterClose){
  const modal = document.querySelector(modalSelector),
  background=document.querySelector(backgroundSelector)

  modal.classList.add('hidden');
  modal.classList.remove('active');
  background.classList.remove('show');
  renderCard(renderSelectorAfterClose)
}

  export {openModal,closeModal}
  export default modal;
  