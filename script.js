/* function consoleLog(val) {
    console.log(val)
    // return val
}
consoleLog("hello") */



//RECURSIVE FUNCTION AND IMPORTANT BASE CONDITION AND RETURN KEY word!!



/* let time=5
function keeprunning() {
   {
    console.log("keep running");
    console.log(time);
    time--;

    if(time===0) return
    keeprunning();
  }

}
keeprunning() */

/* function trademill(time) {
  function keeprunning() {
    {
      console.log("keep running");
      console.log(time);
      time--;

      if (time === 0) return;
      keeprunning();
    }
  }
  keeprunning();
}
trademill(5); */


//CONCEPT OF PROMISES....



/* const abc = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise not resolve!");
  }, 3000);
});

console.log(abc);


abc.then((message)=>{
  console.log("kaam hogaya!")
  
}).catch((message)=>{
  console.log(message)
  console.log("kaam nahi hua")
})

setTimeout(()=>console.log(abc),4000)
 */

//*********16 sept22************

/* 
        //oops approach
let order1={
  cost:100,
  tax:1.2,
  bill:function(){
   // return order1.cost*order1.tax;
    // or use this keyword
    return this.cost*this.tax;
  }

}
console.log(order1.bill()
) */

/*
      //function approach.
var cost=100;
var tax=1.2;

function bill(cost,bill){
  return cost*bill;
}

console.log(bill(cost,tax)); */



// CLASS , syntax and constructor and methods.

/* class Car{
  constructor(name,model){
    this.model_property=name;
    this.mfg_property=model;
  }
    turbo(){
      console.log("turbo is switched on!!")
    }

    data(){
      console.log("car name",this.model_property);
      console.log("mfg year",this.mfg_property);
    }
  
}

var car1=new Car("maruti",1990);
var car2=new Car("baleno",1993);

console.log(car1)
car1.data();
 
var car3=Object.create(Car);

console.log(car1)
console.log(car3) */

//using es6 classes
/* class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  }
  
  let car1 = new Vehicle('GT', 'BMW', '1998cc');
  
  console.log(car1.name); //GT
   */

  //CONSTRUCTOR FUNCTION 


  /* function Object1(name,model){
    this.name=name;
    this.model=model;
    this.intro=function(){
      console.log("the model is",this.name)
    }

  }

  variable1=new Object1("maruti 800",1990);
  variable2=new Object1("fsffrrs",1992);
variable1.intro(); */
  


/* 
// in the following prog sparrow is a object of bird prototype..!
var bird={
  canfly:true,
  color:"white",
  
}

sparrow=Object.create(bird);
sparrow["date of birth"]=1990;

sparrow.canfly=false;
console.log(sparrow)
console.log(sparrow.canfly)
console.log(sparrow.color)
 */

// let a=[2,3,4,5,2,3];
// for (var i=0;i<a.length;i++){
//   var obj={}
//   if(a[i]){
//     obj[a[i]]
//   }
// }

// console.log(obj)


//--------------17/9/22-------------------------------------

// class Train {
//   constructor(color, lightsOn) {
//       this.color = color;
//       this.lightsOn = lightsOn;
//   }
//   toggleLights() {
//       this.lightsOn = !this.lightsOn;
//   }
//   lightsStatus() {
//       console.log('Lights on?', this.lightsOn);
//   }
//   getSelf() {
//       console.log(this);
//   }
//   getPrototype() {
//       var proto = Object.getPrototypeOf(this);
//       console.log(proto);
//   }
// }

// class HighSpeedTrain extends Train {
//   constructor(passengers, highSpeedOn, color, lightsOn) {
//       super(color, lightsOn);
//       this.passengers = passengers;
//       this.highSpeedOn = highSpeedOn;
//   }
//   toggleHighSpeed() {
//       this.highSpeedOn = !this.highSpeedOn;
//       console.log('High speed status:', this.highSpeedOn);
//   }
//   toggleLights() {
//       super.toggleLights();
//       super.lightsStatus();
//       console.log('Lights are 100% operational.');
//   }
// }

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}


//QUESTION IN COURSERA J.S

// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Cat();
// console.log(result.noise);

/* 
//DESTRUCTUTRING OF OBJECTS
let user = {
  name: "John",
  years: 30,
   user1 :{
    name: "John",
    years: 30
  }
};

let {user1:extra}=user;

console.log(extra) */

// const colors = ['red','orange','yellow']
// for ( item of colors) {
//     console.log(item);
// }

/* 
iterating over a object using a for of loop.....
var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn'
}

for( var key of Object.keys(clothingItem) ) {
  console.log(key, ":", clothingItem[key])
} */

// var greet = "Hello";
// var place = "World";
// console.log(`${greet} ${place }"!"`);

//18/9/22

// const veggies = ['onion', 'garlic', 'potato'];
// veggies.push("palak","tamatar")
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });

// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers);

// console.log(bestBoxers.get(2))

/* const veggies = ['onion', 'garlic', 'potato'];

let [group1,...group2]=veggies;
//using rest operatot and here group2 is rest parameter..
console.log(group1);
console.log(group2);
 let veggies2=[...veggies]
 console.log(veggies2)
 veggies2.pop();

 console.log(veggies[1]===veggies2[1]) */
 var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

//document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})