async function updateBanks (data){
  try {
    const response = await fetch(`http://localhost:3000/banks/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.log(error);
  }
};

export default updateBanks;
