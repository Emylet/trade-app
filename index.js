

    /*
     const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${mailnput.value}`));

       userList.appendChild(li);*/
      
       


//var ndsa = window.prompt("enter UserName");
//var menuInfo =document.getElementById("menuInfo");
//menuInfo.innerHTML= " Welcome "+ ndsa;

var toggler=document.getElementsByClassName("arrow");
var i;
console.log(toggler.length);
for(i=0;i<toggler.length;i++){
    toggler[i].addEventListener("click",function(){
        this.parentElement.querySelector(".more").classList.toggle("show");
        this.classList.toggle("arrow-down");
    })
}


function dropShow() {
    document.getElementById("menuDrops").classList.toggle
    ("show");
}


function logOut() {
    window.location.href="index.html";
}


