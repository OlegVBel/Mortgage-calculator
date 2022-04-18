import createBank from './createBank.js';

const insertNewBank = (addData, selectorBanksList) => {
  const banksList = document.querySelector(selectorBanksList);
  banksList.append(createBank(addData));
};

export default insertNewBank;