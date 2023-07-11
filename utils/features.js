export const fetchLocation = async (query) => {
  if (query.length <= 2) return false;
  try {
    const response = await fetch(`/api/v1/search?q=${query}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errorResponse);
    }
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const updateUrlParams = (location) => {
  const urlParams = new URLSearchParams(window.location.search);
  if (location) {
    urlParams.set("city", location.name);
    urlParams.set("state", location.state.name);
    urlParams.set("country", location.countryCode);
  } else {
    urlParams.delete("city");
    urlParams.delete("state");
    urlParams.delete("country");
  }
  const newPathname = `${window.location.pathname}?${urlParams.toString()}`;
  return newPathname;
};
