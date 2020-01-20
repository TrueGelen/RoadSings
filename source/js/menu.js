window.addEventListener('load', () => {
	/*	header__wrapper 100vh/old 					to show
			header__right 	display none/flex		to hide
			menu 						display none/block	to show for mobile
			subMenu					display none/flex		to show for mobile
			burgerMenu			display block/none
			closeBurger			display block/none
	 */

	const headerWrapper = {
		elem: document.querySelector('.header .container .header__wrapper'),
		height: '100vh'
	}

	const headerRight = {
		elem: document.querySelector('.header .container .header__wrapper .header__right'),
		display: 'flex'
	}

	const menu = {
		elem: document.querySelector('.header .container .header__wrapper .menu'),
		display: 'block'
	}

	const subMenu = {
		elem: document.querySelector('.header .container .header__wrapper .menu .menu__item .menu__subList'),
		display: 'flex'
	}

	const burgerMenu = {
		elem: document.querySelector('.header .container .header__wrapper .header__left .header__burgerBlock .burgerMenu'),
		display: 'none'
	}

	const closeBurger = {
		elem: document.querySelector('.header .container .header__wrapper .header__left .header__burgerBlock .closeBurger'),
		display: 'block'
	}

	function getPropertyOfElement(element, property) {
		if (element.style[property] === '') {
			return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
		}
		else
			return element.style[property]
	}

	function openMobMenu() {
		headerRight.elem.style.display = headerRight.display
		headerWrapper.elem.style.height = headerWrapper.height
		menu.elem.style.display = menu.display
		burgerMenu.elem.style.display = burgerMenu.display
		closeBurger.elem.style.display = closeBurger.display
	}

	function resetJS() {
		headerRight.elem.style.display = ''
		headerWrapper.elem.style.height = ''
		menu.elem.style.display = ''
		burgerMenu.elem.style.display = ''
		closeBurger.elem.style.display = ''
		subMenu.elem.style.display = ''
	}

	const burgerBlock = document.querySelector('header .container .header__wrapper .header__left .header__burgerBlock')

	burgerBlock.addEventListener('click', () => {
		if (getPropertyOfElement(menu.elem, 'display') === 'none')
			openMobMenu()
		else
			resetJS()
	})

	function catalogClick() {
		if (getPropertyOfElement(subMenu.elem, 'display') === 'none')
			subMenu.elem.style.display = subMenu.elem.style.display === '' ? subMenu.display : '';
		else
			subMenu.elem.style.display = ''
	}

	function catalogBehavior() {
		const catalog = document.querySelector('.header .container .header__wrapper .menu .menu__list .catalog')
		catalog.removeEventListener('click', catalogClick)

		if (getPropertyOfElement(burgerBlock, 'display') !== 'none') {
			catalog.classList.remove('menu__item_hover')
			catalog.addEventListener('click', catalogClick)
		} else {
			catalog.classList.add('menu__item_hover')
		}
	}

	//for remain an ability to click on subList of catalog
	const subList = document.querySelector('.header .container .header__wrapper .menu .menu__list .catalog .menu__subList')
	subList.addEventListener('click', (e) => {
		e.stopPropagation()
	})

	window.addEventListener('resize', () => {
		resetJS()
		catalogBehavior()
	})

	catalogBehavior()
})