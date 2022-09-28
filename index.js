import { openModal } from './modal.js';
import modal from './modal.js';
import renderModal from './renderModal.js';
import modalControlAddInfo from './modalControlAddInfo.js';

let buttonGroup=document.querySelector('[data-targetButton="groups"]'),
buttonAdd=document.querySelector('[data-targetButton="addContacts"]')

buttonGroup.addEventListener('click',(e)=>{
  renderModal(".modal","group")
  modal('[data-targetButton="groups"]',".modal",'.modal__background')
  openModal(".modal",'.modal__background')
})
buttonAdd.addEventListener('click',(e)=>{

    renderModal(".modal","addContact")
    modal('[data-targetButton="addContacts"]',".modal",'.modal__background')
    openModal(".modal",'.modal__background')
    modalControlAddInfo(".modal","[data-modal='saveContact']",'.modal__main__group--inputs')
  })



  let statekey='Друзья';
  let state=[]
console.log(state);
console.log(JSON.stringify(state));
localStorage.setItem(statekey,JSON.stringify(state))
console.log(localStorage.length);
