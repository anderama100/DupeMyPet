
const AttTypeE1 = document.getElementById('sltPet');
const AttNameE1 = document.getElementById('name');
const AttEyesE1 = document.getElementById('eyes');
const AttHairE1 = document.getElementById('hairColor');
const AttSizeE1 = document.getElementById('sltsize');

document.getElementById('Att-Form').addEventListener('submit', DatPet => {

  let AttType = AttTypeE1.value;
  let AttName = AttNameE1.value;
  let AttEyes = AttEyesE1.value;
  let AttHair = AttHairE1.value;
  let AttSize = AttSizeE1.value;


   if(AttType < 2){

     let dog = new Doggy(AttName, AttEyes, AttHair, AttSize);
     console.log(dog.AttName);

    } else if(AttType > 1 && AttType <3){
      let goose = new Goosling(AttName, AttEyes, AttHair, AttSize);
      console.log(goose.AttName);
      

    }else if(AttType < 4 && AttType > 2){
      let cat = new Puss(AttName, AttEyes, AttHair, AttSize);
      console.log(cat.AttName);
      
    }
    else{
      console.log('none');
    }

});

const RetB = document.querySelector("#modbehavior");
const inpt = document.getElementById('family');
RetB.addEventListener('click', function(RetBhv) {
  RetBhv.preventDefault();

  const Owners = "JohnDoeTest"; //Method GetFamily();
  inpt.innerHTML = Owners;

  })





//The super class
class PetShape {
   constructor(AttName = 'no-name', AttEyes = 'grey', AttHair ='grey', AttSize = 'default') {
     
     this.AttName = AttName;
     this.AttEyes = AttEyes;
     this.AttHair = AttHair;
     this.AttSize = AttSize;
     

   }

/// stared being itself
   GetFamily(){
     let family = this.AttName;
     return family;

   }
   makeNoise() {
     this.noise = noise;
     

     /*if(petType === 'dog' noise ="Woof");
     if(petType === 'cat' noise ="Meow");
     if(petType === 'goose' noise ="Honk!");*/
      return noise;
         
  }

   /*TurnOn(){
     return `${this.name} in ON`;
    if(petType === 'dog' run ="Scratching");
     if(petType === 'cat' run ="Licking");
     if(petType === 'goose' run ="Plucking");
     
    }*/

  /* Fight(){
    this.attack = attack;

    if(petType === 'dog' attack ="Bite");
    if(petType === 'cat' attack ="Scratch");
    if(petType === 'goose' attack ="Peck");

     return attack;
     
   }*/
   
 }



//New instance of Dog based on requirements
 class Doggy extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
   //adding LovedOnes  
   GetFamily(){
   let LovedOnes=[];
   let family = `${this.AttName} ${LovedOnes}`;
   return family;
   }

   makeNoise(){
   let noise="woof, woof";
   return noise;
   
   }

   TurnOn(){
   let holding = "Bone";
   return `${super.AttName} with a ${holding}`;


  }
   Figth(){
   
   }
  

 }
 
 
  //New instance of Goose based on requirements
 class Goosling extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
   //adding LovedOnes  
   GetFamily(){
   
   }

   makeNoise(){
   this.noise="Honk, Honk";
   return noise;
   
   }
   TurnOn(){
   let holding = "Carrot";
   return `${super.TurnOn()} with a ${holding}`;


 }
   Figth(){
   
   }

 }

  class Puss extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
   //adding LovedOnes  
   GetFamily(){
   //this.loyal =  
   }

   makeNoise(){
   this.noise="Miau";
   
   }

   TurnOn(){
   let holding = "Fishing Rod";
   return `${super.name} with a ${holding}`;


  }
   Figth(){
   
   }
  

 }

 /// Printing Classes and code

const type = document.querySelector('#sltPet');
const name = document.querySelector('#name');
const eyeColor = document.querySelector('#eyes');
const hairColor = document.querySelector('#hairColor');
const size = document.querySelector('#sltsize');
//const behavior1 = document.querySelector('#behavior1');
const codedisplay = document.getElementById('footerOut');
const flexCtr = document.querySelector('.flex-ctr');
const createPetBtn = document.querySelector('#createPet');
  createPetBtn.addEventListener('click', function(e) {
       e.preventDefault();
      const classTemplate = `class ${e.target.value} extends PetShape {
        constructor(type,name,eyeColor,hairColor,size){
        this.type = type;
        this.name = name;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.size = size;

            } 
        // ${type.value}() { }            
         }`  
            codedisplay.innerHTML = classTemplate;
          //console.log(classTemplate);
            
        })
 
