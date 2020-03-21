window.onload = () => {
    const containers = document.getElementsByClassName('container');
            
    for (const container of containers) {
        for (const item of container.children) {
            const styles = window.getComputedStyle(item);
            const flexGrow = styles ? styles.getPropertyValue('flex-grow'): '';
            const flexShrink = styles ? styles.getPropertyValue('flex-shrink'): '';
            const flexBasis = styles ? styles.getPropertyValue('flex-basis'): '';
            const itemValue = item.innerText;
            const flex = styles ? styles.getPropertyValue('flex'): '';
            const popupElement = document.createElement('section');

            popupElement.innerHTML = `
                <h2 class='popup-heading'>Flex Sizing Details</h2>
                <div class='popup-field value-field'>
                    <span class='field-title'>Chosen Item:</span> 
                    <span class='field-value'>${itemValue}</span>
                </div>
                <div class='popup-field'>
                    <span class='field-title'>Flex:</span> 
                    <span class='field-value'>${flex}</span>
                </div>
                <div class='popup-field'>
                    <span class='field-title'>Flex Grow:</span> 
                    <span class='field-value'>${flexGrow}</span>
                </div>
                <div class='popup-field'>
                    <span class='field-title'>Flex Shrink:</span> 
                    <span class='field-value'>${flexShrink}</span>
                </div>
                <div class='popup-field'>
                    <span class='field-title'>Flex Basis:</span> 
                    <span class='field-value'>${flexBasis}</span>
                </div>
            `;

            popupElement.className = 'popup';
            
            item.addEventListener('mouseover', () => {
                popupElement.style.display = 'block';
            });

            item.addEventListener('mouseout', () => {
                popupElement.style.display = 'none';
            });

            item.appendChild(popupElement);
        }
    }
}