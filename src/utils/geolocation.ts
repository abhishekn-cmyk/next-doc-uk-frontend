// utils/location.ts
export interface ConsentLocation {
  city?: string;
  region?: string;
  country?: string;
  postal?: string;
  latitude: number;
  longitude: number;
}

/**
 * Get the user's location using browser geolocation and reverse geocode to city/region/postal.
 */
export const getLocationFromBrowser = (): Promise<ConsentLocation> => {
  if (!navigator.geolocation) {
    return Promise.reject(new Error("Geolocation not supported"));
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        // Async IIFE to call Google Geocoding API
        (async () => {
          try {
            const res = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
            );
            const data = await res.json();

            const components = data.results?.[0]?.address_components || [];

            const findComponent = (type: string): string | undefined => {
              return components.find((c: { types: string[]; long_name: string }) =>
                c.types.includes(type)
              )?.long_name;
            };

            const location: ConsentLocation = {
              city: findComponent("locality"),
              region: findComponent("administrative_area_level_1"),
              country: findComponent("country"),
              postal: findComponent("postal_code"),
              latitude,
              longitude,
            };

            resolve(location);
          } catch (err) {
            console.error("Failed to reverse geocode location:", err);
            // Fallback to just coordinates if reverse geocode fails
            resolve({ latitude, longitude });
          }
        })();
      },
      (err) => reject(err),
      { enableHighAccuracy: true }
    );
  });
};
export const getLocationFromIp = async (): Promise<{
  city?: string;
  region?: string;
  country?: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
} | undefined> => {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipRes.json();

    const locRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const locData = await locRes.json();

    return {
      city: locData.city || undefined,
      region: locData.region || undefined,
      country: locData.country_name || undefined,
      postal: locData.postal || undefined,
      latitude: locData.latitude || undefined,
      longitude: locData.longitude || undefined,
    };
  } catch (err) {
    console.error("Failed to fetch location from IP", err);
    return undefined;
  }
};

