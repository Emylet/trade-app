

    /*
     const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${mailnput.value}`));

       userList.appendChild(li);*/
      
       


//var ndsa = window.prompt("enter UserName");
//var menuInfo =document.getElementById("menuInfo");
//menuInfo.innerHTML= " Welcome "+ ndsa;
var adverChange = document.getElementById("nft-advt");
images = [
    'advert/Ads5.png','advert/Ads2.png',  'advert/Ads1.png', 'advert/Ads4.png',
 ];


 setInterval(function() {
    var imgCount = images.length 
    var numb = Math.floor(Math.random()* imgCount);
    adverChange.style.backgroundImage = 'url('+images[numb]+')'
}, 3000);


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
    document.getElementById("body-bg").style.color= 'white';
    document.querySelector(".main").style.color= 'white';  
}
function lightShow(){
    document.getElementById("body-bg").style.backgroundColor='white';
    document.getElementById("body-bg").style.color= 'black';
    document.querySelector(".main").style.color= 'darkblue';
}

function logOut() {
    window.location.href="index.html";
}