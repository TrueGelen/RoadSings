import Rellax from 'rellax'

window.addEventListener('load', () => {
	let content = null
	let background = null

	if (window.innerWidth > 500) {
		content = new Rellax('.sizeSection__content', {
			speed: (window.innerWidth > 800) ? 3 : -1,
			center: true
		})

		background = new Rellax('.parallax__background', {
			speed: (window.innerWidth > 768) ? 1.6 : 1,
			center: true
		})
	}

	window.addEventListener('resize', () => {
		if (content !== null) {
			content.destroy()
			background.destroy()
		}

		if (window.innerWidth > 500) {
			content = new Rellax('.sizeSection__content', {
				speed: (window.innerWidth > 800) ? 2.8 : -1,
				center: true
			})

			background = new Rellax('.parallax__background', {
				speed: (window.innerWidth > 800) ? 1.6 : 1,
				center: true
			})
		}
	})
})
