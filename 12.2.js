const myCar = {
  make: "Toyota",
  model: "Avensis",
  year: 2013,
};
let key = "";
function Propety(key, obj) {
  console.log(key in myCar);
}
Propety("make", myCar);
Propety("color", myCar);
