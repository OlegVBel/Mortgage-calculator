import getBanks from "../service/getBanks.js";

const calculate = ({selectorForm, idLoan, idPayment, selectorOptions}) => {
  const form = document.querySelector(selectorForm);
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const loanValue = +document.getElementById(idLoan).value;
    const paymentValue = +document.getElementById(idPayment).value;
    const optionsList = document.querySelectorAll(selectorOptions);
    const selectedOptionValue = getSelectedEl(optionsList);
    const bank = getBanks().then(banks => banks.find(bank => bank.id === +selectedOptionValue));
    bank.then(bank => {
      const loan = +bank.loan.$numberDecimal;
      const rate = +bank.rate.$numberDecimal;
      const payment = +bank.payment.$numberDecimal;
      const term = bank.term;
      if (loanValue > loan) {
        alert('Initial loan is more than maximum loan');
        return;
      } else if (paymentValue < payment) {
        alert('Down payment is less than minimum down payment');
        return;
      }
      const monthPayment = calcPayment(term * 12, loanValue - paymentValue, rate / 100);
      const result = document.querySelector('.result');
      const success = document.querySelector('.success');
      result.textContent = monthPayment.toFixed(2); 
      success.classList.remove('hidden');
      setTimeout(() => {
        success.classList.add('hidden');
        result.textContent = '';
      }, 5000);
    });
  });
};
export default calculate;


function calcPayment(n, credit, rate){
  const up = credit * (rate / 12) * Math.pow((1 + (rate / 12)), n);
  const down = Math.pow((1 + (rate / 12)), n) - 1;
  return up / down;
};
function getSelectedEl(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].selected) {
      return list[i].value;
    }
  }
}