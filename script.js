
const AttTypeE1 = document.getElementById('sltPet');
const AttNameE1 = document.getElementById('name');
const AttEyesE1 = document.getElementById('eyes');
const AttHairE1 = document.getElementById('hairColor');
const AttSizeE1 = document.getElementById('sltsize');
let dog;
let goose;
let cat;
let paraphE1;
const familyTypeE2 = document.getElementById('family');
const noiseE2 = document.getElementById('noise');
const codedisplay = document.getElementById('footerOut');
const codedisplay2 = document.getElementById('ppal');
const createPetBtn = document.querySelector('#createPet');
const endBtn = document.querySelector('#endBtn');

document.getElementById("dogSk").style.display = "none";
document.getElementById("dogF").style.display = "none";

////////////////////// F U N C T I O N S//////////////////////////////

/////CREATING NEW INSTANCES

document.getElementById('Att-Form').addEventListener('submit', e => {
e.preventDefault();
  let AttType = AttTypeE1.value;
  let AttName = AttNameE1.value;
  let AttEyes = AttEyesE1.value;
  let AttHair = AttHairE1.value;
  let AttSize = AttSizeE1.value;


   if(AttType === '1'){

     dog = new Doggy(AttName, AttEyes, AttHair, AttSize);


    } else if(AttType === '2'){
      goose = new Goosling(AttName, AttEyes, AttHair, AttSize);

      

    }else if(AttType === '3'){
      cat = new Puss(AttName, AttEyes, AttHair, AttSize);

      
    }
    else{
      console.log('Empty Pet');
    }


});

/// RETURN METHODS

const RetB = document.querySelector("#modbehavior");
const inpt = document.getElementById('family');
const inpt1 = document.getElementById('movem');
const inpt2 = document.getElementById('noise');

RetB.addEventListener('click', function(RetBhv) {
  RetBhv.preventDefault();

let ptType = AttTypeE1.value;
let owners="";
let ready ="";
let speak="";

  if(ptType === '1'){
  
  owners = dog.AttName;
  inpt.value = owners;

  ready = `${AttNameE1.value} runs with a Bone`;//dog.GetTurnOn;
  inpt1.value = ready;

  speak = 'woof woof';
  inpt2.value = speak;


  }
   else if(ptType === '2'){

  owners = goose.AttName;//goose.Getfamily();
  inpt.value = owners;

  ready = `${AttNameE1.value} runs with a Carrot`;//goose.GetTurnOn();
  inpt1.value = ready;

  speak = 'Honk Honk'//goose.GetmakeNoise();
  inpt2.value = speak;

  }
    else if(ptType === '3'){

  owners = cat.AttName//cat.family();
  inpt.value = owners;

  ready = `${AttNameE1.value} runs with a Wool Hank`;//cat.GetTurnOn();
  inpt1.value = ready;

  speak = 'Miau Miau';
  inpt2.value = speak;

  }
  else{
    console.log("NOT TYPE IN BEHAVIOR");
  }

  })



  ///// OVERWRITE/OVERLOADING METHODS

document.getElementById('Meth-Form').addEventListener('submit', e => {
e.preventDefault();

  let rltvs = familyTypeE2.value;
  let lang = noiseE2.value;
  let y = AttTypeE1.value;
  
     

  if(y === '1'){

     dog.setFamily(rltvs);
     dog.setMakeNoise(lang);
    

    }
  else if(y === '2'){
 
    goose.setFamily(rltvs);
    goose.setMakeNoise(lang);

  }
  else if(y === '3'){
   cat.setFamily(rltvs);
   cat.setMakeNoise(lang);

  }   

})

/////// END
endBtn.addEventListener('click', function(e) {
e.preventDefault();
document.getElementById("dogF").style.display = "block";
paraphE1 = [dog.family,"This is ", dog.AttName, dog.noise];
codedisplay2.innerHTML = paraphE1;     
     
          
})


////////////////////////  C L A S S E S /////////////////////////

//The super class
class PetShape {
   constructor(AttName = 'no-name', AttEyes = 'grey', AttHair ='grey', AttSize = 'default') {
     
     this.AttName = AttName;
     this.AttEyes = AttEyes;
     this.AttHair = AttHair;
     this.AttSize = AttSize;

   }


   GetFamily(){
     this.family = 'Itself';
     return family;


   }
   makeNoise() {
     this.noise = noise;
     return noise;
         
  }

   
 }


//Subclass Doggy 
 class Doggy extends PetShape{
   constructor(... args) {
     super(... args);
     
  
   }
   
setFamily(family){
this.family = family;

}
   GetFamily(){}

setMakeNoise(noise){
this.noise = noise;

}

GetMakeNoise(){}


setTurnOn(move){
  this.move = move||"Bone";
  return `${this.AttName} runs with a ${super.move}`;   
  }

  GetTurnOn(){}
 

 }
 
 class Goosling extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
   setFamily(family){
   this.family = family;

   }
   GetFamily(){
   
   }

   GetMakeNoise(noise){
   this.noise= noise;
   
   
   }
   TurnOn(){
   let holding = "Carrot";
   let move =  `${super.AttName} running with a ${holding}`;
   return move;


 }

 }

  class Puss extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
  setFamily(family){
  this.family = family;

  }
   GetFamily(){}

   makeNoise(){
   this.noise= noise;
   return noise;
   
   }

   TurnOn(){
   let holding = "Wool Hank";
   let move =  `${super.AttName} running with a ${holding}`;
   return move;


  }
  

 }

 /// Printing Classes and code
 
  createPetBtn.addEventListener('click', function(e) {
       e.preventDefault();
      document.getElementById("dogSk").style.display = "block";
         
      const classTemplate = `class PetShape {
   constructor(AttName = 'no-name', AttEyes = 'grey', AttHair ='grey', AttSize = 'default') {
     
     this.AttName = AttName;
     this.AttEyes = AttEyes;
     this.AttHair = AttHair;
     this.AttSize = AttSize;

   }


   GetFamily(){
     this.family = 'Itself';
     return family;


   }
   makeNoise() {
     this.noise = noise;
     return noise;
         
  }

   
 }


//Subclass Doggy 
 class Doggy extends PetShape{
   constructor(... args) {
     super(... args);
     
  
   }
   
setFamily(family){
this.family = family;

}
   GetFamily(){}

setMakeNoise(noise){
this.noise = noise;

}

GetMakeNoise(){}


setTurnOn(move){
  this.move = move||"Bone";
  return;   
  }

  GetTurnOn(){}
 

 }
 
 class Goosling extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
   setFamily(family){
   this.family = family;

   }
   GetFamily(){
   
   }

   GetMakeNoise(noise){
   this.noise= noise;
   
   
   }
   TurnOn(){
   let holding = "Carrot";
   let move =  ;
   return move;


 }

 }`  
            codedisplay.innerHTML = classTemplate;
 
            
        })
 
