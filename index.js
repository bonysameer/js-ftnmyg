const person = {
  name:"bony sameer",
  rollno:52,
  id:"qwerty"
}

console.log(person);




const greatgrandparent = {
  name: "r.bodra",
  location: "bandgaon",
  area:"west singhbhum"
}

const grandparent = Object.create(greatgrandparent);
  grandparent.name = "s.bodra";
  grandparent.land = "8 acre land";
  grandparent.area = "ranchi";

  const parent = object.create(grandparent);
    parent.name = "p.bodra";
    parent.land = "14 acre land";
    parent.area = "bangalore";

    console.log(grandparent);
// method
    const person = new Object();
    person.firstname = "bony";
    person.area = "4 acre land";

    

    console.log(person);

    //method

const person={
  name:"sameer",
  area:"6 acre land";
  height:"5.6 inch",
}

person.nationality = "indian";
console.log(person.nationality);


//method

function person(hands,legs){
  this.hands = hands;
  this.legs = legs;
}
const human = new animal(2,2);
console.log(human);