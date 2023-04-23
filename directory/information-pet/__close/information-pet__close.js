;(function(informationPetClose, informationPet, petCardsLearnMore) {
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