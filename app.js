function validate (){
 
  var firstName = document.getElementById('firstuserinput').value;
  var secondName = document.getElementById('seconduserinput').value;
  var gendermen = document.getElementById('Men').checked;
  var genderwoman = document.getElementById('Woman').checked;
  var usertext = document.getElementById('usertext').value;
  var form = [firstName,secondName,gendermen,genderwoman,usertext];

  for(let char of form){
  if (firstName==="" || secondName==="" || usertext==="" || gendermen===false && genderwoman===false)
    {
      
     char.style.borderColor = 'red';
    }
  document.querySelector(".bar").style.display= "block";
  document.querySelector("#username").innerText = firstName;
  //var form = [firstName,secondName,gendermen,genderwoman,usertext];
  console.log(form);
  return false;

}
}