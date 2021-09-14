let menu = document.getElementsByClassName('fa-bars')[0];
menu.addEventListener('click', eventMenu);

let cardsBox = document.getElementsByClassName('cards-box')[0];
defaultView();



displayCardsForMessages();

let buttonsBox = document.getElementsByClassName('buttons-box')[0];
buttonsBox.addEventListener('click', eventButtonsCounterMobile);
buttonsBox.addEventListener('click', eventButtonsCounterTablet);
buttonsBox.addEventListener('click', eventButtonsCounterDesktop);

window.addEventListener('resize', eventWindowResize);