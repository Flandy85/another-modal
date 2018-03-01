let modal = document.querySelector('.modal'),
	modalTitle = document.querySelector('.modal-title'),
	modalContent = document.querySelector('.modal-content'),
	modalButton = document.querySelector('.modal-button')

/*function open mmodal with changing content in modal*/
function openModal(modal_title, modal_content) {

	if(this.modalCounter == undefined) {
		this.modalCounter = 0;
	}
	modalTitle.innerHTML = modal_title + "<button type='button' onclick='closeModal()'>X</button>";
	modalContent.innerHTML = modal_content;

	if (modal.style.display == 'block') {
		//Hide modal
		closeModal();
	}
	else {
		// Show Modal
		modalCounter++;
		modal.style.display = 'block';
		document.querySelector('.modal-count').innerHTML = "Open Modal: " + this.modalCounter;
	}
	// Change text on modal button
	if(modalButton.innerHTML === 'Open Modal') {
			modalButton.innerHTML = 'Close Modal';
	}
	else if(modalButton.innerHTML === 'Close Modal'){
		modalButton.innerHTML = 'Open Modal';
	}
	
}

function closeModal() {
	modal.style.display = 'none';
	
	modalTitle.innerHTML = "",
	modalContent.innerHTML = "";
}
