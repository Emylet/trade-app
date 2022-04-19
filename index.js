function myChanger() {
    var user = document.forms["myForm"]["Uname"].value;
    var pwd = document.forms["myForm"]["Pass"].value;
    let info = document.getElementById("show")
    if(user=="mekus" && pwd=="1914" || user=="jason" && pwd=="5050")
    {
        window.location.href="dashboard.html";
    }
    else if (isNaN(pwd))
    { 
        info.innerHTML = "Invalid Passcode"
    }
    else {
        info.innerHTML="Enter UserName and Password"
    }
}

function myOwn(){
    show.innerHTML =
     "Hope you are not a Yahoo boy!"
}

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