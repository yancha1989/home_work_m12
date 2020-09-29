class ElecDevice {
    constructor(name, firm){
    this.name = name;
    this.firm = firm;  
    }
  
  getPower(){
    return this.name + ' фирмы ' + this.firm + ' выключен, включите его и вы узнаете потребляемую мощность!'
  }
  }
  
  class OnDevice extends ElecDevice {
    constructor(turnOn, passsportPower, name, firm){
      super(name, firm);
      this.turnOn = turnOn;
      this.passsportPower = turnOn ? passsportPower : name 
    }
  
  
  getPower(){
    if(this.turnOn) {
      return 'Потребляемая мощность ' + this.name + 'а ' + this.passsportPower * (1 / 3) + ' Ватт'
    } else {
      return super.getPower()
    }
  }
  }
  
  const hairDryer = new ElecDevice('Фен', 'Bosch')
  const kettle = new OnDevice(true, 2100,'Чайник', 'Bosch');
  console.log(kettle.getPower())