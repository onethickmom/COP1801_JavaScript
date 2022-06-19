//1. Obj: Create an object literal
let myDog = { "name": "Seymour", "breed": "Border Terrier", "tv program": "Futurama", "notes": "I was Fry's 20th century dog in a cartoon about a 20th century pizza delivery boy who finds himself in the 31st century" }

//2. Obj: Add a property to an object after it is created
myDog.mySound = "I sound sad because I'm waiting for my owner to come back."

//3. Obj: Access the object values
document.getElementById("objectLitText").innerHTML = "Hi! My name is " + myDog.name + ". I'm a " + myDog.breed + " breed dog. When I bark " + myDog.mySound + " I was in the Emmy nominated " + myDog["tv program"] + ". " + myDog.notes + ". This was written with an object literal"

//4. Obj: Create an object constructor
function myDogConst(name, breed, program, notes, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.program = program;
  this.notes = notes;
  this.mySound = mySound;
  this.canTalk = canTalk;
  var dogTalk
  
  //Module 6, evaluate canTalk value.

  if (this.canTalk == "True") {
      dogTalk = "I speak so humans can hear me. I'm a talking dog, I am sentient."
  } else if (this.canTalk == "False") {
      dogTalk = "I cannot speak. I'm using a species translator to speak to you. I created this machine myself."
  } else { 
      dogTalk == "Error in communication. ERROR, ERROR. Bzzsshhhrrrr"
  }

    //5. Obj: Create a method that displays a message
    this.bio = function () {
      return "Hi! My name is " + this.name + ". I'm a " + this.breed + " breed dog. When I bark " + this.mySound + " I was in the Emmy nominated " + this.program + ". " + this.notes + ". This was written with an object constructor. " + dogTalk;

    };
}


//Constant so the object cannot be modified by anything. Variable name = new objectName
const myDawg = new myDogConst("Seymour","Border Terrier","Futurama","I was Fry's 20th century dog in a cartoon about a 20th century pizza delivery boy who finds himself in the 31st century","I sound sad because I'm waiting for my owner to come back.", "False")

//Module 6, Call constructor function to create two new dog objects
const brian = new myDogConst("Brian", "Labrador Retriever", "Family Guy", "I am the Griffin family dog. The Griffins are a dysfunctional family, I need help.", "I sound like many other characters in our town.", "True")

const courage = new myDogConst("Courage", "Beagle", "Courage the Cowardly Dog", "I am an anthropomorphic dog who lives with Muriel and Eustace Bagge who lives in the middle of nowhere.", "I make many noises to convey what I'm saying.", "False")

//5. Obj: Create a method that displays a message
document.getElementById("objectConstText").innerHTML = myDawg.bio()

//Module 6, Use for...in loop to display each property and value
for (const prop in myDawg) {
  console.log(`${prop}: ${myDawg[prop]}`)
}

for (const prop in brian) {
  console.log(`${prop}: ${brian[prop]}`)
}

for (const prop in courage) {
  console.log(`${prop}: ${courage[prop]}`)
}