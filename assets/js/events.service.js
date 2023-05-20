import { renderForm } from "/assets/js/form.js";

const updateOnSave = (modal, tr, dataObj) => {
    let modalBody = modal.getBody();
    let cells = Array.from(tr.querySelectorAll('td'));

    cells.forEach(cell => {
        const key = cell.getAttribute('data-key');
        const inputSelector = `input[data-key='${key}']`;
        const newValue = modalBody.querySelector(inputSelector).value;

        cell.textContent = newValue;
        dataObj[key] = newValue;
    })

    modal.previewModalHide();
}

export const rowClick = (modal, data) => (event) => {
    const target = event.target;

    const tr = target.nodeName === 'TR' ? target : target.closest('tr');

    if(!tr) return;

    const rowIndex = tr.getAttribute('data-index');
    const dataObj = data[rowIndex];

    const form = renderForm(dataObj);

    modal.setPreviewModalBody(form);

    const saveButton = modal.getContent().querySelector('button.btn-primary')



   const onSave = () => {
    updateOnSave(modal, tr, dataObj);
    saveButton.removeEventListener('click', onSave);
   }

    saveButton.addEventListener('click', onSave)
    
    
    modal.previewModalShow();
    
}

