

    /*
     const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${mailnput.value}`));

       userList.appendChild(li);*/
      
       


//var ndsa = window.prompt("enter UserName");
//var menuInfo =document.getElementById("menuInfo");
//menuInfo.innerHTML= " Welcome "+ ndsa;

<<<<<<< HEAD
=======
var toggler=document.getElementsByClassName("arrow");
var i;
console.log(toggler.length);
for(i=0;i<toggler.length;i++){
    toggler[i].addEventListener("click",function(){
        this.parentElement.querySelector(".more").classList.toggle("show");
        this.classList.toggle("arrow-down");
    })
}
>>>>>>> 33739b4fbd9bf509712a6812bd41053413c8d604


function dropShow() {
    document.getElementById("menuDrops").classList.toggle
    ("show");
}

<<<<<<< HEAD
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
    document.querySelector(".main").style.color= 'white';  
}
function lightShow(){
    document.getElementById("body-bg").style.backgroundColor='white';
    document.querySelector(".main").style.color= 'darkblue';
}
=======
>>>>>>> 33739b4fbd9bf509712a6812bd41053413c8d604

function logOut() {
    window.location.href="index.html";
}


