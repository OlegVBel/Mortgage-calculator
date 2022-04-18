const setFormData = (cardData, editModal) => {
  const form = editModal.querySelector('.modal__form');
  form.querySelector('.alt-desc').value = cardData.altDesc;
  form.querySelector('.rate').value = cardData.rate['$numberDecimal'];
  form.querySelector('.loan').value = cardData.loan['$numberDecimal'];
  form.querySelector('.payment').value = cardData.payment['$numberDecimal'];
  form.querySelector('.term').value = cardData.term;
  form.querySelector('.image').setAttribute('src', cardData.image);
};

export default setFormData;