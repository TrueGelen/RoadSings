import './parallax'
import './menu'
import './requestPopUp'
import './animation'




























// window.addEventListener('load', () => {

// 	const boost = {
// 		background: 1,
// 		content: 0.02
// 	}

// 	let content = {
// 		element: null,
// 		step: null
// 	}
// 	let background = {
// 		element: null,
// 		step: null
// 	}

// 	let container = {
// 		element: null,
// 		height: null,
// 		bottom: null
// 	}

// 	getDataForParallax = () => {
// 		const elementContainer = document.querySelector('.sizeSection')
// 		const containerHeight = elementContainer.getBoundingClientRect().height

// 		const elementContent = document.querySelector('.sizeSection .sizeSection__content')
// 		const elementBackground = document.querySelector('.sizeSection .parallax .parallax__background')

// 		container = {
// 			element: elementContainer,
// 			height: containerHeight,
// 			bottom: elementContainer.getBoundingClientRect().bottom + window.pageYOffset - window.innerHeight
// 		}

// 		content = {
// 			element: elementContent,
// 			// step: 160 / window.innerHeight * boost.content,
// 			curPosY: -80
// 		}

// 		background = {
// 			element: elementBackground,
// 			step: elementBackground.getBoundingClientRect().height / 100 * 25 / window.innerHeight,
// 			curPosY: null
// 		}
// 	}

// 	getDataForParallax()
// 	// console.log(content, background)

// 	// let startPoint = window.pageYOffset - container.element.getBoundingClientRect().top + content.height
// 	background.element.style.transform = 'translate(-50%, -50%) scale(1.5)'
// 	content.element.style.transform = `translateY(${content.curPosY}px)`

// 	let scrollY = window.pageYOffset

// 	window.addEventListener('scroll', () => {
// 		// console.log(window.innerHeight)
// 		// let scrollY = window.pageYOffset
// 		// startPoint = window.pageYOffset - container.getBoundingClientRect().top + content.height
// 		// console.log(window.pageYOffset)
// 		// if (sizeSectionY > 0 && sizeSectionY - window.innerHeight <= -300) {
// 		// }
// 		if (container.bottom <= window.pageYOffset && scrollY < window.pageYOffset) {
// 			if (content.curPosY < 80) {
// 				scrollY = window.pageYOffset
// 				content.curPosY += (window.pageYOffset - container.bottom) * boost.content
// 				console.log(content.curPosY)
// 				// console.log(1)
// 				content.element.style.transform = `translateY(${content.curPosY}px)`
// 			}
// 		}
// 	})
// })