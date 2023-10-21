var btn1 = document.querySelector('.btn1');
var userid = document.querySelector('.userid');
var password = document.querySelector('.password');


btn1.addEventListener('click', function(){
    if(userid.value == ""){
        alert('Please provide your UserId');
    }else if(password.value == ""){
        alert('Please provide your password');
    }else if (userid.value != "788AJC453" || password.value != "Merga@bikila.com"){
        alert('Please provide your correct credenatials');
    }else if(userid.value == "788AJC453" && password.value == "Merga@bikila.com"){
        alert('You are been logged in');
        window.location.href = "./account.html";
    };
});
