

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