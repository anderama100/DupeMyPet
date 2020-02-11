

//window.onload=()=>{
 // loadTableData(req1);
//};

/*function loadTableData(req1){
  const tableBody = document.getElementById('tableData');
  let dataHtml = '';

  for(let pet of req1){
    dataHtml += `<tr><th>type<td>${pet.type}</td></th></tr>
                 <tr><th>name<td>${pet.name}</td></th></tr>
                 <tr><th>eyes<td>${pet.eyes}</td></th></tr>
                 <tr><th>body<td>${pet.body}</td></th></tr>
                 <tr><th>coat<td>${pet.coat}</td></th></tr>
                 <tr><th>spots<td>${pet.spots}</td></th></tr>`;

  }
//console.log(dataHtml);

tableBody.innerHTML = dataHtml;
}*/

const AttTypeE1 = document.getElementById('sltPet');
const AttNameE1 = document.getElementById('name');
const AttEyesE1 = document.getElementById('eyes');
const AttHairE1 = document.getElementById('hairColor');
const AttSizeE1 = document.getElementById('sltsize');
 

document.getElementById('Att-Form').addEventListener('submit', DatPet => {
  let AttType = AttTypeEl.value;
  let AttName = AttNameE1.value;
  let AttEyes = AttEyesE1.value;
  let AttHair = AttHairE1.value;
  let AttSize = AttSizeE1.value;

//console.log('type '+ AttType);

   if(AttType < 2){
     let dog = new Doggy(AttName, AttEyes, AttHair, AttSize);
      

    } else if(AttType > 1 && AttType <3){
      let goose = new Goosling(AttName, AttEyes, AttHair, AttSize);
      

    }else if(AttType < 4 && AttType > 2){
      let cat = new Puss(AttName, AttEyes, AttHair, AttSize);
      
    }
    else{
      console.log('none');
    }
console.log(dog);
});


//The super class
class PetShape {
   constructor(AttName, AttEyes, AttHair, AttSize) {
     
     this.AttName = 'no-name';
     this.AttEyes = 'grey';
     this.AttHair = 'grey';
     this.AttSize = 'default';
     

   }

/// Being loyal to itself
   loyalty(){
     this.loyal = AttName;
     console.log(loyal);

   }
   makeNoise() {
     this.noise = noise;
     console.log('SuperClass '+ noise);

     /*if(petType === 'dog' noise ="Woof");
     if(petType === 'cat' noise ="Meow");
     if(petType === 'goose' noise ="Honk!");*/
      return noise;
         
  }

   TurnOn(){
     return `${this.name} in ON`;
    /*if(petType === 'dog' run ="Scratching");
     if(petType === 'cat' run ="Licking");
     if(petType === 'goose' run ="Plucking");
     */
    }

   Fight(){
    this.attack = attack;

    /*if(petType === 'dog' attack ="Bite");
    if(petType === 'cat' attack ="Scratch");
    if(petType === 'goose' attack ="Peck");*/

     return attack;
     
   }
   
 }



//New instance of Dog based on requirements
 class Doggy extends PetShape{
   constructor(... args) {
     super(... args);
     
   }
   //adding LovedOnes  
   loyalty(){
   //this.loyal =  
   }

   makeNoise(){
   noise="woof, woof";
   console.log('subClass ' + noise);
   
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
   loyalty(){
   
   }

   makeNoise(){
   this.noise="Honk, Honk";
   
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
   loyalty(){
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
            codedisplay.textContent = classTemplate;
          //console.log(classTemplate);
            
        })
 
