import Rellax from 'rellax'

window.addEventListener('load', () => {
	const content = new Rellax('.sizeSection__content', {
		speed: 4,
		center: true
	})

	const background = new Rellax('.parallax__background', {
		speed: 1.6,
		center: true
	})

	window.addEventListener('resize', () => {
		content.refresh()
		background.refresh()
	})
})
