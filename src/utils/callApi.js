import axios from "axios";
let weatherData;

async function callApi(city) {
  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: {
      location: `${city}`,
      format: "json",
      u: "c",
    },
    headers: {
      "x-rapidapi-key": "4bdb3bac01msh32821b80254d71ap1332aejsn68d26abd9aa9",
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    weatherData = response.data;
  } catch (error) {
    console.error(error);
  }
}

export { callApi, weatherData };
