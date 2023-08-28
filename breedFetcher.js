const request = require("request");

// The base URL for The Cat API
const baseURL = "https://api.thecatapi.com/v1/";

// Function to fetch breed description
const fetchBreedDescription = (breedName, callback) => {
  const searchURL = `${baseURL}breeds/search?q=${breedName}`;

  request.get(searchURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const breedData = JSON.parse(body);
      if (breedData.length === 0) {
        callback(null, null); // No matching breed found
      } else {
        const breed = breedData[0];
        callback(null, breed.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
