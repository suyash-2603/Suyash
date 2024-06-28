var a, b, p, q;
var e = 1;
document.querySelector("#b1").onclick = function(){
    var a = parseInt(Math.random()*5+1);
    document.querySelector("#content1").textContent = a;
    var xy = document.querySelector("#b1");
    xy.disabled = true; 
    var c = document.querySelector("#b2");
    c.disabled = false;   
}
document.querySelector("#b2").onclick = function(){
    var b = parseInt(Math.random()*5+1);
    document.querySelector("#content2").textContent = b;
    var x = document.querySelector("#content1").textContent;
    if(b==x){
        var u = document.querySelector("#b2");
        u.disabled = true;
        var s = document.querySelector("#b3");
        s.disabled = false; 
    }
    document.querySelector("#count1").textContent = e;
    e=e+1;
}
var r = 1;
document.querySelector("#b3").onclick = function(){
    var p = parseInt(Math.random()*5+1);
    document.querySelector("#content3").textContent = p;
    var s = document.querySelector("#b3");
    s.disabled = true;
    var t = document.querySelector("#b4");
    t.disabled = false;   
}
document.querySelector("#b4").onclick = function(){
    var q = parseInt(Math.random()*5+1);
    document.querySelector("#content4").textContent = q;
    var y = document.querySelector("#content3").textContent;
    if(q==y){
        var v = document.querySelector("#b4");
        v.disabled = true;
        if(e<r){
            var n = "Player 1 is Winner"
            document.querySelector("#result").textContent = n;
        }
        else{
            var n = "Player 2 is Winner"
            document.querySelector("#result").textContent = n;
        }
    }
    document.querySelector("#count2").textContent = r;
    r=r+1;
    if(e==r){
        var n = "Its a Tie!!"
        document.querySelector("#result").textContent = n;
    }
}



