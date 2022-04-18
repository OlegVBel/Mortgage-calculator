import showAddModel from './modules/showAddModel.js';
import showEditModel from './modules/showEditModel.js';
import closeModel from './modules/closeModel.js';
import insertBanks from './modules/insertBanks.js';
import addNewBank from './modules/addNewBank.js';
import changeBankData from './modules/changeBankData.js';
import deleteBank from './modules/deleteBank.js';

showAddModel({
  selectorAddBtn: '.main__add-btn',
  idAddModal: 'add-modal',
});

showEditModel({
  selectorCardList: '.card',
  idEditModal: 'edit-modal',
});

closeModel({
  selectorCloseBtn: '.close-btn',
  idAddBtn: 'close-add',
  idEditBtn: 'close-edit',
});

insertBanks({
  selectorBanksList: '.card',
});

addNewBank({
  idAddForm: 'add-form',
  selectorBanksList: '.card',
  idAddModal: 'add-modal',
});

changeBankData({
  idEditForm: 'edit-form',
  selectorCardList: '.card',
  idEditModal: 'edit-modal',
});

deleteBank({
  selectorCardList: '.card',
  
});