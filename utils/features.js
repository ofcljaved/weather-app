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
