function ElecDevice(name, firm){
  this.name = name,
  this.firm = firm,  
  this.type = 'electric'
}

ElecDevice.prototype.getPower = function eLectr(name, turnOn, passsport_power) {
  let result = '';
  if(turnOn === "turnOn"){
result = 'Потребляемая мощность прибора ' + name + ' ' + passsport_power * (1 / 3) + ' Ватт'}
  
  else {
    result = "Прибор выключен"
  }
  console.log(result)
}

function KitchenDevice(name, firm, purpose){
  this.name = name,
   this.firm = firm,
  this.purpose = purpose  
}

KitchenDevice.prototype = new ElecDevice()

function BeautyDevice(name, firm, purpose){
  this.name = name,
  this.firm = firm, 
  this.purpose = purpose
}

BeautyDevice.prototype = new ElecDevice()


KitchenDevice.prototype.getPower = function eLectr(name, turnOn, passsport_power) {
  let result = '';
  if(turnOn === "turnOn"){
result = 'Если использовать ' + name + ' три раза за день, то потребляемая мощность составит ' + passsport_power * (1 / 3) + ' Ватт'}
  
  else {
    result = "Прибор выключен"
  }
  console.log(result)
}


const kettle = new KitchenDevice('Чайник','Philips', 'Подогрев воды')
const hairDryer = new BeautyDevice ('Фен','Bosch', 'Укладка волос')


kettle.getPower('Чайник', 'turnOn', 2100)
hairDryer.getPower('turnOn', 900)

console.log(hairDryer)
console.log(kettle)

