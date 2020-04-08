
function home() {        
    var intro = document.getElementById("intro");
    var projects = document.getElementById("projects")
    var polygon = document.getElementById("polygon_path")
    var sun = document.getElementById("sun")
    if (intro.style.display === "none") {
        intro.style.display = "inline-block";  
        projects.style.display = "none"      
    } 
    polygon.style.backgroundColor = "rgb(70,164,213)"
    polygon.style.background = "radial-gradient(circle, rgba(70,164,213,1) 0%, rgba(0,160,186,1) 61%)"
    

    sun.style.top = "75px"
    sun.style.left= "50px"
    sun.style.backgroundColor = "yellow"
    sun.style.boxShadow = "0 0 30px 15px #fff, 0 0 50px 30px orangered, 0 0 70px 45px yellow"
}

function projects() {
    var intro = document.getElementById("intro")
    var projects = document.getElementById("projects");
    var polygon = document.getElementById("polygon_path")
    var sun = document.getElementById("sun")
    if (projects.style.display === "none") {
        projects.style.display = "inline-block";  
        intro.style.display = "none"      
    } 
    polygon.style.backgroundColor = "rgb(235,201,65)"
    polygon.style.background = "radial-gradient(circle, rgba(235,201,65,1) 0%, rgba(242,118,46,1) 43%)"
    
   
    sun.style.top = "60%"
    sun.style.left = "55%"
    sun.style.backgroundColor = "yellow"
    sun.style.boxShadow = "0 0 30px 15px #fff, 0 0 50px 30px orangered, 0 0 70px 45px yellow"
    sun.animation = "sun"
}

function contact() {
    var into = document.getElementById("intro")
    var projects = document.getElementById("projects");
    var polygon = document.getElementById("polygon_path")
    var sun = document.getElementById("sun")
    if (projects.style.display === "none") {
        projects.style.display = "inline-block";  
        intro.style.display = "none"      
    } 
    // polygon.style.backgroundColor = "rgb(235,201,65)"
    polygon.style.background = "#000 url(http://www.script-tutorials.com/demos/360/images/stars.png)"
    
   
    sun.style.top = "75px"
    sun.style.left = "50px"
    sun.style.backgroundColor = "white"
    sun.style.boxShadow = "none"
    sun.style.transitionDuration = "2s"
    sun.animation = "moon"
}

function test(){
alert('test')
}