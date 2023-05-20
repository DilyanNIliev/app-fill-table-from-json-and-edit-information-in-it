export const renderForm = obj => {
    const form = document.createElement('form');

    for(const key in obj) {
        const inputHolder = document.createElement('div');
        const uniquieId = `modal_${key}`;

        const label = document.createElement('label');
        label.setAttribute('for', uniquieId);
        label.innerText = key;
        inputHolder.append(label);

        const input = document.createElement('input');
        input.setAttribute('id', uniquieId);
        input.setAttribute('type', 'text');
        input.setAttribute('value', obj[key]);
        input.setAttribute('data-key', key);
        inputHolder.append(input)

        form.append(inputHolder)
    }
    return form;
}