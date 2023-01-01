"use strict";
const btn = document.querySelector('#btn-1');
const clickHandler = (message) => {
    console.log('Clicked' + message);
};
btn &&
    btn.addEventListener('click', clickHandler.bind(null, 'This was clicked'));
//# sourceMappingURL=app.js.map