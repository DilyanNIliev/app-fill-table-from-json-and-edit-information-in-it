export default class PreviewModal {
    boostrapModal  = null;
    contentContainer = null;
    bodyContainer = null;
    
    constructor({modalId, options = {}}) {
        const modalContainer = document.querySelector(`#${modalId}`);

        this.contentContainer = modalContainer.querySelector('.modal-content');

        this.bodyContainer = modalContainer.querySelector('.modal-body');

        this.boostrapModal  = new Modal(modalContainer, options);

    }

    getInstance = () => this.boostrapModal ;

    getContent = () => this.contentContainer;

    setPreviewModalContent = content => {
        const modal = this.boostrapModal ;
        modal.setContent(content);
        modal.update();

    }

    getBody = () => this.bodyContainer

    setPreviewModalBody = content => {
        const bodyContainer = this.bodyContainer;
        bodyContainer.innerHTML = '';
        bodyContainer.append(content);
    }

    previewModalShow = () => {
        this.boostrapModal .show();
    }

    previewModalHide = () => {
        this.boostrapModal .hide();
    }
}