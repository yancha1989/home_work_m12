function createNewPerson(name) {
  let obj = Object.create(null);
  obj.name = name;
  console.log(obj);
}

createNewPerson("Yan");
