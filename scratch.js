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
    
    
    //look at both parent ids, nesting
  });
  displayPeople(familyMembers)
  //displaySpouse(person, people);
  // displayParents(person);
  // displaySiblings(person);
  
  return;
}

function findSiblings(person, selectedPerson){
  //determine if selectedperson and person are same
  //if they are the same, skip over them
  //if not the same, compare parent ids
    let sameParents = selectedPerson.parents.filter(function(parentId){
    if(person.parents.includes(parentId))
    return true;
  });
  return sameParents.length != 0;
}


function displaySpouse(person, people){
  // let personSpouse;
  // if(currentSpouse == null){ // problem here
  //   return false;
  // }
  // else 
  if(person.currentSpouse != null){
  let personSpouse = people.filter(function(spouse){
    if(spouse.currentSpouse === person.id){
      return true;
    }
    else{
      return false;
    }
  })
  personSpouse = personSpouse[0];
  alert(person.firstName +" "+ person.lastName + "\n Spouse: " + spouse.firstName + ' ' + spouse.lastName + "\n" + siblings.firstName);
  return personSpouse;
}
  else{
    return;
  }
}


function displayParents(person){
  if(parents.length != 0){
  let personParents = data.filter(function(el){
    if(el.parents.includes(person.parents[0])){
      return true;
    }
    else{
      return false;
    }
  })// where to put the for loop and how to get it setup in alert
  parentsList = [];
  for(let i=0; i<personParents.length; i++){ 
    parentsList.push(personParents[i])
  }

  alert(person.firstName + person.lastName+ "'s Parents:\n" + parentsList.firstName + " " + parentsList.lastName);
  return;
}
  else{
    return [];
  }
}


  function displaySiblings(person){
    let list = []
    let personSiblings;
    personSiblings = data.filter(function(siblings){
      if(siblings.parents === person.parents){
        return true;
      }
      else{
        return false;
      }
    })
    // displayPeopleList(personSiblings);
    list.push(personSiblings.firstName);
    return list;
  }
  
  