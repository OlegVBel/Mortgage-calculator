const showAddModel = ({ selectorAddBtn, idAddModal }) => {
  const addBtn = document.querySelector(selectorAddBtn);
  const addModal = document.getElementById(idAddModal);
  addBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('main__add-btn')) {
      addModal.classList.add('active');
    }
  });
};
export default showAddModel;
