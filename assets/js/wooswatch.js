const resetVariationsBtn = document.querySelector('.variations_form .reset_variations');

if(resetVariationsBtn !== null && resetVariationsBtn.length) {
    resetVariationsBtn.addEventListener('click', (e) => {
        const gsswatches = document.getElementsByClassName('gs-var-selector');

        for (let i = 0; i < gsswatches.length; i++) {
            const labels = gsswatches[i].getElementsByClassName('gs-var-label')
            const inputs = gsswatches[i].getElementsByClassName('gs-var-input')

            for (let b = 0; b < labels.length; b++) {
                labels[b].classList.remove('gshidden');
            }

            for (let b = 0; b < labels.length; b++) {
                inputs[b].checked = false;
            }
        }
    })
}

jQuery('.variations_form').on('woocommerce_update_variation_values', function () {
    const gsswatches = document.getElementsByClassName('gs-var-selector');

    for (let i = 0; i < gsswatches.length; i++) {
        const labels = gsswatches[i].getElementsByClassName('gs-var-label')
        const variationselect = gsswatches[i].previousSibling;

        for (let b = 0; b < labels.length; b++) {
            labels[b].classList.remove('gshidden');
            // console.log(variationselect.querySelector('option[value="' + labels[b].getAttribute('data-value') + '"]').value);
            if (variationselect.querySelector('option[value="' + labels[b].getAttribute('data-value') + '"]') === null) {
                labels[b].classList.add('gshidden');
            }
        }

    }
});