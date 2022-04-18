const proccesImg = (img) => img.slice(img.lastIndexOf("\\"));

const getFormData = (idAddForm) => {
  const form = document.getElementById(idAddForm);
  const altDesc = form.querySelector('.alt-desc').value,
        rate = form.querySelector('.rate').value,
        loan = form.querySelector('.loan').value,
        payment = form.querySelector('.payment').value,
        term = form.querySelector('.term').value,
        image = proccesImg( form.querySelector('.image').value );
    const data = {
      altDesc,
      rate,
      loan,
      payment,
      term,
      image,
    };
    return data;
};

export default getFormData;