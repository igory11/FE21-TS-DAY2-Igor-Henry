let objects: Array<Vehicles> = [];

class Vehicles {

    type: string;
    brand: string;
    model: string;
    year: number;
    mileage: number;
    fuelType: string;
    image: string;


    constructor (type: string, brand: string, model: string, year: number, mileage: number, fuelType: string, image: string) {

        this.type = type;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.image = image

        objects.push(this)
    }


printData () {

    return `<div class="card" style="width: 18rem;">
    <img src="${this.image}" class="card-img-top" alt="img" height="318px";>
    <div class="card-body">
      <h5 class="card-title">${this.brand} ${this.model}</h5>
      <p class="card-text">This ${this.brand} "${this.model}", year ${this.year} has a mileage ${this.mileage} km and ${this.fuelType} engine.</p>
      <p class="card-text calculate"></p>
      <a href="#" class="btn btn-primary press">Check Price</a>
    </div>
  </div>`

    // return `This ${this.brand} "${this.model}", year ${this.year} has a mileage ${this.mileage} km and ${this.fuelType} engine`
}

priceCalc () {

    return this.year*100/this.mileage
}

}


class Motorbikes extends Vehicles {

    constructor(public type: string, public brand: string, public model: string, public year: number, public mileage: number, public fuelType: string, public image: string, public seats: number) {
        super(type, brand, model, year, mileage, fuelType, image)
    }

printData () {

    return `<div class="card" style="width: 18rem;">
    <img src="${this.image}" class="card-img-top" alt="img" height="318px";>
    <div class="card-body">
      <h5 class="card-title">${this.brand} ${this.model}</h5>
      <p class="card-text">This ${this.brand} "${this.model}", year ${this.year} has ${this.seats} seats, a mileage ${this.mileage} km and ${this.fuelType} engine.</p>
      <p class="card-text calculate"></p>
      <a href="#" class="btn btn-primary press">Check Price</a>
    </div>
  </div>`

}

}


class Trucks extends Vehicles {

    constructor(public type: string, public brand: string, public model: string, public year: number, public mileage: number, public fuelType: string, public image: string, public weight: number) {
        super(type, brand, model, year, mileage, fuelType, image)
    }

    printData () {

        return `<div class="card" style="width: 18rem;">
    <img src="${this.image}" class="card-img-top" alt="img" height="318px";>
    <div class="card-body">
      <h5 class="card-title">${this.brand} ${this.model}</h5>
      <p class="card-text">This ${this.brand} "${this.model}", year ${this.year} has a mileage ${this.mileage} km and ${this.fuelType} engine and a weight ${this.weight} kg.</p>
      <p class="card-text calculate"></p>
      <a href="#" class="btn btn-primary press">Check Price</a>
    </div>
  </div>`

    }
    
}


let vehicle1 = new Vehicles('auto', 'VW', 'Polo', 2017, 60000, 'petrol', 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg');
let vehicle2 = new Vehicles('auto', 'Audi', 'A4', 2019, 30000, 'diesel', 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg');
let motorbike1 = new Motorbikes('moto', 'Ducati', 'Diavel', 2018, 10000, 'petrol', 'https://cdn.pixabay.com/photo/2015/12/09/13/14/motorcycle-1084694_960_720.jpg', 2)
let truck1 = new Trucks('truck', 'Dodge', 'RAM', 2020, 35000, 'petrol', 'https://prod.pictures.autoscout24.net/listing-images/a12dbf2b-74f0-4c39-a22d-19a526653347_7ab5f901-6a03-4b59-950f-887faee773f6.jpg/1280x960.jpg', 3300);


// let objects: Array<Vehicles> = [];


for (let x of objects) {
    (document.getElementById('result') as HTMLElement).innerHTML += x.printData();
}


let buttons = document.getElementsByClassName('press')
let parag = document.getElementsByClassName('calculate')

for (let i = 0; i<buttons.length; i++) {

    buttons[i].addEventListener('click', function(){price(i)})
}




function price(index:number) {
    parag[index].innerHTML = `${Math.ceil(objects[index].priceCalc())}.000 $`
}



// console.log(vehicle1.printData());
// console.log(motorbike1.printData())
// console.log(truck1.printData())

