function ElecDevice(name, firm, power){
  this.name = name,
  this.firm = firm, 
  this.power = power,
  this.isTurnOn = false, 
  this.type = 'electric'
}

ElecDevice.prototype.getPower = function() {
  let result = '';
  if(this.isTurnOn){
    result = 'Потребляемая мощность прибора ' + this.name + ' ' + this.power * (1 / 3) + ' Ватт'}
  else {
    result = "Прибор выключен"
  }
  console.log(result)
}

ElecDevice.prototype.turnOn = function() {
  this.isTurnOn = true;
}

ElecDevice.prototype.turnOff = function() {
  this.isTurnOn = false;
}

function KitchenDevice(name, firm, power, purpose){
  this.name = name,
  this.firm = firm,
  this.power = power,
  this.purpose = purpose  
}

KitchenDevice.prototype = new ElecDevice()

KitchenDevice.prototype.cookFood = function() {
  console.log(`Прибор ${this.name} готовит еду. Потребляемая мощность: ${this.power * (1 / 3)} Ватт`);
}

function BeautyDevice(name, firm, power, purpose){
  this.name = name,
  this.firm = firm,
  this.power = power,
  this.purpose = purpose
}

BeautyDevice.prototype = new ElecDevice()

const microwave = new KitchenDevice('Микроволновка','Philips', 2100, 'Подогрев еды')
const hairDryer = new BeautyDevice('Фен','Bosch', 900, 'Укладка волос')


microwave.getPower()
microwave.cookFood()
hairDryer.turnOn()
hairDryer.getPower()
hairDryer.turnOff()
hairDryer.getPower()

console.log(hairDryer)
console.log(microwave)

// В задании есть несколько ошибок:
// 1. Функция getPower в таком виде, как сейчас, не имеет смысла, т.к. мы хотим получить сведения об объекте, но при этом выводим данные, которые сами же и передали в функцию (аргументы name, turnOn и passsport_power). Чтобы метод работал корректно, надо использовать this - ссылку на текущий объект.
// 2. Кроме того, у KitchenDevice также определен метод getPower, который выполняет по сути ту же самую задачу (выводит информацию о имени объекта и потребляемую мощность). Нет смысла создавать метод с практически таким же функционалом, если в KitchenDevice доступен метод из ElecDevice (т.к. ElecDevice является прототипом для KitchenDevice)
// 3. По заданию нужно было определить метод, который отвечает за включение/выключение приборов из розетки. У вас такого метода нет.
// 4. И снова замечание по стилю кода: passsport_power не лучший выбор для названия переменной, лучше использовать passportPower или просто power

// Все перечисленное постаралась исправить выше в коде