const tempConvert = (value, temp) => {
  if (temp === "CtoK") {
    value = value + 273.15;
  } else if (temp === "KtoC") {
    value = value - 273.15;
  }
  return value;
};

export default tempConvert;
