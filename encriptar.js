function encriptar(){
var TE=document.getElementById("txtE").value;
let SplitTE = TE.split('');
var StringE;
var letra;
SplitTE.forEach(letra => {

if (letra == "e"){

StringE =  "\n";
}

else if (letra == "i"){
StringE =  "imes";
}

else if (letra == "a"){
StringE =  "ai";
}
else if (letra == "o"){
StringE =  "ober";
}
else if (letra == "u"){
StringE = "ufat";

}else {
StringE = letra;   
}
var s = s + StringE;

});

alert(s);
var p = document.getElementById("p1");
p.innerHTML=s;

}
