const btn = document.querySelector('#btn-1');

const clickHandler = (message: string): void => {
  console.log('Clicked' + message);
};

btn &&
  btn.addEventListener('click', clickHandler.bind(null, 'This was clicked'));
