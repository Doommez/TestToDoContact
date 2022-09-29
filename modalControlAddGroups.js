import renderModal from "./renderModal.js";

function modalControlAddGroups(
  modalSelector,
  saveValueSelector,
  addValueGroupSelector
) {
  const modal = document.querySelector(modalSelector),
    saveValue = modal.querySelector(saveValueSelector),
    addValueGroup = modal.querySelector(addValueGroupSelector),
    form = document.forms.modal;

  setControl(form);

  addValueGroup.addEventListener("click", (e) => {
    let input = `
    <div class="modal__main__input">
    <input type="text" value="">
    <button type="button" >
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M1.66664 17.3889C1.66664 18.55 2.61664 19.5 3.77775 19.5H12.2222C13.3833 19.5 14.3333 18.55 14.3333 17.3889V4.72222H1.66664V17.3889ZM4.26331 9.87333L5.75164 8.385L7.99997 10.6228L10.2378 8.385L11.7261 9.87333L9.48831 12.1111L11.7261 14.3489L10.2378 15.8372L7.99997 13.5994L5.7622 15.8372L4.27386 14.3489L6.51164 12.1111L4.26331 9.87333ZM11.6944 1.55556L10.6389 0.5H5.36108L4.30553 1.55556H0.611084V3.66667H15.3889V1.55556H11.6944Z" />
        </svg>              
    </button>
  </div>
    `;
    form.innerHTML += input;
    form[form.length - 1].addEventListener(
      "click",
      renderModal.bind(null, ".modal", "group")
    );
    modalControlAddGroups(
      ".modal",
      "[data-modal='saveContact']",
      "[data-modal='add']"
    );
  });
  saveValue.addEventListener("click", (e) => {
    submit(e, form);
  });
}

function setControl(form) {
  [...form].forEach((item, index, array) => {
    if (item.type === "button") {
      item.addEventListener("click", (e) => {
        let key = array[index - 1].value;
        deleteKeyValue(key);
        renderModal(".modal", "group");
        modalControlAddGroups(
          ".modal",
          "[data-modal='saveContact']",
          "[data-modal='add']"
        );
      });
    }
  });
}

function deleteKeyValue(key) {
  localStorage.removeItem(key);
}

function submit(event, arrElementValueForm) {
  event.preventDefault();
  let newKey = arrElementValueForm[arrElementValueForm.length - 2].value;
  localStorage.setItem(newKey, []);
  renderModal(".modal", "group");
  modalControlAddGroups(
    ".modal",
    "[data-modal='saveContact']",
    "[data-modal='add']"
  );
}

export default modalControlAddGroups;
