async function getBanks() {
  try {
    const response = await fetch('http://localhost:3000/banks')
    .then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
  }

}

export default getBanks;