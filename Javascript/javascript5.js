var a, b;
var e = 1;
document.querySelector("#b1").onclick = function(){
    var a = parseInt(Math.random()*5+1);
    document.querySelector("#content").textContent = a;
    var xy = document.querySelector("#b1");
    xy.disabled = true; 
    var c = document.querySelector("#b2");
    c.disabled = false;   
}
document.querySelector("#b2").onclick = function(){
    var b = parseInt(Math.random()*5+1);
    document.querySelector("#content2").textContent = b;
    var x = document.querySelector("#content").textContent;
    if(b==x){
        var u = document.querySelector("#b2");
        u.disabled = true;
    }
    document.querySelector("#count").textContent = e;
    e++;
}