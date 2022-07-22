const compare_nonce = gscomparevars.comparenonce

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


let gscomparecounter = document.getElementsByClassName('gsheartplus');
for (let i = 0; i < gscomparecounter.length; i++) {
    let obj = gscomparecounter[i];
    obj.addEventListener('click', function (ev) {
        ev.preventDefault();

        let actioncomparison = 'add';
        if (obj.classList.contains("restrict_for_guests")) {
            let loginpage = obj.dataset.customurl;
            window.location.href= loginpage;
            return false;
        } 
        if(obj.classList.contains("alreadycompare")){
            if (typeof obj.dataset.comparelink !== "undefined" && obj.dataset.comparelink !='' && document.querySelector('.gspb-favorites-posts') == null) {
                window.location.href= obj.dataset.comparelink;
                return false;
            }
            actioncomparison = 'remove';
        }

        let post_id = parseInt(obj.dataset.post_id);
        let informer = parseInt(obj.dataset.informer);
        let svgicon = obj.querySelector('.compareiconwrap').innerHTML;

        obj.classList.add("loading");
        obj.querySelector('.compareiconwrap').innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 100 100"><path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform></path></svg>';

        const request = new XMLHttpRequest();
        request.open('POST', gscomparevars.ajax_url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.responseType = 'json';
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                let responseobj = this.response;
                if(responseobj.links.length) setNewUrlToLinksOnComparePage(responseobj.links)

                obj.querySelector('.compareiconwrap').innerHTML = svgicon;
                obj.classList.remove("loading"); 
                
                if(actioncomparison == 'remove') {
                    obj.classList.remove("alreadycompare");      
                    informer=informer-1;
                    obj.closest('.gs-comparison-wrap').querySelector('#comparecount' + post_id + '').innerHTML = informer;
                    if(document.querySelector('.gs-compare-icon-counter') != null){
                        let comparecountericons = document.querySelectorAll('.gs-compare-icon-counter');
                        comparecountericons.forEach(function(item) {
                            let overallcount = parseInt(item.innerHTML);
                            item.innerHTML = overallcount - 1;
                        });
                    }
                    obj.dataset.informer = informer;
                }else{
                    obj.classList.add("alreadycompare");      
                    informer=informer+1;
                    obj.closest('.gs-comparison-wrap').querySelector('#comparecount' + post_id + '').innerHTML = informer;
                    if(document.querySelector('.gs-compare-icon-counter') != null){
                        let comparecountericons = document.querySelectorAll('.gs-compare-icon-counter');
                        comparecountericons.forEach(function(item) {
                            let overallcount = parseInt(item.innerHTML);
                            item.innerHTML = overallcount + 1;
                        });
                    }
                    obj.dataset.informer = informer;
                }                  
            } else {
                // Response error
            }
        };
        request.onerror = function() {
            // Connection error
        };
        let linksToCompare = getLinksToCompareOnPage();

        request.send('action=gscomparecounter&comparenonce='+compare_nonce+'&compare_count='+actioncomparison+'&post_id='+post_id+'&links='+linksToCompare);
    });
}


const requestFavUpdate = new XMLHttpRequest();
requestFavUpdate.open('POST', gscomparevars.ajax_url, true);
requestFavUpdate.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
requestFavUpdate.responseType = 'json';
requestFavUpdate.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        let responseobj = this.response;
        if(responseobj.comparisonids){
            let comparisonids = responseobj.comparisonids.split(',');
            if(comparisonids.length !=0){
                let favListed = document.querySelectorAll(".gsheartplus");
                favListed.forEach(function(index){
                    var postID = index.getAttribute("data-post_id");
                    if(comparisonids.includes(postID)){
                        if(!index.classList.contains('alreadycompare')){
                            index.classList.add('alreadycompare'); 
                            let informer = parseInt(index.getAttribute("data-informer"));
                            informer=informer+1;
                            index.setAttribute("data-informer", informer); 
                            index.closest('.gs-comparison-wrap').querySelector('#comparecount' + postID + '').innerHTML = informer;
                        }
                    }
                });
                if(document.querySelector('.gs-compare-icon-counter') != null){
                    let comparecountericons = document.querySelectorAll('.gs-compare-icon-counter');
                    comparecountericons.forEach(function(item) {
                        item.innerHTML = responseobj.comparecounter;
                    });
                }
            }
        }                
    } else {
        // Response error
    }
};
requestFavUpdate.onerror = function() {
    // Connection error
};
requestFavUpdate.send('action=gscomparerecount&comparenonce='+compare_nonce);