function displayFamily(person){
    let spouse = displaySpouse(person);
    let siblings = displaySiblings(person);
    alert(person.firstName +" "+ person.lastName + "\n Spouse: " + spouse.firstName + ' ' + spouse.lastName + "\n" + siblings.firstName);
    return;
  }
  
  function displaySpouse(person){
    let personSpouse;
    personSpouse = data.filter(function(spouse){
      if(spouse.currentSpouse === person.id){
        return true;
      }
      else{
        return false;
      }
    })
    personSpouse = personSpouse[0];
    return personSpouse;
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
  
  function displayParents(person){
    let personParents;
    personParents = data.filter(function(parents){
      if(parents.parents === person.parents){
        return true;
      }
      else{
        return false;
      }
    })
    return personParents;
  }