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
    //5. Obj: Create a method that displays a message
    this.bio = function () {
      return "Hi! My name is " + this.name + ". I'm a " + this.breed + " breed dog. When I bark " + this.mySound + " I was in the Emmy nominated " + this.program + ". " + this.notes + ". This was written with an object constructor"
      
    };
}

const myDawg = new myDogConst("Seymour","Border Terrier","Futurama","I was Fry's 20th century dog in a cartoon about a 20th century pizza delivery boy who finds himself in the 31st century","I sound sad because I'm waiting for my owner to come back.", "False")

//5. Obj: Create a method that displays a message
document.getElementById("objectConstText").innerHTML = myDawg.bio()