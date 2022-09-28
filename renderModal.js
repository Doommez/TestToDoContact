
function renderModal(modalSelector,type){
  const modal=document.querySelector(modalSelector);
  let header=null,
  lengthGroups=localStorage.length,
  item=[],
  buttonGroup,
  state=[];
  if(type=='group'){
  for(let i=0;i<lengthGroups;i++){
   item[i]=`
     <div class="modal__main__input">
    <input type="text" readonly value="${localStorage.key(i)}">
    <button type="button">
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M1.66664 17.3889C1.66664 18.55 2.61664 19.5 3.77775 19.5H12.2222C13.3833 19.5 14.3333 18.55 14.3333 17.3889V4.72222H1.66664V17.3889ZM4.26331 9.87333L5.75164 8.385L7.99997 10.6228L10.2378 8.385L11.7261 9.87333L9.48831 12.1111L11.7261 14.3489L10.2378 15.8372L7.99997 13.5994L5.7622 15.8372L4.27386 14.3489L6.51164 12.1111L4.26331 9.87333ZM11.6944 1.55556L10.6389 0.5H5.36108L4.30553 1.55556H0.611084V3.66667H15.3889V1.55556H11.6944Z" />
        </svg>              
    </button>
  </div>
    `
  }
    
 
     header='Группы контактов'
     buttonGroup=`
     <button type="button" class="btn btn-outline-none" data-modal='add'>Добавить</button>
          <button type="submit" form="modal" class="btn btn btn-primary" data-modal='saveContact'>Сохранить</button>
     `
  }else{
    for(let i=0;i<lengthGroups;i++){
      state[i]=`
      <option value="${localStorage.key(i)}">${localStorage.key(i)}</option>
      `
    }
    header="Добавление контакта"
    item=`
    <input type="text" name='fio' value="Введите ФИО" />
    <input type="text" name='tel' value="Введите номер" />
    <select name="groups">
      <option value="0">Введите группу</option>
      ${state}
    </select>
    `
    
    buttonGroup=`
    <button type="submit" form="modal" class="btn btn btn-primary" data-modal='saveContact'>Сохранить</button>
    `
  }
 modal.innerHTML=`
      <div class="modal__header">
        <p>
          ${header}
        </p>
        <button type="button" class="btn-close" data-targetButton="closeButton"  aria-label="Close"></button>
        </button>
      </div>
      <div class="modal__main">
        <form name='modal' id='modal' class="modal__main__group--inputs">
        ${item}
        </form>
        <div class="modal__main__groups-buttons">
          ${buttonGroup}
        </div>
      </div>
 `
  
}



export default renderModal