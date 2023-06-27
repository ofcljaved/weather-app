export const debounce = (func, wait = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    // return new Promise((resolve) => {
    timeout = setTimeout(() => {
      // resolve(func.apply(this, args));
      func(...args);
    }, wait);
    // });
  };
};

export const fetchLocation = async (query) => {
  console.log(query);
  // if (query.length > 2) {
  //   const res = await fetch(`http://localhost:4000/api/v1/search/?q=${query}`, {
  //     next: { revalidate: 20 },
  //   });
  //   const searchResult = await res.json();
  //   console.log(searchResult);
  //   return searchResult.result;
  // } else {
  //   throw Error("too short");
  // }
};
