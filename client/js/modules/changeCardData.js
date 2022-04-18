const changeBankData = (data) => {
  const card = document.getElementById(data.id);
  card.querySelector('.card-rate').textContent = data.rate;
  card.querySelector('.card-loan').textContent = data.loan;
  card.querySelector('.card-payment').textContent = data.payment;
  card.querySelector('.card-term').textContent = data.term;
  card.querySelector('.card-image').setAttribute('src', `img/${data.image}`);
}
export default changeBankData;