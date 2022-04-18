const createBank = (bank) => {
  const cardItem = document.createElement('div');
  cardItem.classList.add('card__item');
  cardItem.setAttribute('id', bank.id);

  const cardImg = document.createElement('img');
  cardImg.classList.add('card__item-img');
  cardImg.setAttribute('src', `http://localhost:3000/img/${bank.image}`);
  cardImg.setAttribute('alt', bank.altDesc);

  const cardContentWrapper = document.createElement('div');
  cardContentWrapper.classList.add('card__content-wrapper');

  const cardContentRate = document.createElement('div');
  cardContentRate.classList.add('card__content-item', 'card__content-rate');
  cardContentRate.innerHTML = `Interes rate: <span class="card-rate">${bank.rate.$numberDecimal} %</span>`;

  const cardContentLoan = document.createElement('div');
  cardContentLoan.classList.add('card__content-item', 'card__content-loan');
  cardContentLoan.innerHTML = `Maximum loan: <span class="card-loan">${bank.loan.$numberDecimal} $</span>`;

  const cardContentPayment = document.createElement('div');
  cardContentPayment.classList.add('card__content-item', 'card__content-payment');
  cardContentPayment.innerHTML = `Minimum down payment: <span class="card-payment">${bank.payment.$numberDecimal} $</span>`;

  const cardContentTerm = document.createElement('div');
  cardContentTerm.classList.add('card__content-item', 'card__content-term');
  cardContentTerm.innerHTML = `Loan term: <span class="card-term">${bank.term} years</span>`;

  const cardEdit = document.createElement('div');
  cardEdit.classList.add('card__edit');
  cardEdit.innerHTML = `
  <svg class="card__edit-ico ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512">
    <g><g>
    <path d="M397.736 78.378c6.824.0 12.358-5.533 12.358-12.358V27.027C410.094 12.125 397.977.0 383.08.0H121.641c-3.277.0-6.42 1.303-8.739 3.62L10.527 105.995c-2.317 2.317-3.62 5.461-3.62 8.738v370.239C6.908 499.875 19.032 512 33.935 512h349.144c14.897.0 27.014-12.125 27.014-27.027V296.289c.001-6.824-5.532-12.358-12.357-12.358-6.824.0-12.358 5.533-12.358 12.358v188.684c0 1.274-1.031 2.311-2.297 2.311H33.936c-1.274.0-2.311-1.037-2.311-2.311v-357.88h75.36c14.898.0 27.016-12.12 27.016-27.017V24.716H383.08c1.267.0 2.297 1.037 2.297 2.311V66.02C385.377 72.845 390.911 78.378 397.736 78.378zM109.285 100.075c0 1.269-1.032 2.301-2.3 2.301H49.107l60.178-60.18v57.879z" fill="currentColor"/></g></g><g><g>
    <path d="M492.865 100.396l-14.541-14.539c-16.304-16.304-42.832-16.302-59.138.0L303.763 201.28H103.559c-6.825.0-12.358 5.533-12.358 12.358.0 6.825 5.533 12.358 12.358 12.358h175.488l-74.379 74.379H103.559c-6.825.0-12.358 5.533-12.358 12.358s5.533 12.358 12.358 12.358h76.392l-.199.199c-1.508 1.508-2.598 3.379-3.169 5.433l-19.088 68.747h-53.936c-6.825.0-12.358 5.533-12.358 12.358s5.533 12.358 12.358 12.358h63.332c.001.0 2.709-.306 3.107-.41.065-.017 77.997-21.642 77.997-21.642 2.054-.57 3.926-1.662 5.433-3.169l239.438-239.435C509.168 143.228 509.168 116.7 492.865 100.396zM184.644 394.073l10.087-36.326 26.24 26.24L184.644 394.073zM244.69 372.752l-38.721-38.721 197.648-197.648 38.722 38.721L244.69 372.752zM475.387 142.054l-15.571 15.571-38.722-38.722 15.571-15.571c6.669-6.668 17.517-6.667 24.181.0l14.541 14.541C482.054 124.54 482.054 135.388 475.387 142.054z" fill="currentColor"/>
    </g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/>
  </svg>
  `;

  const cardRemove = document.createElement('div');
  cardRemove.classList.add('card__remove');
  cardRemove.innerHTML = `
  <svg class="card__remove-ico ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 465.311 465.311" style="enable-background:new 0 0 465.311 465.311"><g>
  <path d="M372.811 51.002h-59.908V36.566C312.902 16.404 296.499.0 276.335.0h-87.356c-20.163.0-36.567 16.404-36.567 36.566v14.436H92.5c-20.726.0-37.587 16.861-37.587 37.587v38.91c0 8.284 6.716 15 15 15h7.728v307.812c0 8.284 6.716 15 15 15H372.67c8.284.0 15-6.716 15-15V142.499h7.728c8.284.0 15-6.716 15-15v-38.91C410.397 67.863 393.536 51.002 372.811 51.002zM182.412 36.566c0-3.621 2.946-6.566 6.567-6.566h87.356c3.621.0 6.567 2.946 6.567 6.566v14.436h-100.49V36.566zM84.914 88.589c0-4.184 3.403-7.587 7.587-7.587h280.31c4.184.0 7.587 3.403 7.587 7.587v23.91H84.914V88.589zM357.67 435.311H107.641V142.499H357.67V435.311z" fill="currentColor"/>
  <path d="M137.41 413.485c5.523.0 10-4.477 10-10V166.497c0-5.523-4.477-10-10-10s-10 4.477-10 10v236.988C127.41 409.008 131.887 413.485 137.41 413.485z" fill="currentColor"/>
  <path d="M200.907 413.485c5.523.0 10-4.477 10-10V166.497c0-5.523-4.477-10-10-10s-10 4.477-10 10v236.988c0 5.522999999999968 4.476999999999975 10 10 10z" fill="currentColor"/>
  <path d="M264.404 413.485c5.523.0 10-4.477 10-10V166.497c0-5.523-4.477-10-10-10s-10 4.477-10 10v236.988c0 5.522999999999968 4.476999999999975 10 10 10z" fill="currentColor"/>
  <path d="M327.901 413.485c5.523.0 10-4.477 10-10V166.497c0-5.523-4.477-10-10-10s-10 4.477-10 10v236.988c0 5.522999999999968 4.476999999999975 10 10 10z" fill="currentColor"/></g>
  </svg>
  `;

  cardContentWrapper.appendChild(cardContentRate);
  cardContentWrapper.appendChild(cardContentLoan);
  cardContentWrapper.appendChild(cardContentPayment);
  cardContentWrapper.appendChild(cardContentTerm);
  cardContentWrapper.appendChild(cardEdit);
  cardContentWrapper.appendChild(cardRemove);
  cardItem.appendChild(cardImg);
  cardItem.appendChild(cardContentWrapper);
  return cardItem;
};

export default createBank;