
function home() {        
    var x = document.getElementById("intro");
    var y = document.getElementById("projects")
    var z = document.getElementById("polygon_path")
    var sun = document.getElementById("sun")
    if (x.style.display === "none") {
        x.style.display = "inline-block";  
        y.style.display = "none"      
    } 
    z.style.backgroundColor = "rgb(70,164,213)"
    z.style.background = "radial-gradient(circle, rgba(70,164,213,1) 0%, rgba(0,160,186,1) 61%)"
    z.style.transition = "2s"

    sun.style.top = "75px"
    sun.style.left= "50px"
}

function projects() {
    var x = document.getElementById("projects");
    var y = document.getElementById("intro")
    var z = document.getElementById("polygon_path")
    var sun = document.getElementById("sun")
    if (x.style.display === "none") {
        x.style.display = "inline-block";  
        y.style.display = "none"      
    } 
    z.style.backgroundColor = "rgb(235,201,65)"
    z.style.background = "radial-gradient(circle, rgba(235,201,65,1) 0%, rgba(242,118,46,1) 43%)"
    z.style.transition = "2s"
    sun.style.top = "60%"
    sun.style.left = "55%"
    sun.animation = "sun"
}

function test(){
alert('test')
}