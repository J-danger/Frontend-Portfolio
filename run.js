
function home() {        
    var x = document.getElementById("intro");
    var y = document.getElementById("projects")
    if (x.style.display === "none") {
        x.style.display = "inline-block";  
        y.style.display = "none"      
    } 
}

function projects() {
    var x = document.getElementById("projects");
    var y = document.getElementById("intro")
    if (x.style.display === "none") {
        x.style.display = "inline-block";  
        y.style.display = "none"      
    } 
}