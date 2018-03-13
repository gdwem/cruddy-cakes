const url = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';

const CakesConnect = {
  getCakes() {

  return fetch(url + '/cakes').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
  }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
      // Code to execute with jsonResponse
      console.log(jsonResponse[0].id);
      if(jsonResponse[0].id) {
        return jsonResponse.map(cake => {
          return {
                id: cake.id,
                name: cake.name,
                comment: cake.comment,
                imageUrl: cake.imageUrl,
                yumFactor: cake.yumFactor
            };
        })
      }
    });
  }
}

export default CakesConnect;
