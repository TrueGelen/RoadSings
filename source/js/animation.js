window.addEventListener('load', () => {
	const typeOfSigns = document.querySelectorAll('.priceSection .container .priceSection__typesOfSigns .typeOfSign')
	const advantages = document.querySelectorAll('.whyUsSection .container .whyUsSection__advantageList .advantage')
	const slideInUp = 'slideInUp'

	const maintTitles = document.querySelectorAll('.mainTitle')
	const slideInLeft = 'slideInLeft'

	function watchAnimateScroll() {
		for (let i = 0; i < typeOfSigns.length; i++) {
			if (window.pageYOffset >= typeOfSigns[i].getBoundingClientRect().y - this.window.innerHeight + typeOfSigns[i].getBoundingClientRect().height + this.pageYOffset) {
				typeOfSigns[i].classList.add(slideInUp)
			}
		}

		for (let i = 0; i < advantages.length; i++) {
			if (window.pageYOffset >= advantages[i].getBoundingClientRect().y - this.window.innerHeight + advantages[i].getBoundingClientRect().height + this.pageYOffset) {
				advantages[i].classList.add(slideInUp)
			}
		}

		for (let i = 0; i < maintTitles.length; i++) {
			if (window.pageYOffset >= maintTitles[i].getBoundingClientRect().y - this.window.innerHeight + maintTitles[i].getBoundingClientRect().height + this.pageYOffset) {
				maintTitles[i].classList.add(slideInLeft)
			}
		}
	}

	window.addEventListener('scroll', watchAnimateScroll)

	watchAnimateScroll()
})