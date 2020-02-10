

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
  const AttName = "";
  const AttEyes = "";
  const AttHair = "";
  const AttSize = "";


document.getElementById('Att-Form')
.addEventListener('submit', DatPet => {
  this.AttName = document.getElementById('name').value;
  this.AttEyes = document.getElementById('eyes').value;
  this.AttHair = document.getElementById('hairColor').value;
  this.AttSize = document.getElementById('sltsize').value;

//console.log('Name ' + this.AttName, 'eyes ' + this.AttEyes, 'hair ' + this.AttHair, 'size ' + this.AttSize )

});


//The super class
class PetShape {
   constructor(name, eyeColor, hairColor, size) {
     
     this.name = 'no-name';
     this.eyeColor = 'grey';
     this.hairColor = 'grey';
     this.size = 'default';

   }

/// Being loyal to itself
   loyalty(){
     this.loyal = loyal;

   }
   makeNoise() {
     this.noise = noise;

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
   this.noise="woof, woof";
   
   }

   TurnOn(){
   let holding = "Bone";
   return `${super.TurnOn()} with a ${holding}`;


  }
   Figth(){
   
   }

 }
 
 var dog = new Doggy (AttName, AttEyes, AttHair, AttSize);
 console.log(dog);
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