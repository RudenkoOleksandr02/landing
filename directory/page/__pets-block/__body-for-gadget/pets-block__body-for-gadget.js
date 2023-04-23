;(function(petsBlockBodyForGadget, petsBlockPetCardForGadget) {
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


