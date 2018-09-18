// gallery switch
const bd = document.querySelector('body');
const gallCategory = document.querySelectorAll('.my-works__item-js');
const dataUrlArr = [];
const locUrl = location.origin + location.pathname;


// add to body class, whish is on Data-attr clicked link
gallCategory.forEach(element => {
    const dataUrl = element.dataset.url;
    dataUrlArr.push(dataUrl);

    element.addEventListener('click', function (ev) {
        ev.preventDefault();
    
        dataUrlArr.forEach(el => {
            bd.classList.remove(`${el}`)
        });
    
        bd.classList.add(`${dataUrl}`);
        location.href = locUrl + `#${dataUrl}`;
        
    
    });
});

