export const fetchNowcast = async ({ lat, lon }) => {
  const url = `https://api.met.no/weatherapi/nowcast/2.0/complete?lat=${lat}&lon=${lon}`; // docs: https://api.met.no/weatherapi/documentation

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch nowcast data:", error);
  }
};

export const locations = {
  Bergen: {},
};
