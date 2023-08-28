const { fetchBreedDescription } = require("./breedFetcher");

// Get the breed name from command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: node index.js <breed_name>");
} else {
  const breedName = args[0];
  fetchBreedDescription(breedName, (error, description) => {
    if (error) {
      console.error("Error searching for cat breed:", error.message);
    } else if (description === null) {
      console.log("No matching breed found.");
    } else {
      console.log("Breed Description:");
      console.log(description);
    }
  });
}
