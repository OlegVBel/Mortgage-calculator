import getBanks from '../service/getBanks.js';

const insertOptions = ({idBankList}) => {
  const banksSelection = document.getElementById(idBankList);
  getBanks().then(banks => banks.forEach(bank => banksSelection.appendChild(createSelect(bank))));
};
export default insertOptions;

function createSelect(bank) {
  const option = document.createElement('option');
  option.value = bank.id;
  option.textContent = bank.altDesc;
  option.classList.add('form__option');
  return option;  
}