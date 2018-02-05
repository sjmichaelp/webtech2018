imgvar = document.getElementById("img1");


downnum =0;
leftnum =0;
enlargenum=0;
shrinknum=0;

document.getElementById("Avatar2").addEventListener("click", function () {
    imgvar.src = "pics/ava2.png";
});

document.getElementById("Avatar1").addEventListener("click", function () {
    imgvar.src = "pics/ava1.png";
});

document.getElementById("menu_button").addEventListener("click", function () {
    
   document.getElementById("menu").style.right = "0";
});

document.getElementById("upbutton").addEventListener("click", function () {
    imgvar.style.margin = "None";
    upnum = upnum+7;
    imgvar.style.bottom = upnum + "px";
});

document.getElementById("downbutton").addEventListener("click", function () {
    
    
    imgvar.style.margin = "None";
    upnum = upnum-7;
    imgvar.style.bottom = upnum + "px";
});

document.getElementById("rightbutton").addEventListener("click", function () {
    
   
    imgvar.style.margin = "None";
    rightnum = rightnum+7;
    imgvar.style.left = rightnum + "px";
});

document.getElementById("leftbutton").addEventListener("click", function () {
    
    
    imgvar.style.margin = "None";
    rightnum = rightnum-7;
    imgvar.style.left = rightnum + "px";
});

document.getElementById("enlarge").addEventListener("click", function () {
    
    imgvar.style.height = 100 + enlargenum + "%";
    imgvar.style.margin = "None";
    enlargenum = enlargenum+1;
});

document.getElementById("shrink").addEventListener("click", function () {
    
    imgvar.style.height = 100 - shrinknum + "%";
    imgvar.style.margin = "None";
    shrinknum = shrinknum+1;
});

imgvar.addEventListener("click", function () {
    document.getElementById("buttons").style.display = "None";
     document.getElementById("menu").style.display = "None";
    
});

document.getElementById("header").addEventListener("click", function () {
    document.getElementById("buttons").style.display = "block";
     document.getElementById("menu").style.display = "block";
    
});
document.getElementById("hatbut").addEventListener("click", function () {
    document.getElementById("hat").style.display = "block";
});
document.getElementById("shirtbut").addEventListener("click", function () {
    document.getElementById("shirt").style.display = "block";
});
document.getElementById("bowbut").addEventListener("click", function () {
    document.getElementById("bow").style.display = "block";
});

