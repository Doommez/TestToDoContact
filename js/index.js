import { openModal } from './modal.js';
import modal from './modal.js';
import renderModal from './renderModal.js';
import modalControlAddInfo from './modalControlAddInfo.js';
import modalControlAddGroups from './modalControlAddGroups.js';
import renderCard, { startRender } from './renderMainModulValue.js';

const buttonGroup=document.querySelector('[data-targetButton="groups"]'),
buttonAdd=document.querySelector('[data-targetButton="addContacts"]'),
buttonContact=document.querySelector('[data-targetButton="BooksContacts"]')

buttonGroup.addEventListener('click',(e)=>{
  renderModal(".modal","group")
  modal('[data-targetButton="groups"]',".modal",'.modal__background','.accordion')
  openModal(".modal",'.modal__background')
  modalControlAddGroups(".modal","[data-modal='saveContact']","[data-modal='add']")
})
buttonAdd.addEventListener('click',(e)=>{

    renderModal(".modal","addContact")
    modal('[data-targetButton="addContacts"]',".modal",'.modal__background','.accordion')
    openModal(".modal",'.modal__background')
    modalControlAddInfo(".modal","[data-modal='saveContact']")
  })
  buttonContact.addEventListener("click",(e)=>{
    renderCard('.accordion')
  })

  renderCard('.accordion')



