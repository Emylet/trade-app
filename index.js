const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const mailnput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");


function logIn(){

    if(nameInput.value ==="mekus" && mailnput.value === "1914" || nameInput.value === "jason" && mailnput.value === "5050") {
        window.location.href="dashboard.html"
   }
   else{
       msg.innerHTML = "Invalid Input Fields"

       setTimeout(()=> msg.remove(), 10000);
   }
    //Clear fields
    nameInput.value ='';
    mailnput.value = '';
    }

    function SignUps(){
        msg.innerHTML = "Hope you'll adhere to our terms"
    }

    /*
     const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${mailnput.value}`));

       userList.appendChild(li);*/

function dropShow() {
    document.getElementById("menuDrops").classList.toggle
    ("show");
}

window.onclick = function(event) {
    if
    (!event.target.matches('.menu-btn'))
    {
        var dropdowns = document.getElementsByClassName
        ("menu-contents");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = 
            dropdowns[i];
            if
            (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');
            }
        }
    }
}

function darkShow() {
    document.getElementById("body-bg").style.backgroundColor='black'; 
    var x = document.getElementsByClassName();
        for (var i = 0; i < x.length; x++)
        {
            x[i].style.color = "white";
        }
    
}
function lightShow(){
    document.getElementById("body-bg").style.backgroundColor='white'
        if(document.getElementsByClassName("tknval").textContent ==''){
        document.getElementsByClassName("tknval").style.display = 'blue';
        }
}

function logOut() {
    window.location.href="index.html";
}