;(function(menuButton) {
	let button = document.querySelector(menuButton);

	button.addEventListener('click', function buttonTask() {
		let wrap = document.querySelector('.wrapper');
		let list = document.querySelector('.menu__list_mobile');
		let blackout;
	
		createShadow(wrap);
		createMenuForGadget(list);
		blockScroll(wrap);
		pessageToAnchor(list, wrap, this, buttonTask);
	
		this.addEventListener('click', function() {
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
			item.addEventListener('click', function() {
				removeMenuForGadget(list);
				unlockScroll(wrap);
	
				blackout.remove();
				button.addEventListener('click', func);
			});
		}
	}
})('.menu__button');

