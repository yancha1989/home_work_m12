const myCar = {
  make: "Toyota",
  model: "Avensis",
  year: 2013,
};
function showProps(obj, objName) {
  let result = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
showProps(myCar, "myCar");
