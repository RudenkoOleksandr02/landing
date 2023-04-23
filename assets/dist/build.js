; (function (informationPetClose, informationPet, petCardsLearnMore) {
	let buttons = document.querySelectorAll(petCardsLearnMore);

	for (let button of buttons) {
		button.addEventListener('click', () => {
			if (document.querySelector(informationPet) !== null) {
				document.querySelector(informationPet).remove();
			}

			getLinkButton().then(close => {
				close.addEventListener('click', () => {
					document.querySelector(informationPet).remove();
				});
			});
		});
	}

	function getLinkButton() {
		return new Promise(resolve => {
			setTimeout(() => {
				let close = document.querySelector(informationPetClose);

				if (close !== null) {
					resolve(close);
				}
			}, 1);
		});
	}
})('.information-pet__close', '.information-pet', '.pet-card__learn-more');
; (function (catalogBlockContainer, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10) {
	let container = document.querySelector(catalogBlockContainer);
	createPages()

	function createPage(elem, path) {
		if (elem !== null) {
			elem.addEventListener('click', () => {
				fetch(path).then(
					response => {
						return response.text();
					}
				).then(
					content => {
						container.innerHTML = content;
					}
				)

				updateElems();
			});
		}
	}
	function createPages() {
		createPage(document.querySelector(page1), '/../../../page1.html');
		createPage(document.querySelector(page2), '/../../../page2.html');
		createPage(document.querySelector(page3), '/../../../page3.html');
		createPage(document.querySelector(page4), '/../../../page4.html');
		createPage(document.querySelector(page5), '/../../../page5.html');
		createPage(document.querySelector(page6), '/../../../page6.html');
		createPage(document.querySelector(page7), '/../../../page7.html');
		createPage(document.querySelector(page8), '/../../../page8.html');
		createPage(document.querySelector(page9), '/../../../page9.html');
		createPage(document.querySelector(page10), '/../../../page10.html');
	}
	function updateElems() {
		setTimeout(() => {
			createPages();
		}, 100);
	}
})('.catalog-block__container', '#page-1', '#page-2', '#page-3', '#page-4', '#page-5', '#page-6', '#page-7', '#page-8', '#page-9', '#page-10');
; (function (petCardLearnMore, petsBlockContainer, petsBlockBodyForDesktop, petsBlockBodyForGadget) {
	class informPet {
		constructor(path, name, breed, description, age, inoculations, diseases, parasites) {
			this.path = path;
			this.name = name;
			this.breed = breed;
			this.description = description;
			this.age = age;
			this.inoculations = inoculations;
			this.diseases = diseases;
			this.parasites = parasites;
		}
	}
	let informPets = [
		new informPet('assets/images/Katrine.png',
			'Jennifer',
			'Pooch + Labrador',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			'2 month',
			'none',
			'none',
			'none'),
		{
			path: 'assets/images/Jennifer.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
		{
			path: 'assets/images/Woody.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
		{
			path: 'assets/images/Sophia.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
		{
			path: 'assets/images/Timmy.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
		{
			path: 'assets/images/Charly.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
		{
			path: 'assets/images/Scarlett.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
		{
			path: 'assets/images/Freddie.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
	];

	let petsContainer = document.querySelector(petsBlockContainer);

	for (let i = 0; i < chooseParent(petsBlockBodyForDesktop, petCardLearnMore).length; i++) {
		addEventHandlerForDesktop(i);
		addEventHandlerForGadget(i);
	};

	function addEventHandlerForDesktop(pos) {
		chooseParent(petsBlockBodyForDesktop, petCardLearnMore)[pos].addEventListener('click', () => {
			createInformBlock(pos, petsContainer);
		});
	}
	function addEventHandlerForGadget(pos) {
		chooseParent(petsBlockBodyForGadget, petCardLearnMore)[pos].addEventListener('click', () => {
			createInformBlock(pos, petsContainer);
		});
	}
	function chooseParent(parent, elem) {
		return document.querySelectorAll(parent + ' ' + elem);
	}
	function createInformBlock(pos, parent) {
		let informPet = createHTMLElement('div', 'information-pet');
		let close = createHTMLElement('button', 'information-pet__close')
		let imageCansel = createHTMLElement('img', 'information-pet__cancel-image', '', ['assets/images/cancel.png', 'image']);
		let holder = createHTMLElement('div', 'information-pet__holder');
		let blockForImage = createHTMLElement('div', 'information-pet__block-for-image');
		let image = createHTMLElement('img', 'information-pet__image', '', [informPets[pos].path, informPets[pos].name]);
		let inner = createHTMLElement('div', 'information-pet__inner');
		let title = createHTMLElement('h2', 'information-pet__title', informPets[pos].name);
		let breed = createHTMLElement('h3', 'information-pet__breed', informPets[pos].breed);
		let description = createHTMLElement('p', 'information-pet__description', informPets[pos].description);
		let aboutPet = createHTMLElement('ul', 'information-pet__about-pet');
		let age = createHTMLElement('li', 'information-pet__item', 'Age: ' + informPets[pos].age);
		let inoculations = createHTMLElement('li', 'information-pet__item', 'Inoculations: ' + informPets[pos].inoculations);
		let diseases = createHTMLElement('li', 'information-pet__item', 'Diseases: ' + informPets[pos].diseases);
		let parasites = createHTMLElement('li', 'information-pet__item', 'Diseases: ' + 'Parasites: ' + informPets[pos].parasites);

		informPet.append(close);
		close.append(imageCansel);
		informPet.append(holder);
		holder.append(blockForImage);
		blockForImage.append(image);
		holder.append(inner);
		inner.append(title);
		inner.append(breed);
		inner.append(description);
		inner.append(aboutPet);
		aboutPet.append(age);
		aboutPet.append(inoculations);
		aboutPet.append(diseases);
		aboutPet.append(parasites);
		parent.append(informPet);
	}
	function createHTMLElement(tag, elemClass, text = '', attrs) {
		let elem = document.createElement(tag);
		elem.classList.add(elemClass);
		elem.innerHTML = text;

		if (tag == 'img') {
			elem.src = attrs[0];
			elem.alt = attrs[1];
		}

		return elem;
	}
})('.pet-card__learn-more', '.pets-block__container', '.pets-block__body-for-desktop', '.pets-block__body-for-gadget');
; (function (menuButton) {
	let button = document.querySelector(menuButton);

	button.addEventListener('click', function buttonTask() {
		let wrap = document.querySelector('.wrapper');
		let list = document.querySelector('.menu__list_mobile');
		let blackout;

		createShadow(wrap);
		createMenuForGadget(list);
		blockScroll(wrap);
		pessageToAnchor(list, wrap, this, buttonTask);

		this.addEventListener('click', function () {
			this.addEventListener('click', buttonTask);

			removeShadow();
			removeMenuForGadget(list);
			unlockScroll(wrap);
		});

		this.removeEventListener('click', buttonTask);
	});

	function createShadow(wrap) {
		blackout = document.createElement('div');
		blackout.classList.add('blackout_shadow');

		wrap.append(blackout);
	}
	function removeShadow() {
		blackout.remove();
	}
	function createMenuForGadget(list) {
		list.style.display = 'flex';
	}
	function removeMenuForGadget(list) {
		list.style.display = 'none';
	}
	function blockScroll(wrap) {
		wrap.classList.add('wrapper_block-scroll');
	}
	function unlockScroll(wrap) {
		wrap.classList.remove('wrapper_block-scroll')
	}
	function pessageToAnchor(list, wrap, button, func) {
		for (let item of list.children) {
			item.addEventListener('click', function () {
				removeMenuForGadget(list);
				unlockScroll(wrap);

				blackout.remove();
				button.addEventListener('click', func);
			});
		}
	}
})('.menu__button');


; (function (right, left, petsBlockPetCard, petsBlockHolder) {
	let arrowRight = document.querySelector(right);
	let arrowLeft = document.querySelector(left);
	let petCards = document.querySelectorAll(petsBlockPetCard);

	if (arrowRight !== null) {
		arrowRight.addEventListener('click', () => {
			startAnim(animateRight, petCards, 300);
			startCarRight();
		});
	}
	if (arrowLeft !== null) {
		arrowLeft.addEventListener('click', () => {
			startAnim(animateLeft, petCards, 300);
			startCarLeft();
		});
	}

	function startCarRight() {
		let fragment = document.createDocumentFragment();
		fragment.appendChild(document.querySelector(petsBlockPetCard + ':first-child'));
		document.querySelector(petsBlockHolder).appendChild(fragment);
	}
	function startCarLeft() {
		let fragment = document.createDocumentFragment();
		fragment.appendChild(document.querySelector(petsBlockPetCard + ':last-child'));
		document.querySelector(petsBlockHolder).prepend(fragment);
	}
	function animateRight(petCard, time) {
		petCard.animate([
			{
				transform: 'translate(-25px)'
			},
			{
				transform: 'translate(-345px)'
			}

		], { duration: time, fill: 'forwards' });
	}
	function animateLeft(petCard, time) {
		petCard.animate([
			{
				transform: 'translate(-665px)'
			},
			{
				transform: 'translate(-320px)'
			}

		], { duration: time, fill: 'forwards' });
	}
	function startAnim(func, parent, time) {
		for (let elem of parent) {
			func(elem, time);
		}
	}
})('.right', '.left', '.pets-block__pet-card', '.pets-block__holder');





; (function (petsBlockBodyForGadget, petsBlockPetCardForGadget) {
	let body = document.querySelector(petsBlockBodyForGadget);
	let petCards = document.querySelectorAll(petsBlockPetCardForGadget);

	let startPosition;
	let currentPosition = 0;

	if (body !== null) {
		body.addEventListener('touchstart', (event) => {
			startPosition = event.changedTouches[0].clientX;
		});
		body.addEventListener('touchmove', (event) => {
			changeCurrentPosition(event);
			transfer(320, 320);

			for (let petCard of petCards) {
				flipping(petCard);
			}

			startPosition = event.changedTouches[0].clientX;
		});
	}

	function changeCurrentPosition(event) {
		if (startPosition > event.changedTouches[0].clientX) {
			currentPosition += startPosition - event.changedTouches[0].clientX;
		} else if (startPosition < event.changedTouches[0].clientX) {
			currentPosition -= event.changedTouches[0].clientX - startPosition;
		}
	}
	function flipping(petCard) {
		petCard.style.right = currentPosition + 'px';
	}
	function startCarRight() {
		let fragment = document.createDocumentFragment();
		fragment.appendChild(body.querySelector(petsBlockPetCardForGadget + ':first-child'));
		body.appendChild(fragment);
	}
	function startCarLeft() {
		let fragment = document.createDocumentFragment();
		fragment.appendChild(body.querySelector(petsBlockPetCardForGadget + ':last-child'));
		body.prepend(fragment);
	}
	function transfer(petBlockSize, lastChangedPosition) {
		if (currentPosition - lastChangedPosition > petBlockSize) {
			startCarRight();
			currentPosition -= petBlockSize;
		} else if (currentPosition - lastChangedPosition < -petBlockSize) {
			startCarLeft();
			currentPosition += petBlockSize;
		}
	}
})('.pets-block__body-for-gadget', '.pets-block__pet-card-for-gadget');


