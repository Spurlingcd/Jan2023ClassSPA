// Questions:
//Are iterating through an array? Through an array of objects
//Does the function need to have two separate iterations? yessss can make two different functins or comment out
//Is the expected output another array or are we making another obj? displaying in the console as an array

//Pseudo Code:
//Create a function that iterates through an array of objects
//Atrribute list needs to be outputted

// let attributeList = ["name", "image"];

// let attributeList = ["name", "sugarFree", "energy"];

const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];

let sodaFunction = sodas.map(item => {
  return {
    name: item.name,
    image: item.image
  };
});

console.log(sodaFunction);
