;(function(catalogBlockContainer, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10) {
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