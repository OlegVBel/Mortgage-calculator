async function sendBank (data) {
  try{
    const response = await fetch('http://localhost:3000/banks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
  
};

export default sendBank;
