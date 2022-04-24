const commify = (value) => {
  var num = value.toString().split(".");
  const integer = num[0];
  const decimal = num[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return integer.replace(thousands, ",") + (decimal ? "." + decimal : "");
};

export default commify;
