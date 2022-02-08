




// ----Original function:
function displayAllFamily(selectedPerson, people){
  let familyMembers = people.filter(function(person){
    if(selectedPerson.currentSpouse == person.id){
      return true; //returning spouse
    }
    else if(selectedPerson.parents.includes(person.id)){
      return true; //returning parents
    }
    else if(person.parents.includes(selectedPerson.id)){
      return true; //returning children
    }
    else if(findSiblings(person, selectedPerson)){
      
      return true; //returning siblings
    } 
    
    
//     //look at both parent ids, nesting
//   });
//   displayPeople(familyMembers)
//   //displaySpouse(person, people);
//   // displayParents(person);
//   // displaySiblings(person);
  
//   return;
// }

  
  
//////////////////////////////////////////////////////////
//               Validation 



// function textValid(input){ // add .toLowerCase()
//   if(input.length >= 1){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// function genderValid(input){
//   if(input.toLowerCase() == "male" || input.toLowerCase() == "female"){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// function numberValid(input){
//   if(input == "1" || input == "2" || input == "3"){
//     return true;
//   }
//   else{
//     return false;
//   }
// }