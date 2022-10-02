import { openModal } from "./modal.js"
import renderModal from './renderModal.js';
import modal from "./modal.js";
import modalControlAddInfo from './modalControlAddInfo.js';



function renderCard(mainInnerSelector){
  const mainInner=document.querySelector(mainInnerSelector)
  
  class Card{
    constructor(title,item,mainInner,index){
      this.title=title
      this.item=item
      this.mainInner=mainInner
      this.index=index
    }

    renderCards(){
      this.mainInner.innerHTML+=`
      <div class="accordion-item">
      <h2 class="accordion-header" id="heading${this.index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.index}" aria-expanded="true" aria-controls="collapseOne">
          ${this.title}
        </button>
      </h2>
      <div id="collapse${this.index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <ul>
         ${this.item}
        </ul>
       
        </div>
      </div>
    </div>
      `
    
     
    }
    renderCardEmpty(){
      this.mainInner.innerHTML=`
      <p>Список контактов пуст</p>
      `
    }
  }
  
  startRender(Card,mainInner)
  setLisener(mainInner,mainInnerSelector)
  
  
}



function startRender(className,mainInner){
  
  mainInner.innerHTML=""
  if(localStorage.length<1){
    let render= new className('','',mainInner,'');
    render.renderCardEmpty()
  }
  for(let i=0;i<localStorage.length;i++){
    getItemForCard(i,className,mainInner)
  }
}



function getItemForCard(index,className,mainInner){
  let title=localStorage.key(index)
  let arrayNameAndTel=JSON.parse(localStorage.getItem(title))
  let item=""
  for(let i=0;i<arrayNameAndTel.length;i++){
    let valueMan=arrayNameAndTel[i]
    item+=`
    <li>
      <div class="main__item__li" data-value="${i} data-item="${index}">
        <div >${valueMan[0]}</div>
          <div><span>+7(${valueMan[1].slice(0,3)}) ${valueMan[1].slice(3,6)}-${valueMan[1].slice(6,8)}-${valueMan[1].slice(8,10)}</span>
          <button type="button" data-edit="edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>       
          </button>
          <button type="button" data-deleteValue="${index}"data-delete="${i}">
            <svg data-deleteValue="${index}"data-delete="${i}"  "width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-deleteValue="${index}"data-delete="${i}" d="M1.66664 17.3889C1.66664 18.55 2.61664 19.5 3.77775 19.5H12.2222C13.3833 19.5 14.3333 18.55 14.3333 17.3889V4.72222H1.66664V17.3889ZM4.26331 9.87333L5.75164 8.385L7.99997 10.6228L10.2378 8.385L11.7261 9.87333L9.48831 12.1111L11.7261 14.3489L10.2378 15.8372L7.99997 13.5994L5.7622 15.8372L4.27386 14.3489L6.51164 12.1111L4.26331 9.87333ZM11.6944 1.55556L10.6389 0.5H5.36108L4.30553 1.55556H0.611084V3.66667H15.3889V1.55556H11.6944Z" />
              </svg>              
          </button>
        </div>
      </div>
    </li>
    `
  }
  
  const render=new className(title,item,mainInner,index)
  render.renderCards()

}

function setLisener(mainSelector,mainInnerSelector){
  let arrayButton=mainSelector.querySelectorAll("[data-deleteValue]")
  let btns=Array.from(arrayButton).filter(item=>{
    return item.nodeName=='BUTTON'
  })
  btns.forEach(item=>{
    item.addEventListener("click",(e)=>{
      let numberGroup=e.currentTarget.getAttribute('data-deleteValue');
      let numberContact=e.currentTarget.getAttribute('data-delete')
      let key=localStorage.key(numberGroup)
    let deleteValue=JSON.parse(localStorage.getItem(key))
    deleteValue.splice(numberContact,1)
     localStorage.setItem(key,JSON.stringify(deleteValue))
     renderCard(mainInnerSelector)
    })
    let arrButtonsEdit=Array.from(mainSelector.querySelectorAll('[data-edit="edit"]'))
    arrButtonsEdit.forEach(item=>{
  item.addEventListener("click",(e)=>{
  renderModal(".modal","addContact")
  modal('[data-targetButton="addContacts"]',".modal",'.modal__background','.accordion')
  openModal(".modal",'.modal__background')
  modalControlAddInfo(".modal","[data-modal='saveContact']")
})
    })


  })

}




export {startRender,renderCard}
export default renderCard