const { expect } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe("fetchBreedDescription", () => {
  it("returns breed description when a valid breed name is provided", (done) => {
    fetchBreedDescription("siberian", (error, description) => {
      expect(error).to.be.null;
      expect(description).to.be.a("string");
      done();
    });
  });

  it("returns null when an invalid breed name is provided", (done) => {
    fetchBreedDescription("invalidbreed", (error, description) => {
      expect(error).to.be.null;
      expect(description).to.be.null;
      done();
    });
  });

  it("returns an error when there's a network error", (done) => {
    fetchBreedDescription("siberian", (error, description) => {
      expect(error).to.exist;
      expect(description).to.be.null;
      done();
    });
  });
});

