class ElectricalDevice {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    deviceOn() {
        console.log(this.name + " on");
        this.isOn = true;
    }


    deviceOf() {
        console.log(this.name + " of");
        this.isOn = false;
    }
}
class Columns extends  ElectricalDevice {
    constructor (name, brand, power, Type) {
        super(name, power);
        this.brand = brand;
        this.Type = Type;
        this.isOn = true;
    }
}
class PK extends  ElectricalDevice {
    constructor(name, brand, power, type) {
        super(name, power);
        this.type = type;
        this.brand = brand;
        this.isOn = false;
    }
}

const PkColumns = new Columns("Columns", "Sven", 10,'PkColumns');
const DecPC = new PK("Desktop Computer", "Ryzen", 100, "stationary" );
PkColumns.deviceOf();
DecPC.deviceOn();
console.log(DecPC)
console.log(PkColumns)