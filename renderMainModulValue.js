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
    <li>${valueMan[0]}${valueMan[1]}</li>
    `
  }
  console.log(item,title);
  const render=new className(title,item,mainInner,index)
  render.renderCards()

}


export {startRender,renderCard}
export default renderCard