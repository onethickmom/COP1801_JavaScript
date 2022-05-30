for (let taskOne = 0; taskOne <= 10; taskOne++) {
    if (taskOne === 0) {
        console.log(taskOne + " is even");
    }
    else if (taskOne % 2 === 0) {
        console.log(taskOne + " is even");
    }
    else {
        console.log(taskOne + " is odd");
    }
}



function taskTwoFunction() {
    let myNum = document.getElementById("taskTwoInput");
    let counter = 0

    do {
        counter = counter + 1;
        console.log(counter);        
    } while(counter < myNum)
}


const subjects = [
    "Accounting",
    "Algebra",
    "Programming",
    "Art",
    "Data Analytics"
]

document.getElementById("displayCommas").innerHTML = subjects; 



let text = " ";
const continents = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia"
];

continents.forEach(myFunction);

document.getElementById("displayForEach").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}