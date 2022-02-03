"use strict"



//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#Menu region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for?\nEnter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      console.log(searchResults) //Showed Array Contents
      break;
    case 'no':
      searchByTrait(people);
      // searchResults = searchByGenderEyeColor(people);  
      // searchResults = searchByGenderAndWeight(people);
      // searchResults = searchByHeight(people);
      // searchResults = searchByWeight(people);
      // searchResults = searchByEyeColor(people); // TODO: search by traits
      // searchResults = searchByGender(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  mainMenu(searchResults, people); // Call mainMenu function ONLY after finding the SINGLE person you're looking for
}

// Menu function to call once you find who you are looking for

function searchByTrait(people){
  let searchType = promptFor("Press [1] to search by Gender and Eye color\nPress [2] to search by Gender and Weight\nPress [3] to search by Height and Weight", autoValid);
  let searchResults;
  switch(searchType){
    case '1':
      searchResults = searchByGenderEyeColor(people);
      break;
    case '2':
      searchResults = searchByGenderAndWeight(people);
      break;
    case '3':
      searchResults = searchByHeightAndWeight(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  mainMenu(searchResults, people);
}

function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  
  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " .\nDo you want to know their 'info', 'family', or 'descendants'?\nType the option you want or 'restart' or 'quit'", autoValid);

  switch(displayOption){
    // TODO: get person's info
    case "info": 
      searchResults = displayInfo(person);
      break;
    // person = alert("Name:    " + person.firstName + " " + person.lastName + "\nGender:    "+ person.gender + "\nDate of Birth:    " + person.dob + "\nHeight:    " + person.height + "\nWeight:    " + person.weight + "\nEye Color:    " + person.eyeColor + "\nOccupation:    " + person.occupation);
    
    break; //Note to Caitlin: FIgure out how to left align the answers
  
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function displayInfo(person){
  let infoAlert;
  infoAlert = alert("Name:    " + person.firstName + " " + person.lastName + 
  "\nGender:    "+ person.gender + 
  "\nDate of Birth:    " + person.dob + 
  "\nHeight:    " + person.height + 
  "\nWeight:    " + person.weight + 
  "\nEye Color:    " + person.eyeColor + 
  "\nOccupation:    " + person.occupation);
  return;
} 

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  foundPerson = foundPerson[0]; //----Completed User story #1
  return foundPerson;
}



//-------- Search Traits #1: Gender/eye --------//



function searchByGenderEyeColor(people){
  let genderResults = searchByGender(people);
  let searchResults = searchByEyeColor(genderResults);
  //If there's one choice, return to main menu with name. //searchResults = searchResults[0]
  //Else: multiple people, user chooses by index number, or by search "name" filter.
  //results returned to mainmenu
  let results;
  if(searchResults.length == 1){
    results = searchResults[0];
    return results;
  }
  else{
    results = multipleResultSelection(searchResults);
    // create function to select name if multiple return
  }
  mainMenu(results, people);
 }




function searchByGenderAndWeight(people){
    let genderResults = searchByGender(people);
    let searchResults = searchByWeight(genderResults);
    let results;
    if(searchResults.length == 1){
      results = searchResults[0];
      return results;
    }
    else{
      results = multipleResultSelection(searchResults);
    }
    mainMenu(results, people);
  }

function searchByHeightAndWeight(people){
  let heightResults = searchByHeight(people);
  let searchResults = searchByWeight(heightResults);
  let results;
  if(searchResults.length == 1){
    results = searchResults[0];
    return results;
  }
  else{
    results = multipleResultSelection(searchResults);
  }
  mainMenu(results, people);
}

  
//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  displayPeople(foundPerson);
  return foundPerson;
}

// Trait #2: Gender

function searchByGender(people){
  let gender = promptFor("What is the person's Gender?", autoValid);
  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  displayPeople(foundPerson);
  return foundPerson
}



//trait #3 : Weight
//Note for Caitlin: practice how to test weights, ie. (a,b) => b.weight - a.weight

function searchByWeight(people){
  let weight = promptFor("What is the person's approximate weight max: 300 | min: 80", autoValid);
  weight = parseInt(weight);
  
  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.weight >= weight - 20 && potentialMatch.weight <= weight + 20){ // 100 -150
    return true;
    }
    else{
    return false;  
    }
  })
  displayPeople(foundPerson);
  return foundPerson;
}

//trait #4 : 

function searchByHeight(people){
  let height = promptFor("What is the persons approx height max: 80 min: 60",autoValid);
  height = parseInt(height);
  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.height >= height - 2 && potentialMatch.height <= height + 2){
      // console.log("People in Small Height group", foundPerson);
      return true;
    }
    else{
      return false;
    }
  })
  displayPeople(foundPerson);
  return foundPerson;
}




//trait #5 : 



//TODO: add other trait filter functions here.




 

//#endregions

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

function multipleResultSelection(searchResults){
  let userInput = displayPeopleWithPrompt(searchResults);
  let foundPerson = searchPersonByFirstName(userInput);
  return foundPerson;
}
function displayPeopleWithPrompt(people){
  let results = prompt(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"),'Enter first name here');
  return results;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
function searchPersonByFirstName(person){
    let firstName = person;
    let personInfo = data.filter(function(potentialMatch){
      if(potentialMatch.firstName === firstName){
        return true;
      }
      else{
        return false;
  }})
    personInfo = personInfo[0];
    return personInfo;
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}

//#endregion


// let result = promptFor("Are you happy?", yesNo)

//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let isValid;
  do{
    var response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response;
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion