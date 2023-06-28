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
    const data = await fetch(`/api/v1/search/?q=${query}`);
    const response = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
