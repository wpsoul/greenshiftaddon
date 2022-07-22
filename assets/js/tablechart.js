//CHARTS
const table_charts = function() {
    if(document.querySelectorAll('.table_view_charts').length > 0){
        document.querySelectorAll('.table_view_charts').forEach(function (currentValue, index, arr){
            const rowcount = currentValue.querySelector('.top_chart_row_found').getAttribute('data-rowcount');
            for (let rowcountindex = 0; rowcountindex < rowcount; rowcountindex++) {
                //Equal height for each row
                let heightArray = []

                for (let i = 0; i < currentValue.querySelectorAll('li.row_chart_' + rowcountindex + '').length; i++) {
                    heightArray.push(currentValue.querySelectorAll('li.row_chart_' + rowcountindex + '')[i].offsetHeight)
                }

                const maxHeight = Math.max.apply( Math, heightArray);

                for (let i = 0; i < currentValue.querySelectorAll('li.row_chart_' + rowcountindex + '').length; i++) {
                    currentValue.querySelectorAll('li.row_chart_' + rowcountindex + '')[i].style.height = maxHeight + 'px'
                }

                //Find differences
                let recomparecolvalue;
                currentValue.querySelectorAll('.top_chart_wrap li.row_chart_'+ rowcountindex +'').forEach(function(currentValue, index) {
                    if (currentValue.outerHTML != recomparecolvalue && index > 0) {
                        currentValue.closest('.table_view_charts').querySelectorAll('li.row_chart_'+ rowcountindex +'').forEach(function (currentLi) {
                            currentLi.classList.add('row-is-different')
                        })
                    }
                    else {
                        recomparecolvalue = currentValue.outerHTML;
                    }
                });
            }
        })
    }
}

const tableViewChars = document.querySelectorAll('.table_view_charts')
tableViewChars.forEach(function (currentTable) {
    currentTable.addEventListener('click', function (e) {
        if (e.target.classList.contains('re-compare-show-diff') || e.target.closest('.re-compare-show-diff') !== null) {
            const input = e.target.classList.contains('re-compare-show-diff') ? e.target : e.target.closest('.re-compare-show-diff');
            if (input.checked){
                input.closest('.table_view_charts').querySelectorAll('li[class^="row_chart"]:not(.heading_row_chart):not(.row-is-different)').forEach(function (curEl) {
                    curEl.classList.add('low-opacity')
                })
            }
            else {
                input.closest('.table_view_charts').querySelectorAll('li[class^="row_chart"]:not(.heading_row_chart):not(.row-is-different)').forEach(function (curEl) {
                    curEl.classList.remove('low-opacity')
                })
            }
        }
    })
})

document.addEventListener("DOMContentLoaded", function(event) {
    table_charts();

    if(document.querySelectorAll('.table_view_charts').length) {
        document.querySelectorAll('.table_view_charts').forEach(function (curEl) {
            curEl.classList.remove('loading')
        })
    }
});

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

let gscompareremoveicon = document.getElementsByClassName('remove-from-compare-icon');
const compareNonce = gscomparevars.comparenonce;

for (let i = 0; i < gscompareremoveicon.length; i++) {
    let obj = gscompareremoveicon[i];
    obj.addEventListener('click', function (ev) {
        ev.preventDefault();
        const actioncomparison = 'remove';
        const block = ev.currentTarget.closest('.top_rating_item');
        const liEls = ev.currentTarget.closest('.table_view_charts').querySelectorAll('li');

        for (let b = 0; b < liEls.length; b++) {
            liEls[b].classList.remove('row-is-different');
        }

        const post_id = block.dataset.compareid;

        block.style.opacity = '.17'

        const request = new XMLHttpRequest();
        request.open('POST', gscomparevars.ajax_url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.responseType = 'json';
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {

                if(document.querySelector('.gs-compare-icon-counter') != null){
                    let comparecountericons = document.querySelectorAll('.gs-compare-icon-counter');
                    comparecountericons.forEach(function(item) {
                        let overallcount = parseInt(item.innerHTML);
                        item.innerHTML = overallcount - 1;
                    });
                }

                const countOfBlocks = parseInt(block.closest('.top_chart_carousel').querySelectorAll('.top_rating_item').length - 1);
                 block.remove();
                 table_charts();
                let responseobj = this.response;

                if(responseobj.links.length) setNewUrlToLinksOnComparePage(responseobj.links)

                if(responseobj.currentLink.length) {
                    var obj = { Page: '', Url: responseobj.currentLink };
                    history.pushState(obj, obj.Page, obj.Url);
                }

                if(countOfBlocks === 0) window.location.reload();
            } else {
                // Response error
            }
        };
        request.onerror = function() {
            // Connection error
        };
        let linksToCompare = getLinksToCompareOnPage();
        request.send('action=gscomparecounter&comparenonce='+compareNonce+'&compare_count='+actioncomparison+'&post_id='+post_id+'&links='+linksToCompare+'&is_compare_page=1');
    });
}