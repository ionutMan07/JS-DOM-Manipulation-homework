  function validate (event){
 
    var firstName = document.getElementById('firstuserinput').value;
    var secondName = document.getElementById('seconduserinput').value
    var genderM = document.getElementById('men').checked;
    var genderF = document.getElementById('woman').checked;
    var usertext = document.getElementById('usertext').value;
    if (firstName === ''){
        document.getElementById('firstuserinput').classList.add('redBorder');
    }else if (secondName === ''){
        document.getElementById('seconduserinput').classList.add('redBorder');
    }else if ((genderM === false) && (genderF === false)){
        document.getElementById('gender').style.color = 'red';
    }
    else if (usertext === ''){
        document.getElementById('usertext').classList.add('redBorder');
    }
    else{
        document.querySelector('.bar').style.display = 'block';
        document.querySelector('#username').innerText = firstName;
        document.getElementById('form').reset();
        document.getElementById('gender').style.color = 'black';
        console.log(` First name: ${firstName}\n SecondName: ${secondName}\n Usermessage: ${usertext}`);
    }
}
 var check = function(){
    document.getElementById('firstuserinput').classList.remove('redBorder');
    document.getElementById('seconduserinput').classList.remove('redBorder');
    document.getElementById('usertext').classList.remove('redBorder');
    document.getElementById('gender').style.color = 'black';

 }

var btn = document.getElementById('btn');
btn.addEventListener('click', validate);
var closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function(){window.location.reload()});