const request = require("request");

// The base URL for The Cat API
const baseURL = "https://api.thecatapi.com/v1/";

// Function to search for a cat breed
const searchCatBreed = (breedName) => {
  const searchURL = `${baseURL}breeds/search?q=${breedName}`;

  request.get(searchURL, (error, response, body) => {
    if (error) {
      console.error("Error searching for cat breed:", error.message);
    } else {
      const breedData = JSON.parse(body);

      if (breedData.length === 0) {
        console.log("No matching breed found.");
      } else {
        const breed = breedData[0];
        console.log("Breed Information:");
        console.log("Name:", breed.name);
        console.log("Description:", breed.description);
      }
    }
  });
};

// Get the breed name from command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: node breedFetcher.js <breed_name>");
} else {
  const breedName = args[0];
  searchCatBreed(breedName);
}
