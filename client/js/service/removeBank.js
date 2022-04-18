async function removeBank (data){
  try {
    const response = await fetch(`http://localhost:3000/banks/${data.id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
};
export default removeBank;