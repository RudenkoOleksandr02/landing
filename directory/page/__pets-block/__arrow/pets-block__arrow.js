;(function(right, left, petsBlockPetCard, petsBlockHolder) {
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
			
		], {duration: time, fill: 'forwards'});
	}
	function animateLeft(petCard, time) {
		petCard.animate([
			{
				transform: 'translate(-665px)'
			},
			{
				transform: 'translate(-320px)'
			} 
			
		], {duration: time, fill: 'forwards'});
	}
	function startAnim(func, parent, time) {
		for (let elem of parent) {
			func(elem, time);
		}
	}
})('.right', '.left', '.pets-block__pet-card', '.pets-block__holder');

	


