  function validate (event){
 
    var firstName = document.getElementById('firstuserinput').value;
    var secondName = document.getElementById('seconduserinput').value
    var usertext = document.getElementById('usertext').value;
    var username = document.getElementById('username').value;
    if (firstName === ''){
        document.getElementById('firstuserinput').classList.add('redBorder');
    }else if (secondName === ''){
        document.getElementById('seconduserinput').classList.add('redBorder');
    }else if (usertext === ''){
        document.getElementById('usertext').classList.add('redBorder');
    }
    else{
        document.querySelector('.bar').style.display = 'block';
        document.querySelector('#username').innerText = firstName;
        document.getElementById('form').reset();
    }
}
 var check = function(){
    document.getElementById('firstuserinput').classList.remove('redBorder');
    document.getElementById('seconduserinput').classList.remove('redBorder');
    document.getElementById('usertext').classList.remove('redBorder');

 }

var btn = document.getElementById('btn');
btn.addEventListener('click', validate);
var closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function(){window.location.reload()});