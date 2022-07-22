function getLinksToCompareOnPage() {
	const elLinkToCompareOnPage = document.querySelectorAll('.gs-comparison-wrap .gs-comparison-icon-link-to-compare')
	let links = ''
	for(let i = 0; i < elLinkToCompareOnPage.length; i++) {
		links += i+'--'+elLinkToCompareOnPage[i].getAttribute('data-clear-link')+';'
	}
	return links;
}

function setNewUrlToLinksOnComparePage(links) {
	const elLinkToCompareOnPage = document.querySelectorAll('.gs-comparison-wrap .gs-comparison-icon-link-to-compare')

	for(let i = 0; i < elLinkToCompareOnPage.length; i++) {
		elLinkToCompareOnPage[i].setAttribute('href', links[i])
	}
	return links;
}

//compare multigroup button
const ajaxSearchContainer = document.querySelectorAll('.comp-ajax-search-wrap');
for(let i = 0; i < ajaxSearchContainer.length; i++) {
	ajaxSearchContainer[i].addEventListener('click', function (e) {
		if (e.target.classList.contains('wpsm-button-new-compare') || e.target.closest('.wpsm-button-new-compare') !== null) {
			const thistoggle = e.target.classList.contains('wpsm-button-new-compare') ? e.target : e.target.closest('.wpsm-button-new-compare');
			const compareID = thistoggle.getAttribute('data-addcompare-id');
			thistoggle.classList.add('loading');

			if(thistoggle.classList.contains('not-incompare')) {
				const request = new XMLHttpRequest();
				request.open('POST', gscomparevars.ajax_url, true);
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				request.responseType = 'json';
				request.onload = function () {
					if (this.status >= 200 && this.status < 400) {
						let responseobj = this.response;
						if(responseobj.links.length) setNewUrlToLinksOnComparePage(responseobj.links)

						if(responseobj.currentLink.length) {
							var obj = { Page: '', Url: responseobj.currentLink };
							history.pushState(obj, obj.Page, obj.Url);

							document.querySelector('.re-compare-destin').setAttribute('data-compareurl', responseobj.currentLink)
						}

						if(document.querySelector('.gs-compare-icon-counter') != null){
							let comparecountericons = document.querySelectorAll('.gs-compare-icon-counter');
							comparecountericons.forEach(function(item) {
								let overallcount = parseInt(item.innerHTML);
								item.innerHTML = overallcount + 1;
							});
						}

						thistoggle.classList.remove('not-incompare', 'loading');
						thistoggle.classList.add('comparing');
					} else {
						// Response error
					}
				};
				request.onerror = function() {
					// Connection error
				};

				let linksToCompare = getLinksToCompareOnPage();

				request.send('action=gscomparecounter&comparenonce='+comparechart.comparenonce+'&compare_count=add'+'&post_id='+compareID+'&links='+linksToCompare+'&is_compare_page=1');
			} else {
				document.querySelector('.compare-item-' + compareID).style.opacity = '.17'

				const request = new XMLHttpRequest();
				request.open('POST', gscomparevars.ajax_url, true);
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				request.responseType = 'json';
				request.onload = function () {
					if (this.status >= 200 && this.status < 400) {
						let responseobj = this.response;
						if(responseobj.links.length) setNewUrlToLinksOnComparePage(responseobj.links)

						if(responseobj.currentLink.length) {
							var obj = { Page: '', Url: responseobj.currentLink };
							history.pushState(obj, obj.Page, obj.Url);

							document.querySelector('.re-compare-destin').setAttribute('data-compareurl', responseobj.currentLink)
						}

						if(document.querySelector('.gs-compare-icon-counter') != null){
							let comparecountericons = document.querySelectorAll('.gs-compare-icon-counter');
							comparecountericons.forEach(function(item) {
								let overallcount = parseInt(item.innerHTML);
								item.innerHTML = overallcount - 1;
							});
						}

						thistoggle.classList.remove('comparing', 'loading');
						thistoggle.classList.add('not-incompare');

						document.querySelector('.compare-item-' + compareID).remove();
						if(!document.querySelectorAll('.top_chart_item').length) {
							window.location.reload()
						}
					} else {
						// Response error
					}
				};
				request.onerror = function() {
					// Connection error
				};

				let linksToCompare = getLinksToCompareOnPage();

				request.send('action=gscomparecounter&comparenonce='+comparechart.comparenonce+'&compare_count=remove'+'&post_id='+compareID+'&links='+linksToCompare+'&is_compare_page=1');
			}
		}
	});

	// Compare multigroup click button
	ajaxSearchContainer[i].addEventListener('click', function (e) {
		if (e.target.classList.contains('re-compare-destin') || e.target.closest('.re-compare-destin') !== null) {
			const $this = e.target.classList.contains('re-compare-destin') ? e.target : e.target.closest('.re-compare-destin');
			const compareurl = $this.getAttribute('data-compareurl');
			if( compareurl != "" ){
				window.location.href= compareurl;
			}
		}
	})
}


var dataSearch = document.getElementById('compare_search_data');

if( dataSearch != null ){
	var openCtrl = document.getElementById('btn_search'),
		closeCtrl = document.getElementById('btn_search_close'),
		searchContainer = document.querySelector('.comp-search'),
		inputSearch = searchContainer.querySelector('.comp-search-input'),
		outputSearch = searchContainer.querySelector('.comp-ajax-search-wrap');

	function runCompareSearch() {
		initEvents();
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}

			setTimeout(function(){
				doSearch(inputSearch);
			}, 100);
		});
	}

	function openSearch() {
		searchContainer.classList.add('comp-search-open');
		setTimeout(function() {
			inputSearch.focus();
		}, 600);
	}

	function closeSearch() {
		outputSearch.classList.remove('comp-ajax-search-open');
		outputSearch.innerHTML = "";
		searchContainer.classList.remove('comp-search-open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	function doSearch(elem) {
		var posttype = dataSearch.dataset.posttype;
		var terms = dataSearch.dataset.terms;
		var taxonomy = dataSearch.dataset.taxonomy;
		var search_query = elem.value;

		if (search_query == '') {
			outputSearch.innerHTML = "";
			return;
		}

		const request = new XMLHttpRequest();
		request.open('POST', gscomparevars.ajax_url, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.responseType = 'json';
		request.onload = function () {
			if (this.status >= 200 && this.status < 400) {
				const responseObject = this.response;

				outputSearch.innerHTML = responseObject.compare_html;

				if (window.innerHeight < 700){
					outputSearch.classList.add('comp-ajax-search-overflow');
				}
				outputSearch.classList.add('comp-ajax-search-open');
			} else {
				// Response error
			}
		};
		request.onerror = function() {
			// Connection error
		};

		request.send('action=add_to_compare_search&search_query='+search_query+'&posttype='+posttype+'&terms='+terms+'&taxonomy='+taxonomy+'&security='+comparechart.comparenonce);
	}

	runCompareSearch();
}
