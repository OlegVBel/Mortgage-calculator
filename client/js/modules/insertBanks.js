import getBanks from '../service/getBanks.js';
import createBank from './createBank.js';

const insertBanks = ({ selectorBanksList }) => {
  const banksList = document.querySelector(selectorBanksList);
  const data = getBanks();
  data.then(banks => banks.forEach(bank => banksList.appendChild(createBank(bank))));
};

export default insertBanks;
