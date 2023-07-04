export const debounce = (func, wait = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

export const fetchLocation = async (query) => {
  if (query.length <= 2) return false;

  try {
    const response = await fetch(`/api/v1/search?q=${query}`);
    const data = await response.json();
    if (!response.ok) {
      throw new ErrorHandler(data.errorResponse);
    }
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
