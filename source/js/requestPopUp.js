window.addEventListener('load', () => {
	const popUp = document.querySelector('.popUp')
	const close = document.querySelector('.popUp__close')
	const leaveRequest = document.querySelector('.orderSection .orderSection__button')
	const sendButton = document.querySelector('.popUp__button')

	close.addEventListener('click', () => {
		popUp.style.display = 'none'
	})

	sendButton.addEventListener('click', () => {
		popUp.style.display = 'none'
	})

	leaveRequest.addEventListener('click', () => {
		popUp.style.display = 'block'
	})
})