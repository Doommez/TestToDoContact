import { openModal } from './modal.js';
import modal from './modal.js';
import renderModal from './renderModal.js';

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
  })



  let statekey='Друзья';
  let state=[["Боганов Евгений Игоревич", "+375295919128"], ["Боганов Евгений Игоревич", "+375295919128"]]
console.log(state);
console.log(JSON.stringify(state));
localStorage.setItem(statekey,JSON.stringify(state))
console.log(localStorage.length);
