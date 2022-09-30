
function modalControlAddInfo(modalSelector,saveValueSelector){
  const modal= document.querySelector(modalSelector),
  saveValue=modal.querySelector(saveValueSelector),
  form=document.forms.modal
  
 

  let arg=[...form].forEach((item)=>{
    if(item.localName=="input"){
       item.addEventListener('click',()=>{
      item.value='';
    })
    }
   
    item.addEventListener('input',(e)=>{
      
      let bindValidated=validated.bind(item,e)
      bindValidated()
     
    })
  })
  saveValue.addEventListener('click', (e)=>{
    
    submit(e,[...form])
    
    
  })
  
  
}



function validated(event) {
  const value=event.target.value
      if(this.name==='tel'){
        event.target.value=value.replace(/\D/g, "")
      }
      if(this.name==='fio'){
        event.target.value=value.replace(/\d/g, "")
      }
  
}


function checkValue(arg){
for(let i=0;i<arg.length;i++){
  if(arg[i]==='0'||arg[i]===''||arg[i]==="Введите ФИО"||arg[i]==="Введите номер"){
    return false
  }
} 
return true
}


function submit(event,arrElementValueForm){
  event.preventDefault()
  let arg=[...arrElementValueForm].map((item)=>{
    return item.value
  })
  if(checkValue(arg)){
    const key=arg[2]
  
  
    if(localStorage.getItem(key)){
      let prevItem=JSON.parse(localStorage.getItem(key));
      let nextItem=null;
      if(prevItem.length=1){
        nextItem=[prevItem,[arg[0],arg[1]]]
      }else nextItem=[...prevItem,[arg[0],arg[1]]]
      
      localStorage.setItem(key,JSON.stringify(nextItem))
      
    }else localStorage.setItem(key,JSON.stringify([[arg[0],arg[1]]])) 
      
  }
  
}

export default modalControlAddInfo