;(function(petCardLearnMore, petsBlockContainer, petsBlockBodyForDesktop, petsBlockBodyForGadget) {
	let informPets = [
		{
			path: 'assets/images/Katrine.png',
			name: 'Jennifer',
			breed: 'Pooch + Labrador',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.',
			age: '2 month',
			inoculations: 'none',
			diseases: 'none',
			parasites: 'none',
		},
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