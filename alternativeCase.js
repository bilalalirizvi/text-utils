const alternatingCase = (text) => {
  let result = text
    .split("")
    .map((v, i) => (i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()))
    .join("");
  if (text === result) {
    throw new Error("Already Alternating!!");
  } else {
    return result;
  }
};

export default alternatingCase;
