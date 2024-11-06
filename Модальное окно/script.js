openButton = document.querySelector(".button__open")
sendButton = document.querySelector(".button__send")
closeButton = document.querySelector(".header__close")

container = document.querySelector(".container")
modal = document.querySelector(".modal")

modalName = document.querySelector(".modal__name")
modalSurname = document.querySelector(".modal__surname")

function showModalWindow() {
	if (!container.classList.contains("active")) {	
		container.classList.add("active")
	}
	if (!modal.classList.contains("active")) {
		modal.classList.add("active")
	}
	if (sendButton.hasAttribute("disabled")) {
		sendButton.removeAttribute("disabled")
	}
}

function close() {
	if (container.classList.contains("active")) {	
		container.classList.remove("active")
	}
	if (modal.classList.contains("active")) {
		modal.classList.remove("active")
	}
}

openButton.addEventListener("click", showModalWindow);
closeButton.addEventListener("click", close);
container.addEventListener("click", function(){
	if (event.target.closest(".modal") == undefined) {
		close()
	}
});	
sendButton.addEventListener("click", function(){
	event.preventDefault()
	if (modalName.value == "" || modalSurname.value == "") {
		Confirm = confirm("Одно из полей ввода пустое! Вы хотите продолжить?")
		if (Confirm == false){
			close()
		}
	}
	else {
		close()
		modalName.value = ""
		modalSurname.value = ""
	}
})