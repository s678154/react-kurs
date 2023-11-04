export const fetchNowcast = async ({ lat, lon }) => {
  const url = `https://api.met.no/weatherapi/nowcast/2.0/complete?lat=${lat}&lon=${lon}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Daily/1.0 kriryk@gmail.com",
      },
    });
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
  Oslo: {
    lat: 59.9333,
    lon: 10.7166,
  },
  Bergen: {
    lat: 60.3894,
    lon: 5.33,
  },
  Trondheim: {
    lat: 63.4308,
    lon: 10.4034,
  },
  Tromsø: {
    lat: 69.6827,
    lon: 18.9427,
  },
};

// Konverter vindretning til en pil
export const windArrow = (windDirection) => {
  if (!windDirection) return null;
  const arrows = {
    0: "⬇️", // Nord
    90: "⬅️", // Øst
    180: "⬆️", // Sør
    270: "➡️", // Vest
  };
  const direction = Math.round(windDirection / 90) * 90;
  return arrows[direction] || "↔️"; // Bruk ↔️ som standard for interkardielle retninger
};

export const temperatureEmoji = (temperature) => {
  if (!temperature) return null;
  if (temperature < 0) return "🥶";
  if (temperature < 10) return "😬";
  if (temperature < 20) return "😎";
  return "🥵";
};
