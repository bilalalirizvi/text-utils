const capitalizedCase = (text) => {
  let _text = text.toLowerCase().split(" ");
  for (var i = 0; i < _text.length; i++) {
    _text[i] = _text[i].charAt(0).toUpperCase() + _text[i].slice(1);
  }
  let result = _text.join(" ");
  if (text === result) {
    throw new Error("Already Capitalized!");
  } else {
    return result;
  }
};

export default capitalizedCase;
