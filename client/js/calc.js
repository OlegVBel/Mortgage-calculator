import insertOptions from "./modules/insertOptions.js";
import calculate from "./modules/calculate.js";

insertOptions({
  idBankList: 'bankList'
});

calculate({
  selectorForm: '.form',
  idLoan: 'loan',
  idPayment: 'payment',
  selectorOptions: '.form__option',
});

