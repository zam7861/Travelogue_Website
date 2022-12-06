const axios = require("axios");

const HttpError = require("../models/http-error");

async function getCoordsForAddress(address) {
  const locationURL = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
    address
  )}&apiKey=${process.env.MAPS_API_KEY}`;

  const response = await axios.get(locationURL);

  const data = response.data;

  if (!data) {
    const error = new HttpError(
      "Could not find location for the specified address",
      422
    );
    throw error;
  }

  const longitude = data.features[0].geometry.coordinates[0];
  const latitude = data.features[0].geometry.coordinates[1];

  return {
    lat: latitude,
    lng: longitude,
  };
}

module.exports = getCoordsForAddress;
